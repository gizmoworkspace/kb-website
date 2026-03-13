"use client";

import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ServicesPage() {
  return (
    <div>
      {/* HERO */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-heading max-w-4xl">
              From First Call to Country Club Introduction. Every Step, Handled.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <p className="mt-6 md:mt-8 text-lg leading-relaxed text-body max-w-2xl">
              Kayden&apos;s relocation advisory covers the entire lifecycle of your move: financial modeling, school district analysis, neighborhood matching, property acquisition, transaction execution, and post-close community integration. One agent. One relationship. Zero gaps.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book Your Relocation Strategy Call</Link>
              <Link href="/calculator" className="btn-secondary">Run Your Numbers</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="py-5 border-y border-border-light">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-body-light font-body">
            <span>✓ $50K–$150K+ typical annual savings</span>
            <span>✓ 60–90 day close timeline</span>
            <span>✓ 1–2 trips instead of 4–5</span>
            <span>✓ 12-month post-close support</span>
          </div>
        </div>
      </section>

      {/* AGITATION */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-heading mb-8 md:mb-12">
              What Relocation Usually Looks Like
            </h2>
          </AnimateOnScroll>
          <div className="max-w-2xl">
            <AnimateOnScroll delay={100}>
              <p className="text-lg leading-relaxed text-body mb-6">
                Most families relocating to Charlotte from a coastal metro follow the same pattern. Browse Zillow from 800 miles away, overwhelmed by 3,000+ listings with zero context on which neighborhoods actually match your life. Fly in for two or three house-hunting trips, burning $3K–$5K per trip and seeing homes that were never going to work because no one asked the right questions first.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="text-lg leading-relaxed text-body mb-6">
                Pick a neighborhood based on a blog post or a friend-of-a-friend&apos;s recommendation&mdash;then discover six months later the school feeder pattern doesn&apos;t work for your kids, the commute is 20 minutes longer than you were told, and the HOA has $40K in deferred maintenance assessments coming.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <p className="text-lg leading-relaxed text-body">
                The financial arbitrage looked perfect on paper. But the execution left half of it on the table.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CROSSHEAD */}
      <section className="dark-section py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-8 md:px-12 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              There&apos;s a Process That Captures the Full Arbitrage.
            </h2>
            <p className="mt-4 font-heading text-2xl md:text-3xl text-gold">
              Financial, Educational, and Social.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* THE PROCESS */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="space-y-12 md:space-y-16">
            {[
              { num: "01", phase: "Financial Clarity", title: "Custom Financial Arbitrage Report", body: "Before you look at a single property, Kayden builds a side-by-side financial comparison: your current metro versus Charlotte across state income tax, property tax, housing costs, insurance, private school tuition, and discretionary spending. The output is a concrete dollar figure\u2014your exact annual savings and a 10-year wealth projection.", result: "The move shifts from \u201cwe think this is a good idea\u201d to \u201cwe\u2019re leaving $180K per year on the table if we don\u2019t do this.\u201d" },
              { num: "02", phase: "Lifestyle Mapping", title: "Neighborhood + School District Deep-Dive", body: "Kayden conducts a detailed lifestyle audit: your current commute, your children\u2019s academic and extracurricular priorities, your spouse\u2019s social and professional needs, your weekend patterns, your dining and recreation preferences, and your proximity requirements. School feeder patterns are analyzed at the elementary-through-high-school level.", result: "You don\u2019t discover a rezoning issue six months after closing." },
              { num: "03", phase: "Curated Search + Acquisition", title: "Pre-Screened Properties, Productive Trips", body: "Kayden pre-screens all available inventory, eliminates non-starters, and sends curated shortlists with video walkthroughs and written neighborhood context. Your first in-person visit is productive: five to seven homes in pre-validated neighborhoods. Typical negotiation savings: 3\u20137% on purchase price, often $25K\u2013$100K on luxury properties.", result: "Close in 60\u201390 days with 1\u20132 trips instead of the typical 4\u20136 month, 4\u20135 trip timeline." },
              { num: "04", phase: "Transaction Execution", title: "Direct Communication, Zero Gaps", body: "From offer acceptance through closing, you get Kayden directly. Not a transaction coordinator. Not a junior associate. Not an automated email sequence. Direct cell access, proactive updates at every stage, and honest assessments of every inspection finding, appraisal result, and negotiation point.", result: "A $1M+ purchase managed with the same rigor and transparency you expect from every other professional relationship." },
              { num: "05", phase: "Community Integration", title: "First 100 Days Program", body: "The transaction closes. Most agents disappear. Kayden\u2019s relationship extends 12 months past the closing date. The First 100 Days Integration Program delivers curated introductions to country club membership directors, wealth advisors, pediatricians, school administrators, parent groups, professional networks, and social organizations\u2014matched to your family.", result: "Your family has a genuine social foundation within the first quarter, not the first year." },
            ].map((step, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="card p-8 md:p-10">
                  <div className="flex items-start gap-6">
                    <span className="font-heading text-5xl md:text-6xl text-border leading-none flex-shrink-0">{step.num}</span>
                    <div>
                      <p className="text-xs tracking-widest uppercase text-gold font-body font-medium mb-2">{step.phase}</p>
                      <h3 className="font-heading text-xl md:text-2xl text-heading mb-4">{step.title}</h3>
                      <p className="text-[15px] leading-relaxed text-body mb-4">{step.body}</p>
                      <p className="text-sm italic text-body-light">{step.result}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE STACK */}
      <section className="py-24 md:py-32 lg:py-40 border-t border-border-light text-center">
        <div className="max-w-3xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl text-heading mb-4">Value Delivered</h2>
            <p className="font-heading text-5xl md:text-6xl text-gold mb-2">$11,750+</p>
            <p className="text-body-light font-body mb-8">Total Component Value</p>
            <p className="font-heading text-2xl md:text-3xl text-heading mb-2">Your Cost: $0 Upfront</p>
            <p className="text-[15px] leading-relaxed text-body max-w-lg mx-auto">
              Commission-based. Earned only upon a successful close on a home you chose with complete information. No advisory fees. No retainers.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SWITCH */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl text-heading mb-8 md:mb-12">What Most Relocators Try First</h2>
          </AnimateOnScroll>
          <div className="max-w-2xl space-y-6">
            {[
              { title: "Zillow/Redfin Remote Browsing", desc: "No contextual intelligence. Every listing looks the same when you don\u2019t know the micro-markets." },
              { title: "Generic Agent Referral", desc: "The referred agent treats you like any local buyer. No relocation expertise. No lifestyle mapping." },
              { title: "Corporate Relocation Package", desc: "Usually limited to a lump-sum payment and a random agent from a referral network." },
              { title: "DIY Research via Blogs and Forums", desc: "Outdated, biased, and missing the micro-level detail that determines fit. Subreddit advice is not a strategy." },
              { title: "Visiting on Vacation and Driving Around", desc: "Tourists see the surface. They don\u2019t understand feeder patterns, HOA politics, or which streets flood." },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="flex gap-4 items-start">
                  <span className="text-body-light mt-1">✗</span>
                  <div>
                    <h3 className="font-heading text-lg text-heading">{item.title}</h3>
                    <p className="text-[15px] text-body font-body">{item.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll delay={400}>
            <p className="mt-10 text-lg leading-relaxed text-body max-w-2xl">
              Every failed approach above shares the same gap: no one translates your current lifestyle into the correct Charlotte analog. Kayden&apos;s process closes that gap.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 lg:py-40 border-t border-border-light">
        <div className="max-w-3xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <div className="mb-10">
              <h3 className="font-heading text-xl md:text-2xl text-heading mb-3">&ldquo;We can find a house on our own&mdash;we&apos;ve bought before.&rdquo;</h3>
              <p className="text-[15px] leading-relaxed text-body">Buying a home in a market you&apos;ve never lived in is a fundamentally different transaction. The risk isn&apos;t finding a house&mdash;it&apos;s finding the right neighborhood, the right school zone, and the right community match. That&apos;s the part you can&apos;t Google.</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div>
              <h3 className="font-heading text-xl md:text-2xl text-heading mb-3">&ldquo;We can&apos;t justify the cost of a buyer&apos;s agent.&rdquo;</h3>
              <p className="text-[15px] leading-relaxed text-body">Going direct to the listing agent doesn&apos;t save you the commission&mdash;it gives the seller&apos;s agent dual representation and removes your advocate from the negotiation. Kayden&apos;s negotiation discipline alone typically saves 3–7% on purchase price&mdash;often $25K–$100K on luxury properties.</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="dark-section py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto px-8 md:px-12 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Your Next Step: 30 Minutes. No Pitch. Just a Plan.
            </h2>
            <p className="mt-6 text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>Walk through your tax scenario, school priorities, and neighborhood criteria with Kayden directly.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary !bg-white !text-heading hover:!bg-gray-100">Book Your Strategy Call</Link>
              <Link href="/calculator" className="btn-secondary !border-white/30 !text-white hover:!border-white">Run Your Numbers First</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
