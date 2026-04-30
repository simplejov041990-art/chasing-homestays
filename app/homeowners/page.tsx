import Link from "next/link";

const features = [
  { num: "01", title: "Multi-Channel Listings", body: "Your property professionally staged, photographed, and synced across Airbnb, VRBO, and Booking.com — with one unified calendar via Hospitable." },
  { num: "02", title: "Dynamic Pricing", body: "We adjust nightly rates daily based on demand, seasonality, and local events to maximize what you earn per stay." },
  { num: "03", title: "24/7 Guest Care", body: "From booking inquiries to check-in support, every guest interaction is handled — so you never have to answer at midnight." },
  { num: "04", title: "Cleaning & Turnover", body: "Vetted cleaning teams, restocked essentials, and quality-checked turnovers between every guest, every time." },
  { num: "05", title: "Transparent Reporting", body: "Monthly performance dashboards with bookings, revenue, occupancy, and reviews — your numbers, always visible." },
  { num: "06", title: "Direct Booking Engine", body: "Get featured on our own site to capture commission-free bookings and build a returning guest base over time." },
];

export default function HomeownersPage() {
  return (
    <>
      <section className="pt-40 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-xs uppercase tracking-[0.2em] text-accent mb-6">For Homeowners</div>
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-[0.95] tracking-tight mb-8 max-w-4xl">
          A full-service partner that <em className="text-accent">turns your home</em> into recurring income.
        </h1>
        <p className="text-lg text-ink-soft max-w-2xl">
          List once. We handle everything else — listings, pricing, guests, cleaning, and reporting. You earn more with less effort.
        </p>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <div className="grid md:grid-cols-3 border-t border-ink/15">
          {features.map((f, i) => (
            <div
              key={i}
              className={`p-12 border-b border-ink/15 hover:bg-cream transition-colors ${
                i % 3 !== 2 ? "md:border-r border-ink/15" : ""
              }`}
            >
              <span className="font-serif italic text-sm text-accent mb-6 block">— {f.num}</span>
              <h3 className="font-serif text-2xl mb-4">{f.title}</h3>
              <p className="text-ink-soft text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="bg-cream text-ink border-y border-ink/10 px-6 md:px-12 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-6">Simple Pricing</div>
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-6 tracking-tight">
            One transparent <em className="text-gold">commission</em>.
          </h2>
          <p className="text-ink/80 text-lg mb-10 max-w-xl mx-auto">
            Performance-based. We only earn when you do. Detailed pricing shared during your free consultation.
          </p>
          <Link href="/contact" className="bg-accent text-bg px-10 py-4 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:bg-ink hover:text-bg transition-colors">
            Get Your Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
