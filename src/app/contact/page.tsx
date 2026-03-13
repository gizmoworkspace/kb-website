"use client";

import Link from "next/link";
import { FadeIn, ParallaxBg } from "@/components/ScrollAnimations";

export default function ContactPage() {
  return (
    <div>
      {/* HERO */}
      <section className="viewport-section bg-hero-dark relative">
        <ParallaxBg src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=1920&q=80" className="opacity-20" />
        <div className="absolute inset-0 bg-hero-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[1.05] text-white font-semibold max-w-4xl">
              Your Next Step: 30 Minutes. No Pitch.{" "}
              <span className="text-gold-light">Just Your Numbers.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/50 max-w-2xl font-body">
              Book a relocation strategy call with Kayden directly. Walk through your tax scenario, school priorities, neighborhood criteria, and timeline. If Charlotte fits, you leave with a clear plan. If it doesn&apos;t, you have the data to confirm you&apos;re in the right place already.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-hero-dark border-y border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/30 font-body">
            <span>✓ Direct access to Kayden</span>
            <span>✓ No obligation. No pitch.</span>
            <span>✓ Tax scenario modeled before first showing</span>
            <span>✓ Typical call: 30 minutes</span>
          </div>
        </div>
      </section>

      {/* BOOKING + WHAT TO EXPECT */}
      <section className="bg-hero-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Calendly Placeholder */}
            <FadeIn>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-8 md:p-12 min-h-[500px] flex items-center justify-center">
                <div className="text-center">
                  <p className="font-heading text-2xl text-white font-semibold mb-4">Schedule Your Call</p>
                  <p className="text-white/40 font-body mb-6">Calendly booking widget will be embedded here.</p>
                  <div className="bg-gold/5 border border-gold/10 rounded-lg p-6">
                    <p className="text-sm text-white/60 font-body font-medium">Prefer to reach out directly?</p>
                    <p className="text-sm text-white/40 font-body mt-2">Call or text Kayden directly. No gatekeepers. No assistants.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* What to expect */}
            <div>
              <FadeIn>
                <h2 className="font-heading text-3xl md:text-4xl tracking-tight text-white font-semibold mb-8">
                  What Happens <span className="text-gold">on the Call</span>
                </h2>
              </FadeIn>

              <div className="space-y-8">
                {[
                  {
                    num: "01", title: "Your Financial Picture",
                    body: "Kayden reviews your current state income tax rate, property tax burden, and private school tuition costs. You\u2019ll see the exact annual savings a Charlotte relocation produces for your household.",
                  },
                  {
                    num: "02", title: "Your Lifestyle Priorities",
                    body: "Commute requirements. School priorities. Social and community needs. Weekend patterns. Kayden maps these against Charlotte\u2019s micro-markets and gives you an initial neighborhood shortlist.",
                  },
                  {
                    num: "03", title: "Your Timeline and Next Steps",
                    body: "Whether you\u2019re moving in 6 months or 2 years, Kayden outlines the optimal sequence: when to list your current home, when to visit Charlotte, and how to structure the transition.",
                  },
                ].map((step, i) => (
                  <FadeIn key={i} delay={100 + i * 100}>
                    <div className="relative pl-12">
                      <span className="absolute left-0 top-0 font-heading text-3xl text-gold/20 font-bold">{step.num}</span>
                      <h3 className="font-heading text-xl text-white font-semibold mb-2">{step.title}</h3>
                      <p className="text-[15px] leading-relaxed text-white/40 font-body">{step.body}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={500}>
                <p className="mt-8 text-sm text-white/30 font-body italic">
                  No sales pitch. No artificial urgency. No pressure to commit. You&apos;ll either have a clear plan or clear confirmation that staying put is the right call.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="bg-hero-dark py-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/30 font-body">
            <span>✓ Licensed NC Broker</span>
            <span>✓ INNOVATE Real Estate</span>
            <span>✓ Equity Owner</span>
            <span>✓ 12-Month Post-Close Support</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl tracking-tight text-warm-950 font-semibold mb-8">
              Still Have <span className="text-gold">Questions?</span>
            </h2>
          </FadeIn>
          <div className="space-y-8">
            {[
              { q: "How long is the call?", a: "30 minutes. Kayden respects your time the same way he expects you to respect his." },
              { q: "Will I be pressured to commit?", a: "No. If Charlotte doesn\u2019t fit your family\u2019s situation, Kayden will tell you. That\u2019s the fiduciary standard." },
              { q: "What if we\u2019re 12\u201324 months from moving?", a: "That\u2019s the ideal time to start. The financial modeling and neighborhood research happen well before the property search." },
              { q: "Can my spouse join?", a: "Strongly encouraged. The trailing spouse typically holds the strongest influence on neighborhood and social integration decisions. This call is designed for both of you." },
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div>
                  <h3 className="font-heading text-lg text-warm-950 font-semibold mb-2">&ldquo;{faq.q}&rdquo;</h3>
                  <p className="text-[15px] leading-relaxed text-warm-600 font-body">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="viewport-section bg-navy relative">
        <ParallaxBg src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=1920&q=80" className="opacity-15" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white font-semibold">
              Direct Access to Kayden. <span className="text-gold-light">30 Minutes. No Pitch.</span>
            </h2>
            <div className="mt-8">
              <Link href="/calculator" className="btn-outline">Not Ready? Run Your Numbers First</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
