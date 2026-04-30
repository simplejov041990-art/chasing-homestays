import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import HospitableWidget from "../../components/HospitableWidget";
import { properties, getPropertyBySlug } from "../../data/properties";
import type { Metadata } from "next";

// Tells Next.js to pre-build a page for each property at build time (great for SEO)
export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

// Per-property page title & description for SEO
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const property = getPropertyBySlug(params.slug);
  if (!property) return { title: "Property Not Found" };
  return {
    title: `${property.name} — ${property.location} | Chasing Homestays`,
    description: property.description,
  };
}

export default function PropertyPage({ params }: { params: { slug: string } }) {
  const property = getPropertyBySlug(params.slug);
  if (!property) notFound();

  return (
    <>
      {/* HERO IMAGE STRIP */}
      <section className={`pt-24 relative ${property.image ? "" : property.gradient}`} style={{ minHeight: 480 }}>
        {property.image && (
          <Image
            src={property.image}
            alt={property.name}
            fill
            sizes="100vw"
            className="object-cover"
            priority
            unoptimized
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/85" />
        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto pt-20 pb-12 text-white">
          <Link href="/properties" className="text-white/80 text-sm hover:text-white inline-flex items-center gap-2 mb-6">
            ← Back to all properties
          </Link>
          <span className="inline-block bg-white/95 text-black px-3 py-1 rounded-full text-xs uppercase tracking-[0.15em] mb-6">
            {property.tag}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-[0.95] tracking-tight mb-4">
            {property.name}
          </h1>
          <div className="text-sm uppercase tracking-[0.2em] opacity-90">{property.location}</div>
        </div>
      </section>

      {/* DETAILS + WIDGET */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
          {/* LEFT — property details */}
          <div>
            <div className="flex flex-wrap gap-6 pb-6 border-b border-ink/15 mb-6">
              <div>
                <div className="font-serif text-2xl">{property.guests}</div>
                <div className="text-xs uppercase tracking-[0.15em] text-ink-soft">Guests</div>
              </div>
              <div>
                <div className="font-serif text-2xl">{property.bedrooms}</div>
                <div className="text-xs uppercase tracking-[0.15em] text-ink-soft">Bedrooms</div>
              </div>
              <div>
                <div className="font-serif text-2xl">{property.bathrooms}</div>
                <div className="text-xs uppercase tracking-[0.15em] text-ink-soft">Bathrooms</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-accent">${property.price}</div>
                <div className="text-xs uppercase tracking-[0.15em] text-ink-soft">From / night</div>
              </div>
            </div>

            <h2 className="font-serif text-3xl mb-4">About this stay</h2>
            <p className="text-ink-soft leading-relaxed mb-8">{property.description}</p>

            <h3 className="font-serif text-2xl mb-4">Amenities</h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-ink-soft">
              {property.amenities.map((a) => (
                <li key={a} className="flex items-center gap-3">
                  <span className="text-accent">✦</span> {a}
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 bg-cream rounded border border-ink/10">
              <p className="font-serif italic text-lg mb-2">Save by booking direct</p>
              <p className="text-sm text-ink-soft">
                You&apos;re seeing this property at our best rate — no Airbnb or VRBO service fees added.
              </p>
            </div>
          </div>

          {/* RIGHT — Hospitable widget */}
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Check Availability</div>
            <h2 className="font-serif text-3xl mb-6">Book your stay</h2>
            <HospitableWidget widgetUrl={property.widgetUrl} />
          </div>
        </div>
      </section>
    </>
  );
}
