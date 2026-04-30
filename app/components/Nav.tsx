import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-3 bg-bg/90 backdrop-blur-md border-b border-ink/10">
      <div className="relative flex items-center justify-between">
        {/* LEFT — primary nav */}
        <ul className="hidden md:flex gap-7 items-center text-sm">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li className="relative group">
            <button
              type="button"
              className="hover:text-accent transition-colors flex items-center gap-1"
            >
              Services
              <span className="text-[0.6rem] mt-0.5">▾</span>
            </button>
            <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              <ul className="bg-cream border border-ink/10 rounded-lg shadow-xl py-2 min-w-[200px]">
                <li>
                  <Link
                    href="/homeowners"
                    className="block px-5 py-2 text-sm hover:text-accent transition-colors"
                  >
                    For Homeowners
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block px-5 py-2 text-sm hover:text-accent transition-colors"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="/properties" className="hover:text-accent transition-colors">
              Property Showcase
            </Link>
          </li>
        </ul>

        {/* CENTER — logo + stacked wordmark */}
        <Link
          href="/"
          className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="Chasing Homestays"
            width={48}
            height={48}
            priority
            className="rounded-full"
          />
          <span className="flex flex-col leading-[0.95] font-sans tracking-[0.18em] text-ink">
            <span className="text-[0.95rem] font-medium">CHASING</span>
            <span className="text-[0.95rem] font-medium text-accent">HOMESTAYS</span>
          </span>
        </Link>

        {/* RIGHT — contact */}
        <Link
          href="/contact"
          className="hidden md:inline-block text-sm hover:text-accent transition-colors"
        >
          Contact
        </Link>

        {/* MOBILE — single CTA */}
        <Link
          href="/contact"
          className="md:hidden bg-ink text-bg px-4 py-2 rounded-full text-sm"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
