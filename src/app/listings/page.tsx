"use client";

import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ListingsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-heading max-w-4xl">
              Charlotte Luxury Properties. Curated, Not Filtered.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <p className="mt-6 md:mt-8 text-lg leading-relaxed text-body max-w-2xl">
              Every property below has been vetted against the criteria that matter to relocating families: school zone quality, commute corridor, neighborhood micro-culture, HOA health, and long-term appreciation trajectory. This is not a Zillow dump. This is a curated selection from Charlotte&apos;s luxury inventory&mdash;including off-market opportunities that never hit the MLS.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book a Call to Discuss Properties</Link>
              <Link href="/calculator" className="btn-secondary">See Your Buying Power</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="py-5 border-y border-border-light">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-body-light font-body">
            <span>✓ $750K–$2.5M Range</span>
            <span>✓ Top School Zones</span>
            <span>✓ Off-Market Access</span>
            <span>✓ Updated Weekly</span>
          </div>
        </div>
      </section>

      {/* LISTING FRAMEWORK */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl text-heading mb-4 text-center">How Kayden Presents Each Property</h2>
            <p className="text-center text-body mb-12 max-w-2xl mx-auto">Every listing includes context Zillow can&apos;t provide.</p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              { title: "Positioning Statement", desc: "Not the MLS description. A one-line statement: \u201c5,200 sq ft on 1.3 acres in the Weddington High School zone. $1.05M.\u201d" },
              { title: "Neighborhood Context", desc: "Which micro-market, what the commute looks like, and which school feeder pattern it accesses." },
              { title: "Financial Arbitrage Snapshot", desc: "The comparable cost in your origin market. \u201cThis home\u2019s equivalent in Westchester: $2.1M+. In Weddington: $1.05M.\u201d" },
              { title: "School Zone Verification", desc: "Confirmed school assignments (elementary, middle, high) with current enrollment status and rezoning timelines." },
              { title: "Kayden\u2019s Assessment", desc: "What makes this property worth considering, what the drawbacks are, and who it\u2019s best suited for." },
              { title: "Virtual Tour Access", desc: "Video walkthroughs and written context so your first in-person visit is productive, not exploratory." },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="card p-8 md:p-10">
                  <h3 className="font-heading text-xl text-heading mb-3">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-body">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="py-24 md:py-32 lg:py-40 border-t border-border-light">
        <div className="max-w-3xl mx-auto px-8 md:px-12 text-center">
          <AnimateOnScroll>
            <div className="card p-8 md:p-12">
              <h2 className="font-heading text-2xl md:text-3xl text-heading mb-4">Featured Listings Coming Soon</h2>
              <p className="text-[15px] leading-relaxed text-body mb-6">
                Curated luxury properties are being vetted against Kayden&apos;s criteria: school zone quality, commute corridor, HOA health, and appreciation trajectory. Check back soon or book a call for immediate access to the full curated inventory, including off-market opportunities.
              </p>
              <Link href="/contact" className="btn-primary">Get Your Personalized Shortlist</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="dark-section py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto px-8 md:px-12 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              See Properties Selected for Your Family
            </h2>
            <p className="mt-6 text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
              Book a 30-minute call. Walk through your criteria. Receive a personalized shortlist within 48 hours. Includes off-market properties not available on Zillow or Redfin.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary !bg-white !text-heading hover:!bg-gray-100">Book Your Strategy Call</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
