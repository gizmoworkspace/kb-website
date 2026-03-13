import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ContactPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-navy py-32 md:py-40 lg:py-44 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-gold/[0.06] rounded-full blur-[120px]" />
        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.15] text-white font-semibold hero-animate max-w-4xl">
            Your Next Step: 30 Minutes. No Pitch.{" "}
            <span className="text-gold-light">Just Your Numbers.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-white/60 max-w-2xl font-body hero-animate hero-animate-delay-1">
            Book a relocation strategy call with Kayden directly. Walk through your tax scenario, school priorities, neighborhood criteria, and timeline. If Charlotte fits, you leave with a clear plan. If it doesn&apos;t, you have the data to confirm you&apos;re in the right place already.
          </p>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-cream py-5 border-b border-warm-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-warm-600 font-body">
            <span>✓ Direct access to Kayden</span>
            <span>✓ No obligation. No pitch.</span>
            <span>✓ Tax scenario modeled before first showing</span>
            <span>✓ Typical call: 30 minutes</span>
          </div>
        </div>
      </section>

      {/* BOOKING EMBED + WHAT TO EXPECT */}
      <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Calendly Placeholder */}
            <AnimateOnScroll>
              <div className="bg-warm-50 border border-warm-200 rounded-[8px] p-8 md:p-12 min-h-[500px] flex items-center justify-center">
                <div className="text-center">
                  <p className="font-heading text-2xl text-warm-950 font-semibold mb-4">Schedule Your Call</p>
                  <p className="text-warm-600 font-body mb-6">Calendly booking widget will be embedded here.</p>
                  <div className="bg-gold/10 border border-gold/20 rounded-[8px] p-6">
                    <p className="text-sm text-warm-700 font-body font-medium">Prefer to reach out directly?</p>
                    <p className="text-sm text-warm-600 font-body mt-2">Call or text Kayden directly. No gatekeepers. No assistants.</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* What to expect */}
            <div>
              <AnimateOnScroll>
                <h2 className="font-heading text-3xl md:text-4xl tracking-tight leading-[1.2] text-warm-950 font-semibold mb-8">
                  What Happens <span className="text-gold">on the Call</span>
                </h2>
              </AnimateOnScroll>

              <div className="space-y-8">
                {[
                  {
                    num: "01",
                    title: "Your Financial Picture",
                    body: "Kayden reviews your current state income tax rate, property tax burden, and private school tuition costs. You\u2019ll see the exact annual savings a Charlotte relocation produces for your household.",
                  },
                  {
                    num: "02",
                    title: "Your Lifestyle Priorities",
                    body: "Commute requirements. School priorities. Social and community needs. Weekend patterns. Kayden maps these against Charlotte\u2019s micro-markets and gives you an initial neighborhood shortlist.",
                  },
                  {
                    num: "03",
                    title: "Your Timeline and Next Steps",
                    body: "Whether you\u2019re moving in 6 months or 2 years, Kayden outlines the optimal sequence: when to list your current home, when to visit Charlotte, and how to structure the transition.",
                  },
                ].map((step, i) => (
                  <AnimateOnScroll key={i} delay={100 + i * 80}>
                    <div className="relative pl-12">
                      <span className="absolute left-0 top-0 font-heading text-3xl text-gold/30 font-bold">{step.num}</span>
                      <h3 className="font-heading text-xl text-warm-950 font-semibold mb-2">{step.title}</h3>
                      <p className="text-[15px] leading-relaxed text-warm-600 font-body">{step.body}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>

              <AnimateOnScroll delay={400}>
                <p className="mt-8 text-sm text-warm-500 font-body italic">
                  No sales pitch. No artificial urgency. No pressure to commit. You&apos;ll either have a clear plan or clear confirmation that staying put is the right call.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="bg-cream py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-warm-600 font-body">
            <span>✓ Licensed NC Broker</span>
            <span>✓ INNOVATE Real Estate</span>
            <span>✓ Equity Owner</span>
            <span>✓ 12-Month Post-Close Support</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl tracking-tight leading-[1.2] text-warm-950 font-semibold mb-8">
              Still Have <span className="text-gold">Questions?</span>
            </h2>
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
                  <h3 className="font-heading text-lg text-warm-950 font-semibold mb-2">&ldquo;{faq.q}&rdquo;</h3>
                  <p className="text-[15px] leading-relaxed text-warm-600 font-body">{faq.a}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy py-16 md:py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gold/[0.06] rounded-full blur-[150px]" />
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center relative z-10">
          <AnimateOnScroll animation="scale-up">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.2] text-white font-semibold">
              Direct Access to Kayden. <span className="text-gold-light">30 Minutes. No Pitch.</span>
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/calculator" className="btn-outline">Not Ready? Run Your Numbers First</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
