"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  PinnedHero,
  FadeIn,
  StatCounter,
  ParallaxBg,
  ScaleReveal,
} from "@/components/ScrollAnimations";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Will the public schools actually compare to our Northeast private academy?",
      a: "Weddington, Marvin Ridge, and Ardrey Kell rank top 20 statewide and offer AP/IB programs that match or exceed what you\u2019re paying $45K\u2013$48K per year to access. Union County has a documented valedictorian culture driven by the same highly-educated transplant families you\u2019d be joining. Kayden\u2019s school feeder analysis maps your children\u2019s specific needs to the right zone\u2014before a single home is shown.",
    },
    {
      q: "Will we fit in culturally? Is Charlotte too conservative?",
      a: "Charlotte receives 157 new residents daily. South Charlotte and Lake Norman neighborhoods are populated heavily by former New Yorkers, Californians, and Chicagoans\u2014creating highly-educated, moderate, globally-minded micro-communities. Your neighbors are the same doctors, executives, and attorneys who left the same cities you did.",
    },
    {
      q: "Is the market too hot? Are we buying at the peak?",
      a: "Charlotte luxury properties have appreciated 121% over the past decade yet still trade at a 40\u201360% discount to coastal equivalents. Charlotte is in its growth phase: second-largest banking center, 37,600 jobs added in 2025, corporate relocation pipeline showing no sign of slowing. This is a value play backed by structural economic drivers, not speculative pricing.",
    },
    {
      q: "We\u2019ll miss the energy and feel isolated.",
      a: "Charlotte\u2019s country club and community infrastructure is specifically designed to integrate affluent transplants. Carmel Country Club, Myers Park Country Club, Providence Country Club, and the Lake Norman yacht clubs function as ready-made social ecosystems. Kayden\u2019s First 100 Days program delivers curated introductions so your family has a social foundation within the first quarter\u2014not the first year.",
    },
    {
      q: "I don\u2019t want soulless suburban sprawl.",
      a: "Myers Park offers tree-lined streets, historic architecture, and walkable boutique districts. Eastover delivers quiet, understated luxury minutes from Uptown. Lake Norman is resort-caliber waterfront. Charlotte is not a replacement for Manhattan. It\u2019s an unmatched home base\u2014and the $50K\u2013$150K you save annually funds the travel, dining, and experiences you want on your terms.",
    },
  ];

  return (
    <div>
      {/* ═══════════════════════════════════════════
          1. HERO — Pinned, full viewport
      ═══════════════════════════════════════════ */}
      <PinnedHero className="hero-section">
        <section className="viewport-section bg-hero-dark">
          {/* Charlotte skyline background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=1920&q=80)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14] via-[#0a0a14]/80 to-[#0a0a14]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14]/60 via-transparent to-[#0a0a14]" />

          {/* Ambient gold glow */}
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gold/[0.04] rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                {/* First text — headline */}
                <div data-hero-text className="transition-all">
                  <h1 className="font-heading text-5xl md:text-6xl lg:text-8xl tracking-tight leading-[1.05] text-white font-semibold hero-animate">
                    Your $350K Salary Should Feel Like $350K.
                  </h1>
                  <p className="mt-6 font-heading text-2xl md:text-3xl lg:text-4xl text-gold-light font-light hero-animate hero-animate-delay-1">
                    Charlotte Makes the Math Work.
                  </p>
                </div>

                {/* Second text — subheadline (fades in on scroll) */}
                <div data-hero-text className="absolute top-1/2 -translate-y-1/2 left-0 px-6 md:px-8 max-w-3xl" style={{ opacity: 0 }}>
                  <p className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.15] text-white/90 font-light">
                    You built the career, earned the income, did everything right.
                    <span className="text-gold-light"> Your state took half of it anyway.</span>
                  </p>
                </div>
              </div>

              {/* Kayden headshot */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end hero-animate hero-animate-delay-3">
                <div className="relative" data-hero-text>
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-gold/30 to-transparent blur-md" />
                  <Image
                    src="/kayden-headshot.jpg"
                    alt="Kayden Benfield"
                    width={380}
                    height={380}
                    className="relative rounded-full object-cover w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 border border-gold/20"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/40">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </section>
      </PinnedHero>

      {/* ═══════════════════════════════════════════
          3. PROOF TICKER
      ═══════════════════════════════════════════ */}
      <section className="bg-[#0a0a14] border-y border-white/5 py-4 overflow-hidden">
        <div className="ticker-track flex gap-12 whitespace-nowrap">
          {[...Array(2)].map((_, j) => (
            <div key={j} className="flex gap-12 items-center">
              {[
                "Licensed North Carolina Broker",
                "INNOVATE Real Estate — #1 Non-Franchised Brokerage, East Coast",
                "Agent Equity Owner — Skin in the Game",
                "Multi-State MLS Access — 10 States",
                "Direct Cell. No Gatekeepers. No Hand-Offs.",
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-sm text-white/30 font-body">
                  <span className="text-gold/50">✓</span> {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. THE PROBLEM WORLD — Gray/Cold
      ═══════════════════════════════════════════ */}

      {/* Viewport A: $172K */}
      <section className="viewport-section bg-cold-100">
        <ParallaxBg
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&q=80"
          className="opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cold-100/90 via-cold-100/70 to-cold-100/90" />
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <p className="text-[11px] tracking-[0.2em] uppercase font-body font-semibold text-cold-500 mb-6">
              You Earned $400K. Your State Took
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="font-heading text-7xl md:text-8xl lg:text-9xl text-warm-950 font-light tracking-tight">
              $172K
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="mt-4 text-lg md:text-xl text-cold-500 font-body max-w-md mx-auto">
              taken before you bought groceries
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Viewport B: Saving $800/mo */}
      <section className="viewport-section bg-cold-200">
        <ParallaxBg
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&q=80"
          className="opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cold-200/90 via-cold-200/70 to-cold-200/90" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <FadeIn>
            <p className="font-heading text-3xl md:text-4xl lg:text-5xl text-warm-950 font-light leading-[1.3] tracking-tight">
              You&apos;re earning $350K&ndash;$400K and saving{" "}
              <span className="text-cold-600 font-semibold">$800 a month.</span>
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="mt-8 text-lg text-cold-500 font-body max-w-xl mx-auto">
              You&apos;re not bad with money. You&apos;re in a bad jurisdiction.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Viewport C: The Symptoms */}
      <section className="viewport-section bg-cold-100">
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <FadeIn>
            <p className="text-lg md:text-xl leading-relaxed text-cold-600 font-body">
              You feel embarrassed telling anyone you&apos;re stressed about money at this income level.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="mt-8 text-lg md:text-xl leading-relaxed text-cold-600 font-body">
              Your home office is a converted closet. Your backyard is a patio. Your commute is 90 minutes each way.
            </p>
          </FadeIn>
          <FadeIn delay={800}>
            <p className="mt-8 text-lg md:text-xl leading-relaxed text-cold-500 font-body">
              You earn more than your parents ever did, and you have less to show for it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Viewport D: $1.5M+ gut punch */}
      <section className="viewport-section bg-cold-200">
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <p className="font-heading text-8xl md:text-9xl lg:text-[10rem] text-warm-950 font-light tracking-tight leading-none">
              $1.5M+
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="mt-6 text-lg md:text-xl text-cold-500 font-body max-w-md mx-auto">
              in wealth that never compounds. Over a decade.
            </p>
          </FadeIn>
          <FadeIn delay={500}>
            <p className="mt-4 text-sm text-cold-400 font-body">
              That&apos;s not a budgeting problem. That&apos;s a geography problem.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. THE SHIFT — Gray → Gold transition
      ═══════════════════════════════════════════ */}
      <section className="viewport-section bg-gradient-to-b from-cold-200 via-[#c9a84c]/20 to-hero-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/10 to-hero-dark" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[1.1] text-warm-950 font-semibold">
              The Problem Isn&apos;t Discipline. It&apos;s Geography.
            </h2>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="mt-6 font-heading text-2xl md:text-3xl lg:text-4xl tracking-tight text-gold font-light">
              And the Solution Has a Flat 3.99% Tax Rate.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. ENTERING CHARLOTTE — Warm world
      ═══════════════════════════════════════════ */}

      {/* Stat: 3.99% */}
      <section className="viewport-section bg-hero-dark relative">
        <ParallaxBg
          src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=1920&q=80"
          className="opacity-30"
        />
        <div className="absolute inset-0 bg-hero-dark/60" />
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <StatCounter value={3.99} decimals={2} className="font-heading text-7xl md:text-8xl lg:text-9xl text-gold font-light tracking-tight" suffix="%" />
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-4 text-lg text-white/50 font-body">flat state income tax rate</p>
          </FadeIn>
        </div>
      </section>

      {/* Stat: 157 daily */}
      <section className="min-h-[50vh] flex items-center justify-center relative bg-hero-dark overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <StatCounter value={157} className="font-heading text-7xl md:text-8xl lg:text-9xl text-white font-light tracking-tight" />
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-4 text-lg text-white/50 font-body">new residents move to Charlotte daily</p>
          </FadeIn>
        </div>
      </section>

      {/* Stat: $1.4M */}
      <section className="viewport-section bg-hero-dark relative">
        <ParallaxBg
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          className="opacity-25"
        />
        <div className="absolute inset-0 bg-hero-dark/60" />
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <StatCounter value={1.4} prefix="$" suffix="M" decimals={1} className="font-heading text-7xl md:text-8xl lg:text-9xl text-gold font-light tracking-tight" />
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-4 text-lg text-white/50 font-body">Charlotte luxury median vs. $2.5M+ coastal</p>
          </FadeIn>
        </div>
      </section>

      {/* Stat: 191 flights */}
      <section className="min-h-[50vh] flex items-center justify-center relative bg-hero-dark overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <StatCounter value={191} className="font-heading text-7xl md:text-8xl lg:text-9xl text-white font-light tracking-tight" />
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-4 text-lg text-white/50 font-body">nonstop destinations from CLT</p>
          </FadeIn>
        </div>
      </section>

      {/* Stat: 37,600 jobs */}
      <section className="min-h-[50vh] flex items-center justify-center relative bg-hero-dark overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <StatCounter value={37600} prefix="" className="font-heading text-7xl md:text-8xl lg:text-9xl text-gold font-light tracking-tight" />
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-4 text-lg text-white/50 font-body">jobs added in 2025 — highest growth rate among major metros</p>
          </FadeIn>
        </div>
      </section>

      {/* Stat: 121% */}
      <section className="viewport-section bg-hero-dark relative">
        <ParallaxBg
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1920&q=80"
          className="opacity-25"
        />
        <div className="absolute inset-0 bg-hero-dark/60" />
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <StatCounter value={121} suffix="%" className="font-heading text-7xl md:text-8xl lg:text-9xl text-gold font-light tracking-tight" />
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-4 text-lg text-white/50 font-body">appreciation over the past decade — still 40–60% below coastal</p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. THE PROCESS — How It Works
      ═══════════════════════════════════════════ */}
      <section className="bg-hero-dark py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn className="text-center mb-24">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white font-semibold">
              Your Relocation,{" "}
              <span className="text-gold">Engineered from Tax Code to Country Club.</span>
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* Step 01 */}
      <section className="viewport-section bg-hero-dark relative">
        <ParallaxBg
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          className="opacity-15"
        />
        <div className="absolute inset-0 bg-hero-dark/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
          <FadeIn>
            <span className="font-heading text-[140px] md:text-[180px] leading-none text-white/[0.03] font-bold absolute -top-10 left-0">01</span>
            <p className="text-[11px] tracking-[0.2em] uppercase font-body font-semibold text-gold mb-4">Step One</p>
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-6">
              Tax Arbitrage Consultation
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-white/60 font-body max-w-xl">
              Your move starts with a personalized financial model&mdash;not a neighborhood tour. You&apos;ll see the exact dollar figure your family recaptures annually. Not a range. Not an estimate. Your number. So that you make the decision based on math, not emotion.
            </p>
            <p className="mt-4 text-sm italic text-white/30 font-body">
              NC flat 3.99% vs. NY 10.9%, NJ 10.75%, CA 13.3%. Typical recapture: $50K&ndash;$150K+ annually.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Step 02 */}
      <section className="viewport-section bg-hero-dark relative">
        <ParallaxBg
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1920&q=80"
          className="opacity-15"
        />
        <div className="absolute inset-0 bg-hero-dark/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-right">
          <FadeIn direction="right">
            <span className="font-heading text-[140px] md:text-[180px] leading-none text-white/[0.03] font-bold absolute -top-10 right-0">02</span>
            <p className="text-[11px] tracking-[0.2em] uppercase font-body font-semibold text-gold mb-4">Step Two</p>
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-6">
              School District Mapping
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-white/60 font-body max-w-xl ml-auto">
              Your children&apos;s education isn&apos;t a line item to cut&mdash;it&apos;s the reason you&apos;re paying $45K&ndash;$90K per year right now. Kayden maps your kids&apos; academic priorities to specific school feeder patterns&mdash;elementary through high school.
            </p>
            <p className="mt-4 text-sm italic text-white/30 font-body">
              Weddington, Marvin Ridge, Ardrey Kell: top 20 statewide. Union County: top 5% of NC.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Step 03 */}
      <section className="viewport-section bg-hero-dark relative">
        <div className="absolute inset-0 bg-hero-dark/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
          <FadeIn>
            <span className="font-heading text-[140px] md:text-[180px] leading-none text-white/[0.03] font-bold absolute -top-10 left-0">03</span>
            <p className="text-[11px] tracking-[0.2em] uppercase font-body font-semibold text-gold mb-4">Step Three</p>
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-6">
              Lifestyle-First Neighborhood Matching
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-white/60 font-body max-w-xl">
              Most agents start with the MLS. Kayden starts with your life. Your commute patterns, weekend habits, dining preferences, and trailing spouse priorities are mapped to 2&ndash;3 Charlotte micro-markets.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Step 04 */}
      <section className="viewport-section bg-hero-dark relative">
        <ParallaxBg
          src="https://images.unsplash.com/photo-1499793983394-e58fc2e67a11?w=1920&q=80"
          className="opacity-15"
        />
        <div className="absolute inset-0 bg-hero-dark/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-right">
          <FadeIn direction="right">
            <span className="font-heading text-[140px] md:text-[180px] leading-none text-white/[0.03] font-bold absolute -top-10 right-0">04</span>
            <p className="text-[11px] tracking-[0.2em] uppercase font-body font-semibold text-gold mb-4">Step Four</p>
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-6">
              Curated Home Search with Virtual Pre-Tours
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-white/60 font-body max-w-xl ml-auto">
              You&apos;re 800 miles away. Every trip costs $3K&ndash;$5K and a weekend you don&apos;t have. Kayden pre-screens all inventory and sends curated shortlists with video walkthroughs. Your first visit is productive&mdash;not exploratory.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Step 05 */}
      <section className="viewport-section bg-hero-dark relative">
        <div className="absolute inset-0 bg-hero-dark/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
          <FadeIn>
            <span className="font-heading text-[140px] md:text-[180px] leading-none text-white/[0.03] font-bold absolute -top-10 left-0">05</span>
            <p className="text-[11px] tracking-[0.2em] uppercase font-body font-semibold text-gold mb-4">Step Five</p>
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-6">
              Radical Transparency Communication
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-white/60 font-body max-w-xl">
              No disappearing for three days. No vague &ldquo;things are moving along&rdquo; updates. No hand-offs to a junior associate. Kayden tells you exactly what&apos;s happening, what to expect, and what your options are&mdash;at every stage.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Step 06 */}
      <section className="viewport-section bg-hero-dark relative">
        <ParallaxBg
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          className="opacity-15"
        />
        <div className="absolute inset-0 bg-hero-dark/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-right">
          <FadeIn direction="right">
            <span className="font-heading text-[140px] md:text-[180px] leading-none text-white/[0.03] font-bold absolute -top-10 right-0">06</span>
            <p className="text-[11px] tracking-[0.2em] uppercase font-body font-semibold text-gold mb-4">Step Six</p>
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-6">
              First 100 Days Integration Program
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-white/60 font-body max-w-xl ml-auto">
              The transaction closes. Most agents disappear. Kayden&apos;s relationship extends 12 months past closing. You get curated introductions to country club membership directors, local wealth advisors, pediatricians, school administrators, and professional networks.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. DEEP PROOF — Data Cards
      ═══════════════════════════════════════════ */}
      <section className="bg-hero-dark py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white font-semibold">
              The Numbers.{" "}
              <span className="text-gold">Verified. Cited. Run Them Yourself.</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Tax Arbitrage",
                body: "NC\u2019s flat 3.99% vs. NY (10.9%), CA (13.3%), NJ (10.75%), D.C. (10.75%). No state estate tax. A $350K household typically recaptures $50K\u2013$150K+ annually.",
              },
              {
                title: "Housing",
                body: "Charlotte luxury median: $1.4M vs. $2.5M+ (NYC), $3.2M+ (LA), $2.1M+ (D.C.). 121% appreciation over the past decade\u2014still 40\u201360% below coastal.",
              },
              {
                title: "Schools",
                body: "Weddington, Marvin Ridge, Ardrey Kell: top 20 statewide. Union County: top 5% of NC. AP and IB programs rival $45K\u2013$48K private academies.",
              },
              {
                title: "Jobs",
                body: "Charlotte MSA added 37,600 jobs in 2025\u2014highest growth rate (2.7%) among all major U.S. metros. Second-largest U.S. banking center.",
              },
              {
                title: "Connectivity",
                body: "CLT Airport: 191 nonstop destinations. NYC is 90 minutes. D.C. is 75. Your legacy network doesn\u2019t disappear.",
              },
              {
                title: "Growth",
                body: "157 new residents daily. #1 net in-migration metro in the U.S. for three consecutive years.",
              },
            ].map((card, i) => (
              <ScaleReveal key={i} delay={i * 100}>
                <div className="bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm rounded-lg p-6 md:p-8 hover:bg-white/[0.06] transition-all duration-500">
                  <h3 className="font-heading text-xl md:text-2xl text-gold font-semibold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-white/50 font-body">
                    {card.body}
                  </p>
                </div>
              </ScaleReveal>
            ))}
          </div>

          <FadeIn delay={600} className="text-center mt-8">
            <p className="text-xs text-white/20 font-body">
              Sources: IRS migration data, U.S. Census, Charlotte Regional Business Alliance, U.S. News school rankings, CLT Airport authority.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. WHY KAYDEN — Split screen
      ═══════════════════════════════════════════ */}
      <section className="viewport-section bg-hero-dark relative">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-gold/10 to-transparent blur-lg" />
                  <Image
                    src="/kayden-headshot.jpg"
                    alt="Kayden Benfield"
                    width={500}
                    height={500}
                    className="relative rounded-2xl object-cover w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] border border-gold/10"
                  />
                </div>
              </div>
            </FadeIn>

            <div>
              <FadeIn direction="right">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-white font-semibold mb-8">
                  What Changes{" "}
                  <span className="text-gold">When the Geography Changes.</span>
                </h2>
              </FadeIn>
              <FadeIn direction="right" delay={200}>
                <p className="text-lg leading-relaxed text-white/50 font-body mb-6">
                  You&apos;ve seen agents who push quick sales because they&apos;re juggling 40 transactions. You&apos;ve experienced communication blackouts, hand-offs to junior staff, and properties shown that blatantly ignored what you asked for.
                </p>
              </FadeIn>
              <FadeIn direction="right" delay={400}>
                <p className="text-lg leading-relaxed text-white/50 font-body">
                  Kayden operates differently. Every client gets direct cell access&mdash;no gatekeepers, no assistants screening calls. The financial arbitrage report comes before a single showing. And if a property doesn&apos;t serve your long-term wealth, he&apos;ll tell you not to buy it&mdash;even when it costs him the commission.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          10. FAQ
      ═══════════════════════════════════════════ */}
      <section className="bg-cream py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.2] text-warm-950 font-semibold mb-12">
              Your Questions.{" "}
              <span className="text-gold">Answered Directly.</span>
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="border-b border-warm-200">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full py-5 flex items-start justify-between gap-4 text-left"
                  >
                    <span className="font-heading text-lg md:text-xl text-warm-950 font-medium leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className={`text-gold text-2xl leading-none flex-shrink-0 transition-transform duration-300 ${
                        openFaq === i ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`accordion-content ${openFaq === i ? "open" : ""}`}
                  >
                    <div>
                      <p className="pb-5 text-[15px] leading-relaxed text-warm-600 font-body">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Risk Reversal */}
          <FadeIn delay={500}>
            <div className="mt-12 bg-warm-100 border-l-3 border-gold-dark rounded-r-lg p-6 md:p-8">
              <h3 className="font-heading text-xl text-warm-950 font-semibold mb-3">
                Risk Reversal
              </h3>
              <p className="text-[15px] leading-relaxed text-warm-600 font-body">
                Kayden&apos;s advisory operates on a fiduciary principle: if a property doesn&apos;t meet stringent investment and lifestyle criteria, he advises you to walk away&mdash;even at the cost of his commission. You pay nothing upfront. Commission is earned only upon a successful close. You get 12 months of post-close support.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={600}>
            <p className="mt-8 text-base md:text-[17px] leading-relaxed text-warm-700 font-body">
              Every year you stay in a high-tax coastal metro is another $87K&ndash;$150K in wealth that doesn&apos;t compound. Over the next decade, that gap becomes $1.5M+. The question isn&apos;t whether Charlotte works financially&mdash;the math is settled. The question is how long you&apos;ll wait before you run your own numbers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          11. FINAL CTA
      ═══════════════════════════════════════════ */}
      <section className="viewport-section bg-navy relative">
        <ParallaxBg
          src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=1920&q=80"
          className="opacity-20"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gold/[0.06] rounded-full blur-[150px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.1] text-white font-semibold">
              Book Your Relocation Strategy Call
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-lg md:text-xl text-white/50 font-body">
              30 minutes. No pitch. Just your numbers.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold text-base !py-4 !px-10">
                Book Your Strategy Call
              </Link>
              <Link href="/calculator" className="btn-outline text-base !py-4 !px-10">
                Run Your Numbers First
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={600}>
            <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/25 font-body">
              <span>✓ 157 new residents daily</span>
              <span>✓ 3.99% flat state tax</span>
              <span>✓ 191 nonstop CLT flights</span>
              <span>✓ 37,600 jobs added in 2025</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
