import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team — Chasing Homestays",
  description: "Meet the people running Chasing Homestays.",
};

const team = [
  {
    name: "Jonathan Orkin",
    role: "President & CEO",
    bio:
      "Jonathan founded Chasing Homestays and leads strategy, growth, and owner relationships across the portfolio.",
  },
  {
    name: "Jovie Ocampo",
    role: "Operations Manager",
    bio:
      "Jovie runs day-to-day operations — onboarding, vendor management, turnover quality, and reporting — keeping every property humming.",
  },
  {
    name: "Guest Care",
    role: "24/7 Communication",
    bio:
      "Our guest team handles every booking inquiry, check-in question, and on-property issue so owners never have to answer at midnight.",
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="pt-40 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-xs uppercase tracking-[0.2em] text-accent mb-6">Our Team</div>
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-[0.95] tracking-tight mb-8 max-w-4xl">
          Real humans, <em className="text-accent">real accountability.</em>
        </h1>
        <p className="text-lg text-ink-soft max-w-2xl">
          Owners and guests both deserve someone they can actually call.
          Here&apos;s who you&apos;re working with.
        </p>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-cream border border-ink/10 rounded p-8 hover:border-accent transition-colors"
            >
              <div className="aspect-square rounded mb-6 bg-gradient-to-br from-[#3d6b8a] to-[#1f3a4a]" />
              <h3 className="font-serif text-2xl mb-1">{m.name}</h3>
              <div className="text-xs uppercase tracking-[0.15em] text-accent mb-4">
                {m.role}
              </div>
              <p className="text-ink-soft text-sm leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start border-t border-ink/10 pt-16">
          <div className="text-xs uppercase tracking-[0.2em] text-accent">How we work</div>
          <div className="space-y-5 text-ink-soft leading-relaxed">
            <p>
              Every property gets a dedicated point of contact on our side —
              one person who knows your home, your calendar, and your goals.
              You won&apos;t be passed between a ticketing system and a callcenter.
            </p>
            <p>
              We meet with new owners before onboarding, walk every property
              ourselves before launch, and review performance with you on a
              monthly cadence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream border-y border-ink/10 px-6 md:px-12 py-20 text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight mb-4">
          Have a question for the team?
        </h2>
        <p className="text-ink-soft max-w-xl mx-auto mb-8">
          The fastest way to a real answer is a 30-minute call. No pressure, no
          commitment.
        </p>
        <Link
          href="/contact"
          className="bg-accent text-bg px-8 py-4 rounded-full text-sm font-medium hover:bg-ink hover:text-bg transition-colors"
        >
          Schedule a Call →
        </Link>
      </section>
    </>
  );
}
