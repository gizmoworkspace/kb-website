import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <span className="font-serif text-lg tracking-[0.2em] font-semibold">
              KAYDEN BENFIELD
            </span>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Licensed North Carolina Broker
              <br />
              INNOVATE Real Estate
              <br />
              #1 Non-Franchised Brokerage, East Coast
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-gold mb-4 font-sans">
              Navigate
            </h4>
            <div className="space-y-3">
              {[
                { href: "/about", label: "About Kayden" },
                { href: "/services", label: "Services" },
                { href: "/neighborhoods", label: "Neighborhoods" },
                { href: "/listings", label: "Listings" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-gold mb-4 font-sans">
              Take Action
            </h4>
            <div className="space-y-3">
              <Link
                href="/contact"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                Book a Call
              </Link>
              <Link
                href="/calculator"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                Relocation Calculator
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-gold mb-4 font-sans">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>Charlotte, NC Metro Area</p>
              <p>Direct Cell — No Gatekeepers</p>
              <p className="text-xs mt-6 text-gray-500">
                [Phone and email will be added here]
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Kayden Benfield, INNOVATE Real Estate.
            All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Licensed North Carolina Broker | Equal Housing Opportunity
          </p>
        </div>
      </div>
    </footer>
  );
}
