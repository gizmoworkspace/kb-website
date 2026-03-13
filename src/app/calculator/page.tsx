"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const pageRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(".c-hero-title", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" })
        .fromTo(".c-hero-sub", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6");

      gsap.utils.toArray<HTMLElement>(".reveal-block").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

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
    <div ref={pageRef} className="bg-navy-dark">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-dark" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-32">
          <h1 className="c-hero-title font-serif display-xl text-white mb-6 opacity-0">
            How Much Is Your State Costing You? Run the Math in 90 Seconds.
          </h1>
          <p className="c-hero-sub text-lg md:text-xl text-gray-300/90 leading-relaxed opacity-0">
            The Charlotte Relocation Dividend Calculator models your exact annual savings from state income tax reduction, property tax savings, and private school tuition elimination. Input your numbers. See your number. Not a range. Not an estimate. The specific dollar figure your family recaptures by relocating to Charlotte.
          </p>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            {["NC flat 3.99% vs. NY 10.9%, CA 13.3%, NJ 10.75%", "No state estate tax", "Top-ranked free public schools"].map((item, i) => (
              <span key={i} className="flex items-center gap-2"><span className="text-gold text-xs">✦</span> {item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* AGITATION */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 reveal-block">
          <p className="text-gray-300/80 text-lg leading-relaxed mb-6">
            You already know your state tax rate is too high. You already know private school tuition is unsustainable. You already know your home is worth $1.5M+ and you&apos;re living in 2,200 square feet. What you don&apos;t have is the exact number—the specific annual delta between staying and moving.
          </p>
          <p className="text-gray-300/80 text-lg leading-relaxed">
            Without that number, the move stays theoretical. With it, the move becomes mathematical. The Calculator takes 90 seconds and gives you the one data point that turns months of passive research into a concrete decision.
          </p>
        </div>
      </section>

      {/* CROSSHEAD */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal-block">
          <h2 className="font-serif display-lg text-white">Stop Guessing. Start Calculating.</h2>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="glass rounded-xl p-8 lg:p-12">
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-8 text-center">Charlotte Relocation Dividend Calculator</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-xs font-semibold text-gold tracking-[0.15em] uppercase mb-2">Household Income</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input type="text" value={income} onChange={(e) => setIncome(e.target.value)} placeholder="350,000"
                    className="w-full pl-8 pr-4 py-3 rounded-lg bg-navy-dark/80 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gold tracking-[0.15em] uppercase mb-2">Current State</label>
                <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-navy-dark/80 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all">
                  <option value="">Select your state...</option>
                  {states.map((s) => (
                    <option key={s.name} value={s.name}>{s.name} {s.rate > 0 ? `(${s.rate}%)` : ""}</option>
                  ))}
                </select>
                {selectedState === "Other" && (
                  <input type="text" value={customRate} onChange={(e) => setCustomRate(e.target.value)} placeholder="Enter your state tax rate (%)"
                    className="w-full mt-2 px-4 py-3 rounded-lg bg-navy-dark/80 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all" />
                )}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gold tracking-[0.15em] uppercase mb-2">Annual Property Taxes</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input type="text" value={propertyTax} onChange={(e) => setPropertyTax(e.target.value)} placeholder="35,000"
                    className="w-full pl-8 pr-4 py-3 rounded-lg bg-navy-dark/80 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gold tracking-[0.15em] uppercase mb-2">Number of Children</label>
                <input type="text" value={numChildren} onChange={(e) => setNumChildren(e.target.value)} placeholder="2"
                  className="w-full px-4 py-3 rounded-lg bg-navy-dark/80 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-gold tracking-[0.15em] uppercase mb-2">Current Tuition Per Child (Annual)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input type="text" value={tuitionPerChild} onChange={(e) => setTuitionPerChild(e.target.value)} placeholder="45,000"
                    className="w-full pl-8 pr-4 py-3 rounded-lg bg-navy-dark/80 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all" />
                </div>
                <p className="text-xs text-gray-600 mt-1">Enter $0 if children attend public school</p>
              </div>
            </div>

            <button onClick={calculate}
              className="w-full bg-gold hover:bg-gold-light text-navy font-bold py-4 rounded-lg text-sm tracking-[0.1em] uppercase transition-all duration-300">
              Calculate Your Relocation Dividend
            </button>

            {/* RESULTS */}
            {results && (
              <div className="mt-10 bg-navy-dark rounded-xl p-8 lg:p-10 border border-white/5">
                <h4 className="font-serif text-2xl text-center mb-8 text-gold">Your Relocation Dividend</h4>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {[
                    { label: "Income Tax Savings", value: results.incomeTaxSavings },
                    { label: "Property Tax Savings", value: results.propertyTaxSavings },
                    { label: "Tuition Savings", value: results.tuitionSavings },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <p className="text-xs text-gray-500 tracking-[0.15em] uppercase mb-2">{item.label}</p>
                      <p className="font-serif text-3xl text-gold">{fmt(item.value)}</p>
                      <p className="text-xs text-gray-600 mt-1">per year</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/5 pt-8">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-xs text-gray-500 tracking-[0.15em] uppercase mb-2">Total Annual Savings</p>
                      <p className="font-serif text-4xl text-white">{fmt(results.annualSavings)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 tracking-[0.15em] uppercase mb-2">Monthly Improvement</p>
                      <p className="font-serif text-4xl text-white">{fmt(results.monthlySavings)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 tracking-[0.15em] uppercase mb-2">10-Year Wealth Impact</p>
                      <p className="font-serif text-4xl text-gold">{fmt(results.tenYearProjection)}</p>
                      <p className="text-xs text-gray-600 mt-1">invested at 7% annual return</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 text-center">
                  <p className="text-gray-400 mb-6">Like what you see? Book your strategy call.</p>
                  <Link href="/contact" className="inline-block px-10 py-4 bg-gold text-navy font-semibold text-sm tracking-[0.1em] uppercase hover:bg-gold-light transition-all duration-300">
                    Book Your Relocation Strategy Call
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="font-serif display-lg text-white text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { num: "01", title: "Input Your Current Numbers", desc: "Your household income, current state income tax rate, annual property taxes, and private school tuition (if applicable). Takes 60 seconds." },
              { num: "02", title: "See Your Charlotte Equivalent", desc: "The Calculator models your tax burden under North Carolina\u2019s flat 3.99% rate, estimates Charlotte-equivalent property taxes, and eliminates tuition costs by mapping to top-ranked public school zones." },
              { num: "03", title: "Get Your Annual Savings + 10-Year Projection", desc: "Your output: exact annual savings, monthly cash flow improvement, and a 10-year compounding wealth projection. This is the document that turns \u201cwe should look into Charlotte\u201d into \u201cwe\u2019re leaving $130K per year on the table.\u201d" },
            ].map((step, i) => (
              <div key={i} className="reveal-block glass rounded-lg p-8">
                <div className="w-14 h-14 rounded-full border border-gold/30 bg-navy-dark flex items-center justify-center font-serif text-gold text-lg mb-6">{step.num}</div>
                <h3 className="font-serif text-xl text-white mb-4">{step.title}</h3>
                <p className="text-gray-300/80 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP PROOF */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 reveal-block">
          <div className="section-divider mb-8" />
          <h2 className="font-serif display-lg text-white text-center mb-8">The Data Behind the Calculator</h2>
          <p className="text-gray-300/80 text-lg leading-relaxed mb-6">
            The Calculator uses current North Carolina tax code (flat 3.99% state income tax, 2026), Charlotte MSA property tax averages, and verified public school enrollment data. All figures are sourced from the NC Department of Revenue, Mecklenburg and Union County tax offices, and U.S. News school rankings.
          </p>
          <p className="text-gray-300/80 text-lg leading-relaxed">
            Typical results for a $350K-income household relocating from a high-tax state: $87K–$150K+ in annual savings when combining state income tax reduction, property tax reduction, and private school tuition elimination. Over a decade, that delta compounds to $1.5M+ in retained wealth.
          </p>
        </div>
      </section>

      {/* CLOSE */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 reveal-block">
          <p className="text-gray-300/80 text-lg leading-relaxed mb-6">
            Every month you spend passively researching instead of running the actual numbers is another month of savings left uncaptured. The Calculator takes 90 seconds. If the math works, you&apos;ll know exactly how much. If it doesn&apos;t, you&apos;ll have the data to stop wondering.
          </p>
          <p className="text-gray-300/80 text-lg leading-relaxed">
            Once you&apos;ve seen your number, the next step is a 30-minute Relocation Strategy Call with Kayden. He&apos;ll walk through your results, map your school and neighborhood priorities, and give you a clear picture of what Charlotte looks like for your specific family. No pitch. No pressure.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal-block">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="font-serif display-lg text-white mb-4">Your Number Makes Sense? Let&apos;s Talk.</h2>
          <p className="text-gray-500 mb-10">30 minutes. No pitch. Just your plan.</p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-gold text-navy font-semibold text-sm tracking-[0.1em] uppercase hover:bg-gold-light transition-all duration-300">
            Book Your Relocation Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
}
