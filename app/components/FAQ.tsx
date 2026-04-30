"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How are taxes handled?",
    a: "We provide annual income reports for your records, but you remain responsible for your own filings. Most owners deduct management fees, supplies, and depreciation — talk to your CPA about specifics.",
  },
  {
    q: "What about my HOA?",
    a: "We review HOA and local short-term rental regulations before onboarding. If restrictions don't allow STRs, we'll either adjust the management plan or pass on the property — we won't put you at risk.",
  },
  {
    q: "Can I keep my cleaners?",
    a: "Yes — if your existing crew meets our quality standards and turnover timing, we keep them on. Otherwise we have vetted cleaning teams in every market we operate in.",
  },
  {
    q: "Do I get paid directly from Airbnb or VRBO?",
    a: "Yes. Payouts go directly from each platform to your bank account on their normal schedule. We invoice our commission monthly so you stay in full control of cash flow.",
  },
  {
    q: "What about my reviews?",
    a: "Existing reviews stay with your listing. We work to maintain or improve your rating with proactive guest care, professional cleaning, and well-stocked essentials between every stay.",
  },
  {
    q: "I have a mid-term rental — will that work?",
    a: "Absolutely. Many of our owners run on monthly stays via Airbnb's longer-term marketplace and corporate housing channels. We tune pricing, listing copy, and minimum-stay rules accordingly.",
  },
  {
    q: "I'm afraid of losing bookings.",
    a: "Onboarding is non-disruptive: we transfer your existing listings (preserving reviews, calendar, and pricing history). Most owners see equal or higher booking volume within the first 30 days.",
  },
];

const SERVICE_TAGS = [
  "Partial Services",
  "Our Process",
  "A La Carte Services",
  "Guest Communication",
  "Full Co-hosting",
  "Price Optimization",
  "Listing Optimization",
  "Full Market Analysis",
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(1);

  return (
    <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
        {/* LEFT — Q&A With Our President + portrait */}
        <div className="md:sticky md:top-32">
          <div className="text-xs uppercase tracking-[0.25em] text-ink-soft mb-3">Home</div>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight leading-[1.05] mb-10">
            Q&amp;A With Our<br />
            <em className="text-accent" style={{ fontStyle: "italic" }}>President</em>
          </h2>

          {/* Portrait placeholder — drop file in /public/jonathan-orkin.png and swap to <Image> when ready */}
          <div className="relative w-56 h-56 mb-5">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-cream to-bg border-2 border-accent/40 flex items-center justify-center overflow-hidden shadow-xl">
              <span className="font-serif text-6xl text-accent">JO</span>
            </div>
          </div>

          <div className="font-serif text-2xl leading-tight">
            Jonathan<br />Orkin
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-accent mt-2">
            President &amp; CEO
          </div>
        </div>

        {/* RIGHT — Accordion */}
        <div>
          <ul className="space-y-3">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={item.q}
                  className={`bg-cream rounded-md overflow-hidden border ${
                    isOpen ? "border-accent/40" : "border-ink/10"
                  } transition-colors`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center gap-6 hover:text-accent transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium">{item.q}</span>
                    <span
                      className={`text-accent text-xl transition-transform shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    >
                      ⌄
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-ink-soft px-6 pb-5 pr-8 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Our Services tag pills */}
          <div className="mt-12">
            <div className="font-serif italic text-xl mb-5">Our Services</div>
            <div className="flex flex-wrap gap-2">
              {SERVICE_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="bg-cream border border-ink/15 text-ink-soft text-xs px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
