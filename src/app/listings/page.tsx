"use client";

import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ListingsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-white pt-32 pb-28 md:pt-40 md:pb-36 lg:pt-44 lg:pb-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[1.05] text-[#1a1a2e] font-light max-w-4xl">
              Charlotte Luxury Properties. Curated, Not Filtered.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555] mt-8">
              Every property below has been vetted against the criteria that matter to relocating families: school zone quality, commute corridor, neighborhood micro-culture, HOA health, and long-term appreciation trajectory. This is not a Zillow dump. This is a curated selection from Charlotte&apos;s luxury inventory&mdash;including off-market opportunities that never hit the MLS.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-block px-8 py-4 bg-[#c9a84c] text-white text-sm tracking-[0.1em] uppercase font-semibold hover:bg-[#d4b96a] transition-all duration-300 text-center">
                Book a Call to Discuss These Properties
              </Link>
              <Link href="/calculator" className="inline-block px-8 py-4 border border-[#1a1a2e] text-[#1a1a2e] text-sm tracking-[0.1em] uppercase font-semibold hover:bg-[#FAF8F5] transition-all duration-300 text-center">
                Use the Calculator to See Your Buying Power
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-[#FAF8F5] border-y border-[#eee]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-[#999] tracking-[0.1em] uppercase">
            <span>$750K&ndash;$2.5M Range</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>Top School Zones</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>Off-Market Access</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>Updated Weekly</span>
          </div>
        </div>
      </section>

      {/* LISTING FRAMEWORK */}
      <section className="bg-white py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light text-center mb-8">
              Every Listing Includes What Zillow Doesn&apos;t
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-[#555] text-center mb-20">
              Each property Kayden presents comes with full context: neighborhood positioning, financial arbitrage snapshot versus your origin market, confirmed school zone assignments, and an honest assessment of both strengths and drawbacks.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: "Property Headline", desc: "Not the MLS description. A one-line positioning statement with square footage, acreage, school zone, and price." },
              { title: "Neighborhood Context", desc: "Which micro-market this property sits in, what the commute looks like, and which school feeder pattern it accesses. This is the context Zillow doesn\u2019t provide." },
              { title: "Financial Arbitrage Snapshot", desc: "For each property, the comparable cost in your origin market. See exactly what the same home would cost in Westchester, the Bay Area, or Fairfield County." },
              { title: "School Zone Verification", desc: "Confirmed school assignments (elementary, middle, high) with current enrollment status and any known rezoning timelines." },
              { title: "Kayden\u2019s Assessment", desc: "A brief, honest note: what makes this property worth considering, what the drawbacks are, and who it\u2019s best suited for. Radical transparency\u2014every listing includes what\u2019s wrong with it, not just what\u2019s right." },
              { title: "Virtual Tour Access", desc: "Schedule a virtual walkthrough or ask Kayden directly about any property. Every listing card connects you to a real conversation, not a contact form." },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="border border-[#eee] rounded-sm p-8">
                  <h3 className="font-serif text-xl text-[#1a1a2e] mb-3 font-light">{item.title}</h3>
                  <p className="text-base leading-relaxed text-[#555]">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CURATED */}
      <section className="bg-[#FAF8F5] py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimateOnScroll>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light">
                Why Curated Beats Filtered
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555]">
                The properties on this page represent a fraction of what&apos;s available. Kayden&apos;s curated search identifies homes that match your specific financial, educational, and lifestyle criteria&mdash;including off-market opportunities that never appear on public platforms.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-28 md:py-36 lg:py-44">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light mb-6">
              See Properties Selected for Your Family
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-[#555] mb-10">
              Book a 30-minute call. Walk through your criteria. Receive a personalized shortlist within 48 hours.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <Link href="/contact" className="inline-block px-10 py-4 bg-[#c9a84c] text-white text-sm tracking-[0.1em] uppercase font-semibold hover:bg-[#d4b96a] transition-all duration-300">
              Book a Call
            </Link>
            <p className="text-xs text-[#999] mt-4">Includes off-market properties not available on Zillow or Redfin.</p>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
