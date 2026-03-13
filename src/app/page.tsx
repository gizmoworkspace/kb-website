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
      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <AnimateOnScroll>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-heading">
                  Your $350K Salary Should Feel Like $350K.{" "}
                  <span className="text-gold">Charlotte Makes the Math Work.</span>
                </h1>
              </AnimateOnScroll>
              <AnimateOnScroll delay={150}>
                <p className="mt-6 md:mt-8 text-lg leading-relaxed text-body max-w-2xl">
                  You built the career, earned the income, did everything right. Your state took half of it anyway. Charlotte&apos;s flat 3.99% tax rate, top-ranked public schools, and luxury homes at 40&ndash;60% below coastal prices give your family the financial freedom and lifestyle quality the Northeast promised but never delivered.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={300}>
                <div className="mt-8 md:mt-10 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">Book Your Relocation Strategy Call</Link>
                  <Link href="/calculator" className="btn-secondary">Run Your Numbers</Link>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <AnimateOnScroll delay={200}>
                <div className="relative">
                  <Image
                    src="/kayden-headshot.jpg"
                    alt="Kayden Benfield"
                    width={420}
                    height={520}
                    className="rounded-2xl object-cover w-72 h-80 md:w-80 md:h-96 lg:w-[360px] lg:h-[440px] shadow-[0_8px_40px_rgba(0,0,0,0.1)]"
                    priority
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROOF BAR ═══ */}
      <section className="py-5 border-y border-border-light">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-body-light font-body">
            <span>✓ Licensed North Carolina Broker</span>
            <span>✓ INNOVATE Real Estate — #1 Non-Franchised Brokerage, East Coast</span>
            <span>✓ Agent Equity Owner</span>
            <span>✓ Multi-State MLS — 10 States</span>
            <span>✓ Direct Cell. No Gatekeepers.</span>
          </div>
        </div>
      </section>

      {/* ═══ AGITATION ═══ */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-heading mb-8 md:mb-12">
              You Earned $400K. Your State Took $172K Before You Bought Groceries.
            </h2>
          </AnimateOnScroll>
          <div className="max-w-2xl">
            <AnimateOnScroll delay={100}>
              <p className="text-lg leading-relaxed text-body mb-6">
                You&apos;re earning $350K&ndash;$400K and saving $800 a month. You know the math doesn&apos;t work. Your state takes 10.9&ndash;13.3% off the top before you see a dollar. Property taxes on your four-bedroom: $30K&ndash;$50K. Two kids in private school: $90K. You&apos;re not bad with money. You&apos;re in a bad jurisdiction.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="text-lg leading-relaxed text-body mb-6">
                You feel embarrassed telling anyone you&apos;re stressed about money at this income level. Your home office is a converted closet. Your backyard is a patio. Your commute is 90 minutes each way. You earn more than your parents ever did, and you have less to show for it.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <blockquote className="border-l-2 border-gold pl-6 my-8">
                <p className="text-base italic text-body-light leading-relaxed">
                  &ldquo;It feels like at the end of the month, after all our expenses, that it&apos;s still difficult to save any substantial amount of money&hellip; it feels like 3/4 of the money is already gone.&rdquo;
                </p>
                <cite className="block mt-3 text-sm text-body-light not-italic">&mdash; r/HENRYfinance</cite>
              </blockquote>
            </AnimateOnScroll>
            <AnimateOnScroll delay={400}>
              <p className="text-lg leading-relaxed text-body">
                Every year you stay is another $87K&ndash;$150K in avoidable tax burden, tuition, and cost-of-living premium. Over a decade, that&apos;s $1.5M+ in wealth that never compounds. That&apos;s not a budgeting problem. That&apos;s a geography problem.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ CROSSHEAD (Dark Section) ═══ */}
      <section className="dark-section py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-8 md:px-12 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              The Problem Isn&apos;t Discipline. It&apos;s Geography.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="mt-6 font-heading text-2xl md:text-3xl text-gold">
              And the Solution Has a Flat 3.99% Tax Rate.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-heading mb-8 md:mb-12 text-center">
              Your Relocation, Engineered from Tax Code to Country Club.
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 mt-16">
            {[
              { num: "01", title: "Tax Arbitrage Consultation", body: "Your move starts with a personalized financial model\u2014not a neighborhood tour. You\u2019ll see the exact dollar figure your family recaptures annually from state income tax reduction, property tax savings, and private school tuition elimination. Not a range. Not an estimate. Your number." },
              { num: "02", title: "School District Mapping", body: "Kayden maps your kids\u2019 academic priorities, extracurricular needs, and social preferences to specific school feeder patterns\u2014elementary through high school. So that you enroll in Weddington, Marvin Ridge, or Ardrey Kell with confidence." },
              { num: "03", title: "Lifestyle-First Neighborhood Matching", body: "Before a single property is shown, your commute patterns, weekend habits, dining preferences, peer community needs, and trailing spouse priorities are mapped to 2\u20133 Charlotte micro-markets." },
              { num: "04", title: "Curated Home Search with Virtual Pre-Tours", body: "Kayden pre-screens all inventory, eliminates non-starters, and sends curated shortlists with video walkthroughs and written neighborhood context. Your first in-person visit is productive\u2014not exploratory." },
              { num: "05", title: "Radical Transparency Communication", body: "No disappearing for three days. No vague \u201cthings are moving along\u201d updates. No hand-offs to a junior associate. Kayden tells you exactly what\u2019s happening, what to expect, and what your options are\u2014at every stage." },
              { num: "06", title: "First 100 Days Integration Program", body: "The transaction closes. Most agents disappear. You get curated introductions to country club membership directors, local wealth advisors, pediatricians, school administrators, parent groups, and professional networks." },
            ].map((step, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="card p-8 md:p-10">
                  <span className="font-heading text-5xl text-border leading-none block mb-4">{step.num}</span>
                  <h3 className="font-heading text-xl md:text-2xl text-heading mb-4">{step.title}</h3>
                  <p className="text-[15px] leading-relaxed text-body">{step.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROOF DATA ═══ */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-heading mb-8 md:mb-12 text-center">
              The Numbers. Verified. Cited. Run Them Yourself.
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              { title: "Tax Arbitrage", body: "North Carolina\u2019s flat 3.99% state income tax rate vs. New York (10.9%), California (13.3%), New Jersey (10.75%). No state estate tax. A $350K-income household typically recaptures $50K\u2013$150K+ annually." },
              { title: "Housing", body: "Charlotte luxury median sale price: $1.4M vs. $2.5M+ (NYC metro), $3.2M+ (LA). Luxury properties have appreciated 121% over the past decade and still trade at a 40\u201360% discount to coastal equivalents." },
              { title: "Schools", body: "Weddington High, Marvin Ridge, and Ardrey Kell consistently rank top 20 statewide. AP and IB programs rival the private academies charging $45K\u2013$48K per seat." },
              { title: "Jobs", body: "Charlotte MSA added 37,600 nonfarm payroll jobs in 2025\u2014the highest job growth rate (2.7%) among all major U.S. metros. Second-largest U.S. banking center." },
              { title: "Connectivity", body: "CLT Airport: 191 nonstop destinations. Your parents in New York are a 90-minute flight. Your former colleagues in D.C. are 75 minutes." },
              { title: "Growth", body: "157 new residents move to Charlotte daily. Charlotte has been the #1 net in-migration metro in the U.S. for three consecutive years." },
            ].map((card, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="card p-8 md:p-10">
                  <h3 className="font-heading text-xl text-heading mb-3">{card.title}</h3>
                  <p className="text-[15px] leading-relaxed text-body">{card.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={500}>
            <p className="text-center text-xs text-body-light mt-8">
              Sources: IRS migration data, U.S. Census, Charlotte Regional Business Alliance, U.S. News school rankings, CLT Airport authority.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ WHY KAYDEN ═══ */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <AnimateOnScroll>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-heading mb-8 md:mb-12">
                  What Changes When the Geography Changes.
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <p className="text-lg leading-relaxed text-body mb-6">
                  You&apos;ve seen agents who push quick sales because they&apos;re juggling 40 transactions and need yours off the desk. You&apos;ve experienced communication blackouts, hand-offs to junior staff, and properties shown that blatantly ignored what you asked for.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <p className="text-lg leading-relaxed text-body">
                  Kayden operates differently. Every client gets direct cell access&mdash;no gatekeepers, no assistants screening calls. The financial arbitrage report comes before a single showing. The lifestyle mapping comes before the MLS search. And if a property doesn&apos;t serve your long-term wealth, he&apos;ll tell you not to buy it&mdash;even when it costs him the commission.
                </p>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll delay={200}>
              <div className="flex justify-center">
                <Image
                  src="/kayden-headshot.jpg"
                  alt="Kayden Benfield"
                  width={480}
                  height={560}
                  className="rounded-2xl object-cover w-80 h-96 md:w-96 md:h-[480px] shadow-[0_8px_40px_rgba(0,0,0,0.1)]"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-heading mb-12">
              Your Questions. Answered Directly.
            </h2>
          </AnimateOnScroll>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="border-b border-border">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full py-6 flex items-start justify-between gap-4 text-left"
                  >
                    <span className="font-heading text-lg md:text-xl text-heading leading-snug">{faq.q}</span>
                    <span className={`text-gold text-2xl leading-none flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <div className={`accordion-content ${openFaq === i ? "open" : ""}`}>
                    <div>
                      <p className="pb-6 text-[15px] leading-relaxed text-body">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Risk Reversal */}
          <AnimateOnScroll delay={400}>
            <div className="mt-12 card p-8 border-l-2 border-gold !rounded-l-none">
              <h3 className="font-heading text-xl text-heading mb-3">Risk Reversal</h3>
              <p className="text-[15px] leading-relaxed text-body">
                Kayden&apos;s advisory operates on a fiduciary principle: if a property doesn&apos;t meet stringent investment and lifestyle criteria, he advises you to walk away&mdash;even at the cost of his commission. You pay nothing upfront. Commission is earned only upon a successful close. You get 12 months of post-close support.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={500}>
            <p className="mt-8 text-base leading-relaxed text-body">
              Every year you stay in a high-tax coastal metro is another $87K&ndash;$150K in wealth that doesn&apos;t compound. Over the next decade, that gap becomes $1.5M+. The question isn&apos;t whether Charlotte works financially&mdash;the math is settled. The question is how long you&apos;ll wait before you run your own numbers.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="dark-section py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto px-8 md:px-12 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Book Your Relocation Strategy Call
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <p className="mt-6 text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
              30 minutes. No pitch. No obligation. Walk through your tax scenario, school priorities, and neighborhood criteria with Kayden directly.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary !bg-white !text-heading hover:!bg-gray-100">Book Your Strategy Call</Link>
              <Link href="/calculator" className="btn-secondary !border-white/30 !text-white hover:!border-white">Run Your Numbers First</Link>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
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
