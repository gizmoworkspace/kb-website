"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/listings", label: "Listings" },
  { href: "/calculator", label: "Calculator" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? "shadow-sm" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <span className="font-serif text-xl tracking-[0.15em] font-light text-[#1a1a2e]">
              KAYDEN BENFIELD
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 link-underline ${
                  pathname === link.href
                    ? "text-[#c9a84c] font-medium"
                    : "text-[#555] hover:text-[#c9a84c]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-[#c9a84c] text-white text-xs tracking-[0.15em] uppercase font-semibold hover:bg-[#d4b96a] transition-all duration-300"
            >
              Book a Call
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-px bg-[#1a1a2e] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-px bg-[#1a1a2e] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-[#1a1a2e] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[500px]" : "max-h-0"}`}>
        <div className="px-6 py-8 bg-white border-t border-[#eee] space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-xs tracking-[0.15em] uppercase py-2 ${
                pathname === link.href ? "text-[#c9a84c] font-medium" : "text-[#555]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-center mt-6 px-6 py-3 bg-[#c9a84c] text-white text-xs tracking-[0.15em] uppercase font-semibold"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  );
}
