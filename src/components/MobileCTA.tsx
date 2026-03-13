"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileCTA() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-navy border-t border-gold/20 px-4 py-3 flex gap-3">
      <Link
        href="/contact"
        className="flex-1 text-center py-3 bg-gold text-navy font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
      >
        Book a Call
      </Link>
      <Link
        href="/calculator"
        className="flex-1 text-center py-3 border border-gold/40 text-gold text-sm tracking-wide hover:bg-gold/10 transition-colors"
      >
        Run Your Numbers
      </Link>
    </div>
  );
}
