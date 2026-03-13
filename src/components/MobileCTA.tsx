"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileCTA() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-[#eee] px-4 py-3 flex gap-3">
      <Link
        href="/contact"
        className="flex-1 text-center py-3 bg-[#c9a84c] text-white font-semibold text-xs tracking-[0.1em] uppercase hover:bg-[#d4b96a] transition-colors"
      >
        Book a Call
      </Link>
      <Link
        href="/calculator"
        className="flex-1 text-center py-3 border border-[#1a1a2e] text-[#1a1a2e] text-xs tracking-[0.1em] uppercase hover:bg-[#FAF8F5] transition-colors"
      >
        Run Your Numbers
      </Link>
    </div>
  );
}
