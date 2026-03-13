"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileCTA() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#f5f4f0]/95 backdrop-blur-md border-t border-border px-4 py-3 flex gap-3">
      <Link href="/contact" className="btn-primary flex-1 !py-3 text-center">
        Book a Call
      </Link>
      <Link href="/calculator" className="btn-secondary flex-1 !py-3 text-center">
        Run Your Numbers
      </Link>
    </div>
  );
}
