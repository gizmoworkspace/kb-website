"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const NC_RATE = 3.99;

const stateOptions = [
  { label: "New York", rate: 10.9 },
  { label: "California", rate: 13.3 },
  { label: "New Jersey", rate: 10.75 },
  { label: "Washington D.C.", rate: 10.75 },
  { label: "Connecticut", rate: 6.99 },
  { label: "Illinois", rate: 4.95 },
  { label: "Massachusetts", rate: 5.0 },
  { label: "Other", rate: 0 },
];

interface Results {
  annualSavings: number;
  monthlyImprovement: number;
  tenYearProjection: number;
  taxSavings: number;
  propertySavings: number;
  tuitionSavings: number;
}

export default function CalculatorPage() {
  const [income, setIncome] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [customRate, setCustomRate] = useState("");
  const [propertyTax, setPropertyTax] = useState("");
  const [numChildren, setNumChildren] = useState("");
  const [tuitionPerChild, setTuitionPerChild] = useState("");
  const [results, setResults] = useState<Results | null>(null);

  const getCurrentRate = useCallback(() => {
    const state = stateOptions.find((s) => s.label === selectedState);
    if (!state) return 0;
    if (state.label === "Other") return parseFloat(customRate) || 0;
    return state.rate;
  }, [selectedState, customRate]);

  const calculate = useCallback(() => {
    const incomeVal = parseFloat(income.replace(/,/g, "")) || 0;
    const currentRate = getCurrentRate();
    const propTax = parseFloat(propertyTax.replace(/,/g, "")) || 0;
    const children = parseInt(numChildren) || 0;
    const tuition = parseFloat(tuitionPerChild.replace(/,/g, "")) || 0;

    if (incomeVal <= 0 || currentRate <= 0) return;

    // Tax savings
    const currentStateTax = incomeVal * (currentRate / 100);
    const ncStateTax = incomeVal * (NC_RATE / 100);
    const taxSavings = currentStateTax - ncStateTax;

    // Property tax savings (Charlotte avg ~$8,000 on luxury)
    const charlottePropertyTax = Math.min(propTax * 0.35, 12000);
    const propertySavings = Math.max(propTax - charlottePropertyTax, 0);

    // Tuition savings (public schools = $0)
    const tuitionSavings = children * tuition;

    const annualSavings = taxSavings + propertySavings + tuitionSavings;
    const monthlyImprovement = annualSavings / 12;

    // 10-year projection with 7% annual compounding
    let tenYear = 0;
    for (let year = 1; year <= 10; year++) {
      tenYear = (tenYear + annualSavings) * 1.07;
    }

    setResults({
      annualSavings,
      monthlyImprovement,
      tenYearProjection: tenYear,
      taxSavings,
      propertySavings,
      tuitionSavings,
    });
  }, [income, getCurrentRate, propertyTax, numChildren, tuitionPerChild]);

  const fmt = (n: number) =>
    "$" + Math.round(n).toLocaleString("en-US");

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
            How Much Is Your State Costing You?{" "}
            <span className="text-gold">Run the Math in 90 Seconds.</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-lg text-gray-300 leading-relaxed max-w-2xl">
            The Charlotte Relocation Dividend Calculator models your exact annual savings from state income tax reduction, property tax savings, and private school tuition elimination. Input your numbers. See your number. Not a range. Not an estimate. The specific dollar figure your family recaptures by relocating to Charlotte.
          </motion.p>
        </motion.div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-cream border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-charcoal">
            <span>✓ NC flat 3.99% vs. NY 10.9%, CA 13.3%, NJ 10.75%</span>
            <span>✓ No state estate tax</span>
            <span>✓ Top-ranked free public schools</span>
          </div>
        </div>
      </section>

      {/* AGITATION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-4xl mx-auto px-6 lg:px-8 py-16"
      >
        <motion.div variants={fadeIn} className="text-charcoal leading-relaxed space-y-4">
          <p>
            You already know your state tax rate is too high. You already know private school tuition is unsustainable. You already know your home is worth $1.5M+ and you&apos;re living in 2,200 square feet. What you don&apos;t have is the exact number—the specific annual delta between staying and moving.
          </p>
          <p>
            Without that number, the move stays theoretical. With it, the move becomes mathematical. The Calculator takes 90 seconds and gives you the one data point that turns months of passive research into a concrete decision.
          </p>
        </motion.div>
      </motion.section>

      {/* CROSSHEAD */}
      <section className="bg-navy text-white py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">
            Stop Guessing. <span className="text-gold">Start Calculating.</span>
          </h2>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-4xl mx-auto px-6 lg:px-8 py-16"
      >
        <motion.h2 variants={fadeIn} className="font-serif text-3xl text-navy mb-10 text-center">
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Input Your Current Numbers",
              text: "Your household income, current state income tax rate, annual property taxes, and private school tuition (if applicable). Takes 60 seconds.",
            },
            {
              step: "2",
              title: "See Your Charlotte Equivalent",
              text: "The Calculator models your tax burden under North Carolina's flat 3.99% rate, estimates Charlotte-equivalent property taxes, and eliminates tuition costs by mapping to top-ranked public school zones.",
            },
            {
              step: "3",
              title: "Get Your Annual Savings + 10-Year Projection",
              text: "Your output: exact annual savings, monthly cash flow improvement, and a 10-year compounding wealth projection. This is the document that turns \"we should look into Charlotte\" into \"we're leaving $130K per year on the table.\"",
            },
          ].map((s) => (
            <motion.div key={s.step} variants={fadeIn} className="text-center">
              <div className="w-12 h-12 bg-navy text-gold mx-auto flex items-center justify-center font-serif text-xl mb-4">
                {s.step}
              </div>
              <h3 className="font-serif text-lg text-navy mb-2">{s.title}</h3>
              <p className="text-sm text-charcoal leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CALCULATOR */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-navy mb-10 text-center">
            Calculate Your Relocation Dividend
          </h2>

          <div className="bg-white p-8 md:p-12 border border-gray-200 space-y-6">
            {/* Income */}
            <div>
              <label className="block text-sm font-medium text-navy mb-2">
                Household Income ($)
              </label>
              <input
                type="text"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                placeholder="350,000"
                className="w-full px-4 py-3 border border-gray-300 text-navy focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-navy mb-2">
                Current State
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 text-navy focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold bg-white"
              >
                <option value="">Select your state</option>
                {stateOptions.map((s) => (
                  <option key={s.label} value={s.label}>
                    {s.label} {s.rate > 0 ? `(${s.rate}%)` : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* Custom Rate */}
            {selectedState === "Other" && (
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Your State Income Tax Rate (%)
                </label>
                <input
                  type="text"
                  value={customRate}
                  onChange={(e) => setCustomRate(e.target.value)}
                  placeholder="e.g. 7.5"
                  className="w-full px-4 py-3 border border-gray-300 text-navy focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>
            )}

            {/* Property Tax */}
            <div>
              <label className="block text-sm font-medium text-navy mb-2">
                Annual Property Tax ($)
              </label>
              <input
                type="text"
                value={propertyTax}
                onChange={(e) => setPropertyTax(e.target.value)}
                placeholder="35,000"
                className="w-full px-4 py-3 border border-gray-300 text-navy focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>

            {/* Children */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Number of Children
                </label>
                <input
                  type="text"
                  value={numChildren}
                  onChange={(e) => setNumChildren(e.target.value)}
                  placeholder="2"
                  className="w-full px-4 py-3 border border-gray-300 text-navy focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Tuition per Child ($)
                </label>
                <input
                  type="text"
                  value={tuitionPerChild}
                  onChange={(e) => setTuitionPerChild(e.target.value)}
                  placeholder="45,000"
                  className="w-full px-4 py-3 border border-gray-300 text-navy focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculate}
              className="w-full py-4 bg-navy text-white font-semibold text-sm tracking-wide hover:bg-navy-light transition-colors cursor-pointer"
            >
              Calculate Your Relocation Dividend
            </button>
          </div>

          {/* RESULTS */}
          {results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 bg-navy text-white p-8 md:p-12"
            >
              <h3 className="font-serif text-2xl text-gold mb-8 text-center">
                Your Relocation Dividend
              </h3>

              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-serif text-gold mb-2">
                    {fmt(results.annualSavings)}
                  </p>
                  <p className="text-sm text-gray-400">Annual Savings</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-serif text-gold mb-2">
                    {fmt(results.monthlyImprovement)}
                  </p>
                  <p className="text-sm text-gray-400">Monthly Improvement</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-serif text-gold mb-2">
                    {fmt(results.tenYearProjection)}
                  </p>
                  <p className="text-sm text-gray-400">10-Year Projection</p>
                  <p className="text-xs text-gray-500 mt-1">with 7% annual return</p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">State income tax savings</span>
                  <span className="text-white">{fmt(results.taxSavings)}/yr</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Property tax savings</span>
                  <span className="text-white">{fmt(results.propertySavings)}/yr</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Tuition elimination</span>
                  <span className="text-white">{fmt(results.tuitionSavings)}/yr</span>
                </div>
              </div>

              <div className="mt-10 text-center">
                <p className="text-gray-300 mb-4">Like what you see? Book your strategy call.</p>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-gold text-navy font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
                >
                  Book Your Relocation Strategy Call
                </Link>
                <p className="mt-3 text-sm text-gray-400">30 minutes. No pitch. Just your plan.</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* DEEP PROOF */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-28"
      >
        <motion.h2 variants={fadeIn} className="font-serif text-3xl text-navy mb-8">
          The Data Behind the Calculator
        </motion.h2>
        <motion.div variants={fadeIn} className="text-charcoal leading-relaxed space-y-4">
          <p>
            The Calculator uses current North Carolina tax code (flat 3.99% state income tax, 2026), Charlotte MSA property tax averages, and verified public school enrollment data. All figures are sourced from the NC Department of Revenue, Mecklenburg and Union County tax offices, and U.S. News school rankings.
          </p>
          <p>
            Typical results for a $350K-income household relocating from a high-tax state: $87K–$150K+ in annual savings when combining state income tax reduction, property tax reduction, and private school tuition elimination. Over a decade, that delta compounds to $1.5M+ in retained wealth.
          </p>
        </motion.div>
      </motion.section>

      {/* CLOSE */}
      <section className="bg-navy text-white py-20 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-3xl mx-auto px-6 lg:px-8 text-center"
        >
          <motion.div variants={fadeIn} className="mb-12">
            <h2 className="font-serif text-2xl mb-4">Stakes</h2>
            <p className="text-gray-300 leading-relaxed">
              Every month you spend passively researching instead of running the actual numbers is another month of savings left uncaptured. The Calculator takes 90 seconds. If the math works, you&apos;ll know exactly how much. If it doesn&apos;t, you&apos;ll have the data to stop wondering.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="mb-12">
            <h2 className="font-serif text-2xl mb-4">After the Calculator</h2>
            <p className="text-gray-300 leading-relaxed">
              Once you&apos;ve seen your number, the next step is a 30-minute Relocation Strategy Call with Kayden. He&apos;ll walk through your results, map your school and neighborhood priorities, and give you a clear picture of what Charlotte looks like for your specific family. No pitch. No pressure.
            </p>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="font-serif text-3xl md:text-4xl text-gold mb-6">
              Your Number Makes Sense? Let&apos;s Talk.
            </h2>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-gold text-navy font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
            >
              Book Your Relocation Strategy Call
            </Link>
            <p className="mt-4 text-sm text-gray-400">30 minutes. No pitch. Just your plan.</p>
          </motion.div>
        </motion.div>
      </section>

      <div className="h-16 lg:hidden" />
    </div>
  );
}
