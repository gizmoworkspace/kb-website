"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(".services-hero-title", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" })
        .fromTo(".services-hero-sub", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6")
        .fromTo(".services-hero-cta", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5");

      gsap.utils.toArray<HTMLElement>(".reveal-block").forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, x: i % 2 === 0 ? -50 : 50 }, {
          opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".phase-item").forEach((el) => {
        const stl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 80%" } });
        stl.fromTo(el.querySelector(".phase-marker"), { scaleY: 0 }, { scaleY: 1, duration: 0.5, ease: "power2.out", transformOrigin: "top" });
        stl.fromTo(el.querySelector(".phase-content"), { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.2");
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-navy-dark">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=1920&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/85 via-navy/75 to-navy-dark" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-32">
          <h1 className="services-hero-title font-serif display-xl text-white mb-6 opacity-0">
            From First Call to Country Club Introduction.{" "}
            <span className="text-gold">Every Step, Handled.</span>
          </h1>
          <p className="services-hero-sub text-lg text-gray-300/90 leading-relaxed mb-8 max-w-2xl opacity-0">
            Kayden&apos;s relocation advisory covers the entire lifecycle of your move: financial modeling, school district analysis, neighborhood matching, property acquisition, transaction execution, and post-close community integration. One agent. One relationship. Zero gaps.
          </p>
          <div className="services-hero-cta flex flex-col sm:flex-row gap-4 opacity-0">
            <Link href="/contact" className="inline-block px-8 py-4 bg-gold text-navy font-semibold text-sm tracking-[0.1em] uppercase hover:bg-gold-light transition-all duration-300 text-center">
              Book Your Relocation Strategy Call
            </Link>
            <Link href="/calculator" className="inline-block px-8 py-4 border border-white/20 text-white text-sm tracking-[0.1em] uppercase hover:bg-white/10 transition-all duration-300 text-center">
              Use the Charlotte Relocation Dividend Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            {["$50K–$150K+ typical annual savings", "60–90 day close timeline", "1–2 trips instead of 4–5", "12-month post-close support"].map((item, i) => (
              <span key={i} className="flex items-center gap-2"><span className="text-gold text-xs">✦</span> {item}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="clt-skyline-divider" />

      {/* AGITATION */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="reveal-block">
            <div className="section-divider mb-8" />
            <h2 className="font-serif display-lg text-white mb-8">What Relocation Usually Looks Like</h2>
          </div>
          <div className="reveal-block text-gray-300/80 leading-relaxed space-y-4">
            <p>
              Most families relocating to Charlotte from a coastal metro follow the same pattern. Browse Zillow from 800 miles away, overwhelmed by 3,000+ listings with zero context on which neighborhoods actually match your life. Fly in for two or three house-hunting trips, burning $3K–$5K per trip and seeing homes that were never going to work because no one asked the right questions first.
            </p>
            <p>
              Pick a neighborhood based on a blog post or a friend-of-a-friend&apos;s recommendation—then discover six months later the school feeder pattern doesn&apos;t work for your kids, the commute is 20 minutes longer than you were told, and the HOA has $40K in deferred maintenance assessments coming.
            </p>
            <p>
              Overpay by $30K–$80K because the listing agent could smell the coastal equity on you. Spend 12–18 months feeling like outsiders with no social network, no community connections, and kids who struggle to make friends.
            </p>
            <p>
              The financial arbitrage looked perfect on paper. But the execution left half of it on the table.
            </p>
          </div>
        </div>
      </section>

      {/* CROSSHEAD */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605429523419-d828acb941f7?w=1920&q=80')" }} />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center reveal-block">
          <h2 className="font-serif display-lg text-white">
            There&apos;s a Process That Captures the Full Arbitrage.{" "}
            <span className="text-gold">Financial, Educational, and Social.</span>
          </h2>
        </div>
      </section>

      {/* THE PROCESS */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="reveal-block text-center mb-20">
            <div className="section-divider mx-auto mb-8" />
            <h2 className="font-serif display-lg text-white">The Process</h2>
          </div>

          <div className="space-y-16">
            {[
              { phase: "Phase 1: Financial Clarity", title: "Custom Financial Arbitrage Report", text: "Before you look at a single property, Kayden builds a side-by-side financial comparison: your current metro versus Charlotte across state income tax, property tax, housing costs, insurance, private school tuition, and discretionary spending. The output is a concrete dollar figure—your exact annual savings and a 10-year wealth projection. So that the move shifts from \"we think this is a good idea\" to \"we're leaving $180K per year on the table if we don't do this.\"", note: "This is the Charlotte Relocation Dividend Calculator in a done-for-you format." },
              { phase: "Phase 2: Lifestyle Mapping", title: "Neighborhood + School District Deep-Dive", text: "Kayden conducts a detailed lifestyle audit: your current commute, your children's academic and extracurricular priorities, your spouse's social and professional needs, your weekend patterns, your dining and recreation preferences, and your proximity requirements. This maps to 2–3 Charlotte micro-markets that match how you actually live—not how a Zillow filter guesses you live.", text2: "School feeder patterns are analyzed at the elementary-through-high-school level, factoring in magnet programs, AP/IB course offerings, and athletics. Every neighborhood on your shortlist passes the school test first. So that you don't discover a rezoning issue six months after closing." },
              { phase: "Phase 3: Curated Search + Acquisition", title: "Pre-Screened Properties, Productive Trips", text: "Kayden pre-screens all available inventory, eliminates non-starters, and sends curated shortlists with video walkthroughs and written neighborhood context. Your first in-person visit is productive: five to seven homes in pre-validated neighborhoods, each meeting your financial, educational, and lifestyle criteria. So that you close in 60–90 days with 1–2 trips instead of the typical 4–6 month, 4–5 trip relocation timeline.", text2: "When you're ready to make an offer, Kayden's micro-market pricing intelligence protects you from the \"coastal equity premium\"—the markup that listing agents apply when they see a Manhattan address on the offer. Typical negotiation savings: 3–7% on purchase price, often $25K–$100K on luxury properties." },
              { phase: "Phase 4: Transaction Execution", title: "Direct Communication, Zero Gaps", text: "From offer acceptance through closing, you get Kayden directly. Not a transaction coordinator. Not a junior associate. Not an automated email sequence. Direct cell access, proactive updates at every stage, and honest assessments of every inspection finding, appraisal result, and negotiation point. So that a $1M+ purchase is managed with the same rigor and transparency you expect from every other professional relationship in your life." },
              { phase: "Phase 5: Community Integration", title: "First 100 Days Program", text: "The transaction closes. Most agents disappear. Kayden's relationship extends 12 months past the closing date. The First 100 Days Integration Program delivers curated introductions to country club membership directors, local wealth advisors, pediatricians, school administrators, parent groups, professional networks, charity boards, and social organizations—matched to your family's specific interests and background. So that your family has a genuine social foundation within the first quarter, not the first year.", text2: "Relocation logistics—vetted movers, short-term housing, storage, spouse employment resources, medical and school enrollment guidance—are coordinated directly. The 47 logistical tasks that make relocation miserable are handled by someone who treats your move like his top priority." },
            ].map((phase, i) => (
              <div key={i} className="phase-item flex gap-6 lg:gap-10">
                <div className="flex-shrink-0">
                  <div className="phase-marker w-1 h-full bg-gradient-to-b from-gold to-gold/10 rounded-full" />
                </div>
                <div className="phase-content pb-4">
                  <p className="text-xs text-gold font-semibold tracking-[0.2em] uppercase mb-3 font-sans">{phase.phase}</p>
                  <h3 className="font-serif text-2xl text-white mb-4">{phase.title}</h3>
                  <p className="text-gray-300/80 leading-relaxed">{phase.text}</p>
                  {phase.text2 && <p className="text-gray-300/80 leading-relaxed mt-4">{phase.text2}</p>}
                  {phase.note && <p className="text-sm text-gold/70 italic mt-3">{phase.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE DELIVERED */}
      <section className="section-mid py-20 lg:py-28">
        <div className="reveal-block max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="font-serif display-lg text-white mb-8">Value Delivered</h2>
          <div className="glass rounded-lg p-10">
            <p className="text-3xl font-serif text-white mb-2">Total Component Value: <span className="text-gold">$11,750+</span></p>
            <p className="text-2xl font-serif text-white mb-6">Your Cost: <span className="text-gold">$0 Upfront</span></p>
            <p className="text-gray-300/80 leading-relaxed">
              Commission-based. Earned only upon a successful close on a home you chose with complete information. No advisory fees. No retainers. Every component above is bundled into the transaction.
            </p>
          </div>
        </div>
      </section>

      {/* SWITCH */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="reveal-block">
            <div className="section-divider mb-8" />
            <h2 className="font-serif display-lg text-white mb-12">What Most Relocators Try First</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: "Zillow/Redfin Remote Browsing", text: "No contextual intelligence. Every listing looks the same when you don't know the micro-markets. Leads to wasted trips and bad neighborhood decisions." },
              { title: "Generic Agent Referral (from Your Origin-City Agent)", text: "The referred agent treats you like any local buyer. No relocation expertise. No lifestyle mapping. No school matching. No community integration." },
              { title: "Corporate Relocation Package", text: "Usually limited to a lump-sum payment and a random agent from a referral network. No personalization, no school analysis, no social integration." },
              { title: "DIY Research via Blogs and Forums", text: "Outdated, biased, and missing the micro-level detail that determines whether a neighborhood is the right fit. Subreddit advice is not a strategy." },
              { title: "Visiting on Vacation and Driving Around", text: "Tourists see the surface. They don't understand feeder patterns, HOA politics, new construction timelines, builder reputations, or which streets flood." },
            ].map((item, i) => (
              <div key={i} className="reveal-block glass rounded-lg p-6">
                <h4 className="font-serif text-lg text-white mb-3">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="reveal-block glass rounded-lg p-10 border-gold/20">
            <h3 className="font-serif text-2xl text-gold mb-4">What&apos;s Different with Kayden</h3>
            <p className="text-gray-300/80 leading-relaxed">
              Every failed approach above shares the same gap: no one translates your current lifestyle into the correct Charlotte analog. Kayden&apos;s process closes that gap. The financial modeling comes before the search. The school analysis comes before the neighborhood. The community integration comes after the close. Nothing is left to chance, and nothing is left to Zillow.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-mid py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10">
          <div className="reveal-block glass rounded-lg p-8">
            <h3 className="font-serif text-lg text-gold mb-4">&quot;We can find a house on our own—we&apos;ve bought before.&quot;</h3>
            <p className="text-gray-300/80 leading-relaxed">
              Buying a home in a market you&apos;ve never lived in is a fundamentally different transaction. The risk isn&apos;t finding a house—it&apos;s finding the right neighborhood, the right school zone, and the right community match. That&apos;s the part you can&apos;t Google.
            </p>
          </div>
          <div className="reveal-block glass rounded-lg p-8">
            <h3 className="font-serif text-lg text-gold mb-4">&quot;We can&apos;t justify the cost of a buyer&apos;s agent.&quot;</h3>
            <p className="text-gray-300/80 leading-relaxed">
              Going direct to the listing agent doesn&apos;t save you the commission—it gives the seller&apos;s agent dual representation and removes your advocate from the negotiation. Kayden&apos;s negotiation discipline alone typically saves 3–7% on purchase price—often $25K–$100K on luxury properties. The service pays for itself and then some.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 lg:py-32">
        <div className="reveal-block max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="font-serif display-lg text-white mb-6">Book Your Relocation Strategy Call</h2>
          <p className="text-gray-300/80 leading-relaxed mb-8">
            Your next step: a 30-minute call to walk through your tax scenario, your school priorities, and your neighborhood criteria. No pitch. Just numbers and a clear plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 py-4 bg-gold text-navy font-semibold text-sm tracking-[0.1em] uppercase hover:bg-gold-light transition-all duration-300">
              Book Your Relocation Strategy Call
            </Link>
            <Link href="/calculator" className="px-10 py-4 border border-white/20 text-white text-sm tracking-[0.1em] uppercase hover:bg-white/10 transition-all duration-300">
              Or Run Your Numbers First in the Calculator
            </Link>
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </div>
  );
}
