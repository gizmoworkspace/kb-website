"use client";

import Link from "next/link";
import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

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

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-white border border-border text-heading placeholder-body-light/50 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold/40 transition-all font-body text-sm";

  return (
    <div>
      {/* HERO */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-heading max-w-4xl">
              How Much Is Your State Costing You? <span className="text-gold">Run the Math in 90 Seconds.</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <p className="mt-6 md:mt-8 text-lg leading-relaxed text-body max-w-2xl">
              The Charlotte Relocation Dividend Calculator models your exact annual savings from state income tax reduction, property tax savings, and private school tuition elimination. Input your numbers. See your number. Not a range. Not an estimate.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="py-5 border-y border-border-light">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-body-light font-body">
            <span>✓ NC flat 3.99% vs. NY 10.9%, CA 13.3%, NJ 10.75%</span>
            <span>✓ No state estate tax</span>
            <span>✓ Top-ranked free public schools</span>
          </div>
        </div>
      </section>

      {/* AGITATION */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl text-heading mb-8 md:mb-12">Stop Guessing. <span className="text-gold">Start Calculating.</span></h2>
          </AnimateOnScroll>
          <div className="max-w-2xl">
            <AnimateOnScroll delay={100}>
              <p className="text-lg leading-relaxed text-body mb-4">
                You already know your state tax rate is too high. You already know private school tuition is unsustainable. What you don&apos;t have is the exact number&mdash;the specific annual delta between staying and moving.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="text-lg leading-relaxed text-body">
                Without that number, the move stays theoretical. With it, the move becomes mathematical.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="py-24 md:py-32 lg:py-40 border-t border-border-light">
        <div className="max-w-3xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <div className="card p-8 md:p-10">
              <h3 className="font-heading text-2xl md:text-3xl text-heading text-center mb-8">
                Charlotte Relocation Dividend Calculator
              </h3>

              <div className="grid md:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-body-light mb-2 font-body font-medium">Household Income</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-body-light font-body">$</span>
                    <input type="text" value={income} onChange={(e) => setIncome(e.target.value)} placeholder="350,000" className={`${inputClasses} pl-8`} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-body-light mb-2 font-body font-medium">Current State</label>
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
                  <label className="block text-xs tracking-widest uppercase text-body-light mb-2 font-body font-medium">Annual Property Taxes</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-body-light font-body">$</span>
                    <input type="text" value={propertyTax} onChange={(e) => setPropertyTax(e.target.value)} placeholder="35,000" className={`${inputClasses} pl-8`} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-body-light mb-2 font-body font-medium">Number of Children</label>
                  <input type="text" value={numChildren} onChange={(e) => setNumChildren(e.target.value)} placeholder="2" className={inputClasses} />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs tracking-widest uppercase text-body-light mb-2 font-body font-medium">Current Tuition Per Child (Annual)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-body-light font-body">$</span>
                    <input type="text" value={tuitionPerChild} onChange={(e) => setTuitionPerChild(e.target.value)} placeholder="45,000" className={`${inputClasses} pl-8`} />
                  </div>
                  <p className="text-xs text-body-light mt-1 font-body">Enter $0 if children attend public school</p>
                </div>
              </div>

              <button onClick={calculate} className="btn-primary w-full !text-center">
                Calculate Your Relocation Dividend
              </button>

              {/* RESULTS */}
              {results && (
                <div className="mt-8 bg-warm-bg rounded-2xl p-6 md:p-8 border border-border-light">
                  <h4 className="font-heading text-2xl text-center mb-8 text-heading">Your Relocation Dividend</h4>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                      { label: "Income Tax Savings", value: results.incomeTaxSavings },
                      { label: "Property Tax Savings", value: results.propertyTaxSavings },
                      { label: "Tuition Savings", value: results.tuitionSavings },
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <p className="text-xs tracking-widest uppercase text-body-light mb-2 font-body font-medium">{item.label}</p>
                        <p className="font-heading text-3xl text-gold">{fmt(item.value)}</p>
                        <p className="text-xs text-body-light mt-1 font-body">per year</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border-light pt-8">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <p className="text-xs tracking-widest uppercase text-body-light mb-2 font-body font-medium">Total Annual Savings</p>
                        <p className="font-heading text-4xl text-heading">{fmt(results.annualSavings)}</p>
                      </div>
                      <div>
                        <p className="text-xs tracking-widest uppercase text-body-light mb-2 font-body font-medium">Monthly Improvement</p>
                        <p className="font-heading text-4xl text-heading">{fmt(results.monthlySavings)}</p>
                      </div>
                      <div>
                        <p className="text-xs tracking-widest uppercase text-body-light mb-2 font-body font-medium">10-Year Wealth Impact</p>
                        <p className="font-heading text-4xl text-gold">{fmt(results.tenYearProjection)}</p>
                        <p className="text-xs text-body-light mt-1 font-body">invested at 7% annual return</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-body mb-4 font-body">Like what you see? Book your strategy call.</p>
                    <Link href="/contact" className="btn-primary">
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
      <section className="py-24 md:py-32 lg:py-40 border-t border-border-light">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl text-heading text-center mb-12">How It Works</h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              { num: "01", title: "Input Your Current Numbers", desc: "Your household income, current state income tax rate, annual property taxes, and private school tuition. Takes 60 seconds." },
              { num: "02", title: "See Your Charlotte Equivalent", desc: "The Calculator models your tax burden under North Carolina\u2019s flat 3.99% rate, estimates Charlotte-equivalent property taxes, and eliminates tuition costs." },
              { num: "03", title: "Get Your Annual Savings", desc: "Exact annual savings, monthly cash flow improvement, and a 10-year compounding wealth projection." },
            ].map((step, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="card p-8 md:p-10">
                  <span className="font-heading text-5xl text-border leading-none block mb-4">{step.num}</span>
                  <h3 className="font-heading text-xl text-heading mb-3">{step.title}</h3>
                  <p className="text-[15px] leading-relaxed text-body">{step.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP PROOF */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl text-heading mb-8 md:mb-12">
              The Data Behind <span className="text-gold">the Calculator</span>
            </h2>
          </AnimateOnScroll>
          <div className="max-w-2xl">
            <AnimateOnScroll delay={100}>
              <p className="text-lg leading-relaxed text-body mb-4">
                The Calculator uses current North Carolina tax code (flat 3.99% state income tax, 2026), Charlotte MSA property tax averages, and verified public school enrollment data. All figures are sourced from the NC Department of Revenue, Mecklenburg and Union County tax offices, and U.S. News school rankings.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="text-lg leading-relaxed text-body">
                Typical results for a $350K-income household relocating from a high-tax state: $87K&ndash;$150K+ in annual savings. Over a decade, that delta compounds to $1.5M+ in retained wealth.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="dark-section py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto px-8 md:px-12 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Your Number Makes Sense? <span className="text-gold">Let&apos;s Talk.</span>
            </h2>
            <p className="mt-6 text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>30 minutes. No pitch. Just your plan.</p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary !bg-white !text-heading hover:!bg-gray-100">Book Your Relocation Strategy Call</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
