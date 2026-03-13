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

  // Transparent on top, solid when scrolled
  const isTransparent = !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a14]/95 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center">
            <span className={`font-heading text-lg tracking-[0.15em] font-semibold transition-colors duration-300 ${
              isTransparent ? "text-white" : "text-white"
            }`}>
              KAYDEN BENFIELD
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] tracking-[0.12em] uppercase font-body font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-gold"
                    : isTransparent
                    ? "text-white/60 hover:text-gold"
                    : "text-white/60 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-gold ml-3 !py-2.5 !px-6 !text-[11px]">
              Book a Call
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-px transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[7px]" : ""
                } ${isTransparent ? "bg-white" : "bg-white"}`}
              />
              <span
                className={`block h-px transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                } ${isTransparent ? "bg-white" : "bg-white"}`}
              />
              <span
                className={`block h-px transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                } ${isTransparent ? "bg-white" : "bg-white"}`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 bg-[#0a0a14]/95 backdrop-blur-md border-t border-white/10 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-[11px] tracking-[0.12em] uppercase py-2 font-body font-medium ${
                pathname === link.href
                  ? "text-gold"
                  : "text-white/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-gold block mt-4 text-center"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  );
}
