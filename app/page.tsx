import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen pt-32 pb-16 px-6 md:px-12 grid md:grid-cols-[1.3fr_1fr] gap-16 items-center relative">
        <div className="absolute top-[15%] -right-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
             style={{ background: "radial-gradient(circle, rgba(196,77,46,0.12), transparent 70%)" }} />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-soft mb-8 before:content-[''] before:w-8 before:h-px before:bg-accent" />
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft mb-8">
            <span className="inline-block w-8 h-px bg-accent align-middle mr-3" />
            Property Management, Reimagined
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight mb-8">
            Your property,<br />
            <em className="text-accent not-italic font-normal" style={{ fontStyle: "italic" }}>our priority.</em>
          </h1>

          <p className="text-lg text-ink-soft max-w-md mb-10 leading-relaxed">
            We list, manage, and grow your short-term rental across Airbnb, VRBO, and Booking.com — while giving guests a smarter way to book direct.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/homeowners" className="bg-ink text-bg px-8 py-4 rounded-full text-sm font-medium hover:bg-accent hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
              List Your Property →
            </Link>
            <Link href="/properties" className="text-ink border-b border-ink pb-0.5 hover:text-accent hover:border-accent transition-colors">
              Browse Stays
            </Link>
          </div>
        </div>

        <div className="relative h-[500px] md:h-[600px] z-[1]">
          <div className="absolute top-0 right-0 w-[70%] h-[70%] rounded-lg shadow-2xl overflow-hidden"
               style={{ background: "linear-gradient(135deg, #d4a574 0%, #8a5a3b 100%)" }} />
          <div className="absolute bottom-0 left-0 w-[50%] h-[45%] rounded-lg shadow-2xl overflow-hidden"
               style={{ background: "linear-gradient(135deg, #5a6b51 0%, #2d3a26 100%)" }} />
          <div className="absolute top-[35%] left-[5%] w-[35%] h-[30%] rounded-lg shadow-2xl overflow-hidden"
               style={{ background: "linear-gradient(135deg, #c44d2e 0%, #7a2c18 100%)" }} />

          <div className="absolute -bottom-4 right-[5%] bg-bg px-6 py-4 rounded shadow-xl border border-ink/10 z-10">
            <div className="font-serif text-2xl text-accent font-medium">94%</div>
            <div className="text-xs uppercase tracking-[0.15em] text-ink-soft">Avg. Occupancy</div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-ink/10 py-6 overflow-hidden whitespace-nowrap">
        <div className="inline-flex gap-16 marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="inline-flex gap-16">
              {["Airbnb", "VRBO", "Booking.com", "Direct Bookings", "Pricing Optimization", "Guest Communication", "Cleaning & Maintenance"].map((item, j) => (
                <span key={j} className="font-serif italic text-lg text-ink-soft flex items-center gap-16 after:content-['✦'] after:text-accent">
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-end mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-accent">What We Do</div>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-none tracking-tight">
            Hosting <em className="text-accent">made effortless</em> — for owners and guests alike.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <div>
            <h3 className="font-serif text-2xl mb-3">For Homeowners</h3>
            <p className="text-ink-soft mb-4">
              We handle everything: photography, listings, dynamic pricing, guest communication, cleaning, and reporting. You collect the income.
            </p>
            <Link href="/homeowners" className="text-accent border-b border-accent pb-0.5">Learn more →</Link>
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-3">For Guests</h3>
            <p className="text-ink-soft mb-4">
              Same property, same dates, lower price. Book direct through us and skip the OTA service fees.
            </p>
            <Link href="/properties" className="text-accent border-b border-accent pb-0.5">Book direct →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent text-bg px-6 md:px-12 py-24 text-center relative overflow-hidden">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[20rem] text-white/5 pointer-events-none">✦</span>
        <div className="relative z-10">
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-none mb-6 tracking-tight">
            Ready to chase <em>better returns?</em>
          </h2>
          <p className="text-lg opacity-90 max-w-md mx-auto mb-10">
            Book a free 30-minute consultation. We'll walk you through what your property could earn — no pressure, no commitment.
          </p>
          <Link href="/contact" className="bg-ink text-bg px-10 py-4 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:bg-bg hover:text-accent transition-colors">
            Schedule a Call →
          </Link>
        </div>
      </section>
    </>
  );
}
