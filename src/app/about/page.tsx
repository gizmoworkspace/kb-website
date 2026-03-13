"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      const tl = gsap.timeline();
      tl.fromTo(".about-hero-title", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" })
        .fromTo(".about-hero-sub", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6")
        .fromTo(".about-hero-cta", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5");

      // Scroll reveals
      gsap.utils.toArray<HTMLElement>(".reveal-block").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-navy-dark">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/85 via-navy/75 to-navy-dark" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-32">
          <h1 className="about-hero-title font-serif display-xl text-white mb-6 opacity-0">
            Your Agent Should Know the Tax Code as Well as the{" "}
            <span className="text-gold">School Zones.</span>
          </h1>
          <p className="about-hero-sub text-lg text-gray-300/90 leading-relaxed mb-8 max-w-2xl opacity-0">
            Kayden Benfield is a North Carolina licensed broker with INNOVATE Real Estate who specializes in one thing: helping high-income families from coastal metros capture the full financial and lifestyle arbitrage of relocating to Charlotte. No fluff. No runaround. No surprises.
          </p>
          <div className="about-hero-cta opacity-0">
            <Link href="/contact" className="inline-block px-8 py-4 bg-gold text-navy font-semibold text-sm tracking-[0.1em] uppercase hover:bg-gold-light transition-all duration-300">
              Book Your Relocation Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            {["NC Licensed Broker (highest state standard)", "INNOVATE Real Estate — #1 Non-Franchised Brokerage, East Coast", "Equity Owner in Brokerage — Your Outcome Is His Outcome", "Multi-State MLS Access Across 10 States"].map((item, i) => (
              <span key={i} className="flex items-center gap-2"><span className="text-gold text-xs">✦</span> {item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* THE AGENT PROBLEM */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="reveal-block">
            <div className="section-divider mb-8" />
            <h2 className="font-serif display-lg text-white mb-8">The Agent Problem</h2>
          </div>
          <div className="reveal-block text-gray-300/80 leading-relaxed space-y-4">
            <p>
              You&apos;ve probably worked with a real estate agent before. And if your experience was anything like most high-income relocators&apos;, it looked something like this: an agent who couldn&apos;t explain the tax implications of crossing state lines. Properties shown that blatantly ignored your stated criteria. Communication blackouts during the most stressful weeks of the process. Hand-offs to a junior team member who had never heard your name.
            </p>
            <p>
              When you&apos;re moving your family 800 miles and deploying $1M+ in capital, that&apos;s not a minor inconvenience. That&apos;s a six-figure risk managed by someone who treats your transaction like one of forty in their pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* CROSSHEAD */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center crosshead reveal-block">
          <h2 className="font-serif display-lg text-white">
            Built for Relocators. <span className="text-gold">Not for Volume.</span>
          </h2>
        </div>
      </section>

      {/* WHY KAYDEN BUILT THIS */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="reveal-block mb-16">
            <div className="section-divider mb-8" />
            <h2 className="font-serif display-lg text-white mb-12">Why Kayden Built This</h2>
            <h3 className="font-serif text-xl text-gold mb-4">The Origin</h3>
            <div className="text-gray-300/80 leading-relaxed space-y-4">
              <p>
                Kayden Benfield earned his broker&apos;s license while completing his degree at Appalachian State University—building a real estate career and finishing school simultaneously. That work ethic is the foundation of everything he does today.
              </p>
              <p>
                He watched talented professionals relocate to the Charlotte metro and make avoidable mistakes: buying in the wrong neighborhood because they relied on Zillow filters instead of local knowledge. Overpaying by $50K+ because they didn&apos;t understand micro-market dynamics. Spending their first year feeling isolated because no one helped them connect to the social fabric of their new community. They&apos;d captured the financial arbitrage on paper but lost half of it through bad decisions and missed connections.
              </p>
              <p>Kayden built his relocation advisory to close that gap.</p>
            </div>
          </div>

          <div className="reveal-block mb-8">
            <h3 className="font-serif text-2xl text-white mb-10">The Approach</h3>
          </div>

          <div className="space-y-10">
            {[
              { title: "Lifestyle First, Properties Last", text: "Your home search starts with a deep conversation about how you live today—your commute, your kids' school priorities, your weekend patterns, your spouse's social needs, your proximity requirements. Properties are the final step, not the first. By the time you see a home, it's already been validated against every dimension that matters to your family." },
              { title: "Radical Transparency as a Standard", text: "Kayden is known for being straightforward, honest, and direct. He tells you exactly what's happening, what to expect, and walks you through every step. If a property has foundation concerns, you hear about it before you ask. If a neighborhood is about to be rezoned, you know before you make an offer. If a deal doesn't serve your long-term wealth, he'll tell you to walk away—even when it costs him the commission." },
              { title: "Ownership Stake, Not Just a License", text: "Kayden holds equity ownership in INNOVATE Real Estate—the #1 non-franchised brokerage on the East Coast by transaction volume. His name is on the company. Your transaction is a direct reflection of his personal brand, his professional reputation, and his financial interest. That's a different incentive structure than a franchise agent who clocks out at 5 PM." },
              { title: "Your Agent. Not Your Agent's Assistant.", text: "Kayden isn't juggling 40 deals. When you hire him, you get him—direct cell, direct communication, direct accountability. For a $1M+ relocation, that level of personal attention is the difference between a smooth transition and a six-figure mistake." },
            ].map((item, i) => (
              <div key={i} className="reveal-block glass rounded-lg p-8">
                <h4 className="font-serif text-lg text-gold mb-4">{item.title}</h4>
                <p className="text-gray-300/80 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="reveal-block">
            <div className="section-divider mb-8" />
            <h2 className="font-serif display-lg text-white mb-10">Credentials</h2>
          </div>
          <div className="space-y-4">
            {[
              "Licensed North Carolina Broker — NC requires broker-level licensure for all agents, a higher standard than most states",
              "INNOVATE Real Estate — #1 non-franchised brokerage on the East Coast by transaction volume, operations in 10+ states",
              "Agent Equity Model — ownership shares in the brokerage align Kayden's incentives directly with client outcomes",
              "Tech-Forward Platform — Real Geeks CRM, multi-state MLS access, institutional-grade digital marketing infrastructure",
              "Geographic Range — Charlotte metro, western NC mountains (Boone, Black Mountain, Hendersonville), and coastal SC",
            ].map((cred, i) => (
              <div key={i} className="reveal-block flex items-start gap-4">
                <span className="text-gold mt-1 flex-shrink-0 text-xs">✦</span>
                <p className="text-gray-300/80">{cred}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10">
          <div className="reveal-block glass rounded-lg p-8">
            <h3 className="font-serif text-lg text-gold mb-4">&quot;He seems young. Does he have enough experience?&quot;</h3>
            <p className="text-gray-300/80 leading-relaxed">
              Kayden built a real estate career while completing his university degree. He holds broker-level licensure in a state that requires the highest standard for all agents. He&apos;s backed by INNOVATE&apos;s institutional infrastructure, has equity ownership in the brokerage, and treats every client as his most important because at this stage of a focused practice, you are. The question isn&apos;t how many transactions he&apos;s closed. The question is how much attention and care your $1M+ relocation will receive.
            </p>
          </div>

          <div className="reveal-block glass rounded-lg p-8">
            <h3 className="font-serif text-lg text-gold mb-4">&quot;Why not just use a big-name Charlotte firm?&quot;</h3>
            <p className="text-gray-300/80 leading-relaxed">
              Large firms offer brand recognition. What they rarely offer is direct access to the person managing your transaction. Heritage brokerages cycle clients through intake coordinators, junior agents, and administrative staff. Kayden answers his own phone. He writes his own market analyses. He shows up to every walkthrough. The precision of an established firm. The responsiveness of someone who answers their own phone.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="reveal-block max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="font-serif display-lg text-white mb-6">Book Your Relocation Strategy Call</h2>
          <p className="text-gray-300/80 leading-relaxed mb-8">
            30 minutes. No pitch. Just your numbers and your questions, answered directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 py-4 bg-gold text-navy font-semibold text-sm tracking-[0.1em] uppercase hover:bg-gold-light transition-all duration-300">
              Book Your Relocation Strategy Call
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-600">Direct access to Kayden. Not a scheduling coordinator.</p>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </div>
  );
}
