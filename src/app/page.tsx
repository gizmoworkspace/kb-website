"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 150, prefix: "$", suffix: "K+", label: "Typical Annual Savings" },
  { value: 3.99, prefix: "", suffix: "%", label: "NC Flat Tax Rate", decimals: 2 },
  { value: 157, prefix: "", suffix: "", label: "New Residents Daily" },
  { value: 191, prefix: "", suffix: "", label: "Nonstop CLT Flights" },
  { value: 37600, prefix: "", suffix: "", label: "Jobs Added in 2025" },
  { value: 121, prefix: "", suffix: "%", label: "Luxury Appreciation (10yr)" },
];

const proofData = [
  {
    title: "Tax Arbitrage",
    text: "North Carolina\u2019s flat 3.99% state income tax rate vs. New York (10.9%), California (13.3%), New Jersey (10.75%), and D.C. (10.75%). No state estate tax. A $350K-income household typically recaptures $50K\u2013$150K+ annually from the tax delta alone.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    title: "Housing",
    text: "Charlotte luxury median sale price: $1.4M vs. $2.5M+ (NYC metro), $3.2M+ (LA), $2.1M+ (D.C.). The same mortgage payment buys 2\u20133x the home. Luxury properties have appreciated 121% over the past decade and still trade at a 40\u201360% discount to coastal equivalents.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Schools",
    text: "Weddington High, Marvin Ridge, and Ardrey Kell consistently rank top 20 statewide. Union County and South Charlotte school districts rank in the top 5% of North Carolina. AP and IB programs rival the private academies charging $45K\u2013$48K per seat.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
  },
  {
    title: "Jobs",
    text: "Charlotte MSA added 37,600 nonfarm payroll jobs in 2025\u2014the highest job growth rate (2.7%) among all major U.S. metros. Charlotte is the second-largest U.S. banking center. Bank of America, Wells Fargo, and Truist are headquartered here.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    title: "Connectivity",
    text: "CLT Airport: 191 nonstop destinations. Your parents in New York are a 90-minute flight. Your former colleagues in D.C. are 75 minutes. Your legacy network doesn\u2019t disappear.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=800&q=80",
  },
  {
    title: "Growth",
    text: "157 new residents move to Charlotte daily. Charlotte has been the #1 net in-migration metro in the U.S. for three consecutive years.",
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800&q=80",
  },
];

const steps = [
  {
    num: "01",
    title: "Tax Arbitrage Consultation",
    desc: "Your move starts with a personalized financial model\u2014not a neighborhood tour. You\u2019ll see the exact dollar figure your family recaptures annually from state income tax reduction, property tax savings, and private school tuition elimination. Not a range. Not an estimate. Your number. So that you make the decision based on math, not emotion.",
    note: "NC flat 3.99% vs. NY 10.9%, NJ 10.75%, CA 13.3%. Typical recapture: $50K\u2013$150K+ annually.",
  },
  {
    num: "02",
    title: "School District Mapping",
    desc: "Your children\u2019s education isn\u2019t a line item to cut\u2014it\u2019s the reason you\u2019re paying $45K\u2013$90K per year right now. Kayden maps your kids\u2019 academic priorities, extracurricular needs, and social preferences to specific school feeder patterns\u2014elementary through high school. So that you enroll in Weddington, Marvin Ridge, or Ardrey Kell with confidence that the rigor matches the private academy you\u2019re leaving behind.",
    note: "Weddington, Marvin Ridge, Ardrey Kell: top 20 statewide. Union County: top 5% of NC.",
  },
  {
    num: "03",
    title: "Lifestyle-First Neighborhood Matching",
    desc: "Most agents start with the MLS. Kayden starts with your life. Before a single property is shown, your commute patterns, weekend habits, dining preferences, peer community needs, and trailing spouse priorities are mapped to 2\u20133 Charlotte micro-markets. So that you avoid the catastrophic mistake of choosing the wrong neighborhood\u2014wrong commute, wrong micro-culture, wrong school zone\u2014and paying to move twice.",
  },
  {
    num: "04",
    title: "Curated Home Search with Virtual Pre-Tours",
    desc: "You\u2019re 800 miles away. Every trip costs $3K\u2013$5K and a weekend you don\u2019t have. Kayden pre-screens all inventory, eliminates non-starters, and sends curated shortlists with video walkthroughs and written neighborhood context. So that your first in-person visit is productive\u2014five to seven homes that genuinely fit\u2014instead of four wasted weekends touring properties that were never going to work.",
  },
  {
    num: "05",
    title: "Radical Transparency Communication",
    desc: "No disappearing for three days. No vague \u201cthings are moving along\u201d updates. No hand-offs to a junior associate who doesn\u2019t know your file. Kayden tells you exactly what\u2019s happening, what to expect, and what your options are\u2014at every stage. So that you manage this decision the way you manage every other high-stakes decision in your professional life: with complete information, delivered directly, on your timeline.",
  },
  {
    num: "06",
    title: "First 100 Days Integration Program",
    desc: "The transaction closes. Most agents disappear. Kayden\u2019s relationship extends 12 months past closing. You get curated introductions to country club membership directors, local wealth advisors, pediatricians, school administrators, parent groups, professional networks, and social organizations. So that your family builds a genuine social infrastructure in 90 days instead of spending 18 months feeling like outsiders.",
  },
];

const faqs = [
  {
    q: "\u201cWill the public schools actually compare to our Northeast private academy?\u201d",
    a: "Weddington, Marvin Ridge, and Ardrey Kell rank top 20 statewide and offer AP/IB programs that match or exceed what you\u2019re paying $45K\u2013$48K per year to access. Union County has a documented valedictorian culture driven by the same highly-educated transplant families you\u2019d be joining. Kayden\u2019s school feeder analysis maps your children\u2019s specific needs to the right zone\u2014before a single home is shown.",
  },
  {
    q: "\u201cWill we fit in culturally? Is Charlotte too conservative?\u201d",
    a: "Charlotte receives 157 new residents daily. South Charlotte and Lake Norman neighborhoods are populated heavily by former New Yorkers, Californians, and Chicagoans\u2014creating highly-educated, moderate, globally-minded micro-communities. Your neighbors are the same doctors, executives, and attorneys who left the same cities you did.",
  },
  {
    q: "\u201cIs the market too hot? Are we buying at the peak?\u201d",
    a: "Charlotte luxury properties have appreciated 121% over the past decade yet still trade at a 40\u201360% discount to coastal equivalents. Charlotte is in its growth phase: second-largest banking center, 37,600 jobs added in 2025, corporate relocation pipeline showing no sign of slowing. This is a value play backed by structural economic drivers, not speculative pricing.",
  },
  {
    q: "\u201cWe\u2019ll miss the energy and feel isolated.\u201d",
    a: "Charlotte\u2019s country club and community infrastructure is specifically designed to integrate affluent transplants. Carmel Country Club, Myers Park Country Club, Providence Country Club, and the Lake Norman yacht clubs function as ready-made social ecosystems. Kayden\u2019s First 100 Days program delivers curated introductions so your family has a social foundation within the first quarter\u2014not the first year.",
  },
  {
    q: "\u201cI don\u2019t want soulless suburban sprawl.\u201d",
    a: "Myers Park offers tree-lined streets, historic architecture, and walkable boutique districts. Eastover delivers quiet, understated luxury minutes from Uptown. Lake Norman is resort-caliber waterfront. Charlotte is not a replacement for Manhattan. It\u2019s an unmatched home base\u2014and the $50K\u2013$150K you save annually funds the travel, dining, and experiences you want on your terms.",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const agitationRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const horizontalInnerRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ===== HERO: Pinned with parallax =====
      if (heroRef.current) {
        const skyline = heroRef.current.querySelector(".hero-skyline");
        const headshot = heroRef.current.querySelector(".hero-headshot-wrap");
        const textBlock = heroRef.current.querySelector(".hero-text-block");
        const ctas = heroRef.current.querySelector(".hero-ctas");
        const note = heroRef.current.querySelector(".hero-note");

        // Entrance timeline
        const tl = gsap.timeline({ delay: 0.3 });

        // Skyline fades in first
        if (skyline) {
          tl.fromTo(skyline, { scale: 1.15, opacity: 0 }, { scale: 1, opacity: 1, duration: 2, ease: "power2.out" });
        }

        // Headshot scales in with a bounce
        if (headshot) {
          tl.fromTo(headshot, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.4)" }, "-=1.2");
        }

        // Text reveals line by line
        const lines = heroRef.current.querySelectorAll(".text-reveal-line > span");
        if (lines.length > 0) {
          tl.to(lines, { y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12 }, "-=0.6");
        }

        if (textBlock) {
          const subtitle = textBlock.querySelector(".hero-subtitle");
          if (subtitle) {
            tl.fromTo(subtitle, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.3");
          }
        }

        if (ctas) {
          tl.fromTo(ctas, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.4");
        }
        if (note) {
          tl.fromTo(note, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.2");
        }

        // Parallax on scroll — skyline moves slower
        if (skyline) {
          gsap.to(skyline, {
            y: 250,
            scale: 1.1,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }

        // Headshot subtle float
        if (headshot) {
          gsap.to(headshot, {
            y: 80,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      }

      // ===== PROOF BAR =====
      gsap.utils.toArray<HTMLElement>(".proof-item").forEach((item, i) => {
        gsap.fromTo(item, { opacity: 0, x: i % 2 === 0 ? -30 : 30 }, {
          opacity: 1, x: 0, duration: 0.6,
          scrollTrigger: { trigger: item, start: "top 92%" },
          delay: i * 0.08,
        });
      });

      // ===== STATS: Slam-in with impact =====
      if (statsRef.current) {
        gsap.utils.toArray<HTMLElement>(".stat-item").forEach((el, i) => {
          const numEl = el.querySelector(".stat-num");
          if (!numEl) return;
          const target = parseFloat(numEl.getAttribute("data-target") || "0");
          const decimals = parseInt(numEl.getAttribute("data-decimals") || "0");
          const prefix = numEl.getAttribute("data-prefix") || "";
          const suffix = numEl.getAttribute("data-suffix") || "";

          // Slam in from above with scale
          gsap.fromTo(el, { y: -80, opacity: 0, scale: 1.5 }, {
            y: 0, opacity: 1, scale: 1,
            duration: 0.6, ease: "back.out(1.5)",
            scrollTrigger: { trigger: el, start: "top 88%" },
            delay: i * 0.1,
          });

          // Counter animation
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
            onUpdate: () => {
              numEl.textContent = prefix + (decimals > 0 ? obj.val.toFixed(decimals) : Math.round(obj.val).toLocaleString()) + suffix;
            },
          });
        });
      }

      // ===== AGITATION: Slide in from left/right alternating =====
      if (agitationRef.current) {
        gsap.utils.toArray<HTMLElement>(".agitation-block").forEach((block, i) => {
          gsap.fromTo(block, { opacity: 0, x: i % 2 === 0 ? -80 : 80 }, {
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: block, start: "top 85%" },
          });
        });
      }

      // ===== CROSSHEAD: Scale in with color shift =====
      gsap.utils.toArray<HTMLElement>(".crosshead").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, scale: 0.9, rotateX: 10 }, {
          opacity: 1, scale: 1, rotateX: 0, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
      });

      // ===== STEPS: Timeline reveal with dramatic entrance =====
      if (stepsRef.current) {
        gsap.utils.toArray<HTMLElement>(".step-item").forEach((step) => {
          const stl = gsap.timeline({
            scrollTrigger: { trigger: step, start: "top 82%" },
          });
          stl.fromTo(step.querySelector(".step-num"), { scale: 0, rotation: -180, opacity: 0 }, { scale: 1, rotation: 0, opacity: 1, duration: 0.7, ease: "back.out(2)" });
          stl.fromTo(step.querySelector(".step-line"), { scaleY: 0 }, { scaleY: 1, duration: 0.5, ease: "power2.out" }, "-=0.3");
          stl.fromTo(step.querySelector(".step-content"), { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.3");
        });
      }

      // ===== HORIZONTAL SCROLL: Proof section =====
      if (horizontalRef.current && horizontalInnerRef.current) {
        const totalWidth = horizontalInnerRef.current.scrollWidth - window.innerWidth;

        if (window.innerWidth >= 768 && totalWidth > 0) {
          gsap.to(horizontalInnerRef.current, {
            x: -totalWidth,
            ease: "none",
            scrollTrigger: {
              trigger: horizontalRef.current,
              start: "top top",
              end: () => `+=${totalWidth}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          });
        }
      }

      // ===== FAQs: Stagger from bottom =====
      if (faqRef.current) {
        gsap.utils.toArray<HTMLElement>(".faq-item").forEach((item, i) => {
          gsap.fromTo(item, { opacity: 0, y: 50, rotateX: 5 }, {
            opacity: 1, y: 0, rotateX: 0, duration: 0.7, ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 88%" },
            delay: i * 0.06,
          });
        });
      }

      // ===== FINAL CTA: Dramatic reveal =====
      const ctaSection = document.querySelector(".final-cta");
      if (ctaSection) {
        gsap.fromTo(ctaSection.querySelector(".cta-inner"), { opacity: 0, y: 60, scale: 0.95 }, {
          opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: ctaSection, start: "top 75%" },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-navy-dark">
      {/* ============ HERO — Pinned with Kayden + Charlotte Skyline ============ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Charlotte skyline background */}
        <div className="hero-skyline absolute inset-0 opacity-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/60 to-navy-dark" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/80 via-transparent to-navy-dark/70" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text side */}
            <div className="hero-text-block flex-1 max-w-2xl">
              <h1 className="font-serif display-xl text-white mb-8">
                <span className="text-reveal-line"><span>Your $350K Salary</span></span>
                <span className="text-reveal-line"><span>Should Feel Like $350K.</span></span>
                <span className="text-reveal-line"><span className="text-gold">Charlotte Makes</span></span>
                <span className="text-reveal-line"><span className="text-gold">the Math Work.</span></span>
              </h1>
              <p className="hero-subtitle text-lg md:text-xl text-gray-300/90 leading-relaxed mb-10 max-w-2xl opacity-0">
                You built the career, earned the income, did everything right. Your state took half of it anyway. Charlotte&apos;s flat 3.99% tax rate, top-ranked public schools, and luxury homes at 40–60% below coastal prices give your family the financial freedom and lifestyle quality the Northeast promised but never delivered.
              </p>
              <div className="hero-ctas flex flex-col sm:flex-row gap-4 opacity-0">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-gold text-navy font-semibold text-sm tracking-[0.1em] uppercase hover:bg-gold-light transition-all duration-300 text-center"
                >
                  Book Your Relocation Strategy Call
                </Link>
                <Link
                  href="/calculator"
                  className="inline-block px-8 py-4 border border-white/20 text-white text-sm tracking-[0.1em] uppercase hover:bg-white/10 transition-all duration-300 text-center"
                >
                  Run Your Numbers in the Calculator
                </Link>
              </div>
              <p className="hero-note mt-5 text-sm text-gray-500 opacity-0">
                30 minutes. No pitch. Just your numbers.
              </p>
            </div>

            {/* Kayden headshot */}
            <div className="hero-headshot-wrap flex-shrink-0 opacity-0">
              <div className="headshot-ring rounded-full overflow-hidden w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
                <Image
                  src="/kayden-headshot.jpg"
                  alt="Kayden Benfield — Charlotte Luxury Real Estate"
                  width={320}
                  height={320}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center mt-6 text-sm tracking-[0.2em] uppercase text-gold/80 font-sans">Kayden Benfield</p>
              <p className="text-center text-xs text-gray-500 mt-1">Licensed NC Broker · INNOVATE Real Estate</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 font-sans">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ============ PROOF BAR ============ */}
      <section className="relative bg-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            {[
              "Licensed North Carolina Broker",
              "INNOVATE Real Estate — #1 Non-Franchised Brokerage, East Coast",
              "Agent Equity Owner — Skin in the Game",
              "Multi-State MLS Access — 10 States",
              "Direct Cell. No Gatekeepers. No Hand-Offs.",
            ].map((item, i) => (
              <span key={i} className="proof-item flex items-center gap-2">
                <span className="text-gold text-xs">✦</span> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CHARLOTTE SKYLINE DIVIDER ============ */}
      <div className="clt-skyline-divider" />

      {/* ============ STATS — Slam-in counters ============ */}
      <section ref={statsRef} className="section-warm py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/60 font-sans mb-4">Charlotte by the Numbers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
            {stats.map((s, i) => (
              <div key={i} className="stat-item text-center">
                <div
                  className="stat-num stat-number"
                  data-target={s.value}
                  data-prefix={s.prefix}
                  data-suffix={s.suffix}
                  data-decimals={s.decimals || 0}
                >
                  {s.prefix}0{s.suffix}
                </div>
                <div className="mt-2 text-xs tracking-[0.15em] uppercase text-gray-500 font-sans">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ROOM 1: THE PAIN — Your Expensive City ============ */}
      <section ref={agitationRef} className="room section-dark py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="agitation-block mb-12">
            <div className="section-divider mb-8" />
            <h2 className="font-serif display-lg text-white mb-12 leading-tight">
              You Earned $400K. Your State Took $172K Before You Bought Groceries.
            </h2>
          </div>

          <div className="space-y-12">
            <div className="agitation-block">
              <h3 className="font-serif text-xl text-gold mb-4 tracking-wide">The Problem</h3>
              <p className="text-gray-300/80 leading-relaxed">
                You&apos;re earning $350K–$400K and saving $800 a month. You know the math doesn&apos;t work. Your state takes 10.9–13.3% off the top before you see a dollar. Property taxes on your four-bedroom: $30K–$50K. Two kids in private school: $90K. You&apos;re not bad with money. You&apos;re in a bad jurisdiction.
              </p>
              <p className="text-gray-300/80 leading-relaxed mt-4">
                The usual advice: budget harder. Cut the vacations. Refinance. You&apos;ve done all of it. No spreadsheet fixes a 13.3% state income tax plus $45K-per-seat private school tuition plus property taxes that rival a second mortgage.
              </p>
            </div>

            <div className="agitation-block">
              <h3 className="font-serif text-xl text-gold mb-4 tracking-wide">The Symptoms</h3>
              <p className="text-gray-300/80 leading-relaxed">
                You feel embarrassed telling anyone you&apos;re stressed about money at this income level. You can&apos;t complain because objectively you&apos;re &quot;wealthy.&quot; You&apos;re working exclusively to cover carrying costs—not to build wealth, not to enjoy your life. Three-quarters of every paycheck is gone before it hits your brokerage account.
              </p>
              <p className="text-gray-300/80 leading-relaxed mt-4">
                Your home office is a converted closet. Your backyard is a patio. Your commute is 90 minutes each way. You earn more than your parents ever did, and you have less to show for it.
              </p>
            </div>

            <div className="agitation-block">
              <h3 className="font-serif text-xl text-gold mb-4 tracking-wide">The Cost</h3>
              <p className="text-gray-300/80 leading-relaxed">
                Every year you stay is another $87K–$150K in avoidable tax burden, tuition, and cost-of-living premium. Over a decade, that&apos;s $1.5M+ in wealth that never compounds. That&apos;s not a budgeting problem. That&apos;s a geography problem.
              </p>
            </div>

            <blockquote className="agitation-block border-l-2 border-gold/50 pl-8 py-4">
              <p className="text-gray-400 italic text-lg leading-relaxed font-serif">
                &quot;It feels like at the end of the month, after all our expenses, that it&apos;s still difficult to save any substantial amount of money… it feels like 3/4 of the money is already gone.&quot;
              </p>
              <cite className="block mt-3 text-sm text-gray-600 not-italic font-sans">— r/HENRYfinance</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ============ ROOM 2: THE REVELATION — Charlotte ============ */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        {/* Charlotte skyline background for this room */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1605429523419-d828acb941f7?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center crosshead">
          <p className="text-xs tracking-[0.3em] uppercase text-gold/60 font-sans mb-6">Welcome to Charlotte</p>
          <h2 className="font-serif display-lg text-white leading-tight">
            The Problem Isn&apos;t Discipline. It&apos;s Geography.
            <br />
            <span className="text-gold">And the Solution Has a Flat 3.99% Tax Rate.</span>
          </h2>
        </div>
      </section>

      {/* ============ ROOM 3: THE PROCESS ============ */}
      <section ref={stepsRef} className="section-dark py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="section-divider mx-auto mb-8" />
            <p className="text-xs tracking-[0.3em] uppercase text-gold/60 font-sans mb-4">Your Relocation, Engineered</p>
            <h2 className="font-serif display-lg text-white">
              Your Relocation, Engineered from Tax Code to Country Club.
            </h2>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, i) => (
              <div key={step.num} className="step-item flex gap-6 lg:gap-10">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="step-num w-14 h-14 rounded-full border border-gold/30 bg-navy flex items-center justify-center font-serif text-gold text-lg">
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="step-line w-px flex-1 bg-gradient-to-b from-gold/30 to-transparent mt-2 origin-top" />
                  )}
                </div>
                <div className="step-content pb-4">
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300/80 leading-relaxed">{step.desc}</p>
                  {step.note && (
                    <p className="mt-4 text-sm text-gold/70 italic">{step.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ROOM 4: THE PROOF — Horizontal scroll ============ */}
      <section ref={horizontalRef} className="bg-navy min-h-screen flex items-center overflow-hidden">
        <div className="w-full">
          <div className="px-6 lg:px-8 mb-12 max-w-7xl mx-auto">
            <div className="section-divider mb-8" />
            <h2 className="font-serif display-lg text-white">
              The Numbers. Verified. Cited. Run Them Yourself.
            </h2>
          </div>

          <div ref={horizontalInnerRef} className="flex gap-6 px-6 lg:px-8 w-max md:w-max">
            {proofData.map((item, i) => (
              <div
                key={i}
                className="proof-card w-[85vw] md:w-[500px] flex-shrink-0 glass rounded-lg overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 font-serif text-2xl text-white">{item.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300/80 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="px-6 lg:px-8 mt-8 text-center text-xs text-gray-600 max-w-7xl mx-auto font-sans">
            All data verifiable. Sources: IRS migration data, U.S. Census, Charlotte Regional Business Alliance, U.S. News school rankings, CLT Airport authority.
          </p>
        </div>
      </section>

      {/* ============ ROOM 5: WHY THIS AGENT ============ */}
      <section className="section-warm py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="agitation-block">
            <div className="section-divider mb-8" />
            <h2 className="font-serif display-lg text-white mb-8">
              What Changes When the Geography Changes.
            </h2>
          </div>
          <div className="agitation-block text-gray-300/80 leading-relaxed space-y-6">
            <p>
              You&apos;ve seen agents who push quick sales because they&apos;re juggling 40 transactions and need yours off the desk. You&apos;ve experienced communication blackouts, hand-offs to junior staff, and properties shown that blatantly ignored what you asked for. You&apos;ve worked with agents who couldn&apos;t discuss a jumbo loan structure, a 1031 exchange, or an LLC purchase—and you realized they were salespeople, not advisors.
            </p>
            <p>
              Kayden operates differently. Every client gets direct cell access—no gatekeepers, no assistants screening calls. The financial arbitrage report comes before a single showing. The lifestyle mapping comes before the MLS search. And if a property doesn&apos;t serve your long-term wealth, he&apos;ll tell you not to buy it—even when it costs him the commission.
            </p>
          </div>
        </div>
      </section>

      {/* ============ FAQs ============ */}
      <section ref={faqRef} className="section-mid py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="section-divider mb-8" />
          <h2 className="font-serif display-lg text-white mb-16">
            Your Questions. Answered Directly.
          </h2>

          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item glass rounded-lg p-8">
                <h3 className="font-serif text-lg text-gold mb-4">{faq.q}</h3>
                <p className="text-gray-300/80 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="faq-item mt-12 glass rounded-lg p-8 border-gold/20">
            <h3 className="font-serif text-lg text-gold mb-4">Risk Reversal</h3>
            <p className="text-gray-300/80 leading-relaxed">
              Kayden&apos;s advisory operates on a fiduciary principle: if a property doesn&apos;t meet stringent investment and lifestyle criteria, he advises you to walk away—even at the cost of his commission. You pay nothing upfront. Commission is earned only upon a successful close. You get 12 months of post-close support.
            </p>
          </div>

          <p className="faq-item mt-8 text-gray-500 leading-relaxed">
            Every year you stay in a high-tax coastal metro is another $87K–$150K in wealth that doesn&apos;t compound. Over the next decade, that gap becomes $1.5M+. The question isn&apos;t whether Charlotte works financially—the math is settled. The question is how long you&apos;ll wait before you run your own numbers.
          </p>
        </div>
      </section>

      {/* ============ Charlotte Skyline Divider ============ */}
      <div className="clt-skyline-divider" style={{ transform: "scaleX(-1)" }} />

      {/* ============ FINAL CTA ============ */}
      <section className="final-cta section-dark py-28 lg:py-36">
        <div className="cta-inner max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="font-serif display-lg text-white mb-6">
            Book Your Relocation Strategy Call
          </h2>
          <p className="text-gray-300/80 leading-relaxed mb-10 text-lg">
            30 minutes. No pitch. No obligation. Walk through your tax scenario, school priorities, and neighborhood criteria with Kayden directly. If Charlotte fits, you leave with a clear next step. If it doesn&apos;t, you have the data to confirm you&apos;re in the right place already.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-gold text-navy font-semibold text-sm tracking-[0.1em] uppercase hover:bg-gold-light transition-all duration-300"
            >
              Book Your Relocation Strategy Call
            </Link>
            <Link
              href="/calculator"
              className="px-10 py-4 border border-white/20 text-white text-sm tracking-[0.1em] uppercase hover:bg-white/10 transition-all duration-300"
            >
              Not Ready to Talk? Run Your Numbers First.
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-600 font-sans">
            90 seconds. See your exact annual savings.
          </p>

          <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-500 font-sans">
            <span>✦ 157 new residents daily</span>
            <span>✦ 3.99% flat state tax</span>
            <span>✦ 191 nonstop CLT flights</span>
            <span>✦ 37,600 jobs added in 2025</span>
          </div>
        </div>
      </section>

      {/* Bottom padding for mobile CTA */}
      <div className="h-16 lg:hidden" />
    </div>
  );
}
