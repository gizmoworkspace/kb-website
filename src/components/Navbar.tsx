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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f5f4f0]/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
          : "bg-[#f5f4f0]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center">
            <span className="font-heading text-xl text-heading tracking-wide">
              Kayden Benfield
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-body transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-heading font-medium"
                    : "text-body hover:text-heading"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary ml-2 !py-2.5 !px-6 !text-sm">
              Book a Call
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-px bg-heading transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-px bg-heading transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-heading transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[500px]" : "max-h-0"}`}>
        <div className="px-8 py-6 bg-[#f5f4f0] border-t border-border space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-sm font-body ${
                pathname === link.href ? "text-heading font-medium" : "text-body"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-primary block mt-4 text-center">
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  );
}
