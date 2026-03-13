"use client";

import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ContactPage() {
  return (
    <div>
      {/* HERO */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-heading max-w-4xl">
              Your Next Step: 30 Minutes. No Pitch. Just Your Numbers.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <p className="mt-6 md:mt-8 text-lg leading-relaxed text-body max-w-2xl">
              Book a relocation strategy call with Kayden directly. You&apos;ll walk through your tax scenario, your school priorities, your neighborhood criteria, and your timeline. If Charlotte fits, you&apos;ll leave with a clear plan. If it doesn&apos;t, you&apos;ll have the data to confirm you&apos;re in the right place already.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="py-5 border-y border-border-light">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-body-light font-body">
            <span>✓ Direct access to Kayden — not a scheduling coordinator</span>
            <span>✓ No obligation. No pitch.</span>
            <span>✓ Tax scenario modeled before first showing</span>
            <span>✓ Typical call: 30 minutes</span>
          </div>
        </div>
      </section>

      {/* BOOKING + WHAT TO EXPECT */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Calendly Placeholder */}
            <AnimateOnScroll>
              <div className="card p-8 md:p-12 min-h-[500px] flex items-center justify-center">
                <div className="text-center">
                  <p className="font-heading text-2xl text-heading mb-4">Schedule Your Call</p>
                  <p className="text-body font-body mb-6">Calendly booking widget will be embedded here.</p>
                  <div className="bg-warm-bg rounded-xl p-6 border border-border-light">
                    <p className="text-sm text-heading font-body font-medium">Prefer to reach out directly?</p>
                    <p className="text-sm text-body mt-2 font-body">Call or text Kayden directly. No gatekeepers. No assistants.</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* What to expect */}
            <div>
              <AnimateOnScroll>
                <h2 className="font-heading text-3xl md:text-4xl text-heading mb-8 md:mb-12">
                  What Happens on the Call
                </h2>
              </AnimateOnScroll>

              <div className="space-y-8">
                {[
                  { num: "01", title: "Your Financial Picture", body: "Kayden reviews your current state income tax rate, property tax burden, and private school tuition costs. You\u2019ll see the exact annual savings a Charlotte relocation produces for your household." },
                  { num: "02", title: "Your Lifestyle Priorities", body: "Commute requirements. School priorities. Social and community needs. Weekend patterns. Kayden maps these against Charlotte\u2019s micro-markets and gives you an initial neighborhood shortlist." },
                  { num: "03", title: "Your Timeline and Next Steps", body: "Whether you\u2019re moving in 6 months or 2 years, Kayden outlines the optimal sequence: when to list your current home, when to visit Charlotte, and how to structure the transition." },
                ].map((step, i) => (
                  <AnimateOnScroll key={i} delay={100 + i * 100}>
                    <div className="flex gap-5">
                      <span className="font-heading text-3xl text-border leading-none flex-shrink-0">{step.num}</span>
                      <div>
                        <h3 className="font-heading text-xl text-heading mb-2">{step.title}</h3>
                        <p className="text-[15px] leading-relaxed text-body font-body">{step.body}</p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>

              <AnimateOnScroll delay={500}>
                <p className="mt-8 text-sm text-body-light font-body italic">
                  No sales pitch. No artificial urgency. No pressure to commit. You&apos;ll either have a clear plan or clear confirmation that staying put is the right call.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-5 border-y border-border-light">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-body-light font-body">
            <span>✓ Licensed NC Broker</span>
            <span>✓ INNOVATE Real Estate</span>
            <span>✓ Equity Owner</span>
            <span>✓ 12-Month Post-Close Support</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl text-heading mb-8 md:mb-12">Still Have Questions?</h2>
          </AnimateOnScroll>
          <div className="space-y-8">
            {[
              { q: "How long is the call?", a: "30 minutes. Kayden respects your time the same way he expects you to respect his." },
              { q: "Will I be pressured to commit?", a: "No. If Charlotte doesn\u2019t fit your family\u2019s situation, Kayden will tell you. That\u2019s the fiduciary standard." },
              { q: "What if we\u2019re 12\u201324 months from moving?", a: "That\u2019s the ideal time to start. The financial modeling and neighborhood research happen well before the property search." },
              { q: "Can my spouse join?", a: "Strongly encouraged. The trailing spouse typically holds the strongest influence on neighborhood and social integration decisions. This call is designed for both of you." },
            ].map((faq, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div>
                  <h3 className="font-heading text-lg text-heading mb-2">&ldquo;{faq.q}&rdquo;</h3>
                  <p className="text-[15px] leading-relaxed text-body font-body">{faq.a}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="dark-section py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto px-8 md:px-12 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Direct Access to Kayden. 30 Minutes. No Pitch.
            </h2>
            <div className="mt-8">
              <Link href="/calculator" className="btn-secondary !border-white/30 !text-white hover:!border-white">Not Ready? Run Your Numbers First</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
