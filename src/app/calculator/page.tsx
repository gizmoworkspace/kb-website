"use client";

import Link from "next/link";
import { FadeIn, ParallaxBg } from "@/components/ScrollAnimations";
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

  const inputClasses = "w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all font-body";

  return (
    <div>
      {/* HERO */}
      <section className="viewport-section bg-hero-dark relative">
        <ParallaxBg src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=1920&q=80" className="opacity-20" />
        <div className="absolute inset-0 bg-hero-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[1.05] text-white font-semibold max-w-4xl">
              How Much Is Your State Costing You?{" "}
              <span className="text-gold-light">Run the Math in 90 Seconds.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/50 max-w-2xl font-body">
              The Charlotte Relocation Dividend Calculator models your exact annual savings from state income tax reduction, property tax savings, and private school tuition elimination. Input your numbers. See your number.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-hero-dark border-y border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/30 font-body">
            <span>✓ NC flat 3.99% vs. NY 10.9%, CA 13.3%, NJ 10.75%</span>
            <span>✓ No state estate tax</span>
            <span>✓ Top-ranked free public schools</span>
          </div>
        </div>
      </section>

      {/* AGITATION */}
      <section className="bg-hero-dark py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl tracking-tight text-white font-semibold mb-6">
              Stop Guessing. <span className="text-gold">Start Calculating.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg leading-relaxed text-white/50 font-body mb-4">
              You already know your state tax rate is too high. You already know private school tuition is unsustainable. What you don&apos;t have is the exact number&mdash;the specific annual delta between staying and moving.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg leading-relaxed text-white/50 font-body">
              Without that number, the move stays theoretical. With it, the move becomes mathematical.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="bg-hero-dark py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-6 md:p-10">
              <h3 className="font-heading text-2xl md:text-3xl text-white text-center font-semibold mb-8">
                Charlotte Relocation Dividend Calculator
              </h3>

              <div className="grid md:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="block text-[11px] font-semibold text-white/40 tracking-[0.15em] uppercase mb-2 font-body">Household Income</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 font-body">$</span>
                    <input type="text" value={income} onChange={(e) => setIncome(e.target.value)} placeholder="350,000" className={`${inputClasses} pl-8`} />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-white/40 tracking-[0.15em] uppercase mb-2 font-body">Current State</label>
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
                  <label className="block text-[11px] font-semibold text-white/40 tracking-[0.15em] uppercase mb-2 font-body">Annual Property Taxes</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 font-body">$</span>
                    <input type="text" value={propertyTax} onChange={(e) => setPropertyTax(e.target.value)} placeholder="35,000" className={`${inputClasses} pl-8`} />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-white/40 tracking-[0.15em] uppercase mb-2 font-body">Number of Children</label>
                  <input type="text" value={numChildren} onChange={(e) => setNumChildren(e.target.value)} placeholder="2" className={inputClasses} />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[11px] font-semibold text-white/40 tracking-[0.15em] uppercase mb-2 font-body">Current Tuition Per Child (Annual)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 font-body">$</span>
                    <input type="text" value={tuitionPerChild} onChange={(e) => setTuitionPerChild(e.target.value)} placeholder="45,000" className={`${inputClasses} pl-8`} />
                  </div>
                  <p className="text-xs text-white/20 mt-1 font-body">Enter $0 if children attend public school</p>
                </div>
              </div>

              <button onClick={calculate} className="btn-gold w-full !text-center">
                Calculate Your Relocation Dividend
              </button>

              {/* RESULTS */}
              {results && (
                <div className="mt-8 bg-white/[0.03] rounded-lg p-6 md:p-8 border border-white/[0.06]">
                  <h4 className="font-heading text-2xl text-center mb-8 text-white font-semibold">Your Relocation Dividend</h4>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                      { label: "Income Tax Savings", value: results.incomeTaxSavings },
                      { label: "Property Tax Savings", value: results.propertyTaxSavings },
                      { label: "Tuition Savings", value: results.tuitionSavings },
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <p className="text-[11px] text-white/40 tracking-[0.15em] uppercase mb-2 font-body font-semibold">{item.label}</p>
                        <p className="font-heading text-3xl text-gold font-semibold">{fmt(item.value)}</p>
                        <p className="text-xs text-white/20 mt-1 font-body">per year</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/[0.06] pt-8">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <p className="text-[11px] text-white/40 tracking-[0.15em] uppercase mb-2 font-body font-semibold">Total Annual Savings</p>
                        <p className="font-heading text-4xl text-white font-semibold">{fmt(results.annualSavings)}</p>
                      </div>
                      <div>
                        <p className="text-[11px] text-white/40 tracking-[0.15em] uppercase mb-2 font-body font-semibold">Monthly Improvement</p>
                        <p className="font-heading text-4xl text-white font-semibold">{fmt(results.monthlySavings)}</p>
                      </div>
                      <div>
                        <p className="text-[11px] text-white/40 tracking-[0.15em] uppercase mb-2 font-body font-semibold">10-Year Wealth Impact</p>
                        <p className="font-heading text-4xl text-gold font-semibold">{fmt(results.tenYearProjection)}</p>
                        <p className="text-xs text-white/20 mt-1 font-body">invested at 7% annual return</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-white/40 mb-4 font-body">Like what you see? Book your strategy call.</p>
                    <Link href="/contact" className="btn-gold">
                      Book Your Relocation Strategy Call
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-hero-dark py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl text-white font-semibold">How It Works</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Input Your Current Numbers", desc: "Your household income, current state income tax rate, annual property taxes, and private school tuition. Takes 60 seconds." },
              { num: "02", title: "See Your Charlotte Equivalent", desc: "The Calculator models your tax burden under North Carolina\u2019s flat 3.99% rate, estimates Charlotte-equivalent property taxes, and eliminates tuition costs." },
              { num: "03", title: "Get Your Annual Savings", desc: "Exact annual savings, monthly cash flow improvement, and a 10-year compounding wealth projection. The document that turns passive research into a concrete decision." },
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 150}>
                <div className="relative pt-14">
                  <span className="absolute top-0 left-0 font-heading text-[80px] leading-none text-white/[0.03] font-bold select-none">{step.num}</span>
                  <h3 className="font-heading text-xl md:text-2xl text-white font-semibold mb-3 relative">{step.title}</h3>
                  <p className="text-[15px] leading-relaxed text-white/40 font-body">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP PROOF */}
      <section className="bg-hero-dark py-20 md:py-28 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-white font-semibold mb-6">
              The Data Behind <span className="text-gold">the Calculator</span>
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg leading-relaxed text-white/50 font-body mb-4">
              The Calculator uses current North Carolina tax code (flat 3.99% state income tax, 2026), Charlotte MSA property tax averages, and verified public school enrollment data. All figures are sourced from the NC Department of Revenue, Mecklenburg and Union County tax offices, and U.S. News school rankings.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg leading-relaxed text-white/50 font-body">
              Typical results for a $350K-income household relocating from a high-tax state: $87K&ndash;$150K+ in annual savings. Over a decade, that delta compounds to $1.5M+ in retained wealth.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="viewport-section bg-navy relative">
        <ParallaxBg src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=1920&q=80" className="opacity-15" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white font-semibold">
              Your Number Makes Sense? <span className="text-gold-light">Let&apos;s Talk.</span>
            </h2>
            <p className="mt-6 text-lg text-white/50 font-body">30 minutes. No pitch. Just your plan.</p>
            <div className="mt-8">
              <Link href="/contact" className="btn-gold">Book Your Relocation Strategy Call</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
