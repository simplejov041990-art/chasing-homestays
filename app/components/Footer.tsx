import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-bg px-6 md:px-12 pt-16 pb-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="font-serif text-2xl italic mb-3">
            Chasing <span className="text-accent">Homestays</span>
          </div>
          <p className="text-bg/60 max-w-xs text-sm">
            Full-service short-term rental management for homeowners who want
            results without the work.
          </p>
        </div>

        <div>
          <h6 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Company</h6>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="text-bg/70 hover:text-bg">About</Link></li>
            <li><Link href="#" className="text-bg/70 hover:text-bg">Our Team</Link></li>
            <li><Link href="#" className="text-bg/70 hover:text-bg">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h6 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Services</h6>
          <ul className="space-y-2 text-sm">
            <li><Link href="/homeowners" className="text-bg/70 hover:text-bg">For Homeowners</Link></li>
            <li><Link href="/properties" className="text-bg/70 hover:text-bg">For Guests</Link></li>
            <li><Link href="/properties" className="text-bg/70 hover:text-bg">Properties</Link></li>
          </ul>
        </div>

        <div>
          <h6 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Contact</h6>
          <ul className="space-y-2 text-sm text-bg/70">
            <li>hello@chasinghomestays.com</li>
            <li>+63 917 000 0000</li>
            <li>Manila, Philippines</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bg/10 pt-6 text-center text-xs text-bg/40 max-w-7xl mx-auto">
        © 2026 Chasing Homestays. All rights reserved.
      </div>
    </footer>
  );
}
