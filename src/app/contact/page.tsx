"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { q: "How long is the call?", a: "30 minutes. Kayden respects your time the same way he expects you to respect his." },
  { q: "Will I be pressured to commit?", a: "No. If Charlotte doesn\u2019t fit your family\u2019s situation, Kayden will tell you. That\u2019s the fiduciary standard." },
  { q: "What if we\u2019re 12\u201324 months from moving?", a: "That\u2019s the ideal time to start. The financial modeling and neighborhood research happen well before the property search." },
  { q: "Can my spouse join?", a: "Strongly encouraged. The trailing spouse typically holds the strongest influence on neighborhood and social integration decisions. This call is designed for both of you." },
];

const steps = [
  { num: "01", title: "Your Financial Picture", desc: "Kayden reviews your current state income tax rate, property tax burden, and private school tuition costs. You\u2019ll see the exact annual savings a Charlotte relocation produces for your household\u2014specific to your income, your family size, and your current location." },
  { num: "02", title: "Your Lifestyle Priorities", desc: "Commute requirements. School priorities. Social and community needs. Weekend patterns. Trailing spouse considerations. Kayden maps these against Charlotte\u2019s micro-markets and gives you an initial neighborhood shortlist." },
  { num: "03", title: "Your Timeline and Next Steps", desc: "Whether you\u2019re moving in 6 months or 2 years, Kayden outlines the optimal sequence: when to list your current home, when to visit Charlotte, and how to structure the transition to capture the maximum financial benefit." },
];

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(".ct-hero-title", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" })
        .fromTo(".ct-hero-sub", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6")
        .fromTo(".ct-headshot", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.4)" }, "-=0.4");

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
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=1920&q=80')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 via-navy/85 to-navy-dark" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-32">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="ct-hero-title font-serif display-xl text-white mb-6 opacity-0">
                Your Next Step: 30 Minutes. No Pitch. Just Your Numbers.
              </h1>
              <p className="ct-hero-sub text-lg md:text-xl text-gray-300/90 leading-relaxed opacity-0">
                Book a relocation strategy call with Kayden directly. You&apos;ll walk through your tax scenario, your school priorities, your neighborhood criteria, and your timeline. If Charlotte fits, you&apos;ll leave with a clear plan. If it doesn&apos;t, you&apos;ll have the data to confirm you&apos;re in the right place already.
              </p>
            </div>
            <div className="ct-headshot flex-shrink-0 opacity-0">
              <div className="headshot-ring rounded-full overflow-hidden w-40 h-40 lg:w-48 lg:h-48">
                <Image
                  src="/kayden-headshot.jpg"
                  alt="Kayden Benfield"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            {["Direct access to Kayden — not a scheduling coordinator", "No obligation. No pitch. No follow-up pressure.", "Your tax scenario modeled before the first showing", "Typical call: 30 minutes"].map((item, i) => (
              <span key={i} className="flex items-center gap-2"><span className="text-gold text-xs">✦</span> {item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULING EMBED */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="reveal-block glass rounded-xl p-16 text-center border border-gold/10">
            <div className="text-gold text-4xl mb-4">📅</div>
            <h3 className="font-serif text-2xl text-white mb-3">Scheduling Widget</h3>
            <p className="text-gray-500">Calendly or scheduling tool will be embedded here.</p>
            <p className="text-gray-600 text-sm mt-2 font-sans">Direct access to Kayden. 30 minutes. No pitch.</p>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS ON THE CALL */}
      <section className="py-20 lg:py-28 section-mid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="font-serif display-lg text-white text-center mb-16">What Happens on the Call</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <div key={i} className="reveal-block glass rounded-lg p-8">
                <div className="w-14 h-14 rounded-full border border-gold/30 bg-navy-dark flex items-center justify-center font-serif text-gold text-lg mb-6">{step.num}</div>
                <h3 className="font-serif text-xl text-white mb-4">{step.title}</h3>
                <p className="text-gray-300/80 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <p className="reveal-block text-center mt-12 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            No sales pitch. No artificial urgency. No pressure to commit. You&apos;ll either have a clear plan or clear confirmation that staying put is the right call.
          </p>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="reveal-block glass rounded-xl p-10 text-center">
            <p className="text-gray-400 italic mb-6 font-serif text-lg">&ldquo;The call alone was worth it—I&apos;d been researching for months and he organized everything in 30 minutes.&rdquo;</p>
            <p className="text-xs text-gray-600 mb-8 font-sans">— Testimonial placeholder. Real client testimonials coming soon.</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              {["Licensed NC Broker", "INNOVATE Real Estate", "Equity Owner", "12-Month Post-Close Support"].map((item, i) => (
                <span key={i} className="flex items-center gap-2"><span className="text-gold text-xs">✦</span> {item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 section-mid">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="font-serif display-lg text-white text-center mb-12">Still Have Questions?</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="reveal-block glass rounded-lg p-8">
                <h3 className="font-serif text-lg text-gold mb-3">&ldquo;{faq.q}&rdquo;</h3>
                <p className="text-gray-300/80 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 lg:py-32">
        <div className="reveal-block max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="font-serif display-lg text-white mb-4">Book Your Call Now</h2>
          <p className="text-gray-500 mb-10 font-sans">Direct access to Kayden. 30 minutes. No pitch.</p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-gold text-navy font-semibold text-sm tracking-[0.1em] uppercase hover:bg-gold-light transition-all duration-300">
            Book Your Relocation Strategy Call
          </Link>
        </div>
      </section>

      {/* ALTERNATIVE CONTACT */}
      <section className="py-12 section-mid">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-lg">
            Prefer to reach out directly? Call or text Kayden at <span className="font-semibold text-white">[PHONE NUMBER]</span> or email <span className="font-semibold text-white">[EMAIL ADDRESS]</span>. No gatekeepers. No assistants.
          </p>
        </div>
      </section>
    </div>
  );
}
