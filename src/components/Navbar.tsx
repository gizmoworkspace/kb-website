"use client";

import { useState } from "react";
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
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-serif text-xl tracking-[0.2em] text-navy font-semibold">
              KAYDEN BENFIELD
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-gold font-medium"
                    : "text-charcoal hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-navy text-white text-sm tracking-wide hover:bg-navy-light transition-colors duration-200"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-px bg-navy transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-px bg-navy transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-navy transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] border-t border-gray-100" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 bg-white space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm tracking-wide py-2 ${
                pathname === link.href
                  ? "text-gold font-medium"
                  : "text-charcoal"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-center mt-4 px-6 py-3 bg-navy text-white text-sm tracking-wide"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  );
}
