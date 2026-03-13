"use client";

import Link from "next/link";
import { FadeIn, ParallaxBg, ScaleReveal } from "@/components/ScrollAnimations";

export default function ServicesPage() {
  return (
    <div>
      {/* HERO */}
      <section className="viewport-section bg-hero-dark relative">
        <ParallaxBg src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" className="opacity-20" />
        <div className="absolute inset-0 bg-hero-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[1.05] text-white font-semibold max-w-4xl">
              From First Call to Country Club Introduction.{" "}
              <span className="text-gold-light">Every Step, Handled.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/50 max-w-2xl font-body">
              Kayden&apos;s relocation advisory covers the entire lifecycle of your move: financial modeling, school district analysis, neighborhood matching, property acquisition, transaction execution, and post-close community integration. One agent. One relationship. Zero gaps.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold">Book Your Strategy Call</Link>
              <Link href="/calculator" className="btn-outline">Run Your Numbers</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-hero-dark border-y border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/30 font-body">
            <span>✓ $50K–$150K+ typical annual savings</span>
            <span>✓ 60–90 day close timeline</span>
            <span>✓ 1–2 trips instead of 4–5</span>
            <span>✓ 12-month post-close support</span>
          </div>
        </div>
      </section>

      {/* AGITATION */}
      <section className="bg-hero-dark py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight text-white font-semibold mb-8">
              What Relocation <span className="text-gold">Usually Looks Like</span>
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg leading-relaxed text-white/50 font-body mb-6">
              Most families relocating to Charlotte from a coastal metro follow the same pattern. Browse Zillow from 800 miles away, overwhelmed by 3,000+ listings with zero context on which neighborhoods actually match your life. Fly in for two or three house-hunting trips, burning $3K–$5K per trip and seeing homes that were never going to work because no one asked the right questions first.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg leading-relaxed text-white/50 font-body mb-6">
              Pick a neighborhood based on a blog post or a friend-of-a-friend&apos;s recommendation—then discover six months later the school feeder pattern doesn&apos;t work for your kids, the commute is 20 minutes longer than you were told, and the HOA has $40K in deferred maintenance assessments coming.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-lg leading-relaxed text-white/50 font-body">
              The financial arbitrage looked perfect on paper. But the execution left half of it on the table.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CROSSHEAD */}
      <section className="viewport-section bg-navy">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[1.1] text-white font-semibold">
              There&apos;s a Process That Captures the Full Arbitrage.
            </h2>
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl tracking-tight text-gold-light mt-4 font-light">
              Financial, Educational, and Social.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* THE PROCESS — viewport per phase */}
      {[
        {
          num: "01", phase: "Financial Clarity", title: "Custom Financial Arbitrage Report",
          body: "Before you look at a single property, Kayden builds a side-by-side financial comparison: your current metro versus Charlotte across state income tax, property tax, housing costs, insurance, private school tuition, and discretionary spending. The output is a concrete dollar figure\u2014your exact annual savings and a 10-year wealth projection.",
          result: "The move shifts from \u201cwe think this is a good idea\u201d to \u201cwe\u2019re leaving $180K per year on the table if we don\u2019t do this.\u201d",
          img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
        },
        {
          num: "02", phase: "Lifestyle Mapping", title: "Neighborhood + School District Deep-Dive",
          body: "Kayden conducts a detailed lifestyle audit: your current commute, your children\u2019s academic and extracurricular priorities, your spouse\u2019s social and professional needs, your weekend patterns, your dining and recreation preferences, and your proximity requirements. School feeder patterns are analyzed at the elementary-through-high-school level.",
          result: "You don\u2019t discover a rezoning issue six months after closing.",
          img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1920&q=80",
        },
        {
          num: "03", phase: "Curated Search", title: "Pre-Screened Properties, Productive Trips",
          body: "Kayden pre-screens all available inventory, eliminates non-starters, and sends curated shortlists with video walkthroughs and written neighborhood context. Your first in-person visit is productive: five to seven homes in pre-validated neighborhoods. Typical negotiation savings: 3\u20137% on purchase price.",
          result: "Close in 60\u201390 days with 1\u20132 trips instead of the typical 4\u20136 month, 4\u20135 trip timeline.",
          img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
        },
        {
          num: "04", phase: "Transaction Execution", title: "Direct Communication, Zero Gaps",
          body: "From offer acceptance through closing, you get Kayden directly. Not a transaction coordinator. Not a junior associate. Not an automated email sequence. Direct cell access, proactive updates at every stage, and honest assessments of every inspection finding, appraisal result, and negotiation point.",
          result: "A $1M+ purchase managed with the same rigor you expect from every other professional relationship.",
          img: null,
        },
        {
          num: "05", phase: "Community Integration", title: "First 100 Days Program",
          body: "The transaction closes. Most agents disappear. Kayden\u2019s relationship extends 12 months past the closing date. Curated introductions to country club membership directors, wealth advisors, pediatricians, school administrators, parent groups, professional networks, and social organizations\u2014matched to your family.",
          result: "Your family has a genuine social foundation within the first quarter, not the first year.",
          img: "https://images.unsplash.com/photo-1499793983394-e58fc2e67a11?w=1920&q=80",
        },
      ].map((step, i) => (
        <section key={i} className="viewport-section bg-hero-dark relative">
          {step.img && <ParallaxBg src={step.img} className="opacity-15" />}
          <div className="absolute inset-0 bg-hero-dark/80" />
          <div className={`relative z-10 max-w-4xl mx-auto px-6 md:px-8 ${i % 2 !== 0 ? "text-right" : ""}`}>
            <FadeIn direction={i % 2 === 0 ? "left" : "right"}>
              <span className={`font-heading text-[140px] md:text-[180px] leading-none text-white/[0.03] font-bold absolute -top-10 ${i % 2 !== 0 ? "right-0" : "left-0"}`}>{step.num}</span>
              <p className="text-[11px] tracking-[0.2em] uppercase font-body font-semibold text-gold mb-2">{step.phase}</p>
              <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-6">{step.title}</h3>
              <p className={`text-lg md:text-xl leading-relaxed text-white/50 font-body mb-4 max-w-xl ${i % 2 !== 0 ? "ml-auto" : ""}`}>{step.body}</p>
              <p className={`text-sm italic text-white/30 font-body max-w-xl ${i % 2 !== 0 ? "ml-auto" : ""}`}>{step.result}</p>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* VALUE STACK */}
      <section className="bg-hero-dark py-24 md:py-32 text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-white font-semibold mb-4">Value Delivered</h2>
            <p className="font-heading text-5xl md:text-6xl text-gold font-semibold mb-2">$11,750+</p>
            <p className="text-white/40 font-body mb-1">Total Component Value</p>
            <p className="font-heading text-2xl md:text-3xl text-white font-semibold mt-8 mb-2">Your Cost: $0 Upfront</p>
            <p className="text-[15px] leading-relaxed text-white/40 font-body max-w-lg mx-auto">
              Commission-based. Earned only upon a successful close on a home you chose with complete information. No advisory fees. No retainers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SWITCH */}
      <section className="bg-hero-dark py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-white font-semibold mb-8">
              What Most Relocators <span className="text-gold">Try First</span>
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {[
              { title: "Zillow/Redfin Remote Browsing", desc: "No contextual intelligence. Every listing looks the same when you don\u2019t know the micro-markets." },
              { title: "Generic Agent Referral", desc: "The referred agent treats you like any local buyer. No relocation expertise. No lifestyle mapping." },
              { title: "Corporate Relocation Package", desc: "Usually limited to a lump-sum payment and a random agent from a referral network." },
              { title: "DIY Research via Blogs and Forums", desc: "Outdated, biased, and missing the micro-level detail that determines fit. Subreddit advice is not a strategy." },
              { title: "Visiting on Vacation and Driving Around", desc: "Tourists see the surface. They don\u2019t understand feeder patterns, HOA politics, or which streets flood." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="flex gap-4 items-start">
                  <span className="text-white/20 mt-1 text-lg">✗</span>
                  <div>
                    <h3 className="font-heading text-lg text-white font-semibold">{item.title}</h3>
                    <p className="text-[15px] text-white/40 font-body">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={500}>
            <p className="mt-10 text-lg leading-relaxed text-white/50 font-body">
              Every failed approach above shares the same gap: no one translates your current lifestyle into the correct Charlotte analog. Kayden&apos;s process closes that gap.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="mb-10">
              <h3 className="font-heading text-xl md:text-2xl text-warm-950 font-semibold mb-3">&ldquo;We can find a house on our own—we&apos;ve bought before.&rdquo;</h3>
              <p className="text-[15px] leading-relaxed text-warm-600 font-body">Buying a home in a market you&apos;ve never lived in is a fundamentally different transaction. The risk isn&apos;t finding a house—it&apos;s finding the right neighborhood, the right school zone, and the right community match. That&apos;s the part you can&apos;t Google.</p>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div>
              <h3 className="font-heading text-xl md:text-2xl text-warm-950 font-semibold mb-3">&ldquo;We can&apos;t justify the cost of a buyer&apos;s agent.&rdquo;</h3>
              <p className="text-[15px] leading-relaxed text-warm-600 font-body">Going direct to the listing agent doesn&apos;t save you the commission—it gives the seller&apos;s agent dual representation and removes your advocate from the negotiation. Kayden&apos;s negotiation discipline alone typically saves 3–7% on purchase price—often $25K–$100K on luxury properties.</p>
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
              Your Next Step: <span className="text-gold-light">30 Minutes. No Pitch. Just a Plan.</span>
            </h2>
            <p className="mt-6 text-lg text-white/50 font-body">Walk through your tax scenario, school priorities, and neighborhood criteria with Kayden directly.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold">Book Your Strategy Call</Link>
              <Link href="/calculator" className="btn-outline">Run Your Numbers First</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
