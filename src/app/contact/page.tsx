"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const faqs = [
  {
    q: "How long is the call?",
    a: "30 minutes. Kayden respects your time the same way he expects you to respect his.",
  },
  {
    q: "Will I be pressured to commit?",
    a: "No. If Charlotte doesn't fit your family's situation, Kayden will tell you. That's the fiduciary standard.",
  },
  {
    q: "What if we're 12–24 months from moving?",
    a: "That's the ideal time to start. The financial modeling and neighborhood research happen well before the property search.",
  },
  {
    q: "Can my spouse join?",
    a: "Strongly encouraged. The trailing spouse typically holds the strongest influence on neighborhood and social integration decisions. This call is designed for both of you.",
  },
];

const steps = [
  {
    num: "1",
    title: "Your Financial Picture",
    desc: "Kayden reviews your current state income tax rate, property tax burden, and private school tuition costs. You'll see the exact annual savings a Charlotte relocation produces for your household—specific to your income, your family size, and your current location.",
  },
  {
    num: "2",
    title: "Your Lifestyle Priorities",
    desc: "Commute requirements. School priorities. Social and community needs. Weekend patterns. Trailing spouse considerations. Kayden maps these against Charlotte's micro-markets and gives you an initial neighborhood shortlist.",
  },
  {
    num: "3",
    title: "Your Timeline and Next Steps",
    desc: "Whether you're moving in 6 months or 2 years, Kayden outlines the optimal sequence: when to list your current home, when to visit Charlotte, and how to structure the transition to capture the maximum financial benefit.",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="bg-navy text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.h1 variants={fadeIn} className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Your Next Step: 30 Minutes. No Pitch. Just Your Numbers.
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Book a relocation strategy call with Kayden directly. You&apos;ll walk through your tax scenario, your school priorities, your neighborhood criteria, and your timeline. If Charlotte fits, you&apos;ll leave with a clear plan. If it doesn&apos;t, you&apos;ll have the data to confirm you&apos;re in the right place already.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-champagne border-y border-gold/20 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base text-navy font-medium">
          <span>✓ Direct access to Kayden — not a scheduling coordinator</span>
          <span>✓ No obligation. No pitch. No follow-up pressure.</span>
          <span>✓ Your tax scenario modeled before the first showing</span>
          <span>✓ Typical call: 30 minutes</span>
        </div>
      </section>

      {/* SCHEDULING EMBED */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-cream border-2 border-dashed border-gold/30 rounded-lg p-16 text-center">
            <div className="text-gold text-4xl mb-4">📅</div>
            <h3 className="font-serif text-2xl text-navy mb-3">Scheduling Widget</h3>
            <p className="text-slate">Calendly or scheduling tool will be embedded here.</p>
            <p className="text-slate text-sm mt-2">Direct access to Kayden. 30 minutes. No pitch.</p>
          </motion.div>
        </div>
      </section>

      {/* WHAT HAPPENS ON THE CALL */}
      <section className="py-20 lg:py-28 bg-light-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-3xl md:text-4xl text-navy text-center mb-16">
            What Happens on the Call
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white rounded-lg p-8 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-gold text-navy flex items-center justify-center font-serif text-xl font-bold mb-6">
                  {step.num}
                </div>
                <h3 className="font-serif text-xl text-navy mb-4">{step.title}</h3>
                <p className="text-charcoal leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-center mt-12 text-charcoal text-lg max-w-3xl mx-auto leading-relaxed">
            No sales pitch. No artificial urgency. No pressure to commit. You&apos;ll either have a clear plan or clear confirmation that staying put is the right call.
          </motion.p>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-cream border border-gold/10 rounded-lg p-10 text-center">
            <p className="text-slate italic mb-6">&ldquo;The call alone was worth it—I&apos;d been researching for months and he organized everything in 30 minutes.&rdquo;</p>
            <p className="text-xs text-slate mb-8">— Testimonial placeholder. Real client testimonials coming soon.</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-navy font-medium">
              <span>✓ Licensed NC Broker</span>
              <span>✓ INNOVATE Real Estate</span>
              <span>✓ Equity Owner</span>
              <span>✓ 12-Month Post-Close Support</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-light-gray">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-navy text-center mb-12">Still Have Questions?</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-sm"
              >
                <h3 className="font-serif text-lg text-navy mb-3">&ldquo;{faq.q}&rdquo;</h3>
                <p className="text-charcoal leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy text-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Book Your Call Now</h2>
            <p className="text-gray-400 mb-10">Direct access to Kayden. 30 minutes. No pitch.</p>
            <Link href="/contact" className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 rounded text-lg transition-colors">
              Book Your Relocation Strategy Call
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ALTERNATIVE CONTACT */}
      <section className="py-12 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-charcoal text-lg">
            Prefer to reach out directly? Call or text Kayden at <span className="font-semibold text-navy">[PHONE NUMBER]</span> or email <span className="font-semibold text-navy">[EMAIL ADDRESS]</span>. No gatekeepers. No assistants.
          </p>
        </div>
      </section>
    </div>
  );
}
