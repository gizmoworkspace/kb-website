"use client";

import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <AnimateOnScroll>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-heading">
                  Your Agent Should Know the Tax Code as Well as the School Zones.
                </h1>
              </AnimateOnScroll>
              <AnimateOnScroll delay={150}>
                <p className="mt-6 md:mt-8 text-lg leading-relaxed text-body max-w-2xl">
                  Kayden Benfield is a North Carolina licensed broker with INNOVATE Real Estate who specializes in one thing: helping high-income families from coastal metros capture the full financial and lifestyle arbitrage of relocating to Charlotte. No fluff. No runaround. No surprises.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={300}>
                <div className="mt-8">
                  <Link href="/contact" className="btn-primary">Book Your Relocation Strategy Call</Link>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <AnimateOnScroll delay={200}>
                <Image src="/kayden-headshot.jpg" alt="Kayden Benfield" width={420} height={520} className="rounded-2xl object-cover w-72 h-80 md:w-80 md:h-96 shadow-[0_8px_40px_rgba(0,0,0,0.1)]" priority />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="py-5 border-y border-border-light">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-body-light font-body">
            <span>✓ NC Licensed Broker (highest state standard)</span>
            <span>✓ INNOVATE — #1 Non-Franchised, East Coast</span>
            <span>✓ Equity Owner in Brokerage</span>
            <span>✓ Multi-State MLS — 10 States</span>
          </div>
        </div>
      </section>

      {/* THE AGENT PROBLEM */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-heading mb-8 md:mb-12">The Agent Problem</h2>
          </AnimateOnScroll>
          <div className="max-w-2xl">
            <AnimateOnScroll delay={100}>
              <p className="text-lg leading-relaxed text-body mb-6">
                You&apos;ve probably worked with a real estate agent before. And if your experience was anything like most high-income relocators&apos;, it looked something like this: an agent who couldn&apos;t explain the tax implications of crossing state lines. Properties shown that blatantly ignored your stated criteria. Communication blackouts during the most stressful weeks of the process. Hand-offs to a junior team member who had never heard your name.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="text-lg leading-relaxed text-body">
                When you&apos;re moving your family 800 miles and deploying $1M+ in capital, that&apos;s not a minor inconvenience. That&apos;s a six-figure risk managed by someone who treats your transaction like one of forty in their pipeline.
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
              Built for Relocators. <span className="text-gold">Not for Volume.</span>
            </h2>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ORIGIN + APPROACH */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl leading-[1.15] text-heading mb-8 md:mb-12">Why Kayden Built This</h2>
          </AnimateOnScroll>
          <div className="max-w-2xl mb-16">
            <AnimateOnScroll delay={100}>
              <p className="text-lg leading-relaxed text-body mb-6">
                Kayden Benfield earned his broker&apos;s license while completing his degree at Appalachian State University&mdash;building a real estate career and finishing school simultaneously. That work ethic is the foundation of everything he does today.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150}>
              <p className="text-lg leading-relaxed text-body">
                He watched talented professionals relocate to the Charlotte metro and make avoidable mistakes: buying in the wrong neighborhood because they relied on Zillow filters instead of local knowledge. Overpaying by $50K+ because they didn&apos;t understand micro-market dynamics. Spending their first year feeling isolated because no one helped them connect to the social fabric of their new community. Kayden built his relocation advisory to close that gap.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {[
              { title: "Lifestyle First, Properties Last", body: "Your home search starts with a deep conversation about how you live today\u2014your commute, your kids\u2019 school priorities, your weekend patterns, your spouse\u2019s social needs, your proximity requirements. Properties are the final step, not the first." },
              { title: "Radical Transparency as a Standard", body: "Kayden is known for being straightforward, honest, and direct. If a property has foundation concerns, you hear about it before you ask. If a neighborhood is about to be rezoned, you know before you make an offer. If a deal doesn\u2019t serve your long-term wealth, he\u2019ll tell you to walk away." },
              { title: "Ownership Stake, Not Just a License", body: "Kayden holds equity ownership in INNOVATE Real Estate\u2014the #1 non-franchised brokerage on the East Coast by transaction volume. His name is on the company. Your transaction is a direct reflection of his personal brand, his professional reputation, and his financial interest." },
              { title: "Your Agent. Not Your Agent\u2019s Assistant.", body: "Kayden isn\u2019t juggling 40 deals. When you hire him, you get him\u2014direct cell, direct communication, direct accountability. For a $1M+ relocation, that level of personal attention is the difference between a smooth transition and a six-figure mistake." },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="card p-8 md:p-10">
                  <h3 className="font-heading text-xl md:text-2xl text-heading mb-4">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-body">{item.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-24 md:py-32 lg:py-40 border-t border-border-light">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl leading-[1.15] text-heading mb-8 md:mb-12">Credentials</h2>
          </AnimateOnScroll>
          <div className="max-w-2xl space-y-4">
            {[
              "Licensed North Carolina Broker \u2014 NC requires broker-level licensure for all agents, a higher standard than most states",
              "INNOVATE Real Estate \u2014 #1 non-franchised brokerage on the East Coast by transaction volume, operations in 10+ states",
              "Agent Equity Model \u2014 ownership shares in the brokerage align Kayden\u2019s incentives directly with client outcomes",
              "Tech-Forward Platform \u2014 Real Geeks CRM, multi-state MLS access, institutional-grade digital marketing infrastructure",
              "Geographic Range \u2014 Charlotte metro, western NC mountains (Boone, Black Mountain, Hendersonville), and coastal SC",
            ].map((cred, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="flex gap-3 items-start">
                  <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                  <p className="text-[15px] leading-relaxed text-body">{cred}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <div className="mb-10">
              <h3 className="font-heading text-xl md:text-2xl text-heading mb-3">&ldquo;He seems young. Does he have enough experience?&rdquo;</h3>
              <p className="text-[15px] leading-relaxed text-body">Kayden built a real estate career while completing his university degree. He holds broker-level licensure in a state that requires the highest standard for all agents. He&apos;s backed by INNOVATE&apos;s institutional infrastructure, has equity ownership in the brokerage, and treats every client as his most important because at this stage of a focused practice, you are.</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div>
              <h3 className="font-heading text-xl md:text-2xl text-heading mb-3">&ldquo;Why not just use a big-name Charlotte firm?&rdquo;</h3>
              <p className="text-[15px] leading-relaxed text-body">Large firms offer brand recognition. What they rarely offer is direct access to the person managing your transaction. Heritage brokerages cycle clients through intake coordinators, junior agents, and administrative staff. Kayden answers his own phone. He writes his own market analyses. He shows up to every walkthrough.</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="dark-section py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto px-8 md:px-12 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Ready to Work with an Agent Who Answers His Own Phone?
            </h2>
            <p className="mt-6 text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>30 minutes. No pitch. Just your numbers and your questions, answered directly.</p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary !bg-white !text-heading hover:!bg-gray-100">Book Your Strategy Call</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
