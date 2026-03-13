"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <span className={`font-serif text-xl tracking-[0.2em] font-semibold transition-colors duration-500 ${
              scrolled ? "text-white" : "text-white"
            }`}>
              KAYDEN BENFIELD
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 link-underline ${
                  pathname === link.href
                    ? "text-gold font-medium"
                    : `${scrolled ? "text-gray-300" : "text-white/70"} hover:text-gold`
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-gold text-navy text-xs tracking-[0.15em] uppercase font-semibold hover:bg-gold-light transition-all duration-300"
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
                className={`block h-px transition-all duration-300 ${
                  scrolled ? "bg-white" : "bg-white"
                } ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`block h-px transition-all duration-300 ${
                  scrolled ? "bg-white" : "bg-white"
                } ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px transition-all duration-300 ${
                  scrolled ? "bg-white" : "bg-white"
                } ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-8 bg-navy/95 backdrop-blur-md border-t border-white/5 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-xs tracking-[0.15em] uppercase py-2 ${
                pathname === link.href
                  ? "text-gold font-medium"
                  : "text-white/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-center mt-6 px-6 py-3 bg-gold text-navy text-xs tracking-[0.15em] uppercase font-semibold"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  );
}
