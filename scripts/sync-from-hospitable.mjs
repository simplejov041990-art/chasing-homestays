#!/usr/bin/env node
// Reads scripts/.hospitable-snapshot.json (downloaded from Hospitable Public API)
// and the existing app/data/properties.ts, then writes a new properties.ts
// with API-driven names/descriptions/amenities/photos while preserving the
// existing widgetUrl, gradient, slug, tag, and price.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SNAPSHOT = path.join(__dirname, ".hospitable-snapshot.json");
const TS_PATH = path.join(ROOT, "app/data/properties.ts");

const snap = JSON.parse(fs.readFileSync(SNAPSHOT, "utf8"));
const tsSrc = fs.readFileSync(TS_PATH, "utf8");

// Parse existing properties.ts in a quick-and-dirty way: split on "{ slug:" boundaries
const blockRe = /\{\s*\n\s*slug:\s*"([^"]+)",[\s\S]*?\n\s*\}/g;
const existingBySlug = {};
const existingOrder = [];
let m;
while ((m = blockRe.exec(tsSrc))) {
  const slug = m[1];
  const block = m[0];
  const get = (key) => {
    const r = new RegExp(`${key}:\\s*"([^"]*)"`);
    const mm = block.match(r);
    return mm ? mm[1] : undefined;
  };
  const getNum = (key) => {
    const r = new RegExp(`${key}:\\s*(\\d+)`);
    const mm = block.match(r);
    return mm ? Number(mm[1]) : undefined;
  };
  existingBySlug[slug] = {
    slug,
    tag: get("tag"),
    price: getNum("price"),
    widgetUrl: get("widgetUrl"),
    gradient: get("gradient"),
  };
  existingOrder.push(slug);
}

// Canonicalize a name → kebab key
function canonical(s) {
  return s
    .replace(/\(.*?\)/g, "")
    .replace(/\s+-\s+\w+$/g, "") // trailing " - Sarah"
    .replace(/[^a-zA-Z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/\s/g, "-");
}

// Match an API record canonical key to an existing slug, preferring closest length
function matchSlug(apiCanon, used) {
  const candidates = existingOrder
    .filter((s) => !used.has(s))
    .filter((s) => {
      return (
        apiCanon === s ||
        apiCanon.endsWith("-" + s) ||
        apiCanon.startsWith(s + "-") ||
        s.endsWith("-" + apiCanon) ||
        s.startsWith(apiCanon + "-")
      );
    });
  if (candidates.length === 0) return null;
  candidates.sort(
    (a, b) =>
      Math.abs(a.length - apiCanon.length) -
      Math.abs(b.length - apiCanon.length)
  );
  return candidates[0];
}

// Hardcoded overrides — handle duplicates Hospitable shows (e.g., Lightwell57 listed twice)
function overrideSlug(apiName, used) {
  const o = {
    "Lightwell57 (Under Rolf's Account)": "lightwell57-b",
  };
  return o[apiName] && !used.has(o[apiName]) ? o[apiName] : null;
}

// Build the merged records
const used = new Set();
const merged = [];
const unmatched = [];
for (const p of snap.properties) {
  const slug =
    overrideSlug(p.name, used) || matchSlug(canonical(p.name), used);
  if (!slug) {
    unmatched.push({ apiName: p.name, canonical: canonical(p.name) });
    continue;
  }
  used.add(slug);
  const ex = existingBySlug[slug];
  const cap = p.capacity || {};
  const addr = p.address || {};
  const photos = (p.images || [])
    .map((im) => im.url)
    .filter(Boolean)
    .slice(0, 30); // cap at 30 photos per property
  merged.push({
    slug,
    name: p.public_name || p.name, // Airbnb listing name (no internal address)
    location: [addr.city, addr.state].filter(Boolean).join(", "),
    price: ex.price ?? 100,
    tag: ex.tag ?? "Home",
    summary: p.summary || "",
    description: p.description || "",
    amenities: p.amenities || [],
    bedrooms: cap.bedrooms ?? 0,
    bathrooms: cap.bathrooms ?? 0,
    guests: cap.max ?? 0,
    widgetUrl: ex.widgetUrl,
    image: p.picture || photos[0] || undefined,
    images: photos,
    gradient: ex.gradient ?? "bg-gradient-to-br from-[#3d6b8a] to-[#1f3a4a]",
  });
}

if (unmatched.length) {
  console.error("UNMATCHED:", JSON.stringify(unmatched, null, 2));
  process.exit(1);
}
if (merged.length !== 64) {
  console.error("Expected 64 records, got", merged.length);
  process.exit(1);
}

// Sort merged in the existing slug order so the listing page stays consistent
merged.sort(
  (a, b) => existingOrder.indexOf(a.slug) - existingOrder.indexOf(b.slug)
);

// Generate new properties.ts
function esc(s) {
  return s
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r");
}

const header = `/**
 * 🏠 PROPERTY DATA — auto-generated from Hospitable on ${new Date().toISOString()}
 * Run \`scripts/sync-from-hospitable.mjs\` to refresh.
 *
 * Each property auto-creates a page at /properties/[slug].
 */

export type Property = {
  slug: string;
  name: string;            // Airbnb listing name (public)
  location: string;        // City, State
  price: number;           // Manual base price (Hospitable does dynamic; this is for listing card)
  tag: string;             // Manual classification
  summary: string;         // Hospitable summary
  description: string;     // Hospitable full description
  amenities: string[];
  bedrooms: number;
  bathrooms: number;
  guests: number;
  widgetUrl: string;
  image?: string;          // Hero / card image
  images: string[];        // Photo gallery
  gradient: string;        // Fallback gradient
};

`;

const body =
  "export const properties: Property[] = [\n" +
  merged
    .map(
      (p) =>
        `  {\n` +
        `    slug: "${p.slug}",\n` +
        `    name: "${esc(p.name)}",\n` +
        `    location: "${esc(p.location)}",\n` +
        `    price: ${p.price},\n` +
        `    tag: "${esc(p.tag)}",\n` +
        `    summary: "${esc(p.summary)}",\n` +
        `    description: "${esc(p.description)}",\n` +
        `    amenities: ${JSON.stringify(p.amenities)},\n` +
        `    bedrooms: ${p.bedrooms},\n` +
        `    bathrooms: ${p.bathrooms},\n` +
        `    guests: ${p.guests},\n` +
        `    widgetUrl: "${esc(p.widgetUrl)}",\n` +
        `    image: ${p.image ? `"${esc(p.image)}"` : "undefined"},\n` +
        `    images: ${JSON.stringify(p.images)},\n` +
        `    gradient: "${esc(p.gradient)}",\n` +
        `  },\n`
    )
    .join("") +
  "];\n\n";

const footer = `export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}
`;

fs.writeFileSync(TS_PATH, header + body + footer);
console.log(`Wrote ${merged.length} properties to ${TS_PATH}`);
