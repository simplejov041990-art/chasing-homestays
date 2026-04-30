"use client";

import Link from "next/link";
import { useState } from "react";

const SCENARIOS = [
  { label: "Conservative", occupancy: 0.6 },
  { label: "Typical", occupancy: 0.75 },
  { label: "High season", occupancy: 0.9 },
];

const formatUSD = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function RevenueCalculator() {
  const [rate, setRate] = useState<number>(150);

  return (
    <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-accent mb-6">
            Revenue Estimator
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-4">
            What could your home <em className="text-accent">actually earn?</em>
          </h2>
          <p className="text-ink-soft mb-8">
            Punch in your average nightly rate. We&apos;ll show you the annual
            ballpark across three occupancy scenarios. Real numbers come from
            your free assessment.
          </p>
          <Link
            href="/contact"
            className="text-accent border-b border-accent pb-0.5 hover:text-ink hover:border-ink transition-colors text-sm"
          >
            Get a real assessment →
          </Link>
        </div>

        <div className="bg-cream border border-ink/10 rounded p-8 md:p-10">
          <label className="block text-xs uppercase tracking-[0.2em] text-ink-soft mb-3">
            Average nightly rate
          </label>
          <div className="flex items-center gap-3 mb-8">
            <span className="font-serif text-3xl text-accent">$</span>
            <input
              type="number"
              min={50}
              max={2000}
              step={10}
              value={rate}
              onChange={(e) => setRate(Math.max(0, Number(e.target.value) || 0))}
              className="w-full bg-transparent border-b border-ink/30 py-3 text-3xl font-serif focus:outline-none focus:border-accent"
            />
            <span className="text-xs uppercase tracking-[0.15em] text-ink-soft whitespace-nowrap">
              / night
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {SCENARIOS.map((s) => {
              const annual = rate * 365 * s.occupancy;
              return (
                <div
                  key={s.label}
                  className="border-t border-ink/15 pt-5 text-center"
                >
                  <div className="text-[0.65rem] uppercase tracking-[0.15em] text-ink-soft mb-2">
                    {s.label}
                  </div>
                  <div className="text-[0.7rem] text-ink-soft mb-2">
                    {Math.round(s.occupancy * 100)}% occupancy
                  </div>
                  <div className="font-serif text-xl md:text-2xl text-accent">
                    {formatUSD(annual)}
                  </div>
                  <div className="text-[0.65rem] uppercase tracking-[0.15em] text-ink-soft mt-1">
                    /year gross
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-ink-soft mt-6">
            Estimates only. Actual revenue depends on market, seasonality,
            property condition, and pricing strategy.
          </p>
        </div>
      </div>
    </section>
  );
}
