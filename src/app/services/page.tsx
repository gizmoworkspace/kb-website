"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="bg-navy text-white py-20 lg:py-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-4xl mx-auto px-6 lg:px-8"
        >
          <motion.h1
            variants={fadeIn}
            className="font-serif text-4xl md:text-5xl leading-tight mb-6"
          >
            From First Call to Country Club Introduction.{" "}
            <span className="text-gold">Every Step, Handled.</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
            Kayden&apos;s relocation advisory covers the entire lifecycle of your move: financial modeling, school district analysis, neighborhood matching, property acquisition, transaction execution, and post-close community integration. One agent. One relationship. Zero gaps.
          </motion.p>
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gold text-navy font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors text-center"
            >
              Book Your Relocation Strategy Call
            </Link>
            <Link
              href="/calculator"
              className="inline-block px-8 py-4 border border-gold/40 text-gold text-sm tracking-wide hover:bg-gold/10 transition-colors text-center"
            >
              Use the Charlotte Relocation Dividend Calculator
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-cream border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-charcoal">
            <span>✓ $50K–$150K+ typical annual savings</span>
            <span>✓ 60–90 day close timeline</span>
            <span>✓ 1–2 trips instead of 4–5</span>
            <span>✓ 12-month post-close support</span>
          </div>
        </div>
      </section>

      {/* AGITATION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-28"
      >
        <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-4xl text-navy mb-8">
          What Relocation Usually Looks Like
        </motion.h2>
        <motion.div variants={fadeIn} className="text-charcoal leading-relaxed space-y-4">
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
        </motion.div>
      </motion.section>

      {/* CROSSHEAD */}
      <section className="bg-navy text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="font-serif text-3xl md:text-4xl"
          >
            There&apos;s a Process That Captures the Full Arbitrage.{" "}
            <span className="text-gold">Financial, Educational, and Social.</span>
          </motion.h2>
        </div>
      </section>

      {/* THE PROCESS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-28"
      >
        <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-4xl text-navy mb-16 text-center">
          The Process
        </motion.h2>

        <div className="space-y-20">
          {[
            {
              phase: "Phase 1: Financial Clarity",
              title: "Custom Financial Arbitrage Report",
              text: "Before you look at a single property, Kayden builds a side-by-side financial comparison: your current metro versus Charlotte across state income tax, property tax, housing costs, insurance, private school tuition, and discretionary spending. The output is a concrete dollar figure—your exact annual savings and a 10-year wealth projection. So that the move shifts from \"we think this is a good idea\" to \"we're leaving $180K per year on the table if we don't do this.\"",
              note: "This is the Charlotte Relocation Dividend Calculator in a done-for-you format.",
            },
            {
              phase: "Phase 2: Lifestyle Mapping",
              title: "Neighborhood + School District Deep-Dive",
              text: "Kayden conducts a detailed lifestyle audit: your current commute, your children's academic and extracurricular priorities, your spouse's social and professional needs, your weekend patterns, your dining and recreation preferences, and your proximity requirements. This maps to 2–3 Charlotte micro-markets that match how you actually live—not how a Zillow filter guesses you live.",
              text2: "School feeder patterns are analyzed at the elementary-through-high-school level, factoring in magnet programs, AP/IB course offerings, and athletics. Every neighborhood on your shortlist passes the school test first. So that you don't discover a rezoning issue six months after closing.",
            },
            {
              phase: "Phase 3: Curated Search + Acquisition",
              title: "Pre-Screened Properties, Productive Trips",
              text: "Kayden pre-screens all available inventory, eliminates non-starters, and sends curated shortlists with video walkthroughs and written neighborhood context. Your first in-person visit is productive: five to seven homes in pre-validated neighborhoods, each meeting your financial, educational, and lifestyle criteria. So that you close in 60–90 days with 1–2 trips instead of the typical 4–6 month, 4–5 trip relocation timeline.",
              text2: "When you're ready to make an offer, Kayden's micro-market pricing intelligence protects you from the \"coastal equity premium\"—the markup that listing agents apply when they see a Manhattan address on the offer. Typical negotiation savings: 3–7% on purchase price, often $25K–$100K on luxury properties.",
            },
            {
              phase: "Phase 4: Transaction Execution",
              title: "Direct Communication, Zero Gaps",
              text: "From offer acceptance through closing, you get Kayden directly. Not a transaction coordinator. Not a junior associate. Not an automated email sequence. Direct cell access, proactive updates at every stage, and honest assessments of every inspection finding, appraisal result, and negotiation point. So that a $1M+ purchase is managed with the same rigor and transparency you expect from every other professional relationship in your life.",
            },
            {
              phase: "Phase 5: Community Integration",
              title: "First 100 Days Program",
              text: "The transaction closes. Most agents disappear. Kayden's relationship extends 12 months past the closing date. The First 100 Days Integration Program delivers curated introductions to country club membership directors, local wealth advisors, pediatricians, school administrators, parent groups, professional networks, charity boards, and social organizations—matched to your family's specific interests and background. So that your family has a genuine social foundation within the first quarter, not the first year.",
              text2: "Relocation logistics—vetted movers, short-term housing, storage, spouse employment resources, medical and school enrollment guidance—are coordinated directly. The 47 logistical tasks that make relocation miserable are handled by someone who treats your move like his top priority.",
            },
          ].map((phase, i) => (
            <motion.div key={i} variants={fadeIn} className="border-l-4 border-gold pl-8">
              <p className="text-sm text-gold font-semibold tracking-wide uppercase mb-2">{phase.phase}</p>
              <h3 className="font-serif text-2xl text-navy mb-4">{phase.title}</h3>
              <p className="text-charcoal leading-relaxed">{phase.text}</p>
              {phase.text2 && <p className="text-charcoal leading-relaxed mt-4">{phase.text2}</p>}
              {phase.note && <p className="text-sm text-slate italic mt-3">{phase.note}</p>}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* VALUE DELIVERED */}
      <section className="bg-cream py-20 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-3xl mx-auto px-6 lg:px-8 text-center"
        >
          <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-4xl text-navy mb-8">
            Value Delivered
          </motion.h2>
          <motion.div variants={fadeIn} className="bg-white p-10 border border-gray-100">
            <p className="text-3xl font-serif text-navy mb-2">Total Component Value: <span className="text-gold">$11,750+</span></p>
            <p className="text-2xl font-serif text-navy mb-6">Your Cost: <span className="text-gold">$0 Upfront</span></p>
            <p className="text-charcoal leading-relaxed">
              Commission-based. Earned only upon a successful close on a home you chose with complete information. No advisory fees. No retainers. Every component above is bundled into the transaction.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* SWITCH */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-28"
      >
        <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-4xl text-navy mb-12">
          What Most Relocators Try First
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "Zillow/Redfin Remote Browsing",
              text: "No contextual intelligence. Every listing looks the same when you don't know the micro-markets. Leads to wasted trips and bad neighborhood decisions.",
            },
            {
              title: "Generic Agent Referral (from Your Origin-City Agent)",
              text: "The referred agent treats you like any local buyer. No relocation expertise. No lifestyle mapping. No school matching. No community integration.",
            },
            {
              title: "Corporate Relocation Package",
              text: "Usually limited to a lump-sum payment and a random agent from a referral network. No personalization, no school analysis, no social integration.",
            },
            {
              title: "DIY Research via Blogs and Forums",
              text: "Outdated, biased, and missing the micro-level detail that determines whether a neighborhood is the right fit. Subreddit advice is not a strategy.",
            },
            {
              title: "Visiting on Vacation and Driving Around",
              text: "Tourists see the surface. They don't understand feeder patterns, HOA politics, new construction timelines, builder reputations, or which streets flood.",
            },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeIn} className="p-6 bg-cream border border-gray-200">
              <h4 className="font-serif text-lg text-navy mb-2">{item.title}</h4>
              <p className="text-sm text-charcoal leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn} className="bg-navy text-white p-10">
          <h3 className="font-serif text-2xl text-gold mb-4">What&apos;s Different with Kayden</h3>
          <p className="text-gray-300 leading-relaxed">
            Every failed approach above shares the same gap: no one translates your current lifestyle into the correct Charlotte analog. Kayden&apos;s process closes that gap. The financial modeling comes before the search. The school analysis comes before the neighborhood. The community integration comes after the close. Nothing is left to chance, and nothing is left to Zillow.
          </p>
        </motion.div>
      </motion.section>

      {/* CLOSE — FAQs */}
      <section className="bg-cream py-20 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-4xl mx-auto px-6 lg:px-8"
        >
          <div className="space-y-10">
            <motion.div variants={fadeIn}>
              <h3 className="font-serif text-lg text-navy mb-3">&quot;We can find a house on our own—we&apos;ve bought before.&quot;</h3>
              <p className="text-charcoal leading-relaxed">
                Buying a home in a market you&apos;ve never lived in is a fundamentally different transaction. The risk isn&apos;t finding a house—it&apos;s finding the right neighborhood, the right school zone, and the right community match. That&apos;s the part you can&apos;t Google.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h3 className="font-serif text-lg text-navy mb-3">&quot;We can&apos;t justify the cost of a buyer&apos;s agent.&quot;</h3>
              <p className="text-charcoal leading-relaxed">
                Going direct to the listing agent doesn&apos;t save you the commission—it gives the seller&apos;s agent dual representation and removes your advocate from the negotiation. Kayden&apos;s negotiation discipline alone typically saves 3–7% on purchase price—often $25K–$100K on luxury properties. The service pays for itself and then some.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy text-white py-20 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-3xl mx-auto px-6 lg:px-8 text-center"
        >
          <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-4xl mb-6">
            Book Your Relocation Strategy Call
          </motion.h2>
          <motion.p variants={fadeIn} className="text-gray-300 leading-relaxed mb-8">
            Your next step: a 30-minute call to walk through your tax scenario, your school priorities, and your neighborhood criteria. No pitch. Just numbers and a clear plan.
          </motion.p>
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-gold text-navy font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
            >
              Book Your Relocation Strategy Call
            </Link>
            <Link
              href="/calculator"
              className="px-10 py-4 border border-gold/40 text-gold text-sm tracking-wide hover:bg-gold/10 transition-colors"
            >
              Or Run Your Numbers First in the Calculator
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <div className="h-16 lg:hidden" />
    </div>
  );
}
