"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How is your commission structured?",
    a: "One transparent performance-based commission — we only earn when you do. No setup fees, no markups on cleaning or supplies, no surprise charges. Exact rate is shared during your free 30-minute assessment.",
  },
  {
    q: "Which platforms will my home be listed on?",
    a: "We list on Airbnb, VRBO, and Booking.com simultaneously, with a single unified calendar. We also feature your property on our own direct booking site, where guests book commission-free — building you a returning guest base.",
  },
  {
    q: "Who handles the cleaning?",
    a: "We use vetted professional cleaning teams in every market, paid at fair market rates. We pass cleaning fees through at cost — no markup. Quality checks happen between every guest.",
  },
  {
    q: "What happens if a guest causes damage?",
    a: "Every booking is covered by the platform's host protection (AirCover, VRBO insurance, etc.). For longer stays or higher-risk bookings, we recommend a dedicated short-term rental policy and can refer you to providers we trust.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most homes go live within 7–14 days of contract signing. That includes professional photography, listing copywriting, multi-channel publishing, smart-lock setup, and a full property walkthrough.",
  },
  {
    q: "Can I block dates for personal use?",
    a: "Always. You own the home — we just operate it. Block any dates, any time, directly through your owner portal or by sending us a note.",
  },
  {
    q: "What if I want to leave?",
    a: "30-day notice, no penalty. We'll hand you back your listings, your reviews, your direct-booking guest list — all of it. We earn the relationship every month.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-6 md:px-12 py-24 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
        <div className="md:sticky md:top-32">
          <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">FAQ</div>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight">
            Common <em className="text-accent">questions.</em>
          </h2>
        </div>

        <div className="border-t border-ink/15">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-ink/15">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left py-6 flex justify-between items-center gap-6 hover:text-accent transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg md:text-xl pr-4">{item.q}</span>
                  <span
                    className={`text-accent text-2xl transition-transform shrink-0 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-ink-soft pb-6 pr-10 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
