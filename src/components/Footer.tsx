import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white">
      <div className="max-w-6xl mx-auto px-8 md:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <span className="font-heading text-xl">Kayden Benfield</span>
            <div className="w-10 h-px bg-gold mt-4 mb-4" />
            <p className="text-sm text-white/50 leading-relaxed font-body">
              Licensed North Carolina Broker<br />
              INNOVATE Real Estate<br />
              #1 Non-Franchised Brokerage, East Coast
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-white/40 mb-5 font-body font-medium">Navigate</h4>
            <div className="space-y-2.5">
              {[
                { href: "/about", label: "About Kayden" },
                { href: "/services", label: "Services" },
                { href: "/neighborhoods", label: "Neighborhoods" },
                { href: "/listings", label: "Listings" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-white/40 hover:text-white transition-colors duration-300 font-body">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-white/40 mb-5 font-body font-medium">Take Action</h4>
            <div className="space-y-2.5">
              <Link href="/contact" className="block text-sm text-white/40 hover:text-white transition-colors duration-300 font-body">Book a Call</Link>
              <Link href="/calculator" className="block text-sm text-white/40 hover:text-white transition-colors duration-300 font-body">Relocation Calculator</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-white/40 mb-5 font-body font-medium">Contact</h4>
            <div className="space-y-2.5 text-sm text-white/40 font-body">
              <p>Charlotte, NC Metro Area</p>
              <p>Direct Cell — No Gatekeepers</p>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30 font-body">
            &copy; {new Date().getFullYear()} Kayden Benfield, INNOVATE Real Estate. All rights reserved.
          </p>
          <p className="text-xs text-white/30 font-body">
            Licensed North Carolina Broker | Equal Housing Opportunity
          </p>
        </div>
      </div>
    </footer>
  );
}
