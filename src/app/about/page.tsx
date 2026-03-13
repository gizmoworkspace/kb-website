"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn, ParallaxBg } from "@/components/ScrollAnimations";

export default function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section className="viewport-section bg-hero-dark relative">
        <ParallaxBg src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=1920&q=80" className="opacity-25" />
        <div className="absolute inset-0 bg-hero-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeIn>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[1.05] text-white font-semibold">
                  Your Agent Should Know the Tax Code{" "}
                  <span className="text-gold-light">as Well as the School Zones.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/50 max-w-xl font-body">
                  Kayden Benfield is a North Carolina licensed broker with INNOVATE Real Estate who specializes in one thing: helping high-income families from coastal metros capture the full financial and lifestyle arbitrage of relocating to Charlotte. No fluff. No runaround. No surprises.
                </p>
              </FadeIn>
              <FadeIn delay={400}>
                <div className="mt-8">
                  <Link href="/contact" className="btn-gold">Book Your Strategy Call</Link>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <FadeIn delay={300}>
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-gold/30 to-transparent blur-md" />
                  <Image src="/kayden-headshot.jpg" alt="Kayden Benfield" width={380} height={380} className="relative rounded-full object-cover w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 border border-gold/20" priority />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-hero-dark border-y border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/30 font-body">
            <span>✓ NC Licensed Broker (highest state standard)</span>
            <span>✓ INNOVATE — #1 Non-Franchised, East Coast</span>
            <span>✓ Equity Owner in Brokerage</span>
            <span>✓ Multi-State MLS — 10 States</span>
          </div>
        </div>
      </section>

      {/* THE AGENT PROBLEM */}
      <section className="bg-hero-dark py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.2] text-white font-semibold mb-8">
              The Agent Problem
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg leading-relaxed text-white/50 font-body mb-6">
              You&apos;ve probably worked with a real estate agent before. And if your experience was anything like most high-income relocators&apos;, it looked something like this: an agent who couldn&apos;t explain the tax implications of crossing state lines. Properties shown that blatantly ignored your stated criteria. Communication blackouts during the most stressful weeks of the process. Hand-offs to a junior team member who had never heard your name.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg leading-relaxed text-white/50 font-body">
              When you&apos;re moving your family 800 miles and deploying $1M+ in capital, that&apos;s not a minor inconvenience. That&apos;s a six-figure risk managed by someone who treats your transaction like one of forty in their pipeline.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CROSSHEAD */}
      <section className="viewport-section bg-navy">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[1.1] text-white font-semibold">
              Built for Relocators. <span className="text-gold-light">Not for Volume.</span>
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* ORIGIN + APPROACH */}
      <section className="bg-hero-dark py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl tracking-tight text-white font-semibold mb-8">Why Kayden Built This</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg leading-relaxed text-white/50 font-body mb-6">
              Kayden Benfield earned his broker&apos;s license while completing his degree at Appalachian State University&mdash;building a real estate career and finishing school simultaneously. That work ethic is the foundation of everything he does today.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="text-lg leading-relaxed text-white/50 font-body mb-12">
              He watched talented professionals relocate to the Charlotte metro and make avoidable mistakes: buying in the wrong neighborhood because they relied on Zillow filters instead of local knowledge. Overpaying by $50K+ because they didn&apos;t understand micro-market dynamics. Spending their first year feeling isolated because no one helped them connect to the social fabric of their new community. Kayden built his relocation advisory to close that gap.
            </p>
          </FadeIn>

          <div className="space-y-6">
            {[
              { title: "Lifestyle First, Properties Last", body: "Your home search starts with a deep conversation about how you live today\u2014your commute, your kids\u2019 school priorities, your weekend patterns, your spouse\u2019s social needs, your proximity requirements. Properties are the final step, not the first." },
              { title: "Radical Transparency as a Standard", body: "Kayden is known for being straightforward, honest, and direct. If a property has foundation concerns, you hear about it before you ask. If a neighborhood is about to be rezoned, you know before you make an offer. If a deal doesn\u2019t serve your long-term wealth, he\u2019ll tell you to walk away." },
              { title: "Ownership Stake, Not Just a License", body: "Kayden holds equity ownership in INNOVATE Real Estate\u2014the #1 non-franchised brokerage on the East Coast by transaction volume. His name is on the company. Your transaction is a direct reflection of his personal brand, his professional reputation, and his financial interest." },
              { title: "Your Agent. Not Your Agent\u2019s Assistant.", body: "Kayden isn\u2019t juggling 40 deals. When you hire him, you get him\u2014direct cell, direct communication, direct accountability. For a $1M+ relocation, that level of personal attention is the difference between a smooth transition and a six-figure mistake." },
            ].map((item, i) => (
              <FadeIn key={i} delay={200 + i * 100}>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-6 md:p-8">
                  <h3 className="font-heading text-xl md:text-2xl text-white font-semibold mb-3">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-white/40 font-body">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="bg-hero-dark py-20 md:py-28 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl tracking-tight text-white font-semibold mb-8">Credentials</h2>
          </FadeIn>
          <div className="space-y-4">
            {[
              "Licensed North Carolina Broker \u2014 NC requires broker-level licensure for all agents, a higher standard than most states",
              "INNOVATE Real Estate \u2014 #1 non-franchised brokerage on the East Coast by transaction volume, operations in 10+ states",
              "Agent Equity Model \u2014 ownership shares in the brokerage align Kayden\u2019s incentives directly with client outcomes",
              "Tech-Forward Platform \u2014 Real Geeks CRM, multi-state MLS access, institutional-grade digital marketing infrastructure",
              "Geographic Range \u2014 Charlotte metro, western NC mountains (Boone, Black Mountain, Hendersonville), and coastal SC",
            ].map((cred, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="flex gap-3 items-start">
                  <span className="text-gold mt-0.5">✓</span>
                  <p className="text-[15px] leading-relaxed text-white/50 font-body">{cred}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="mb-10">
              <h3 className="font-heading text-xl md:text-2xl text-warm-950 font-semibold mb-3">&ldquo;He seems young. Does he have enough experience?&rdquo;</h3>
              <p className="text-[15px] leading-relaxed text-warm-600 font-body">Kayden built a real estate career while completing his university degree. He holds broker-level licensure in a state that requires the highest standard for all agents. He&apos;s backed by INNOVATE&apos;s institutional infrastructure, has equity ownership in the brokerage, and treats every client as his most important because at this stage of a focused practice, you are.</p>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div>
              <h3 className="font-heading text-xl md:text-2xl text-warm-950 font-semibold mb-3">&ldquo;Why not just use a big-name Charlotte firm?&rdquo;</h3>
              <p className="text-[15px] leading-relaxed text-warm-600 font-body">Large firms offer brand recognition. What they rarely offer is direct access to the person managing your transaction. Heritage brokerages cycle clients through intake coordinators, junior agents, and administrative staff. Kayden answers his own phone. He writes his own market analyses. He shows up to every walkthrough.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="viewport-section bg-navy relative">
        <ParallaxBg src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=1920&q=80" className="opacity-15" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white font-semibold">
              Ready to Work with an Agent Who <span className="text-gold-light">Answers His Own Phone?</span>
            </h2>
            <p className="mt-6 text-lg text-white/50 font-body">30 minutes. No pitch. Just your numbers and your questions, answered directly.</p>
            <div className="mt-8">
              <Link href="/contact" className="btn-gold">Book Your Strategy Call</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
