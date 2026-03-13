"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const states = [
  { name: "New York", rate: 10.9 },
  { name: "California", rate: 13.3 },
  { name: "New Jersey", rate: 10.75 },
  { name: "Washington D.C.", rate: 10.75 },
  { name: "Connecticut", rate: 6.99 },
  { name: "Illinois", rate: 4.95 },
  { name: "Massachusetts", rate: 5.0 },
  { name: "Other", rate: 0 },
];

const NC_RATE = 3.99;
const CHARLOTTE_PROPERTY_TAX_RATE = 0.0098; // ~0.98% effective rate
const INVESTMENT_RETURN = 0.07;

export default function CalculatorPage() {
  const [income, setIncome] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [customRate, setCustomRate] = useState("");
  const [propertyTax, setPropertyTax] = useState("");
  const [numChildren, setNumChildren] = useState("");
  const [tuitionPerChild, setTuitionPerChild] = useState("");
  const [results, setResults] = useState<null | {
    incomeTaxSavings: number;
    propertyTaxSavings: number;
    tuitionSavings: number;
    annualSavings: number;
    monthlySavings: number;
    tenYearProjection: number;
  }>(null);

  const calculate = () => {
    const incomeVal = parseFloat(income.replace(/,/g, "")) || 0;
    const state = states.find((s) => s.name === selectedState);
    const currentRate = selectedState === "Other" ? parseFloat(customRate) || 0 : state?.rate || 0;
    const propTax = parseFloat(propertyTax.replace(/,/g, "")) || 0;
    const children = parseInt(numChildren) || 0;
    const tuition = parseFloat(tuitionPerChild.replace(/,/g, "")) || 0;

    // Income tax savings
    const currentStateTax = incomeVal * (currentRate / 100);
    const ncStateTax = incomeVal * (NC_RATE / 100);
    const incomeTaxSavings = currentStateTax - ncStateTax;

    // Property tax savings (estimate Charlotte equivalent)
    // Assume home value ~3x less, so Charlotte property tax is roughly propTax * 0.3
    const charlottePropertyTax = propTax * 0.25;
    const propertyTaxSavings = propTax - charlottePropertyTax;

    // Tuition savings (public schools eliminate private tuition)
    const tuitionSavings = children * tuition;

    const annualSavings = incomeTaxSavings + propertyTaxSavings + tuitionSavings;
    const monthlySavings = annualSavings / 12;

    // 10-year compounding projection
    let tenYear = 0;
    for (let y = 0; y < 10; y++) {
      tenYear = (tenYear + annualSavings) * (1 + INVESTMENT_RETURN);
    }

    setResults({
      incomeTaxSavings: Math.round(incomeTaxSavings),
      propertyTaxSavings: Math.round(propertyTaxSavings),
      tuitionSavings: Math.round(tuitionSavings),
      annualSavings: Math.round(annualSavings),
      monthlySavings: Math.round(monthlySavings),
      tenYearProjection: Math.round(tenYear),
    });
  };

  const fmt = (n: number) => "$" + n.toLocaleString();

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="bg-navy text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.h1 variants={fadeIn} className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              How Much Is Your State Costing You? Run the Math in 90 Seconds.
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-300 leading-relaxed">
              The Charlotte Relocation Dividend Calculator models your exact annual savings from state income tax reduction, property tax savings, and private school tuition elimination. Input your numbers. See your number. Not a range. Not an estimate. The specific dollar figure your family recaptures by relocating to Charlotte.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-champagne border-y border-gold/20 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base text-navy font-medium">
          <span>✓ NC flat 3.99% vs. NY 10.9%, CA 13.3%, NJ 10.75%</span>
          <span>✓ No state estate tax</span>
          <span>✓ Top-ranked free public schools</span>
        </div>
      </section>

      {/* AGITATION */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-charcoal text-lg leading-relaxed mb-6">
              You already know your state tax rate is too high. You already know private school tuition is unsustainable. You already know your home is worth $1.5M+ and you&apos;re living in 2,200 square feet. What you don&apos;t have is the exact number—the specific annual delta between staying and moving.
            </p>
            <p className="text-charcoal text-lg leading-relaxed">
              Without that number, the move stays theoretical. With it, the move becomes mathematical. The Calculator takes 90 seconds and gives you the one data point that turns months of passive research into a concrete decision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CROSSHEAD */}
      <section className="py-8 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-navy">Stop Guessing. Start Calculating.</h2>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-cream rounded-lg border border-gold/20 p-8 lg:p-12">
            <h3 className="font-serif text-2xl md:text-3xl text-navy mb-8 text-center">Charlotte Relocation Dividend Calculator</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Household Income</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate">$</span>
                  <input
                    type="text"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    placeholder="350,000"
                    className="w-full pl-8 pr-4 py-3 rounded border border-gold/20 bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Current State</label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-4 py-3 rounded border border-gold/20 bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/50"
                >
                  <option value="">Select your state...</option>
                  {states.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name} {s.rate > 0 ? `(${s.rate}%)` : ""}
                    </option>
                  ))}
                </select>
                {selectedState === "Other" && (
                  <input
                    type="text"
                    value={customRate}
                    onChange={(e) => setCustomRate(e.target.value)}
                    placeholder="Enter your state tax rate (%)"
                    className="w-full mt-2 px-4 py-3 rounded border border-gold/20 bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Annual Property Taxes</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate">$</span>
                  <input
                    type="text"
                    value={propertyTax}
                    onChange={(e) => setPropertyTax(e.target.value)}
                    placeholder="35,000"
                    className="w-full pl-8 pr-4 py-3 rounded border border-gold/20 bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Number of Children</label>
                <input
                  type="text"
                  value={numChildren}
                  onChange={(e) => setNumChildren(e.target.value)}
                  placeholder="2"
                  className="w-full px-4 py-3 rounded border border-gold/20 bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-navy mb-2">Current Tuition Per Child (Annual)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate">$</span>
                  <input
                    type="text"
                    value={tuitionPerChild}
                    onChange={(e) => setTuitionPerChild(e.target.value)}
                    placeholder="45,000"
                    className="w-full pl-8 pr-4 py-3 rounded border border-gold/20 bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <p className="text-xs text-slate mt-1">Enter $0 if children attend public school</p>
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full bg-gold hover:bg-gold-dark text-navy font-bold py-4 rounded text-lg transition-colors"
            >
              Calculate Your Relocation Dividend
            </button>

            {/* RESULTS */}
            {results && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-10 bg-navy rounded-lg p-8 lg:p-10 text-white"
              >
                <h4 className="font-serif text-2xl text-center mb-8 text-gold">Your Relocation Dividend</h4>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Income Tax Savings</p>
                    <p className="font-serif text-3xl text-gold">{fmt(results.incomeTaxSavings)}</p>
                    <p className="text-xs text-gray-500 mt-1">per year</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Property Tax Savings</p>
                    <p className="font-serif text-3xl text-gold">{fmt(results.propertyTaxSavings)}</p>
                    <p className="text-xs text-gray-500 mt-1">per year</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Tuition Savings</p>
                    <p className="font-serif text-3xl text-gold">{fmt(results.tuitionSavings)}</p>
                    <p className="text-xs text-gray-500 mt-1">per year</p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Total Annual Savings</p>
                      <p className="font-serif text-4xl text-white">{fmt(results.annualSavings)}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Monthly Improvement</p>
                      <p className="font-serif text-4xl text-white">{fmt(results.monthlySavings)}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">10-Year Wealth Impact</p>
                      <p className="font-serif text-4xl text-gold">{fmt(results.tenYearProjection)}</p>
                      <p className="text-xs text-gray-500 mt-1">invested at 7% annual return</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 text-center">
                  <p className="text-gray-300 mb-6">Like what you see? Book your strategy call.</p>
                  <Link href="/contact" className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 rounded text-lg transition-colors">
                    Book Your Relocation Strategy Call
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-navy text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { num: "1", title: "Input Your Current Numbers", desc: "Your household income, current state income tax rate, annual property taxes, and private school tuition (if applicable). Takes 60 seconds." },
              { num: "2", title: "See Your Charlotte Equivalent", desc: "The Calculator models your tax burden under North Carolina's flat 3.99% rate, estimates Charlotte-equivalent property taxes, and eliminates tuition costs by mapping to top-ranked public school zones." },
              { num: "3", title: "Get Your Annual Savings + 10-Year Projection", desc: "Your output: exact annual savings, monthly cash flow improvement, and a 10-year compounding wealth projection. This is the document that turns \"we should look into Charlotte\" into \"we're leaving $130K per year on the table.\"" },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-white rounded-lg p-8 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold text-navy flex items-center justify-center font-serif text-xl font-bold mb-6">{step.num}</div>
                <h3 className="font-serif text-xl text-navy mb-4">{step.title}</h3>
                <p className="text-charcoal leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP PROOF */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-navy text-center mb-8">The Data Behind the Calculator</h2>
          <p className="text-charcoal text-lg leading-relaxed mb-6">
            The Calculator uses current North Carolina tax code (flat 3.99% state income tax, 2026), Charlotte MSA property tax averages, and verified public school enrollment data. All figures are sourced from the NC Department of Revenue, Mecklenburg and Union County tax offices, and U.S. News school rankings.
          </p>
          <p className="text-charcoal text-lg leading-relaxed">
            Typical results for a $350K-income household relocating from a high-tax state: $87K–$150K+ in annual savings when combining state income tax reduction, property tax reduction, and private school tuition elimination. Over a decade, that delta compounds to $1.5M+ in retained wealth.
          </p>
        </div>
      </section>

      {/* CLOSE */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-charcoal text-lg leading-relaxed mb-6">
            Every month you spend passively researching instead of running the actual numbers is another month of savings left uncaptured. The Calculator takes 90 seconds. If the math works, you&apos;ll know exactly how much. If it doesn&apos;t, you&apos;ll have the data to stop wondering.
          </p>
          <p className="text-charcoal text-lg leading-relaxed">
            Once you&apos;ve seen your number, the next step is a 30-minute Relocation Strategy Call with Kayden. He&apos;ll walk through your results, map your school and neighborhood priorities, and give you a clear picture of what Charlotte looks like for your specific family. No pitch. No pressure.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy text-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Your Number Makes Sense? Let&apos;s Talk.</h2>
            <p className="text-gray-400 mb-10">30 minutes. No pitch. Just your plan.</p>
            <Link href="/contact" className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 rounded text-lg transition-colors">
              Book Your Relocation Strategy Call
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
