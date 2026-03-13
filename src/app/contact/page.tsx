"use client";

import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ContactPage() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-white pt-32 pb-28 md:pt-40 md:pb-36 lg:pt-44 lg:pb-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[1.05] text-[#1a1a2e] font-light max-w-4xl">
              Your Next Step: 30 Minutes. No Pitch. Just Your Numbers.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555] mt-8">
              Book a relocation strategy call with Kayden directly. You&apos;ll walk through your tax scenario, your school priorities, your neighborhood criteria, and your timeline. If Charlotte fits, you&apos;ll leave with a clear plan. If it doesn&apos;t, you&apos;ll have the data to confirm you&apos;re in the right place already.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-[#FAF8F5] border-y border-[#eee]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-[#999] tracking-[0.1em] uppercase">
            <span>Direct access to Kayden — not a scheduling coordinator</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>No obligation. No pitch. No follow-up pressure.</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>Your tax scenario modeled before the first showing</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>Typical call: 30 minutes</span>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS ON THE CALL */}
      <section className="bg-white py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light text-center mb-20">
              What Happens on the Call
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { num: "01", title: "Your Financial Picture", desc: "Kayden reviews your current state income tax rate, property tax burden, and private school tuition costs. You\u2019ll see the exact annual savings a Charlotte relocation produces for your household\u2014specific to your income, your family size, and your current location." },
              { num: "02", title: "Your Lifestyle Priorities", desc: "Commute requirements. School priorities. Social and community needs. Weekend patterns. Trailing spouse considerations. Kayden maps these against Charlotte\u2019s micro-markets and gives you an initial neighborhood shortlist." },
              { num: "03", title: "Your Timeline and Next Steps", desc: "Whether you\u2019re moving in 6 months or 2 years, Kayden outlines the optimal sequence: when to list your current home, when to visit Charlotte, and how to structure the transition to capture the maximum financial benefit." },
            ].map((step, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
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
          <AnimateOnScroll>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-[#555] text-center mt-16">
              No sales pitch. No artificial urgency. No pressure to commit. You&apos;ll either have a clear plan or clear confirmation that staying put is the right call.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PROOF */}
      <section className="bg-[#FAF8F5] border-y border-[#eee]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-[#999] tracking-[0.1em] uppercase">
            <span>Licensed NC Broker</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>INNOVATE Real Estate</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>Equity Owner</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>12-Month Post-Close Support</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-28 md:py-36 lg:py-44">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light mb-16">
              Still Have Questions?
            </h2>
          </AnimateOnScroll>
          {[
            { q: "\u201cHow long is the call?\u201d", a: "30 minutes. Kayden respects your time the same way he expects you to respect his." },
            { q: "\u201cWill I be pressured to commit?\u201d", a: "No. If Charlotte doesn\u2019t fit your family\u2019s situation, Kayden will tell you. That\u2019s the fiduciary standard." },
            { q: "\u201cWhat if we\u2019re 12\u201324 months from moving?\u201d", a: "That\u2019s the ideal time to start. The financial modeling and neighborhood research happen well before the property search." },
            { q: "\u201cCan my spouse join?\u201d", a: "Strongly encouraged. The trailing spouse typically holds the strongest influence on neighborhood and social integration decisions. This call is designed for both of you." },
          ].map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 80}>
              <div className="mb-10">
                <h3 className="font-serif text-xl text-[#1a1a2e] mb-3 font-light">{item.q}</h3>
                <p className="text-base leading-relaxed text-[#555]">{item.a}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#FAF8F5] py-28 md:py-36 lg:py-44">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light mb-6">
              Book Your Call Now
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-[#555] mb-10">
              Direct access to Kayden. 30 minutes. No pitch.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <Link href="/contact" className="inline-block px-10 py-4 bg-[#c9a84c] text-white text-sm tracking-[0.1em] uppercase font-semibold hover:bg-[#d4b96a] transition-all duration-300">
              Book Your Call Now
            </Link>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <p className="text-base text-[#555] mt-12">
              Prefer to reach out directly? Call or text Kayden. No gatekeepers. No assistants.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
