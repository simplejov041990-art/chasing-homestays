import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center bg-bg/90 backdrop-blur-md border-b border-ink/10">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/logo.svg" alt="Chasing Homestays" width={40} height={40} priority />
        <span className="font-serif text-xl italic tracking-tight">
          Chasing <span className="text-accent">Homestays</span>
        </span>
      </Link>

      <ul className="hidden md:flex gap-10 items-center text-sm">
        <li>
          <Link href="/homeowners" className="hover:text-accent transition-colors">
            For Homeowners
          </Link>
        </li>
        <li>
          <Link href="/properties" className="hover:text-accent transition-colors">
            Book Direct
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="bg-ink text-bg px-5 py-2 rounded-full hover:bg-accent hover:text-ink transition-colors"
          >
            Get Started
          </Link>
        </li>
      </ul>

      <Link
        href="/contact"
        className="md:hidden bg-ink text-bg px-4 py-2 rounded-full text-sm"
      >
        Get Started
      </Link>
    </nav>
  );
}
