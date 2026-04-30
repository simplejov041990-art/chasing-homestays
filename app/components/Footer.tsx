import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cream text-ink border-t border-ink/10 px-6 md:px-12 pt-16 pb-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="font-serif text-2xl italic mb-3">
            Chasing <span className="text-accent">Homestays</span>
          </div>
          <p className="text-ink/60 max-w-xs text-sm">
            Full-service short-term rental management for homeowners who want
            results without the work.
          </p>
        </div>

        <div>
          <h6 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Company</h6>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="text-ink/70 hover:text-ink">About</Link></li>
            <li><Link href="/team" className="text-ink/70 hover:text-ink">Our Team</Link></li>
            <li><Link href="/careers" className="text-ink/70 hover:text-ink">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h6 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Services</h6>
          <ul className="space-y-2 text-sm">
            <li><Link href="/homeowners" className="text-ink/70 hover:text-ink">For Homeowners</Link></li>
            <li><Link href="/properties" className="text-ink/70 hover:text-ink">For Guests</Link></li>
            <li><Link href="/properties" className="text-ink/70 hover:text-ink">Properties</Link></li>
          </ul>
        </div>

        <div>
          <h6 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Contact</h6>
          <ul className="space-y-2 text-sm text-ink/70">
            <li><a href="mailto:info@chasinghomestays.com" className="hover:text-ink">info@chasinghomestays.com</a></li>
            <li><a href="tel:+17022462338" className="hover:text-ink">(702) 246-2338</a></li>
            <li>Las Vegas, Nevada</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10 pt-6 text-center text-xs text-ink/40 max-w-7xl mx-auto">
        © 2026 Chasing Homestays. All rights reserved.
      </div>
    </footer>
  );
}
