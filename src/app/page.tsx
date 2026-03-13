"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Will the public schools actually compare to our Northeast private academy?",
      a: "Weddington, Marvin Ridge, and Ardrey Kell rank top 20 statewide and offer AP/IB programs that match or exceed what you\u2019re paying $45K\u2013$48K per year to access. Union County has a documented valedictorian culture driven by the same highly-educated transplant families you\u2019d be joining. Kayden\u2019s school feeder analysis maps your children\u2019s specific needs to the right zone\u2014before a single home is shown.",
    },
    {
      q: "Will we fit in culturally? Is Charlotte too conservative?",
      a: "Charlotte receives 157 new residents daily. South Charlotte and Lake Norman neighborhoods are populated heavily by former New Yorkers, Californians, and Chicagoans\u2014creating highly-educated, moderate, globally-minded micro-communities. Your neighbors are the same doctors, executives, and attorneys who left the same cities you did.",
    },
    {
      q: "Is the market too hot? Are we buying at the peak?",
      a: "Charlotte luxury properties have appreciated 121% over the past decade yet still trade at a 40\u201360% discount to coastal equivalents. Charlotte is in its growth phase: second-largest banking center, 37,600 jobs added in 2025, corporate relocation pipeline showing no sign of slowing. This is a value play backed by structural economic drivers, not speculative pricing.",
    },
    {
      q: "We\u2019ll miss the energy and feel isolated.",
      a: "Charlotte\u2019s country club and community infrastructure is specifically designed to integrate affluent transplants. Carmel Country Club, Myers Park Country Club, Providence Country Club, and the Lake Norman yacht clubs function as ready-made social ecosystems. Kayden\u2019s First 100 Days program delivers curated introductions so your family has a social foundation within the first quarter\u2014not the first year.",
    },
    {
      q: "I don\u2019t want soulless suburban sprawl.",
      a: "Myers Park offers tree-lined streets, historic architecture, and walkable boutique districts. Eastover delivers quiet, understated luxury minutes from Uptown. Lake Norman is resort-caliber waterfront. Charlotte is not a replacement for Manhattan. It\u2019s an unmatched home base\u2014and the $50K\u2013$150K you save annually funds the travel, dining, and experiences you want on your terms.",
    },
  ];

  return (
    <div>
      {/* ============ HERO ============ */}
      <section className="relative bg-navy min-h-[90vh] flex items-center overflow-hidden">
        {/* Background photo with gradient blend */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=1920&q=80)`,
          }}
        />
        {/* Left gradient fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #1a1a2e 0%, #1a1a2e 48%, rgba(26,26,46,0.92) 56%, rgba(26,26,46,0.7) 68%, rgba(26,26,46,0.35) 80%, transparent 95%)",
          }}
        />
        {/* Top/bottom edge fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #1a1a2e 0%, transparent 18%, transparent 82%, #1a1a2e 100%)",
          }}
        />

        {/* Ambient glows */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gold/[0.08] rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] bg-gold/[0.05] rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.15] text-white font-semibold hero-animate">
                Your $350K Salary Should Feel Like $350K.{" "}
                <span className="text-gold-light">
                  Charlotte Makes the Math Work.
                </span>
              </h1>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-white/60 max-w-xl font-body hero-animate hero-animate-delay-1">
                You built the career, earned the income, did everything right.
                Your state took half of it anyway. Charlotte&apos;s flat 3.99%
                tax rate, top-ranked public schools, and luxury homes at
                40&ndash;60% below coastal prices give your family the financial
                freedom the Northeast promised but never delivered.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 hero-animate hero-animate-delay-2">
                <Link href="/contact" className="btn-gold">
                  Book Your Strategy Call
                </Link>
                <Link href="/calculator" className="btn-outline">
                  Run Your Numbers
                </Link>
              </div>

              <p className="mt-4 text-xs text-white/30 font-body hero-animate hero-animate-delay-3">
                30 minutes. No pitch. Just your numbers.
              </p>
            </div>

            {/* Kayden headshot */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end hero-animate hero-animate-delay-3">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-gold/40 to-gold-dark/20 blur-sm" />
                <Image
                  src="/kayden-headshot.jpg"
                  alt="Kayden Benfield"
                  width={320}
                  height={320}
                  className="relative rounded-full object-cover w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 border-2 border-gold/30"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROOF BAR ============ */}
      <section className="bg-cream py-5 border-b border-warm-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-warm-600 font-body">
            <span>✓ Licensed NC Broker</span>
            <span>✓ INNOVATE Real Estate — #1 Non-Franchised, East Coast</span>
            <span>✓ Agent Equity Owner</span>
            <span>✓ Multi-State MLS — 10 States</span>
            <span>✓ Direct Cell. No Gatekeepers.</span>
          </div>
        </div>
      </section>

      {/* ============ AGITATION ============ */}
      <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.2] text-warm-950 font-semibold mb-10">
              You Earned $400K.{" "}
              <span className="text-gold">
                Your State Took $172K Before You Bought Groceries.
              </span>
            </h2>
          </AnimateOnScroll>

          <div className="max-w-3xl">
            <AnimateOnScroll delay={100}>
              <div className="mb-8">
                <p className="text-[11px] tracking-[0.15em] uppercase font-body font-semibold text-gold-dark mb-3">
                  The Problem
                </p>
                <p className="text-base md:text-[17px] leading-relaxed text-warm-700 font-body">
                  You&apos;re earning $350K&ndash;$400K and saving $800 a month.
                  You know the math doesn&apos;t work. Your state takes
                  10.9&ndash;13.3% off the top before you see a dollar. Property
                  taxes on your four-bedroom: $30K&ndash;$50K. Two kids in
                  private school: $90K. You&apos;re not bad with money.
                  You&apos;re in a bad jurisdiction.
                </p>
                <p className="text-base md:text-[17px] leading-relaxed text-warm-700 font-body mt-4">
                  The usual advice: budget harder. Cut the vacations. Refinance.
                  You&apos;ve done all of it. No spreadsheet fixes a 13.3% state
                  income tax plus $45K-per-seat private school tuition plus
                  property taxes that rival a second mortgage.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="mb-8">
                <p className="text-[11px] tracking-[0.15em] uppercase font-body font-semibold text-gold-dark mb-3">
                  The Symptoms
                </p>
                <p className="text-base md:text-[17px] leading-relaxed text-warm-700 font-body">
                  You feel embarrassed telling anyone you&apos;re stressed about
                  money at this income level. You can&apos;t complain because
                  objectively you&apos;re &ldquo;wealthy.&rdquo; You&apos;re
                  working exclusively to cover carrying costs&mdash;not to build
                  wealth, not to enjoy your life.
                </p>
                <p className="text-base md:text-[17px] leading-relaxed text-warm-700 font-body mt-4">
                  Your home office is a converted closet. Your backyard is a
                  patio. Your commute is 90 minutes each way. You earn more than
                  your parents ever did, and you have less to show for it.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="mb-8">
                <p className="text-[11px] tracking-[0.15em] uppercase font-body font-semibold text-gold-dark mb-3">
                  The Cost
                </p>
                <p className="text-base md:text-[17px] leading-relaxed text-warm-700 font-body">
                  Every year you stay is another $87K&ndash;$150K in avoidable
                  tax burden, tuition, and cost-of-living premium. Over a
                  decade, that&apos;s $1.5M+ in wealth that never compounds.
                  That&apos;s not a budgeting problem. That&apos;s a geography
                  problem.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <blockquote className="border-l-3 border-gold pl-6 py-2 text-warm-500 italic text-base font-body">
                &ldquo;It feels like at the end of the month, after all our
                expenses, that it&apos;s still difficult to save any substantial
                amount of money&hellip; it feels like 3/4 of the money is
                already gone.&rdquo;
                <span className="block mt-2 text-xs not-italic text-warm-400">
                  — r/HENRYfinance
                </span>
              </blockquote>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ============ CROSSHEAD ============ */}
      <section className="bg-navy py-16 md:py-24 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <AnimateOnScroll animation="scale-up">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.2] text-white font-semibold">
              The Problem Isn&apos;t Discipline. It&apos;s Geography.
            </h2>
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.2] text-gold-light mt-4">
              And the Solution Has a Flat 3.99% Tax Rate.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="bg-cream py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.2] text-warm-950 font-semibold text-center mb-16">
              Your Relocation,{" "}
              <span className="text-gold">Engineered from Tax Code to Country Club.</span>
            </h2>
          </AnimateOnScroll>

          <div className="space-y-12 md:space-y-16">
            {[
              {
                num: "01",
                title: "Tax Arbitrage Consultation",
                body: "Your move starts with a personalized financial model\u2014not a neighborhood tour. You\u2019ll see the exact dollar figure your family recaptures annually from state income tax reduction, property tax savings, and private school tuition elimination. Not a range. Not an estimate. Your number.",
                note: "NC flat 3.99% vs. NY 10.9%, NJ 10.75%, CA 13.3%. Typical recapture: $50K\u2013$150K+ annually.",
                align: "left",
              },
              {
                num: "02",
                title: "School District Mapping",
                body: "Your children\u2019s education isn\u2019t a line item to cut\u2014it\u2019s the reason you\u2019re paying $45K\u2013$90K per year right now. Kayden maps your kids\u2019 academic priorities, extracurricular needs, and social preferences to specific school feeder patterns\u2014elementary through high school.",
                note: "Weddington, Marvin Ridge, Ardrey Kell: top 20 statewide. Union County: top 5% of NC.",
                align: "right",
              },
              {
                num: "03",
                title: "Lifestyle-First Neighborhood Matching",
                body: "Most agents start with the MLS. Kayden starts with your life. Before a single property is shown, your commute patterns, weekend habits, dining preferences, peer community needs, and trailing spouse priorities are mapped to 2\u20133 Charlotte micro-markets.",
                note: null,
                align: "left",
              },
              {
                num: "04",
                title: "Curated Home Search with Virtual Pre-Tours",
                body: "You\u2019re 800 miles away. Every trip costs $3K\u2013$5K and a weekend you don\u2019t have. Kayden pre-screens all inventory, eliminates non-starters, and sends curated shortlists with video walkthroughs and written neighborhood context.",
                note: null,
                align: "right",
              },
              {
                num: "05",
                title: "Radical Transparency Communication",
                body: "No disappearing for three days. No vague \u201cthings are moving along\u201d updates. No hand-offs to a junior associate who doesn\u2019t know your file. Kayden tells you exactly what\u2019s happening, what to expect, and what your options are\u2014at every stage.",
                note: null,
                align: "left",
              },
              {
                num: "06",
                title: "First 100 Days Integration Program",
                body: "The transaction closes. Most agents disappear. Kayden\u2019s relationship extends 12 months past closing. You get curated introductions to country club membership directors, local wealth advisors, pediatricians, school administrators, parent groups, professional networks, and social organizations.",
                note: null,
                align: "right",
              },
            ].map((step, i) => (
              <AnimateOnScroll
                key={i}
                animation={step.align === "left" ? "fade-left" : "fade-right"}
                delay={i * 80}
              >
                <div
                  className={`relative ${
                    step.align === "right" ? "md:text-right md:ml-auto" : ""
                  } max-w-2xl`}
                >
                  {/* Watermark number */}
                  <span
                    className={`absolute top-[-20px] font-heading text-[120px] leading-none text-warm-950/[0.04] font-bold select-none ${
                      step.align === "right" ? "right-0" : "left-0"
                    }`}
                  >
                    {step.num}
                  </span>

                  <div className="relative">
                    <h3 className="font-heading text-2xl md:text-3xl text-warm-950 font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-[17px] leading-relaxed text-warm-700 font-body">
                      {step.body}
                    </p>
                    {step.note && (
                      <p className="mt-3 text-sm italic text-warm-500 font-body">
                        {step.note}
                      </p>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DEEP PROOF ============ */}
      <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.2] text-warm-950 font-semibold text-center mb-4">
              The Numbers.{" "}
              <span className="text-gold">Verified. Cited. Run Them Yourself.</span>
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Tax Arbitrage",
                body: "NC\u2019s flat 3.99% vs. NY (10.9%), CA (13.3%), NJ (10.75%), D.C. (10.75%). No state estate tax. A $350K household typically recaptures $50K\u2013$150K+ annually.",
              },
              {
                title: "Housing",
                body: "Charlotte luxury median: $1.4M vs. $2.5M+ (NYC), $3.2M+ (LA), $2.1M+ (D.C.). 121% appreciation over the past decade\u2014still 40\u201360% below coastal.",
              },
              {
                title: "Schools",
                body: "Weddington, Marvin Ridge, Ardrey Kell: top 20 statewide. Union County: top 5% of NC. AP and IB programs rival $45K\u2013$48K private academies.",
              },
              {
                title: "Jobs",
                body: "Charlotte MSA added 37,600 jobs in 2025\u2014highest growth rate (2.7%) among all major U.S. metros. Second-largest U.S. banking center.",
              },
              {
                title: "Connectivity",
                body: "CLT Airport: 191 nonstop destinations. NYC is 90 minutes. D.C. is 75. Your legacy network doesn\u2019t disappear.",
              },
              {
                title: "Growth",
                body: "157 new residents daily. #1 net in-migration metro in the U.S. for three consecutive years.",
              },
            ].map((card, i) => (
              <AnimateOnScroll key={i} animation="scale-up" delay={i * 80}>
                <div className="bg-white border border-warm-200 rounded-[8px] p-6 md:p-8 shadow-card hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="font-heading text-xl md:text-2xl text-warm-950 font-semibold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-warm-600 font-body">
                    {card.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={500}>
            <p className="text-center text-xs text-warm-400 mt-8 font-body">
              Sources: IRS migration data, U.S. Census, Charlotte Regional
              Business Alliance, U.S. News school rankings, CLT Airport
              authority.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ============ SWITCH ============ */}
      <section className="bg-cream py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.2] text-warm-950 font-semibold mb-8">
              What Changes{" "}
              <span className="text-gold">When the Geography Changes.</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <p className="text-base md:text-[17px] leading-relaxed text-warm-700 font-body mb-6">
              You&apos;ve seen agents who push quick sales because they&apos;re
              juggling 40 transactions and need yours off the desk. You&apos;ve
              experienced communication blackouts, hand-offs to junior staff,
              and properties shown that blatantly ignored what you asked for.
              You&apos;ve worked with agents who couldn&apos;t discuss a jumbo
              loan structure, a 1031 exchange, or an LLC purchase&mdash;and you
              realized they were salespeople, not advisors.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-base md:text-[17px] leading-relaxed text-warm-700 font-body">
              Kayden operates differently. Every client gets direct cell
              access&mdash;no gatekeepers, no assistants screening calls. The
              financial arbitrage report comes before a single showing. The
              lifestyle mapping comes before the MLS search. And if a property
              doesn&apos;t serve your long-term wealth, he&apos;ll tell you not
              to buy it&mdash;even when it costs him the commission.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.2] text-warm-950 font-semibold mb-12">
              Your Questions.{" "}
              <span className="text-gold">Answered Directly.</span>
            </h2>
          </AnimateOnScroll>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="border-b border-warm-200">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full py-5 flex items-start justify-between gap-4 text-left"
                  >
                    <span className="font-heading text-lg md:text-xl text-warm-950 font-medium leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className={`text-gold text-2xl leading-none flex-shrink-0 transition-transform duration-300 ${
                        openFaq === i ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`accordion-content ${
                      openFaq === i ? "open" : ""
                    }`}
                  >
                    <div>
                      <p className="pb-5 text-[15px] leading-relaxed text-warm-600 font-body">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Risk Reversal */}
          <AnimateOnScroll delay={400}>
            <div className="mt-12 bg-warm-100 border-l-3 border-gold-dark rounded-r-[8px] p-6 md:p-8">
              <h3 className="font-heading text-xl text-warm-950 font-semibold mb-3">
                Risk Reversal
              </h3>
              <p className="text-[15px] leading-relaxed text-warm-600 font-body">
                Kayden&apos;s advisory operates on a fiduciary principle: if a
                property doesn&apos;t meet stringent investment and lifestyle
                criteria, he advises you to walk away&mdash;even at the cost of
                his commission. You pay nothing upfront. Commission is earned
                only upon a successful close. You get 12 months of post-close
                support.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={500}>
            <p className="mt-8 text-base md:text-[17px] leading-relaxed text-warm-700 font-body">
              Every year you stay in a high-tax coastal metro is another
              $87K&ndash;$150K in wealth that doesn&apos;t compound. Over the
              next decade, that gap becomes $1.5M+. The question isn&apos;t
              whether Charlotte works financially&mdash;the math is settled. The
              question is how long you&apos;ll wait before you run your own
              numbers.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="bg-navy py-16 md:py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gold/[0.06] rounded-full blur-[150px]" />
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center relative z-10">
          <AnimateOnScroll animation="scale-up">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.2] text-white font-semibold">
              Ready to Make Your Income{" "}
              <span className="text-gold-light">Feel Like Your Income?</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <p className="mt-6 text-base text-white/50 font-body max-w-xl mx-auto">
              30 minutes. No pitch. No obligation. Walk through your tax
              scenario, school priorities, and neighborhood criteria with Kayden
              directly.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold">
                Book Your Strategy Call
              </Link>
              <Link href="/calculator" className="btn-outline">
                Run Your Numbers First
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/30 font-body">
              <span>✓ 157 new residents daily</span>
              <span>✓ 3.99% flat state tax</span>
              <span>✓ 191 nonstop CLT flights</span>
              <span>✓ 37,600 jobs added in 2025</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
