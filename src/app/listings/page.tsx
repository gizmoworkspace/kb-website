"use client";

import Link from "next/link";
import { FadeIn, ParallaxBg, ScaleReveal } from "@/components/ScrollAnimations";

export default function ListingsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="viewport-section bg-hero-dark relative">
        <ParallaxBg src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" className="opacity-20" />
        <div className="absolute inset-0 bg-hero-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[1.05] text-white font-semibold max-w-4xl">
              Charlotte Luxury Properties.{" "}
              <span className="text-gold-light">Curated, Not Filtered.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/50 max-w-2xl font-body">
              Every property below has been vetted against the criteria that matter to relocating families: school zone quality, commute corridor, neighborhood micro-culture, HOA health, and long-term appreciation trajectory. This is not a Zillow dump.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold">Discuss These Properties</Link>
              <Link href="/calculator" className="btn-outline">See Your Buying Power</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-hero-dark border-y border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/30 font-body">
            <span>✓ $750K–$2.5M Range</span>
            <span>✓ Top School Zones</span>
            <span>✓ Off-Market Access</span>
            <span>✓ Updated Weekly</span>
          </div>
        </div>
      </section>

      {/* LISTING FRAMEWORK */}
      <section className="bg-hero-dark py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-semibold">
              How Kayden Presents <span className="text-gold">Each Property</span>
            </h2>
            <p className="mt-4 text-white/40 font-body max-w-2xl mx-auto">
              Every listing includes context Zillow can&apos;t provide. Here&apos;s what you get with each curated property.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Positioning Statement", desc: "Not the MLS description. A one-line statement: \u201c5,200 sq ft on 1.3 acres in the Weddington High School zone. $1.05M.\u201d" },
              { title: "Neighborhood Context", desc: "Which micro-market, what the commute looks like, and which school feeder pattern it accesses." },
              { title: "Financial Arbitrage Snapshot", desc: "The comparable cost in your origin market. \u201cThis home\u2019s equivalent in Westchester: $2.1M+. In Weddington: $1.05M.\u201d" },
              { title: "School Zone Verification", desc: "Confirmed school assignments (elementary, middle, high) with current enrollment status and rezoning timelines." },
              { title: "Kayden\u2019s Assessment", desc: "What makes this property worth considering, what the drawbacks are, and who it\u2019s best suited for. Radical transparency." },
              { title: "Virtual Tour Access", desc: "Video walkthroughs and written context so your first in-person visit is productive, not exploratory." },
            ].map((item, i) => (
              <ScaleReveal key={i} delay={i * 100}>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-6 md:p-8 hover:bg-white/[0.06] transition-all duration-500">
                  <h3 className="font-heading text-xl text-gold font-semibold mb-3">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-white/40 font-body">{item.desc}</p>
                </div>
              </ScaleReveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="bg-hero-dark py-24 md:py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-8 md:p-12">
              <h2 className="font-heading text-2xl md:text-3xl text-white font-semibold mb-4">Featured Listings Coming Soon</h2>
              <p className="text-[15px] leading-relaxed text-white/40 font-body mb-6">
                Curated luxury properties are being vetted against Kayden&apos;s criteria: school zone quality, commute corridor, HOA health, and appreciation trajectory. Check back soon or book a call for immediate access to the full curated inventory, including off-market opportunities.
              </p>
              <Link href="/contact" className="btn-gold">Get Your Personalized Shortlist</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="viewport-section bg-navy relative">
        <ParallaxBg src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=1920&q=80" className="opacity-15" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white font-semibold">
              See Properties <span className="text-gold-light">Selected for Your Family</span>
            </h2>
            <p className="mt-6 text-lg text-white/50 font-body">
              Book a 30-minute call. Walk through your criteria. Receive a personalized shortlist within 48 hours. Includes off-market properties not available on Zillow or Redfin.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-gold">Book Your Strategy Call</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
