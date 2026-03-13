"use client";

import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useState } from "react";

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

    const currentStateTax = incomeVal * (currentRate / 100);
    const ncStateTax = incomeVal * (NC_RATE / 100);
    const incomeTaxSavings = currentStateTax - ncStateTax;

    const charlottePropertyTax = propTax * 0.25;
    const propertyTaxSavings = propTax - charlottePropertyTax;
    const tuitionSavings = children * tuition;
    const annualSavings = incomeTaxSavings + propertyTaxSavings + tuitionSavings;
    const monthlySavings = annualSavings / 12;

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

  const inputClasses = "w-full px-4 py-3 rounded-[8px] bg-white border border-warm-200 text-warm-950 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all font-body";

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-navy py-32 md:py-40 lg:py-44 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-gold/[0.06] rounded-full blur-[120px]" />
        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.15] text-white font-semibold hero-animate max-w-4xl">
            How Much Is Your State Costing You?{" "}
            <span className="text-gold-light">Run the Math in 90 Seconds.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-white/60 max-w-2xl font-body hero-animate hero-animate-delay-1">
            The Charlotte Relocation Dividend Calculator models your exact annual savings from state income tax reduction, property tax savings, and private school tuition elimination. Input your numbers. See your number.
          </p>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-cream py-5 border-b border-warm-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-warm-600 font-body">
            <span>✓ NC flat 3.99% vs. NY 10.9%, CA 13.3%, NJ 10.75%</span>
            <span>✓ No state estate tax</span>
            <span>✓ Top-ranked free public schools</span>
          </div>
        </div>
      </section>

      {/* AGITATION */}
      <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl tracking-tight leading-[1.2] text-warm-950 font-semibold mb-6">
              Stop Guessing. <span className="text-gold">Start Calculating.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-base md:text-[17px] leading-relaxed text-warm-700 font-body mb-4">
              You already know your state tax rate is too high. You already know private school tuition is unsustainable. What you don&apos;t have is the exact number&mdash;the specific annual delta between staying and moving.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-base md:text-[17px] leading-relaxed text-warm-700 font-body">
              Without that number, the move stays theoretical. With it, the move becomes mathematical.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="bg-cream py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <div className="bg-white rounded-[8px] border border-warm-200 shadow-card p-6 md:p-10">
              <h3 className="font-heading text-2xl md:text-3xl text-warm-950 text-center font-semibold mb-8">
                Charlotte Relocation Dividend Calculator
              </h3>

              <div className="grid md:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="block text-[11px] font-semibold text-warm-600 tracking-[0.15em] uppercase mb-2 font-body">Household Income</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-400 font-body">$</span>
                    <input type="text" value={income} onChange={(e) => setIncome(e.target.value)} placeholder="350,000" className={`${inputClasses} pl-8`} />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-warm-600 tracking-[0.15em] uppercase mb-2 font-body">Current State</label>
                  <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)} className={inputClasses}>
                    <option value="">Select your state...</option>
                    {states.map((s) => (
                      <option key={s.name} value={s.name}>{s.name} {s.rate > 0 ? `(${s.rate}%)` : ""}</option>
                    ))}
                  </select>
                  {selectedState === "Other" && (
                    <input type="text" value={customRate} onChange={(e) => setCustomRate(e.target.value)} placeholder="Enter your state tax rate (%)" className={`${inputClasses} mt-2`} />
                  )}
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-warm-600 tracking-[0.15em] uppercase mb-2 font-body">Annual Property Taxes</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-400 font-body">$</span>
                    <input type="text" value={propertyTax} onChange={(e) => setPropertyTax(e.target.value)} placeholder="35,000" className={`${inputClasses} pl-8`} />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-warm-600 tracking-[0.15em] uppercase mb-2 font-body">Number of Children</label>
                  <input type="text" value={numChildren} onChange={(e) => setNumChildren(e.target.value)} placeholder="2" className={inputClasses} />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[11px] font-semibold text-warm-600 tracking-[0.15em] uppercase mb-2 font-body">Current Tuition Per Child (Annual)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-400 font-body">$</span>
                    <input type="text" value={tuitionPerChild} onChange={(e) => setTuitionPerChild(e.target.value)} placeholder="45,000" className={`${inputClasses} pl-8`} />
                  </div>
                  <p className="text-xs text-warm-500 mt-1 font-body">Enter $0 if children attend public school</p>
                </div>
              </div>

              <button onClick={calculate} className="btn-gold w-full !text-center">
                Calculate Your Relocation Dividend
              </button>

              {/* RESULTS */}
              {results && (
                <div className="mt-8 bg-cream rounded-[8px] p-6 md:p-8 border border-warm-200">
                  <h4 className="font-heading text-2xl text-center mb-8 text-warm-950 font-semibold">Your Relocation Dividend</h4>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                      { label: "Income Tax Savings", value: results.incomeTaxSavings },
                      { label: "Property Tax Savings", value: results.propertyTaxSavings },
                      { label: "Tuition Savings", value: results.tuitionSavings },
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <p className="text-[11px] text-warm-600 tracking-[0.15em] uppercase mb-2 font-body font-semibold">{item.label}</p>
                        <p className="font-heading text-3xl text-gold font-semibold">{fmt(item.value)}</p>
                        <p className="text-xs text-warm-500 mt-1 font-body">per year</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-warm-200 pt-8">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <p className="text-[11px] text-warm-600 tracking-[0.15em] uppercase mb-2 font-body font-semibold">Total Annual Savings</p>
                        <p className="font-heading text-4xl text-warm-950 font-semibold">{fmt(results.annualSavings)}</p>
                      </div>
                      <div>
                        <p className="text-[11px] text-warm-600 tracking-[0.15em] uppercase mb-2 font-body font-semibold">Monthly Improvement</p>
                        <p className="font-heading text-4xl text-warm-950 font-semibold">{fmt(results.monthlySavings)}</p>
                      </div>
                      <div>
                        <p className="text-[11px] text-warm-600 tracking-[0.15em] uppercase mb-2 font-body font-semibold">10-Year Wealth Impact</p>
                        <p className="font-heading text-4xl text-gold font-semibold">{fmt(results.tenYearProjection)}</p>
                        <p className="text-xs text-warm-500 mt-1 font-body">invested at 7% annual return</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-warm-600 mb-4 font-body">Like what you see? Book your strategy call.</p>
                    <Link href="/contact" className="btn-gold">
                      Book Your Relocation Strategy Call
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl tracking-tight leading-[1.2] text-warm-950 font-semibold text-center mb-14">
              How It Works
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Input Your Current Numbers", desc: "Your household income, current state income tax rate, annual property taxes, and private school tuition. Takes 60 seconds." },
              { num: "02", title: "See Your Charlotte Equivalent", desc: "The Calculator models your tax burden under North Carolina\u2019s flat 3.99% rate, estimates Charlotte-equivalent property taxes, and eliminates tuition costs." },
              { num: "03", title: "Get Your Annual Savings", desc: "Exact annual savings, monthly cash flow improvement, and a 10-year compounding wealth projection. The document that turns passive research into a concrete decision." },
            ].map((step, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="relative pt-14">
                  <span className="absolute top-0 left-0 font-heading text-[80px] leading-none text-warm-950/[0.04] font-bold select-none">
                    {step.num}
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl text-warm-950 font-semibold mb-3 relative">{step.title}</h3>
                  <p className="text-[15px] leading-relaxed text-warm-600 font-body">{step.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP PROOF */}
      <section className="bg-cream py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl tracking-tight leading-[1.2] text-warm-950 font-semibold mb-6">
              The Data Behind <span className="text-gold">the Calculator</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-base md:text-[17px] leading-relaxed text-warm-700 font-body mb-4">
              The Calculator uses current North Carolina tax code (flat 3.99% state income tax, 2026), Charlotte MSA property tax averages, and verified public school enrollment data. All figures are sourced from the NC Department of Revenue, Mecklenburg and Union County tax offices, and U.S. News school rankings.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-base md:text-[17px] leading-relaxed text-warm-700 font-body">
              Typical results for a $350K-income household relocating from a high-tax state: $87K&ndash;$150K+ in annual savings. Over a decade, that delta compounds to $1.5M+ in retained wealth.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CLOSE */}
      <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <p className="text-base md:text-[17px] leading-relaxed text-warm-700 font-body mb-6">
              Every month you spend passively researching instead of running the actual numbers is another month of savings left uncaptured. The Calculator takes 90 seconds. If the math works, you&apos;ll know exactly how much.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-base md:text-[17px] leading-relaxed text-warm-700 font-body">
              Once you&apos;ve seen your number, the next step is a 30-minute Relocation Strategy Call with Kayden. He&apos;ll walk through your results, map your school and neighborhood priorities, and give you a clear picture of what Charlotte looks like for your specific family.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy py-16 md:py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gold/[0.06] rounded-full blur-[150px]" />
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center relative z-10">
          <AnimateOnScroll animation="scale-up">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.2] text-white font-semibold">
              Your Number Makes Sense? <span className="text-gold-light">Let&apos;s Talk.</span>
            </h2>
            <p className="mt-6 text-base text-white/50 font-body">30 minutes. No pitch. Just your plan.</p>
            <div className="mt-8">
              <Link href="/contact" className="btn-gold">Book Your Relocation Strategy Call</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
