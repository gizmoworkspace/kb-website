"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileCTA() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-navy/95 backdrop-blur-md border-t border-white/5 px-4 py-3 flex gap-3">
      <Link
        href="/contact"
        className="flex-1 text-center py-3 bg-gold text-navy font-semibold text-xs tracking-[0.1em] uppercase hover:bg-gold-light transition-colors"
      >
        Book a Call
      </Link>
      <Link
        href="/calculator"
        className="flex-1 text-center py-3 border border-white/20 text-white text-xs tracking-[0.1em] uppercase hover:bg-white/10 transition-colors"
      >
        Run Your Numbers
      </Link>
    </div>
  );
}
