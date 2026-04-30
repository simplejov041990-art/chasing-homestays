import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Chasing Homestays",
  description: "Open roles at Chasing Homestays.",
};

const roles: { title: string; type: string; location: string; summary: string }[] = [
  // Add roles here as they open. Empty by default → "no openings" state below.
];

const perks = [
  "Remote-first, async-friendly",
  "Free direct-booking stays at portfolio properties",
  "Transparent comp + performance bonuses",
  "Paid time off + flexible schedule",
  "Real ownership of your work",
];

export default function CareersPage() {
  return (
    <>
      <section className="pt-40 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-xs uppercase tracking-[0.2em] text-accent mb-6">Careers</div>
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-[0.95] tracking-tight mb-8 max-w-4xl">
          Build a hospitality company <em className="text-accent">worth working at.</em>
        </h1>
        <p className="text-lg text-ink-soft max-w-2xl">
          We&apos;re a small team that takes hospitality and operations seriously.
          If that sounds like you, we&apos;d love to hear from you — even if a role
          below isn&apos;t a perfect match.
        </p>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-16">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start border-t border-ink/10 pt-12">
          <div className="text-xs uppercase tracking-[0.2em] text-accent">Why work here</div>
          <ul className="space-y-3 text-ink-soft">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="text-accent mt-1">✦</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16">
        <div className="text-xs uppercase tracking-[0.2em] text-accent mb-6">Open Roles</div>
        {roles.length === 0 ? (
          <div className="bg-cream border border-ink/10 rounded p-12 text-center">
            <p className="font-serif italic text-2xl mb-3">No openings right now.</p>
            <p className="text-ink-soft mb-6 max-w-md mx-auto">
              We hire as the portfolio grows. If you&apos;d be a strong fit for a
              future role, send a note and a résumé — we keep good ones on file.
            </p>
            <Link
              href="/contact"
              className="bg-accent text-bg px-8 py-4 rounded-full text-sm font-medium hover:bg-ink hover:text-bg transition-colors inline-flex items-center gap-2"
            >
              Send Your Résumé →
            </Link>
          </div>
        ) : (
          <div className="border-t border-ink/15">
            {roles.map((r) => (
              <div
                key={r.title}
                className="border-b border-ink/15 py-8 grid md:grid-cols-[2fr_1fr_1fr_auto] gap-4 items-center hover:bg-cream transition-colors px-4"
              >
                <div>
                  <h3 className="font-serif text-2xl">{r.title}</h3>
                  <p className="text-ink-soft text-sm mt-1">{r.summary}</p>
                </div>
                <div className="text-xs uppercase tracking-[0.15em] text-ink-soft">
                  {r.type}
                </div>
                <div className="text-xs uppercase tracking-[0.15em] text-ink-soft">
                  {r.location}
                </div>
                <Link
                  href="/contact"
                  className="text-accent border-b border-accent pb-0.5 text-sm justify-self-start md:justify-self-end"
                >
                  Apply →
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
