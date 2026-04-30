import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Chasing Homestays",
  description:
    "Full-service short-term rental management built for homeowners who want results without the work.",
};

const stats = [
  { value: "64", label: "Properties Managed" },
  { value: "4.9★", label: "Avg. Guest Review" },
  { value: "30+", label: "Cities" },
];

const values = [
  {
    title: "Owner-first economics",
    body:
      "We earn when you do. One transparent commission, no hidden fees, no markup on cleaning or supplies.",
  },
  {
    title: "Hospitality, not hands-off",
    body:
      "Real humans answering at 11pm when a guest can't find the WiFi. Vetted cleaners we know by name. Quality you'd expect from a boutique hotel.",
  },
  {
    title: "Direct over distribution",
    body:
      "We list everywhere — Airbnb, VRBO, Booking.com — but we also build your direct channel so you keep more of every booking.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-xs uppercase tracking-[0.2em] text-accent mb-6">About</div>
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-[0.95] tracking-tight mb-8 max-w-4xl">
          Property management <em className="text-accent">that pays for itself.</em>
        </h1>
        <p className="text-lg text-ink-soft max-w-2xl">
          Chasing Homestays is a full-service short-term rental operator
          headquartered in Las Vegas. We list, manage, and grow rentals across
          the US — and give homeowners the kind of partnership that
          actually moves the numbers.
        </p>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-y border-ink/10 py-10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-4xl md:text-5xl text-accent">{s.value}</div>
              <div className="text-xs uppercase tracking-[0.15em] text-ink-soft mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
          <div className="text-xs uppercase tracking-[0.2em] text-accent">Our Story</div>
          <div className="space-y-6 text-ink-soft leading-relaxed">
            <p>
              Chasing Homestays started with a simple frustration: most
              short-term rental managers treat homes like inventory and
              homeowners like vendors. We wanted to do it differently.
            </p>
            <p>
              Today we manage dozens of homes from Las Vegas to South Florida,
              from urban units to mountain retreats. Every property is set up
              the same way our own would be — professional photography, dynamic
              pricing, vetted cleaners, and humans on call for every guest
              question.
            </p>
            <p>
              We pair full-service operations with our own direct booking
              channel, so a portion of your bookings come through us at
              commission-free rates — building a returning guest base you
              actually own.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16">
        <div className="text-xs uppercase tracking-[0.2em] text-accent mb-6">What we believe</div>
        <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-12 max-w-3xl">
          Three things we won&apos;t compromise on.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={v.title} className="border-t border-ink/15 pt-6">
              <span className="font-serif italic text-sm text-accent block mb-3">
                — 0{i + 1}
              </span>
              <h3 className="font-serif text-2xl mb-3">{v.title}</h3>
              <p className="text-ink-soft text-sm leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream border-y border-ink/10 px-6 md:px-12 py-20 text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight mb-4">
          Want to meet the people behind the operation?
        </h2>
        <p className="text-ink-soft max-w-xl mx-auto mb-8">
          Read more about our leadership team, or jump into a 30-minute call
          with our president — no pitch, just numbers.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/team"
            className="bg-accent text-bg px-8 py-4 rounded-full text-sm font-medium hover:bg-ink hover:text-bg transition-colors"
          >
            Meet the Team →
          </Link>
          <Link
            href="/contact"
            className="text-ink border-b border-ink pb-0.5 hover:text-accent hover:border-accent transition-colors"
          >
            Schedule a Call
          </Link>
        </div>
      </section>
    </>
  );
}
