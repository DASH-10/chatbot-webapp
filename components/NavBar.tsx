import Link from "next/link";

// Simple list of nav links used in desktop and mobile menus.
const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand block on the left */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="h-11 w-11 rounded-full bg-brand-600 text-white flex items-center justify-center text-base font-semibold shadow-glow group-hover:scale-105 transition">
            OK
          </span>
          <div className="leading-tight">
            <p className="font-semibold text-lg text-slate-900">Omar&apos;s Kebab House</p>
            <p className="text-xs text-slate-500">Authentic kebab & shawarma</p>
          </div>
        </Link>

        {/* Desktop nav (hidden on small screens) */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-700 hover:text-brand-600 transition font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Primary CTA button */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-700"
          >
            Reserve / Call
          </Link>
          {/* Compact nav on mobile */}
          <nav className="md:hidden flex items-center gap-3 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-brand-600 transition font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
