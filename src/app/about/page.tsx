"use client";

import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-white pt-32 pb-28 md:pt-40 md:pb-36 lg:pt-44 lg:pb-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimateOnScroll>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[1.05] text-[#1a1a2e] font-light">
                  Your Agent Should Know the Tax Code as Well as the School Zones.
                </h1>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555] mt-8">
                  Kayden Benfield is a North Carolina licensed broker with INNOVATE Real Estate who specializes in one thing: helping high-income families from coastal metros capture the full financial and lifestyle arbitrage of relocating to Charlotte. No fluff. No runaround. No surprises.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <Link href="/contact" className="inline-block mt-10 px-8 py-4 bg-[#c9a84c] text-white text-sm tracking-[0.1em] uppercase font-semibold hover:bg-[#d4b96a] transition-all duration-300">
                  Book Your Relocation Strategy Call
                </Link>
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
            <span>NC Licensed Broker (highest state standard)</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>INNOVATE Real Estate — #1 Non-Franchised Brokerage, East Coast</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>Equity Owner in Brokerage — Your Outcome Is His Outcome</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>Multi-State MLS Access Across 10 States</span>
          </div>
        </div>
      </section>

      {/* AGENT PROBLEM */}
      <section className="bg-white py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimateOnScroll>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light">
                The Agent Problem
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <div>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555] mb-6">
                  You&apos;ve probably worked with a real estate agent before. And if your experience was anything like most high-income relocators&apos;, it looked something like this: an agent who couldn&apos;t explain the tax implications of crossing state lines. Properties shown that blatantly ignored your stated criteria. Communication blackouts during the most stressful weeks of the process. Hand-offs to a junior team member who had never heard your name.
                </p>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555]">
                  When you&apos;re moving your family 800 miles and deploying $1M+ in capital, that&apos;s not a minor inconvenience. That&apos;s a six-figure risk managed by someone who treats your transaction like one of forty in their pipeline.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CROSSHEAD */}
      <section className="bg-[#1a1a2e] py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-white font-light">
              Built for Relocators. Not for Volume.
            </h2>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ORIGIN STORY + APPROACH */}
      <section className="bg-[#FAF8F5] py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light mb-16">
              Why Kayden Built This
            </h2>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
            <AnimateOnScroll>
              <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555] mb-6">
                Kayden Benfield earned his broker&apos;s license while completing his degree at Appalachian State University&mdash;building a real estate career and finishing school simultaneously. That work ethic is the foundation of everything he does today.
              </p>
              <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555]">
                He watched talented professionals relocate to the Charlotte metro and make avoidable mistakes: buying in the wrong neighborhood because they relied on Zillow filters instead of local knowledge. Overpaying by $50K+ because they didn&apos;t understand micro-market dynamics. Spending their first year feeling isolated because no one helped them connect to the social fabric of their new community. They&apos;d captured the financial arbitrage on paper but lost half of it through bad decisions and missed connections.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555]">
                Kayden built his relocation advisory to close that gap.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {[
              { title: "Lifestyle First, Properties Last", desc: "Your home search starts with a deep conversation about how you live today\u2014your commute, your kids\u2019 school priorities, your weekend patterns, your spouse\u2019s social needs, your proximity requirements. Properties are the final step, not the first. By the time you see a home, it\u2019s already been validated against every dimension that matters to your family." },
              { title: "Radical Transparency as a Standard", desc: "Kayden is known for being straightforward, honest, and direct. He tells you exactly what\u2019s happening, what to expect, and walks you through every step. If a property has foundation concerns, you hear about it before you ask. If a neighborhood is about to be rezoned, you know before you make an offer. If a deal doesn\u2019t serve your long-term wealth, he\u2019ll tell you to walk away\u2014even when it costs him the commission." },
              { title: "Ownership Stake, Not Just a License", desc: "Kayden holds equity ownership in INNOVATE Real Estate\u2014the #1 non-franchised brokerage on the East Coast by transaction volume. His name is on the company. Your transaction is a direct reflection of his personal brand, his professional reputation, and his financial interest. That\u2019s a different incentive structure than a franchise agent who clocks out at 5 PM." },
              { title: "Your Agent. Not Your Agent\u2019s Assistant.", desc: "Kayden isn\u2019t juggling 40 deals. When you hire him, you get him\u2014direct cell, direct communication, direct accountability. For a $1M+ relocation, that level of personal attention is the difference between a smooth transition and a six-figure mistake." },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="p-8 bg-white rounded-sm">
                  <h3 className="font-serif text-xl md:text-2xl text-[#1a1a2e] mb-4 font-light">{item.title}</h3>
                  <p className="text-base leading-relaxed text-[#555]">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="bg-white py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light mb-16">
              Credentials
            </h2>
          </AnimateOnScroll>
          <div className="max-w-3xl">
            {[
              "Licensed North Carolina Broker \u2014 NC requires broker-level licensure for all agents, a higher standard than most states",
              "INNOVATE Real Estate \u2014 #1 non-franchised brokerage on the East Coast by transaction volume, operations in 10+ states",
              "Agent Equity Model \u2014 ownership shares in the brokerage align Kayden\u2019s incentives directly with client outcomes",
              "Tech-Forward Platform \u2014 Real Geeks CRM, multi-state MLS access, institutional-grade digital marketing infrastructure",
              "Geographic Range \u2014 Charlotte metro, western NC mountains (Boone, Black Mountain, Hendersonville), and coastal SC",
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="flex items-start gap-4 py-4 border-b border-[#eee]">
                  <span className="text-[#c9a84c] mt-1 flex-shrink-0">&#10003;</span>
                  <p className="text-base leading-relaxed text-[#555]">{item}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSE / FAQ */}
      <section className="bg-[#FAF8F5] py-28 md:py-36 lg:py-44">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {[
            { q: "\u201cHe seems young. Does he have enough experience?\u201d", a: "Kayden built a real estate career while completing his university degree. He holds broker-level licensure in a state that requires the highest standard for all agents. He\u2019s backed by INNOVATE\u2019s institutional infrastructure, has equity ownership in the brokerage, and treats every client as his most important because at this stage of a focused practice, you are. The question isn\u2019t how many transactions he\u2019s closed. The question is how much attention and care your $1M+ relocation will receive." },
            { q: "\u201cWhy not just use a big-name Charlotte firm?\u201d", a: "Large firms offer brand recognition. What they rarely offer is direct access to the person managing your transaction. Heritage brokerages cycle clients through intake coordinators, junior agents, and administrative staff. Kayden answers his own phone. He writes his own market analyses. He shows up to every walkthrough. The precision of an established firm. The responsiveness of someone who answers their own phone." },
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
      <section className="bg-white py-28 md:py-36 lg:py-44">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light mb-6">
              Book Your Relocation Strategy Call
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-[#555] mb-10">
              30 minutes. No pitch. Just your numbers and your questions, answered directly.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <Link href="/contact" className="inline-block px-10 py-4 bg-[#c9a84c] text-white text-sm tracking-[0.1em] uppercase font-semibold hover:bg-[#d4b96a] transition-all duration-300">
              Book Your Relocation Strategy Call
            </Link>
            <p className="text-xs text-[#999] mt-4">Direct access to Kayden. Not a scheduling coordinator.</p>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
