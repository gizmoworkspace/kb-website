"use client";

import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useState } from "react";

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
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=1920&q=80"
            alt="Charlotte skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-36 lg:py-44 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimateOnScroll>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[1.05] text-[#1a1a2e] font-light">
                  Your $350K Salary Should Feel Like $350K.
                </h1>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <p className="font-serif text-2xl md:text-3xl tracking-tight leading-[1.1] text-[#c9a84c] mt-4 font-light">
                  Charlotte Makes the Math Work.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555] mt-8">
                  You built the career, earned the income, did everything right. Your state took half of it anyway. Charlotte&apos;s flat 3.99% tax rate, top-ranked public schools, and luxury homes at 40&ndash;60% below coastal prices give your family the financial freedom and lifestyle quality the Northeast promised but never delivered.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={300}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="inline-block px-8 py-4 bg-[#c9a84c] text-white text-sm tracking-[0.1em] uppercase font-semibold hover:bg-[#d4b96a] transition-all duration-300 text-center">
                    Book Your Relocation Strategy Call
                  </Link>
                  <Link href="/calculator" className="inline-block px-8 py-4 border border-[#1a1a2e] text-[#1a1a2e] text-sm tracking-[0.1em] uppercase font-semibold hover:bg-[#FAF8F5] transition-all duration-300 text-center">
                    Run Your Numbers
                  </Link>
                </div>
                <p className="text-xs text-[#999] mt-4">30 minutes. No pitch. Just your numbers.</p>
              </AnimateOnScroll>
            </div>
            <div className="hidden lg:flex justify-end">
              <AnimateOnScroll delay={200}>
                <div className="relative w-[400px] h-[500px]">
                  <Image
                    src="/kayden-headshot.jpg"
                    alt="Kayden Benfield"
                    fill
                    className="object-cover"
                    style={{ maskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)" }}
                    priority
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-[#FAF8F5] border-y border-[#eee]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-[#999] tracking-[0.1em] uppercase">
            <span>Licensed North Carolina Broker</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>INNOVATE Real Estate — #1 Non-Franchised Brokerage, East Coast</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>Agent Equity Owner — Skin in the Game</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>Multi-State MLS Access — 10 States</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>Direct Cell. No Gatekeepers. No Hand-Offs.</span>
          </div>
        </div>
      </section>

      {/* AGITATION */}
      <section className="bg-white py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimateOnScroll>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light">
                You Earned $400K. Your State Took $172K Before You Bought Groceries.
              </h2>
            </AnimateOnScroll>
            <div>
              <AnimateOnScroll delay={100}>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555] mb-6">
                  You&apos;re earning $350K&ndash;$400K and saving $800 a month. You know the math doesn&apos;t work. Your state takes 10.9&ndash;13.3% off the top before you see a dollar. Property taxes on your four-bedroom: $30K&ndash;$50K. Two kids in private school: $90K. You&apos;re not bad with money. You&apos;re in a bad jurisdiction.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555] mb-6">
                  The usual advice: budget harder. Cut the vacations. Refinance. You&apos;ve done all of it. No spreadsheet fixes a 13.3% state income tax plus $45K-per-seat private school tuition plus property taxes that rival a second mortgage.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={300}>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555] mb-6">
                  You feel embarrassed telling anyone you&apos;re stressed about money at this income level. You can&apos;t complain because objectively you&apos;re &ldquo;wealthy.&rdquo; You&apos;re working exclusively to cover carrying costs&mdash;not to build wealth, not to enjoy your life. Three-quarters of every paycheck is gone before it hits your brokerage account.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={400}>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555] mb-6">
                  Your home office is a converted closet. Your backyard is a patio. Your commute is 90 minutes each way. You earn more than your parents ever did, and you have less to show for it.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={500}>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555]">
                  Every year you stay is another $87K&ndash;$150K in avoidable tax burden, tuition, and cost-of-living premium. Over a decade, that&apos;s $1.5M+ in wealth that never compounds. That&apos;s not a budgeting problem. That&apos;s a geography problem.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* CROSSHEAD — dark section */}
      <section className="bg-[#1a1a2e] py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-white font-light">
              The Problem Isn&apos;t Discipline. It&apos;s Geography.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="font-serif text-xl md:text-2xl text-[#c9a84c] mt-6 font-light">
              And the Solution Has a Flat 3.99% Tax Rate.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#FAF8F5] py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light text-center mb-20">
              Your Relocation, Engineered from Tax Code to Country Club.
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { num: "01", title: "Tax Arbitrage Consultation", desc: "Your move starts with a personalized financial model\u2014not a neighborhood tour. You\u2019ll see the exact dollar figure your family recaptures annually from state income tax reduction, property tax savings, and private school tuition elimination. Not a range. Not an estimate. Your number. So that you make the decision based on math, not emotion." },
              { num: "02", title: "School District Mapping", desc: "Your children\u2019s education isn\u2019t a line item to cut\u2014it\u2019s the reason you\u2019re paying $45K\u2013$90K per year right now. Kayden maps your kids\u2019 academic priorities, extracurricular needs, and social preferences to specific school feeder patterns\u2014elementary through high school. So that you enroll in Weddington, Marvin Ridge, or Ardrey Kell with confidence that the rigor matches the private academy you\u2019re leaving behind." },
              { num: "03", title: "Lifestyle-First Neighborhood Matching", desc: "Most agents start with the MLS. Kayden starts with your life. Before a single property is shown, your commute patterns, weekend habits, dining preferences, peer community needs, and trailing spouse priorities are mapped to 2\u20133 Charlotte micro-markets. So that you avoid the catastrophic mistake of choosing the wrong neighborhood\u2014wrong commute, wrong micro-culture, wrong school zone\u2014and paying to move twice." },
              { num: "04", title: "Curated Home Search with Virtual Pre-Tours", desc: "You\u2019re 800 miles away. Every trip costs $3K\u2013$5K and a weekend you don\u2019t have. Kayden pre-screens all inventory, eliminates non-starters, and sends curated shortlists with video walkthroughs and written neighborhood context. So that your first in-person visit is productive\u2014five to seven homes that genuinely fit\u2014instead of four wasted weekends touring properties that were never going to work." },
              { num: "05", title: "Radical Transparency Communication", desc: "No disappearing for three days. No vague \u201cthings are moving along\u201d updates. No hand-offs to a junior associate who doesn\u2019t know your file. Kayden tells you exactly what\u2019s happening, what to expect, and what your options are\u2014at every stage. So that you manage this decision the way you manage every other high-stakes decision in your professional life: with complete information, delivered directly, on your timeline." },
              { num: "06", title: "First 100 Days Integration Program", desc: "The transaction closes. Most agents disappear. Kayden\u2019s relationship extends 12 months past closing. You get curated introductions to country club membership directors, local wealth advisors, pediatricians, school administrators, parent groups, professional networks, and social organizations. So that your family builds a genuine social infrastructure in 90 days instead of spending 18 months feeling like outsiders." },
            ].map((step, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="relative pt-12">
                  <span className="absolute top-0 left-0 font-serif text-[5rem] leading-none text-[#1a1a2e]/[0.06] font-light select-none">
                    {step.num}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-[#1a1a2e] mb-4 font-light relative">{step.title}</h3>
                  <p className="text-base leading-relaxed text-[#555]">{step.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP PROOF */}
      <section className="bg-white py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light text-center mb-20">
              The Numbers. Verified. Cited. Run Them Yourself.
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: "Tax Arbitrage", desc: "North Carolina\u2019s flat 3.99% state income tax rate vs. New York (10.9%), California (13.3%), New Jersey (10.75%), and D.C. (10.75%). No state estate tax. A $350K-income household typically recaptures $50K\u2013$150K+ annually from the tax delta alone." },
              { title: "Housing", desc: "Charlotte luxury median sale price: $1.4M vs. $2.5M+ (NYC metro), $3.2M+ (LA), $2.1M+ (D.C.). The same mortgage payment buys 2\u20133x the home. Luxury properties have appreciated 121% over the past decade and still trade at a 40\u201360% discount to coastal equivalents." },
              { title: "Schools", desc: "Weddington High, Marvin Ridge, and Ardrey Kell consistently rank top 20 statewide. Union County and South Charlotte school districts rank in the top 5% of North Carolina. AP and IB programs rival the private academies charging $45K\u2013$48K per seat." },
              { title: "Jobs", desc: "Charlotte MSA added 37,600 nonfarm payroll jobs in 2025\u2014the highest job growth rate (2.7%) among all major U.S. metros. Charlotte is the second-largest U.S. banking center. Bank of America, Wells Fargo, and Truist are headquartered here." },
              { title: "Connectivity", desc: "CLT Airport: 191 nonstop destinations. Your parents in New York are a 90-minute flight. Your former colleagues in D.C. are 75 minutes. Your legacy network doesn\u2019t disappear." },
              { title: "Growth", desc: "157 new residents move to Charlotte daily. Charlotte has been the #1 net in-migration metro in the U.S. for three consecutive years." },
            ].map((card, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="border border-[#eee] rounded-sm p-8">
                  <h3 className="font-serif text-xl md:text-2xl text-[#1a1a2e] mb-4 font-light">{card.title}</h3>
                  <p className="text-base leading-relaxed text-[#555]">{card.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll>
            <p className="text-xs text-[#999] text-center mt-12 tracking-[0.1em]">
              All data verifiable. Sources: IRS migration data, U.S. Census, Charlotte Regional Business Alliance, U.S. News school rankings, CLT Airport authority.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SWITCH */}
      <section className="bg-[#FAF8F5] py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimateOnScroll>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light">
                What Changes When the Geography Changes.
              </h2>
            </AnimateOnScroll>
            <div>
              <AnimateOnScroll delay={100}>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555] mb-6">
                  You&apos;ve seen agents who push quick sales because they&apos;re juggling 40 transactions and need yours off the desk. You&apos;ve experienced communication blackouts, hand-offs to junior staff, and properties shown that blatantly ignored what you asked for. You&apos;ve worked with agents who couldn&apos;t discuss a jumbo loan structure, a 1031 exchange, or an LLC purchase&mdash;and you realized they were salespeople, not advisors.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555]">
                  Kayden operates differently. Every client gets direct cell access&mdash;no gatekeepers, no assistants screening calls. The financial arbitrage report comes before a single showing. The lifestyle mapping comes before the MLS search. And if a property doesn&apos;t serve your long-term wealth, he&apos;ll tell you not to buy it&mdash;even when it costs him the commission.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light text-center mb-20">
              Your Questions. Answered Directly.
            </h2>
          </AnimateOnScroll>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="border-b border-[#eee]">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left py-6 flex items-start justify-between gap-4"
                  >
                    <span className="font-serif text-lg md:text-xl text-[#1a1a2e] font-light leading-snug">{faq.q}</span>
                    <span className="text-[#c9a84c] text-2xl leading-none flex-shrink-0 mt-1">
                      {openFaq === i ? "\u2212" : "+"}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-[600px] pb-6" : "max-h-0"}`}>
                    <p className="text-base leading-relaxed text-[#555] max-w-2xl">{faq.a}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto mt-12 p-8 bg-[#FAF8F5] rounded-sm">
              <p className="text-base leading-relaxed text-[#555] mb-4">
                Kayden&apos;s advisory operates on a fiduciary principle: if a property doesn&apos;t meet stringent investment and lifestyle criteria, he advises you to walk away&mdash;even at the cost of his commission. You pay nothing upfront. Commission is earned only upon a successful close. You get 12 months of post-close support.
              </p>
              <p className="text-base leading-relaxed text-[#555]">
                Every year you stay in a high-tax coastal metro is another $87K&ndash;$150K in wealth that doesn&apos;t compound. Over the next decade, that gap becomes $1.5M+. The question isn&apos;t whether Charlotte works financially&mdash;the math is settled. The question is how long you&apos;ll wait before you run your own numbers.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-28 md:py-36 lg:py-44">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light mb-6">
              Book Your Relocation Strategy Call
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-[#555] mb-4">
              30 minutes. No pitch. No obligation. Walk through your tax scenario, school priorities, and neighborhood criteria with Kayden directly. If Charlotte fits, you leave with a clear next step. If it doesn&apos;t, you have the data to confirm you&apos;re in the right place already.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block px-10 py-4 bg-[#c9a84c] text-white text-sm tracking-[0.1em] uppercase font-semibold hover:bg-[#d4b96a] transition-all duration-300">
                Book Your Relocation Strategy Call
              </Link>
              <Link href="/calculator" className="inline-block px-10 py-4 border border-[#1a1a2e] text-[#1a1a2e] text-sm tracking-[0.1em] uppercase font-semibold hover:bg-[#FAF8F5] transition-all duration-300">
                Run Your Numbers First
              </Link>
            </div>
            <p className="text-xs text-[#999] mt-6">30 minutes. No pitch. Just your numbers.</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-[#999] mt-10 tracking-[0.05em]">
              <span>157 new residents daily</span>
              <span>3.99% flat state tax</span>
              <span>191 nonstop CLT flights</span>
              <span>37,600 jobs added in 2025</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
