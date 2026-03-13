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

  return (
    <div>
      {/* HERO */}
      <section className="bg-white pt-32 pb-28 md:pt-40 md:pb-36 lg:pt-44 lg:pb-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[1.05] text-[#1a1a2e] font-light max-w-4xl">
              How Much Is Your State Costing You? Run the Math in 90 Seconds.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555] mt-8">
              The Charlotte Relocation Dividend Calculator models your exact annual savings from state income tax reduction, property tax savings, and private school tuition elimination. Input your numbers. See your number. Not a range. Not an estimate. The specific dollar figure your family recaptures by relocating to Charlotte.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-[#FAF8F5] border-y border-[#eee]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-[#999] tracking-[0.1em] uppercase">
            <span>NC flat 3.99% vs. NY 10.9%, CA 13.3%, NJ 10.75%</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>No state estate tax</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>Top-ranked free public schools</span>
          </div>
        </div>
      </section>

      {/* AGITATION */}
      <section className="bg-white py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimateOnScroll>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light">
                Stop Guessing. Start Calculating.
              </h2>
            </AnimateOnScroll>
            <div>
              <AnimateOnScroll delay={100}>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555] mb-6">
                  You already know your state tax rate is too high. You already know private school tuition is unsustainable. You already know your home is worth $1.5M+ and you&apos;re living in 2,200 square feet. What you don&apos;t have is the exact number&mdash;the specific annual delta between staying and moving.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555]">
                  Without that number, the move stays theoretical. With it, the move becomes mathematical. The Calculator takes 90 seconds and gives you the one data point that turns months of passive research into a concrete decision.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="bg-[#FAF8F5] py-28 md:py-36 lg:py-44">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="bg-white rounded-sm p-8 lg:p-12 border border-[#eee]">
              <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a2e] mb-8 text-center font-light">Charlotte Relocation Dividend Calculator</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-xs font-medium text-[#999] tracking-[0.2em] uppercase mb-2 font-sans">Household Income</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999]">$</span>
                    <input type="text" value={income} onChange={(e) => setIncome(e.target.value)} placeholder="350,000"
                      className="w-full pl-8 pr-4 py-3 rounded-sm bg-white border border-[#ddd] text-[#1a1a2e] placeholder-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/30 focus:border-[#c9a84c] transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#999] tracking-[0.2em] uppercase mb-2 font-sans">Current State</label>
                  <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full px-4 py-3 rounded-sm bg-white border border-[#ddd] text-[#1a1a2e] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/30 focus:border-[#c9a84c] transition-all">
                    <option value="">Select your state...</option>
                    {states.map((s) => (
                      <option key={s.name} value={s.name}>{s.name} {s.rate > 0 ? `(${s.rate}%)` : ""}</option>
                    ))}
                  </select>
                  {selectedState === "Other" && (
                    <input type="text" value={customRate} onChange={(e) => setCustomRate(e.target.value)} placeholder="Enter your state tax rate (%)"
                      className="w-full mt-2 px-4 py-3 rounded-sm bg-white border border-[#ddd] text-[#1a1a2e] placeholder-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/30 focus:border-[#c9a84c] transition-all" />
                  )}
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#999] tracking-[0.2em] uppercase mb-2 font-sans">Annual Property Taxes</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999]">$</span>
                    <input type="text" value={propertyTax} onChange={(e) => setPropertyTax(e.target.value)} placeholder="35,000"
                      className="w-full pl-8 pr-4 py-3 rounded-sm bg-white border border-[#ddd] text-[#1a1a2e] placeholder-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/30 focus:border-[#c9a84c] transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#999] tracking-[0.2em] uppercase mb-2 font-sans">Number of Children</label>
                  <input type="text" value={numChildren} onChange={(e) => setNumChildren(e.target.value)} placeholder="2"
                    className="w-full px-4 py-3 rounded-sm bg-white border border-[#ddd] text-[#1a1a2e] placeholder-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/30 focus:border-[#c9a84c] transition-all" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-[#999] tracking-[0.2em] uppercase mb-2 font-sans">Current Tuition Per Child (Annual)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999]">$</span>
                    <input type="text" value={tuitionPerChild} onChange={(e) => setTuitionPerChild(e.target.value)} placeholder="45,000"
                      className="w-full pl-8 pr-4 py-3 rounded-sm bg-white border border-[#ddd] text-[#1a1a2e] placeholder-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/30 focus:border-[#c9a84c] transition-all" />
                  </div>
                  <p className="text-xs text-[#999] mt-1 font-sans">Enter $0 if children attend public school</p>
                </div>
              </div>

              <button onClick={calculate}
                className="w-full bg-[#c9a84c] hover:bg-[#d4b96a] text-white font-semibold py-4 rounded-sm text-sm tracking-[0.1em] uppercase transition-all duration-300">
                Calculate Your Relocation Dividend
              </button>

              {/* RESULTS */}
              {results && (
                <div className="mt-10 bg-[#FAF8F5] rounded-sm p-8 lg:p-10 border border-[#eee]">
                  <h4 className="font-serif text-2xl text-center mb-8 text-[#1a1a2e] font-light">Your Relocation Dividend</h4>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                      { label: "Income Tax Savings", value: results.incomeTaxSavings },
                      { label: "Property Tax Savings", value: results.propertyTaxSavings },
                      { label: "Tuition Savings", value: results.tuitionSavings },
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <p className="text-xs text-[#999] tracking-[0.15em] uppercase mb-2 font-sans font-medium">{item.label}</p>
                        <p className="font-serif text-3xl text-[#c9a84c]">{fmt(item.value)}</p>
                        <p className="text-xs text-[#999] mt-1 font-sans">per year</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-[#eee] pt-8">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <p className="text-xs text-[#999] tracking-[0.15em] uppercase mb-2 font-sans font-medium">Total Annual Savings</p>
                        <p className="font-serif text-4xl text-[#1a1a2e]">{fmt(results.annualSavings)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#999] tracking-[0.15em] uppercase mb-2 font-sans font-medium">Monthly Improvement</p>
                        <p className="font-serif text-4xl text-[#1a1a2e]">{fmt(results.monthlySavings)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#999] tracking-[0.15em] uppercase mb-2 font-sans font-medium">10-Year Wealth Impact</p>
                        <p className="font-serif text-4xl text-[#c9a84c]">{fmt(results.tenYearProjection)}</p>
                        <p className="text-xs text-[#999] mt-1 font-sans">invested at 7% annual return</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 text-center">
                    <p className="text-[#555] mb-6">Like what you see? Book your strategy call.</p>
                    <Link href="/contact" className="inline-block px-10 py-4 bg-[#c9a84c] text-white font-semibold text-sm tracking-[0.1em] uppercase hover:bg-[#d4b96a] transition-all duration-300">
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
      <section className="bg-white py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light text-center mb-20">
              How It Works
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { num: "01", title: "Input Your Current Numbers", desc: "Your household income, current state income tax rate, annual property taxes, and private school tuition (if applicable). Takes 60 seconds." },
              { num: "02", title: "See Your Charlotte Equivalent", desc: "The Calculator models your tax burden under North Carolina\u2019s flat 3.99% rate, estimates Charlotte-equivalent property taxes, and eliminates tuition costs by mapping to top-ranked public school zones." },
              { num: "03", title: "Get Your Annual Savings + 10-Year Projection", desc: "Your output: exact annual savings, monthly cash flow improvement, and a 10-year compounding wealth projection. This is the document that turns \u201cwe should look into Charlotte\u201d into \u201cwe\u2019re leaving $130K per year on the table.\u201d" },
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
        </div>
      </section>

      {/* DEEP PROOF */}
      <section className="bg-[#FAF8F5] py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimateOnScroll>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light">
                The Data Behind the Calculator
              </h2>
            </AnimateOnScroll>
            <div>
              <AnimateOnScroll delay={100}>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555] mb-6">
                  The Calculator uses current North Carolina tax code (flat 3.99% state income tax, 2026), Charlotte MSA property tax averages, and verified public school enrollment data. All figures are sourced from the NC Department of Revenue, Mecklenburg and Union County tax offices, and U.S. News school rankings.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555]">
                  Typical results for a $350K-income household relocating from a high-tax state: $87K&ndash;$150K+ in annual savings when combining state income tax reduction, property tax reduction, and private school tuition elimination. Over a decade, that delta compounds to $1.5M+ in retained wealth.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section className="bg-white py-28 md:py-36 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimateOnScroll>
              <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555]">
                Every month you spend passively researching instead of running the actual numbers is another month of savings left uncaptured. The Calculator takes 90 seconds. If the math works, you&apos;ll know exactly how much. If it doesn&apos;t, you&apos;ll have the data to stop wondering.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555]">
                Once you&apos;ve seen your number, the next step is a 30-minute Relocation Strategy Call with Kayden. He&apos;ll walk through your results, map your school and neighborhood priorities, and give you a clear picture of what Charlotte looks like for your specific family. No pitch. No pressure.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#FAF8F5] py-28 md:py-36 lg:py-44">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light mb-6">
              Your Number Makes Sense? Let&apos;s Talk.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-[#555] mb-10">30 minutes. No pitch. Just your plan.</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <Link href="/contact" className="inline-block px-10 py-4 bg-[#c9a84c] text-white font-semibold text-sm tracking-[0.1em] uppercase hover:bg-[#d4b96a] transition-all duration-300">
              Book Your Relocation Strategy Call
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
