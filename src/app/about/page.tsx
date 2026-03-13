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

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="bg-navy text-white py-20 lg:py-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-4xl mx-auto px-6 lg:px-8"
        >
          <motion.h1
            variants={fadeIn}
            className="font-serif text-4xl md:text-5xl leading-tight mb-6"
          >
            Your Agent Should Know the Tax Code as Well as the{" "}
            <span className="text-gold">School Zones.</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
            Kayden Benfield is a North Carolina licensed broker with INNOVATE Real Estate who specializes in one thing: helping high-income families from coastal metros capture the full financial and lifestyle arbitrage of relocating to Charlotte. No fluff. No runaround. No surprises.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gold text-navy font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
            >
              Book Your Relocation Strategy Call
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-cream border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-charcoal">
            <span>✓ NC Licensed Broker (highest state standard)</span>
            <span>✓ INNOVATE Real Estate — #1 Non-Franchised Brokerage, East Coast</span>
            <span>✓ Equity Owner in Brokerage — Your Outcome Is His Outcome</span>
            <span>✓ Multi-State MLS Access Across 10 States</span>
          </div>
        </div>
      </section>

      {/* THE AGENT PROBLEM */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-28"
      >
        <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-4xl text-navy mb-8">
          The Agent Problem
        </motion.h2>
        <motion.div variants={fadeIn} className="text-charcoal leading-relaxed space-y-4">
          <p>
            You&apos;ve probably worked with a real estate agent before. And if your experience was anything like most high-income relocators&apos;, it looked something like this: an agent who couldn&apos;t explain the tax implications of crossing state lines. Properties shown that blatantly ignored your stated criteria. Communication blackouts during the most stressful weeks of the process. Hand-offs to a junior team member who had never heard your name.
          </p>
          <p>
            When you&apos;re moving your family 800 miles and deploying $1M+ in capital, that&apos;s not a minor inconvenience. That&apos;s a six-figure risk managed by someone who treats your transaction like one of forty in their pipeline.
          </p>
        </motion.div>
      </motion.section>

      {/* CROSSHEAD */}
      <section className="bg-navy text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="font-serif text-3xl md:text-4xl"
          >
            Built for Relocators. <span className="text-gold">Not for Volume.</span>
          </motion.h2>
        </div>
      </section>

      {/* WHY KAYDEN BUILT THIS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-28"
      >
        <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-4xl text-navy mb-12">
          Why Kayden Built This
        </motion.h2>

        <motion.div variants={fadeIn} className="mb-16">
          <h3 className="font-serif text-xl text-navy mb-4">The Origin</h3>
          <div className="text-charcoal leading-relaxed space-y-4">
            <p>
              Kayden Benfield earned his broker&apos;s license while completing his degree at Appalachian State University—building a real estate career and finishing school simultaneously. That work ethic is the foundation of everything he does today.
            </p>
            <p>
              He watched talented professionals relocate to the Charlotte metro and make avoidable mistakes: buying in the wrong neighborhood because they relied on Zillow filters instead of local knowledge. Overpaying by $50K+ because they didn&apos;t understand micro-market dynamics. Spending their first year feeling isolated because no one helped them connect to the social fabric of their new community. They&apos;d captured the financial arbitrage on paper but lost half of it through bad decisions and missed connections.
            </p>
            <p>Kayden built his relocation advisory to close that gap.</p>
          </div>
        </motion.div>

        <motion.h3 variants={fadeIn} className="font-serif text-2xl text-navy mb-8">
          The Approach
        </motion.h3>

        <div className="space-y-12">
          {[
            {
              title: "Lifestyle First, Properties Last",
              text: "Your home search starts with a deep conversation about how you live today—your commute, your kids' school priorities, your weekend patterns, your spouse's social needs, your proximity requirements. Properties are the final step, not the first. By the time you see a home, it's already been validated against every dimension that matters to your family.",
            },
            {
              title: "Radical Transparency as a Standard",
              text: "Kayden is known for being straightforward, honest, and direct. He tells you exactly what's happening, what to expect, and walks you through every step. If a property has foundation concerns, you hear about it before you ask. If a neighborhood is about to be rezoned, you know before you make an offer. If a deal doesn't serve your long-term wealth, he'll tell you to walk away—even when it costs him the commission.",
            },
            {
              title: "Ownership Stake, Not Just a License",
              text: "Kayden holds equity ownership in INNOVATE Real Estate—the #1 non-franchised brokerage on the East Coast by transaction volume. His name is on the company. Your transaction is a direct reflection of his personal brand, his professional reputation, and his financial interest. That's a different incentive structure than a franchise agent who clocks out at 5 PM.",
            },
            {
              title: "Your Agent. Not Your Agent's Assistant.",
              text: "Kayden isn't juggling 40 deals. When you hire him, you get him—direct cell, direct communication, direct accountability. For a $1M+ relocation, that level of personal attention is the difference between a smooth transition and a six-figure mistake.",
            },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeIn}>
              <h4 className="font-serif text-lg text-navy mb-3">{item.title}</h4>
              <p className="text-charcoal leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CREDENTIALS */}
      <section className="bg-cream py-20 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-4xl mx-auto px-6 lg:px-8"
        >
          <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-4xl text-navy mb-10">
            Credentials
          </motion.h2>
          <div className="space-y-4">
            {[
              "Licensed North Carolina Broker — NC requires broker-level licensure for all agents, a higher standard than most states",
              "INNOVATE Real Estate — #1 non-franchised brokerage on the East Coast by transaction volume, operations in 10+ states",
              "Agent Equity Model — ownership shares in the brokerage align Kayden's incentives directly with client outcomes",
              "Tech-Forward Platform — Real Geeks CRM, multi-state MLS access, institutional-grade digital marketing infrastructure",
              "Geographic Range — Charlotte metro, western NC mountains (Boone, Black Mountain, Hendersonville), and coastal SC",
            ].map((cred, i) => (
              <motion.div key={i} variants={fadeIn} className="flex items-start gap-3">
                <span className="text-gold mt-1 flex-shrink-0">✓</span>
                <p className="text-charcoal">{cred}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CLOSE — FAQs */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-28"
      >
        <div className="space-y-10">
          <motion.div variants={fadeIn}>
            <h3 className="font-serif text-lg text-navy mb-3">&quot;He seems young. Does he have enough experience?&quot;</h3>
            <p className="text-charcoal leading-relaxed">
              Kayden built a real estate career while completing his university degree. He holds broker-level licensure in a state that requires the highest standard for all agents. He&apos;s backed by INNOVATE&apos;s institutional infrastructure, has equity ownership in the brokerage, and treats every client as his most important because at this stage of a focused practice, you are. The question isn&apos;t how many transactions he&apos;s closed. The question is how much attention and care your $1M+ relocation will receive.
            </p>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="font-serif text-lg text-navy mb-3">&quot;Why not just use a big-name Charlotte firm?&quot;</h3>
            <p className="text-charcoal leading-relaxed">
              Large firms offer brand recognition. What they rarely offer is direct access to the person managing your transaction. Heritage brokerages cycle clients through intake coordinators, junior agents, and administrative staff. Kayden answers his own phone. He writes his own market analyses. He shows up to every walkthrough. The precision of an established firm. The responsiveness of someone who answers their own phone.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <section className="bg-navy text-white py-20 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-3xl mx-auto px-6 lg:px-8 text-center"
        >
          <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-4xl mb-6">
            Book Your Relocation Strategy Call
          </motion.h2>
          <motion.p variants={fadeIn} className="text-gray-300 leading-relaxed mb-8">
            30 minutes. No pitch. Just your numbers and your questions, answered directly.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-gold text-navy font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
            >
              Book Your Relocation Strategy Call
            </Link>
            <p className="mt-4 text-sm text-gray-400">Direct access to Kayden. Not a scheduling coordinator.</p>
          </motion.div>
        </motion.div>
      </section>

      <div className="h-16 lg:hidden" />
    </div>
  );
}
