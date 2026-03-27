import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-deep-teal/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Chexton Global logo"
            width={44}
            height={44}
            className="rounded-full border border-white/30"
            priority
          />
          <span className="font-serif text-lg text-white">CHEXTON GLOBAL</span>
        </Link>

        <nav className="flex items-center gap-2 md:gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/2349050083475"
            target="_blank"
            rel="noreferrer"
            className="button-luxury hidden md:inline-flex"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
