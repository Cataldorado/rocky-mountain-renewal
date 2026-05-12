import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "/#events", label: "Events" },
  { href: "/churches", label: "Churches" },
  { href: "/#missions", label: "Missions" },
  { href: "/#about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all backdrop-blur ${
        scrolled ? "bg-white/85 border-b border-border shadow-sm" : "bg-white/70"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center">
          <Logo height={44} />
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 transition hover:text-primary">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#events"
          className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-light md:inline-block"
        >
          Register Now
        </a>
        <button
          className="rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <div
        className={`overflow-hidden border-t border-border bg-background md:hidden transition-[max-height] duration-300 ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-foreground/90"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#events"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Register Now
          </a>
        </div>
      </div>
    </header>
  );
}
