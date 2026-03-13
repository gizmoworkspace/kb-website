"use client";

import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ServicesPage() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-white pt-32 pb-28 md:pt-40 md:pb-36 lg:pt-44 lg:pb-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[1.05] text-[#1a1a2e] font-light max-w-4xl">
              From First Call to Country Club Introduction. Every Step, Handled.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555] mt-8">
              Kayden&apos;s relocation advisory covers the entire lifecycle of your move: financial modeling, school district analysis, neighborhood matching, property acquisition, transaction execution, and post-close community integration. One agent. One relationship. Zero gaps.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-block px-8 py-4 bg-[#c9a84c] text-white text-sm tracking-[0.1em] uppercase font-semibold hover:bg-[#d4b96a] transition-all duration-300 text-center">
                Book Your Relocation Strategy Call
              </Link>
              <Link href="/calculator" className="inline-block px-8 py-4 border border-[#1a1a2e] text-[#1a1a2e] text-sm tracking-[0.1em] uppercase font-semibold hover:bg-[#FAF8F5] transition-all duration-300 text-center">
                Use the Charlotte Relocation Dividend Calculator
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-[#FAF8F5] border-y border-[#eee]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-[#999] tracking-[0.1em] uppercase">
            <span>$50K&ndash;$150K+ typical annual savings</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>60&ndash;90 day close timeline</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>1&ndash;2 trips instead of 4&ndash;5</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>12-month post-close support</span>
          </div>
        </div>
      </section>

      {/* AGITATION */}
      <section className="bg-white py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimateOnScroll>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light">
                What Relocation Usually Looks Like
              </h2>
            </AnimateOnScroll>
            <div>
              <AnimateOnScroll delay={100}>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555] mb-6">
                  Most families relocating to Charlotte from a coastal metro follow the same pattern. Browse Zillow from 800 miles away, overwhelmed by 3,000+ listings with zero context on which neighborhoods actually match your life. Fly in for two or three house-hunting trips, burning $3K&ndash;$5K per trip and seeing homes that were never going to work because no one asked the right questions first.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555] mb-6">
                  Pick a neighborhood based on a blog post or a friend-of-a-friend&apos;s recommendation&mdash;then discover six months later the school feeder pattern doesn&apos;t work for your kids, the commute is 20 minutes longer than you were told, and the HOA has $40K in deferred maintenance assessments coming.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={300}>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555] mb-6">
                  Overpay by $30K&ndash;$80K because the listing agent could smell the coastal equity on you. Spend 12&ndash;18 months feeling like outsiders with no social network, no community connections, and kids who struggle to make friends.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={400}>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555]">
                  The financial arbitrage looked perfect on paper. But the execution left half of it on the table.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* CROSSHEAD */}
      <section className="bg-[#1a1a2e] py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-white font-light">
              There&apos;s a Process That Captures the Full Arbitrage.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="font-serif text-xl md:text-2xl text-[#c9a84c] mt-6 font-light">
              Financial, Educational, and Social.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* THE PROCESS */}
      <section className="bg-[#FAF8F5] py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light text-center mb-20">
              The Process
            </h2>
          </AnimateOnScroll>

          <div className="space-y-24">
            {[
              { num: "01", title: "Financial Clarity", subtitle: "Custom Financial Arbitrage Report", desc: "Before you look at a single property, Kayden builds a side-by-side financial comparison: your current metro versus Charlotte across state income tax, property tax, housing costs, insurance, private school tuition, and discretionary spending. The output is a concrete dollar figure\u2014your exact annual savings and a 10-year wealth projection. So that the move shifts from \u201cwe think this is a good idea\u201d to \u201cwe\u2019re leaving $180K per year on the table if we don\u2019t do this.\u201d" },
              { num: "02", title: "Lifestyle Mapping", subtitle: "Neighborhood + School District Deep-Dive", desc: "Kayden conducts a detailed lifestyle audit: your current commute, your children\u2019s academic and extracurricular priorities, your spouse\u2019s social and professional needs, your weekend patterns, your dining and recreation preferences, and your proximity requirements. This maps to 2\u20133 Charlotte micro-markets that match how you actually live\u2014not how a Zillow filter guesses you live.\n\nSchool feeder patterns are analyzed at the elementary-through-high-school level, factoring in magnet programs, AP/IB course offerings, and athletics. Every neighborhood on your shortlist passes the school test first. So that you don\u2019t discover a rezoning issue six months after closing." },
              { num: "03", title: "Curated Search + Acquisition", subtitle: "Pre-Screened Properties, Productive Trips", desc: "Kayden pre-screens all available inventory, eliminates non-starters, and sends curated shortlists with video walkthroughs and written neighborhood context. Your first in-person visit is productive: five to seven homes in pre-validated neighborhoods, each meeting your financial, educational, and lifestyle criteria. So that you close in 60\u201390 days with 1\u20132 trips instead of the typical 4\u20136 month, 4\u20135 trip relocation timeline.\n\nWhen you\u2019re ready to make an offer, Kayden\u2019s micro-market pricing intelligence protects you from the \u201ccoastal equity premium\u201d\u2014the markup that listing agents apply when they see a Manhattan address on the offer. Typical negotiation savings: 3\u20137% on purchase price, often $25K\u2013$100K on luxury properties." },
              { num: "04", title: "Transaction Execution", subtitle: "Direct Communication, Zero Gaps", desc: "From offer acceptance through closing, you get Kayden directly. Not a transaction coordinator. Not a junior associate. Not an automated email sequence. Direct cell access, proactive updates at every stage, and honest assessments of every inspection finding, appraisal result, and negotiation point. So that a $1M+ purchase is managed with the same rigor and transparency you expect from every other professional relationship in your life." },
              { num: "05", title: "Community Integration", subtitle: "First 100 Days Program", desc: "The transaction closes. Most agents disappear. Kayden\u2019s relationship extends 12 months past the closing date. The First 100 Days Integration Program delivers curated introductions to country club membership directors, local wealth advisors, pediatricians, school administrators, parent groups, professional networks, charity boards, and social organizations\u2014matched to your family\u2019s specific interests and background. So that your family has a genuine social foundation within the first quarter, not the first year.\n\nRelocation logistics\u2014vetted movers, short-term housing, storage, spouse employment resources, medical and school enrollment guidance\u2014are coordinated directly. The 47 logistical tasks that make relocation miserable are handled by someone who treats your move like his top priority." },
            ].map((phase, i) => (
              <AnimateOnScroll key={i}>
                <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
                  <div>
                    <span className="font-serif text-[5rem] leading-none text-[#1a1a2e]/[0.06] font-light block">{phase.num}</span>
                    <h3 className="font-serif text-2xl text-[#1a1a2e] font-light mt-2">{phase.title}</h3>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-[#c9a84c] mb-4 font-light">{phase.subtitle}</h4>
                    {phase.desc.split("\n\n").map((p, j) => (
                      <p key={j} className="text-base md:text-lg leading-relaxed text-[#555] mb-6">{p}</p>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="bg-white py-28 md:py-36 lg:py-44">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light mb-8">
              Value Delivered
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="font-serif text-4xl md:text-5xl text-[#c9a84c] font-light mb-2">$11,750+</p>
            <p className="text-xs text-[#999] tracking-[0.2em] uppercase font-medium mb-8">Total Component Value</p>
            <p className="text-base md:text-lg leading-relaxed text-[#555] max-w-2xl mx-auto">
              Your Cost: $0 Upfront. Commission-based. Earned only upon a successful close on a home you chose with complete information. No advisory fees. No retainers. Every component above is bundled into the transaction.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SWITCH */}
      <section className="bg-[#FAF8F5] py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light mb-16">
              What Most Relocators Try First
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-20">
            {[
              { title: "Zillow/Redfin Remote Browsing", desc: "No contextual intelligence. Every listing looks the same when you don\u2019t know the micro-markets. Leads to wasted trips and bad neighborhood decisions." },
              { title: "Generic Agent Referral", desc: "The referred agent treats you like any local buyer. No relocation expertise. No lifestyle mapping. No school matching. No community integration." },
              { title: "Corporate Relocation Package", desc: "Usually limited to a lump-sum payment and a random agent from a referral network. No personalization, no school analysis, no social integration." },
              { title: "DIY Research via Blogs and Forums", desc: "Outdated, biased, and missing the micro-level detail that determines whether a neighborhood is the right fit. Subreddit advice is not a strategy." },
              { title: "Visiting on Vacation and Driving Around", desc: "Tourists see the surface. They don\u2019t understand feeder patterns, HOA politics, new construction timelines, builder reputations, or which streets flood." },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="p-8 bg-white rounded-sm">
                  <h3 className="font-serif text-xl text-[#1a1a2e] mb-3 font-light">{item.title}</h3>
                  <p className="text-base leading-relaxed text-[#555]">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a2e] mb-6 font-light">What&apos;s Different with Kayden</h3>
              <p className="text-base md:text-lg leading-relaxed text-[#555]">
                Every failed approach above shares the same gap: no one translates your current lifestyle into the correct Charlotte analog. Kayden&apos;s process closes that gap. The financial modeling comes before the search. The school analysis comes before the neighborhood. The community integration comes after the close. Nothing is left to chance, and nothing is left to Zillow.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CLOSE */}
      <section className="bg-white py-28 md:py-36 lg:py-44">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {[
            { q: "\u201cWe can find a house on our own\u2014we\u2019ve bought before.\u201d", a: "Buying a home in a market you\u2019ve never lived in is a fundamentally different transaction. The risk isn\u2019t finding a house\u2014it\u2019s finding the right neighborhood, the right school zone, and the right community match. That\u2019s the part you can\u2019t Google." },
            { q: "\u201cWe can\u2019t justify the cost of a buyer\u2019s agent.\u201d", a: "Going direct to the listing agent doesn\u2019t save you the commission\u2014it gives the seller\u2019s agent dual representation and removes your advocate from the negotiation. Kayden\u2019s negotiation discipline alone typically saves 3\u20137% on purchase price\u2014often $25K\u2013$100K on luxury properties. The service pays for itself and then some." },
          ].map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className="mb-12">
                <h3 className="font-serif text-xl md:text-2xl text-[#1a1a2e] mb-4 font-light">{item.q}</h3>
                <p className="text-base md:text-lg leading-relaxed text-[#555]">{item.a}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#FAF8F5] py-28 md:py-36 lg:py-44">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light mb-6">
              Book Your Relocation Strategy Call
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-[#555] mb-10">
              Your next step: a 30-minute call to walk through your tax scenario, your school priorities, and your neighborhood criteria. No pitch. Just numbers and a clear plan.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block px-10 py-4 bg-[#c9a84c] text-white text-sm tracking-[0.1em] uppercase font-semibold hover:bg-[#d4b96a] transition-all duration-300">
                Book Your Relocation Strategy Call
              </Link>
              <Link href="/calculator" className="inline-block px-10 py-4 border border-[#1a1a2e] text-[#1a1a2e] text-sm tracking-[0.1em] uppercase font-semibold hover:bg-white transition-all duration-300">
                Or Run Your Numbers First
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
