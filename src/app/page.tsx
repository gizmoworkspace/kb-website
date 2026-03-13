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

export default function Home() {
  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="relative bg-navy text-white min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy opacity-90" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeIn}
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
            >
              Your $350K Salary Should Feel Like $350K.{" "}
              <span className="text-gold">Charlotte Makes the Math Work.</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl"
            >
              You built the career, earned the income, did everything right. Your state took half of it anyway. Charlotte&apos;s flat 3.99% tax rate, top-ranked public schools, and luxury homes at 40–60% below coastal prices give your family the financial freedom and lifestyle quality the Northeast promised but never delivered.
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
                Run Your Numbers in the Calculator
              </Link>
            </motion.div>
            <motion.p variants={fadeIn} className="mt-4 text-sm text-gray-400">
              30 minutes. No pitch. Just your numbers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-cream border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-charcoal">
            <span>✓ Licensed North Carolina Broker</span>
            <span>✓ INNOVATE Real Estate — #1 Non-Franchised Brokerage, East Coast</span>
            <span>✓ Agent Equity Owner — Skin in the Game</span>
            <span>✓ Multi-State MLS Access — 10 States</span>
            <span>✓ Direct Cell. No Gatekeepers. No Hand-Offs.</span>
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
        <motion.h2
          variants={fadeIn}
          className="font-serif text-3xl md:text-4xl text-navy mb-12 leading-tight"
        >
          You Earned $400K. Your State Took $172K Before You Bought Groceries.
        </motion.h2>

        <motion.div variants={fadeIn} className="space-y-8 text-charcoal leading-relaxed">
          <div>
            <h3 className="font-serif text-xl text-navy mb-3">The Problem</h3>
            <p>
              You&apos;re earning $350K–$400K and saving $800 a month. You know the math doesn&apos;t work. Your state takes 10.9–13.3% off the top before you see a dollar. Property taxes on your four-bedroom: $30K–$50K. Two kids in private school: $90K. You&apos;re not bad with money. You&apos;re in a bad jurisdiction.
            </p>
            <p className="mt-4">
              The usual advice: budget harder. Cut the vacations. Refinance. You&apos;ve done all of it. No spreadsheet fixes a 13.3% state income tax plus $45K-per-seat private school tuition plus property taxes that rival a second mortgage.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl text-navy mb-3">The Symptoms</h3>
            <p>
              You feel embarrassed telling anyone you&apos;re stressed about money at this income level. You can&apos;t complain because objectively you&apos;re &quot;wealthy.&quot; You&apos;re working exclusively to cover carrying costs—not to build wealth, not to enjoy your life. Three-quarters of every paycheck is gone before it hits your brokerage account.
            </p>
            <p className="mt-4">
              Your home office is a converted closet. Your backyard is a patio. Your commute is 90 minutes each way. You earn more than your parents ever did, and you have less to show for it.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl text-navy mb-3">The Cost</h3>
            <p>
              Every year you stay is another $87K–$150K in avoidable tax burden, tuition, and cost-of-living premium. Over a decade, that&apos;s $1.5M+ in wealth that never compounds. That&apos;s not a budgeting problem. That&apos;s a geography problem.
            </p>
          </div>

          <blockquote className="border-l-4 border-gold pl-6 italic text-slate">
            &quot;It feels like at the end of the month, after all our expenses, that it&apos;s still difficult to save any substantial amount of money… it feels like 3/4 of the money is already gone.&quot; — r/HENRYfinance
          </blockquote>
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
            className="font-serif text-3xl md:text-4xl leading-tight"
          >
            The Problem Isn&apos;t Discipline. It&apos;s Geography.
            <br />
            <span className="text-gold">And the Solution Has a Flat 3.99% Tax Rate.</span>
          </motion.h2>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-28"
      >
        <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-4xl text-navy mb-16 text-center">
          Your Relocation, Engineered from Tax Code to Country Club.
        </motion.h2>

        <div className="space-y-16">
          {[
            {
              num: "1",
              title: "Tax Arbitrage Consultation",
              desc: "Your move starts with a personalized financial model—not a neighborhood tour. You'll see the exact dollar figure your family recaptures annually from state income tax reduction, property tax savings, and private school tuition elimination. Not a range. Not an estimate. Your number. So that you make the decision based on math, not emotion.",
              note: "NC flat 3.99% vs. NY 10.9%, NJ 10.75%, CA 13.3%. Typical recapture: $50K–$150K+ annually.",
            },
            {
              num: "2",
              title: "School District Mapping",
              desc: "Your children's education isn't a line item to cut—it's the reason you're paying $45K–$90K per year right now. Kayden maps your kids' academic priorities, extracurricular needs, and social preferences to specific school feeder patterns—elementary through high school. So that you enroll in Weddington, Marvin Ridge, or Ardrey Kell with confidence that the rigor matches the private academy you're leaving behind.",
              note: "Weddington, Marvin Ridge, Ardrey Kell: top 20 statewide. Union County: top 5% of NC.",
            },
            {
              num: "3",
              title: "Lifestyle-First Neighborhood Matching",
              desc: "Most agents start with the MLS. Kayden starts with your life. Before a single property is shown, your commute patterns, weekend habits, dining preferences, peer community needs, and trailing spouse priorities are mapped to 2–3 Charlotte micro-markets. So that you avoid the catastrophic mistake of choosing the wrong neighborhood—wrong commute, wrong micro-culture, wrong school zone—and paying to move twice.",
            },
            {
              num: "4",
              title: "Curated Home Search with Virtual Pre-Tours",
              desc: "You're 800 miles away. Every trip costs $3K–$5K and a weekend you don't have. Kayden pre-screens all inventory, eliminates non-starters, and sends curated shortlists with video walkthroughs and written neighborhood context. So that your first in-person visit is productive—five to seven homes that genuinely fit—instead of four wasted weekends touring properties that were never going to work.",
            },
            {
              num: "5",
              title: "Radical Transparency Communication",
              desc: "No disappearing for three days. No vague \"things are moving along\" updates. No hand-offs to a junior associate who doesn't know your file. Kayden tells you exactly what's happening, what to expect, and what your options are—at every stage. So that you manage this decision the way you manage every other high-stakes decision in your professional life: with complete information, delivered directly, on your timeline.",
            },
            {
              num: "6",
              title: "First 100 Days Integration Program",
              desc: "The transaction closes. Most agents disappear. Kayden's relationship extends 12 months past closing. You get curated introductions to country club membership directors, local wealth advisors, pediatricians, school administrators, parent groups, professional networks, and social organizations. So that your family builds a genuine social infrastructure in 90 days instead of spending 18 months feeling like outsiders.",
            },
          ].map((step) => (
            <motion.div key={step.num} variants={fadeIn} className="flex gap-6 lg:gap-10">
              <div className="flex-shrink-0 w-12 h-12 bg-navy text-gold flex items-center justify-center font-serif text-xl">
                {step.num}
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">{step.title}</h3>
                <p className="text-charcoal leading-relaxed">{step.desc}</p>
                {step.note && (
                  <p className="mt-3 text-sm text-slate italic">{step.note}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* DEEP PROOF */}
      <section className="bg-cream py-20 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-5xl mx-auto px-6 lg:px-8"
        >
          <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-4xl text-navy mb-16 text-center">
            The Numbers. Verified. Cited. Run Them Yourself.
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tax Arbitrage",
                text: "North Carolina's flat 3.99% state income tax rate vs. New York (10.9%), California (13.3%), New Jersey (10.75%), and D.C. (10.75%). No state estate tax. A $350K-income household typically recaptures $50K–$150K+ annually from the tax delta alone.",
              },
              {
                title: "Housing",
                text: "Charlotte luxury median sale price: $1.4M vs. $2.5M+ (NYC metro), $3.2M+ (LA), $2.1M+ (D.C.). The same mortgage payment buys 2–3x the home. Luxury properties have appreciated 121% over the past decade and still trade at a 40–60% discount to coastal equivalents.",
              },
              {
                title: "Schools",
                text: "Weddington High, Marvin Ridge, and Ardrey Kell consistently rank top 20 statewide. Union County and South Charlotte school districts rank in the top 5% of North Carolina. AP and IB programs rival the private academies charging $45K–$48K per seat.",
              },
              {
                title: "Jobs",
                text: "Charlotte MSA added 37,600 nonfarm payroll jobs in 2025—the highest job growth rate (2.7%) among all major U.S. metros. Charlotte is the second-largest U.S. banking center. Bank of America, Wells Fargo, and Truist are headquartered here.",
              },
              {
                title: "Connectivity",
                text: "CLT Airport: 191 nonstop destinations. Your parents in New York are a 90-minute flight. Your former colleagues in D.C. are 75 minutes. Your legacy network doesn't disappear.",
              },
              {
                title: "Growth",
                text: "157 new residents move to Charlotte daily. Charlotte has been the #1 net in-migration metro in the U.S. for three consecutive years.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeIn}
                className="bg-white p-8 border border-gray-100"
              >
                <h3 className="font-serif text-lg text-navy mb-3">{item.title}</h3>
                <p className="text-sm text-charcoal leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p variants={fadeIn} className="mt-8 text-center text-xs text-slate">
            All data verifiable. Sources: IRS migration data, U.S. Census, Charlotte Regional Business Alliance, U.S. News school rankings, CLT Airport authority.
          </motion.p>
        </motion.div>
      </section>

      {/* SWITCH — WHY THIS AGENT */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-28"
      >
        <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-4xl text-navy mb-8">
          What Changes When the Geography Changes.
        </motion.h2>
        <motion.div variants={fadeIn} className="text-charcoal leading-relaxed space-y-4">
          <p>
            You&apos;ve seen agents who push quick sales because they&apos;re juggling 40 transactions and need yours off the desk. You&apos;ve experienced communication blackouts, hand-offs to junior staff, and properties shown that blatantly ignored what you asked for. You&apos;ve worked with agents who couldn&apos;t discuss a jumbo loan structure, a 1031 exchange, or an LLC purchase—and you realized they were salespeople, not advisors.
          </p>
          <p>
            Kayden operates differently. Every client gets direct cell access—no gatekeepers, no assistants screening calls. The financial arbitrage report comes before a single showing. The lifestyle mapping comes before the MLS search. And if a property doesn&apos;t serve your long-term wealth, he&apos;ll tell you not to buy it—even when it costs him the commission.
          </p>
        </motion.div>
      </motion.section>

      {/* CLOSE — FAQs */}
      <section className="bg-navy text-white py-20 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-4xl mx-auto px-6 lg:px-8"
        >
          <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-4xl mb-12">
            Your Questions. Answered Directly.
          </motion.h2>

          <div className="space-y-10">
            {[
              {
                q: "\"Will the public schools actually compare to our Northeast private academy?\"",
                a: "Weddington, Marvin Ridge, and Ardrey Kell rank top 20 statewide and offer AP/IB programs that match or exceed what you're paying $45K–$48K per year to access. Union County has a documented valedictorian culture driven by the same highly-educated transplant families you'd be joining. Kayden's school feeder analysis maps your children's specific needs to the right zone—before a single home is shown.",
              },
              {
                q: "\"Will we fit in culturally? Is Charlotte too conservative?\"",
                a: "Charlotte receives 157 new residents daily. South Charlotte and Lake Norman neighborhoods are populated heavily by former New Yorkers, Californians, and Chicagoans—creating highly-educated, moderate, globally-minded micro-communities. Your neighbors are the same doctors, executives, and attorneys who left the same cities you did.",
              },
              {
                q: "\"Is the market too hot? Are we buying at the peak?\"",
                a: "Charlotte luxury properties have appreciated 121% over the past decade yet still trade at a 40–60% discount to coastal equivalents. Charlotte is in its growth phase: second-largest banking center, 37,600 jobs added in 2025, corporate relocation pipeline showing no sign of slowing. This is a value play backed by structural economic drivers, not speculative pricing.",
              },
              {
                q: "\"We'll miss the energy and feel isolated.\"",
                a: "Charlotte's country club and community infrastructure is specifically designed to integrate affluent transplants. Carmel Country Club, Myers Park Country Club, Providence Country Club, and the Lake Norman yacht clubs function as ready-made social ecosystems. Kayden's First 100 Days program delivers curated introductions so your family has a social foundation within the first quarter—not the first year.",
              },
              {
                q: "\"I don't want soulless suburban sprawl.\"",
                a: "Myers Park offers tree-lined streets, historic architecture, and walkable boutique districts. Eastover delivers quiet, understated luxury minutes from Uptown. Lake Norman is resort-caliber waterfront. Charlotte is not a replacement for Manhattan. It's an unmatched home base—and the $50K–$150K you save annually funds the travel, dining, and experiences you want on your terms.",
              },
            ].map((faq, i) => (
              <motion.div key={i} variants={fadeIn}>
                <h3 className="font-serif text-lg text-gold mb-3">{faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeIn} className="mt-16 p-8 border border-gold/20 bg-white/5">
            <h3 className="font-serif text-lg text-gold mb-3">Risk Reversal</h3>
            <p className="text-gray-300 leading-relaxed">
              Kayden&apos;s advisory operates on a fiduciary principle: if a property doesn&apos;t meet stringent investment and lifestyle criteria, he advises you to walk away—even at the cost of his commission. You pay nothing upfront. Commission is earned only upon a successful close. You get 12 months of post-close support.
            </p>
          </motion.div>

          <motion.p variants={fadeIn} className="mt-8 text-gray-400 leading-relaxed">
            Every year you stay in a high-tax coastal metro is another $87K–$150K in wealth that doesn&apos;t compound. Over the next decade, that gap becomes $1.5M+. The question isn&apos;t whether Charlotte works financially—the math is settled. The question is how long you&apos;ll wait before you run your own numbers.
          </motion.p>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-3xl mx-auto px-6 lg:px-8 text-center"
        >
          <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-4xl text-navy mb-6">
            Book Your Relocation Strategy Call
          </motion.h2>
          <motion.p variants={fadeIn} className="text-charcoal leading-relaxed mb-8">
            30 minutes. No pitch. No obligation. Walk through your tax scenario, school priorities, and neighborhood criteria with Kayden directly. If Charlotte fits, you leave with a clear next step. If it doesn&apos;t, you have the data to confirm you&apos;re in the right place already.
          </motion.p>
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-navy text-white font-semibold text-sm tracking-wide hover:bg-navy-light transition-colors"
            >
              Book Your Relocation Strategy Call
            </Link>
            <Link
              href="/calculator"
              className="px-10 py-4 border border-navy text-navy text-sm tracking-wide hover:bg-navy hover:text-white transition-colors"
            >
              Not Ready to Talk? Run Your Numbers First.
            </Link>
          </motion.div>
          <motion.p variants={fadeIn} className="mt-4 text-sm text-slate">
            90 seconds. See your exact annual savings.
          </motion.p>

          <motion.div variants={fadeIn} className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-charcoal">
            <span>✓ 157 new residents daily</span>
            <span>✓ 3.99% flat state tax</span>
            <span>✓ 191 nonstop CLT flights</span>
            <span>✓ 37,600 jobs added in 2025</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Bottom padding for mobile CTA */}
      <div className="h-16 lg:hidden" />
    </div>
  );
}
