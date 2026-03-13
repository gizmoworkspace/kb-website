"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sampleListings = [
  {
    headline: "5,200 sq ft on 1.3 acres in the Weddington High School zone. $1.05M.",
    neighborhood: "Weddington / Union County",
    neighborhoodContext: "Weddington is Union County\u2019s crown jewel \u2014 top-ranked public schools, large wooded lots, and a transplant-heavy community of doctors, attorneys, and banking executives. 25-minute commute to Uptown Charlotte via I-485. Weddington High School feeder pattern: Weddington Elementary \u2192 Cuthbertson Middle \u2192 Weddington High.",
    arbitrage: "This home\u2019s equivalent in Westchester: $2.1M+. In Weddington: $1.05M. Property taxes: $6,800 vs. $38,000.",
    schools: "Weddington Elementary (K\u20135), Cuthbertson Middle (6\u20138), Weddington High (9\u201312) \u2014 all top 20 statewide. No known rezoning pending.",
    assessment: "Best-in-class school zone. The lot is 1.3 acres with mature hardwoods \u2014 rare for new Weddington inventory. The kitchen was updated in 2023. Drawback: the primary bath is original and will likely need a $25K\u2013$35K renovation within 2 years. HOA is $180/month with pool and tennis access. Best suited for families with school-aged children who prioritize academic rigor above all else.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
  },
  {
    headline: "4,800 sq ft Myers Park estate on tree-lined Selwyn Avenue. $1.85M.",
    neighborhood: "Myers Park",
    neighborhoodContext: "Charlotte\u2019s most established luxury address. Tree-lined streets, historic architecture, walkable to SouthPark\u2019s restaurants and boutiques. 10 minutes to Uptown. Myers Park High School feeder: Selwyn Elementary \u2192 Alexander Graham Middle \u2192 Myers Park High.",
    arbitrage: "Comparable property in Greenwich, CT: $3.8M+. In Myers Park: $1.85M. Property taxes: $14,200 vs. $52,000.",
    schools: "Selwyn Elementary, Alexander Graham Middle, Myers Park High School. Strong AP offerings. Walking distance from this address.",
    assessment: "This is a 1940s Georgian colonial with original hardwood floors, a renovated chef\u2019s kitchen, and a detached guest house. The lot is 0.6 acres \u2014 large for Myers Park. Drawback: the HVAC system is 12 years old and will need replacement within 3\u20135 years ($18K\u2013$25K). Street parking only \u2014 no garage. Best for families who value architectural character, walkability, and proximity to Charlotte\u2019s cultural core.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  },
  {
    headline: "6,100 sq ft Lake Norman waterfront with deep-water dock. $2.15M.",
    neighborhood: "Lake Norman / Cornelius",
    neighborhoodContext: "Lake Norman is Charlotte\u2019s premier waterfront destination \u2014 520 miles of shoreline, deep-water dock access, and resort-caliber living. CLT Airport is 25 minutes south. The Peninsula Club and Lake Norman Yacht Club anchor the social calendar.",
    arbitrage: "Comparable waterfront in Darien, CT: $4.5M+. On Lake Norman: $2.15M. Property taxes: $11,800 vs. $65,000. No state estate tax.",
    schools: "Lake Norman Charter (K\u201312, lottery-based). Pine Lake Prep (private option). Davidson IB World School within 15 minutes.",
    assessment: "Main-channel waterfront with a 60-foot dock and boat lift \u2014 increasingly rare inventory. The home was custom-built in 2019 with a commercial-grade kitchen, home theater, and infinity-edge pool overlooking the lake. Drawback: school zone is weaker than Union County \u2014 you\u2019ll likely supplement with charter or private options. HOA is $450/month but includes lake access and community amenities. Best for early retirees, semi-retirees, or families where school zone is secondary to lifestyle.",
    image: "https://images.unsplash.com/photo-1499793983394-e58fc3373a05?w=1200&q=80",
  },
  {
    headline: "4,200 sq ft in Ballantyne\u2019s gated Piper Glen. $925K.",
    neighborhood: "Ballantyne / South Charlotte",
    neighborhoodContext: "Ballantyne is Charlotte\u2019s commercial-suburban hub \u2014 corporate offices, national restaurants, and master-planned neighborhoods with strong HOA infrastructure. 10-minute commute to Ballantyne Corporate Park, 20\u201330 minutes to Uptown. Ardrey Kell High School feeder pattern.",
    arbitrage: "Comparable property in Bethesda, MD: $1.9M+. In Ballantyne: $925K. Property taxes: $7,100 vs. $28,000.",
    schools: "Hawk Ridge Elementary, Community House Middle, Ardrey Kell High School \u2014 top 20 statewide. Strong AP programs across the feeder.",
    assessment: "Piper Glen is a gated community with 24/7 security, golf course, and club amenities. This home has been fully updated: new roof (2024), refinished hardwoods, and a screened porch overlooking the 14th fairway. Drawback: the lot is 0.3 acres \u2014 standard for Ballantyne but small compared to Weddington. The community skews corporate \u2014 less of the \u201cold Charlotte\u201d charm of Myers Park. Best for dual-income families where one or both spouses work in the Ballantyne or SouthPark corridors.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  },
];

export default function ListingsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(".l-hero-title", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" })
        .fromTo(".l-hero-sub", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6")
        .fromTo(".l-hero-cta", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5");

      gsap.utils.toArray<HTMLElement>(".reveal-block").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".listing-card").forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, y: 60 }, {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
          delay: i * 0.05,
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-navy-dark">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/85 via-navy/75 to-navy-dark" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-32">
          <h1 className="l-hero-title font-serif display-xl text-white mb-6 opacity-0">
            Charlotte Luxury Properties. Curated, Not Filtered.
          </h1>
          <p className="l-hero-sub text-lg md:text-xl text-gray-300/90 mb-10 leading-relaxed max-w-2xl opacity-0">
            Every property below has been vetted against the criteria that matter to relocating families: school zone quality, commute corridor, neighborhood micro-culture, HOA health, and long-term appreciation trajectory. This is not a Zillow dump. This is a curated selection from Charlotte&apos;s luxury inventory—including off-market opportunities that never hit the MLS.
          </p>
          <div className="l-hero-cta flex flex-col sm:flex-row gap-4 opacity-0">
            <Link href="/contact" className="inline-block px-8 py-4 bg-gold text-navy font-semibold text-sm tracking-[0.1em] uppercase hover:bg-gold-light transition-all duration-300 text-center">
              Book a Call to Discuss These Properties
            </Link>
            <Link href="/calculator" className="inline-block px-8 py-4 border border-white/20 text-white text-sm tracking-[0.1em] uppercase hover:bg-white/10 transition-all duration-300 text-center">
              Use the Calculator to See Your Buying Power
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            {["$750K–$2.5M Range", "Top School Zones", "Off-Market Access", "Updated Weekly"].map((item, i) => (
              <span key={i} className="flex items-center gap-2"><span className="text-gold text-xs">✦</span> {item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* LISTINGS */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-16">
          {sampleListings.map((listing, i) => (
            <div key={i} className="listing-card glass rounded-xl overflow-hidden">
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img src={listing.image} alt={listing.neighborhood} className="w-full h-full object-cover opacity-100 hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <span className="text-xs text-gold tracking-[0.2em] uppercase">{listing.neighborhood}</span>
                </div>
              </div>

              <div className="p-8 lg:p-10">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-8">{listing.headline}</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xs text-gold tracking-[0.2em] uppercase mb-3">Neighborhood Context</h4>
                    <p className="text-gray-300/80 leading-relaxed">{listing.neighborhoodContext}</p>
                  </div>
                  <div>
                    <h4 className="text-xs text-gold tracking-[0.2em] uppercase mb-3">Financial Arbitrage Snapshot</h4>
                    <p className="text-gray-300/80 leading-relaxed font-medium">{listing.arbitrage}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xs text-gold tracking-[0.2em] uppercase mb-3">School Zone Verification</h4>
                    <p className="text-gray-300/80 leading-relaxed">{listing.schools}</p>
                  </div>
                  <div>
                    <h4 className="text-xs text-gold tracking-[0.2em] uppercase mb-3">Kayden&apos;s Assessment</h4>
                    <p className="text-gray-300/80 leading-relaxed">{listing.assessment}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="inline-block px-6 py-3 bg-gold text-navy font-semibold text-sm tracking-[0.1em] uppercase hover:bg-gold-light transition-all duration-300 text-center">
                    Schedule a Virtual Tour of This Property
                  </Link>
                  <Link href="/contact" className="inline-block px-6 py-3 border border-white/20 text-white text-sm tracking-[0.1em] uppercase hover:bg-white/10 transition-all duration-300 text-center">
                    Ask Kayden About This Home
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SWITCH */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal-block">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="font-serif display-lg text-white mb-8">Why Curated Beats Filtered</h2>
          <p className="text-gray-300/80 text-lg leading-relaxed">
            Zillow shows you every listing. Kayden shows you the right ones. Every property on this page has been vetted for school zone quality, commute corridor, HOA health, and long-term appreciation trajectory. The difference between browsing 3,000 listings from 800 miles away and reviewing 7 properties that genuinely fit is the difference between a stressful relocation and a strategic one.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 lg:py-32">
        <div className="reveal-block max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-300/80 mb-6 leading-relaxed">
            The properties on this page represent a fraction of what&apos;s available. Kayden&apos;s curated search identifies homes that match your specific financial, educational, and lifestyle criteria—including off-market opportunities that never appear on public platforms.
          </p>
          <h2 className="font-serif display-lg text-white mb-4">See Properties Selected for Your Family</h2>
          <p className="text-gray-500 mb-10">
            Book a 30-minute call. Walk through your criteria. Receive a personalized shortlist within 48 hours.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-gold text-navy font-semibold text-sm tracking-[0.1em] uppercase hover:bg-gold-light transition-all duration-300">
            Book Your Call — Includes Off-Market Properties
          </Link>
        </div>
      </section>
    </div>
  );
}
