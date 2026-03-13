"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const sampleListings = [
  {
    headline: "5,200 sq ft on 1.3 acres in the Weddington High School zone. $1.05M.",
    neighborhood: "Weddington / Union County",
    neighborhoodContext: "Weddington is Union County's crown jewel — top-ranked public schools, large wooded lots, and a transplant-heavy community of doctors, attorneys, and banking executives. 25-minute commute to Uptown Charlotte via I-485. Weddington High School feeder pattern: Weddington Elementary → Cuthbertson Middle → Weddington High.",
    arbitrage: "This home's equivalent in Westchester: $2.1M+. In Weddington: $1.05M. Property taxes: $6,800 vs. $38,000.",
    schools: "Weddington Elementary (K–5), Cuthbertson Middle (6–8), Weddington High (9–12) — all top 20 statewide. No known rezoning pending.",
    assessment: "Best-in-class school zone. The lot is 1.3 acres with mature hardwoods — rare for new Weddington inventory. The kitchen was updated in 2023. Drawback: the primary bath is original and will likely need a $25K–$35K renovation within 2 years. HOA is $180/month with pool and tennis access. Best suited for families with school-aged children who prioritize academic rigor above all else.",
  },
  {
    headline: "4,800 sq ft Myers Park estate on tree-lined Selwyn Avenue. $1.85M.",
    neighborhood: "Myers Park",
    neighborhoodContext: "Charlotte's most established luxury address. Tree-lined streets, historic architecture, walkable to SouthPark's restaurants and boutiques. 10 minutes to Uptown. Myers Park High School feeder: Selwyn Elementary → Alexander Graham Middle → Myers Park High.",
    arbitrage: "Comparable property in Greenwich, CT: $3.8M+. In Myers Park: $1.85M. Property taxes: $14,200 vs. $52,000.",
    schools: "Selwyn Elementary, Alexander Graham Middle, Myers Park High School. Strong AP offerings. Walking distance from this address.",
    assessment: "This is a 1940s Georgian colonial with original hardwood floors, a renovated chef's kitchen, and a detached guest house. The lot is 0.6 acres — large for Myers Park. Drawback: the HVAC system is 12 years old and will need replacement within 3–5 years ($18K–$25K). Street parking only — no garage. Best for families who value architectural character, walkability, and proximity to Charlotte's cultural core.",
  },
  {
    headline: "6,100 sq ft Lake Norman waterfront with deep-water dock. $2.15M.",
    neighborhood: "Lake Norman / Cornelius",
    neighborhoodContext: "Lake Norman is Charlotte's premier waterfront destination — 520 miles of shoreline, deep-water dock access, and resort-caliber living. CLT Airport is 25 minutes south. The Peninsula Club and Lake Norman Yacht Club anchor the social calendar.",
    arbitrage: "Comparable waterfront in Darien, CT: $4.5M+. On Lake Norman: $2.15M. Property taxes: $11,800 vs. $65,000. No state estate tax.",
    schools: "Lake Norman Charter (K–12, lottery-based). Pine Lake Prep (private option). Davidson IB World School within 15 minutes.",
    assessment: "Main-channel waterfront with a 60-foot dock and boat lift — increasingly rare inventory. The home was custom-built in 2019 with a commercial-grade kitchen, home theater, and infinity-edge pool overlooking the lake. Drawback: school zone is weaker than Union County — you'll likely supplement with charter or private options. HOA is $450/month but includes lake access and community amenities. Best for early retirees, semi-retirees, or families where school zone is secondary to lifestyle.",
  },
  {
    headline: "4,200 sq ft in Ballantyne's gated Piper Glen. $925K.",
    neighborhood: "Ballantyne / South Charlotte",
    neighborhoodContext: "Ballantyne is Charlotte's commercial-suburban hub — corporate offices, national restaurants, and master-planned neighborhoods with strong HOA infrastructure. 10-minute commute to Ballantyne Corporate Park, 20–30 minutes to Uptown. Ardrey Kell High School feeder pattern.",
    arbitrage: "Comparable property in Bethesda, MD: $1.9M+. In Ballantyne: $925K. Property taxes: $7,100 vs. $28,000.",
    schools: "Hawk Ridge Elementary, Community House Middle, Ardrey Kell High School — top 20 statewide. Strong AP programs across the feeder.",
    assessment: "Piper Glen is a gated community with 24/7 security, golf course, and club amenities. This home has been fully updated: new roof (2024), refinished hardwoods, and a screened porch overlooking the 14th fairway. Drawback: the lot is 0.3 acres — standard for Ballantyne but small compared to Weddington. The community skews corporate — less of the \"old Charlotte\" charm of Myers Park. Best for dual-income families where one or both spouses work in the Ballantyne or SouthPark corridors.",
  },
];

export default function ListingsPage() {
  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="bg-navy text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.h1 variants={fadeIn} className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Charlotte Luxury Properties. Curated, Not Filtered.
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Every property below has been vetted against the criteria that matter to relocating families: school zone quality, commute corridor, neighborhood micro-culture, HOA health, and long-term appreciation trajectory. This is not a Zillow dump. This is a curated selection from Charlotte&apos;s luxury inventory—including off-market opportunities that never hit the MLS.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-4 rounded text-center transition-colors">
                Book a Call to Discuss These Properties
              </Link>
              <Link href="/calculator" className="inline-block border border-gold text-gold hover:bg-gold hover:text-navy font-semibold px-8 py-4 rounded text-center transition-colors">
                Use the Calculator to See Your Buying Power
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-champagne border-y border-gold/20 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base text-navy font-medium">
          <span>✓ $750K–$2.5M Range</span>
          <span>✓ Top School Zones</span>
          <span>✓ Off-Market Access</span>
          <span>✓ Updated Weekly</span>
        </div>
      </section>

      {/* LISTINGS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {sampleListings.map((listing, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-cream rounded-lg border border-gold/10 overflow-hidden"
              >
                {/* Photo placeholder */}
                <div className="h-64 bg-gradient-to-br from-navy/5 via-gold/5 to-navy/10 flex items-center justify-center">
                  <p className="text-slate italic text-sm">Professional property photography — {listing.neighborhood}</p>
                </div>
                <div className="p-8 lg:p-10">
                  <h3 className="font-serif text-2xl md:text-3xl text-navy mb-6">{listing.headline}</h3>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-gold uppercase tracking-wider text-sm mb-3">Neighborhood Context</h4>
                      <p className="text-charcoal leading-relaxed">{listing.neighborhoodContext}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gold uppercase tracking-wider text-sm mb-3">Financial Arbitrage Snapshot</h4>
                      <p className="text-charcoal leading-relaxed font-medium">{listing.arbitrage}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-gold uppercase tracking-wider text-sm mb-3">School Zone Verification</h4>
                      <p className="text-charcoal leading-relaxed">{listing.schools}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gold uppercase tracking-wider text-sm mb-3">Kayden&apos;s Assessment</h4>
                      <p className="text-charcoal leading-relaxed">{listing.assessment}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="inline-block bg-navy hover:bg-charcoal text-white font-semibold px-6 py-3 rounded text-center transition-colors text-sm">
                      Schedule a Virtual Tour of This Property
                    </Link>
                    <Link href="/contact" className="inline-block border border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 rounded text-center transition-colors text-sm">
                      Ask Kayden About This Home
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SWITCH */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-8">Why Curated Beats Filtered</h2>
            <p className="text-charcoal text-lg leading-relaxed">
              Zillow shows you every listing. Kayden shows you the right ones. Every property on this page has been vetted for school zone quality, commute corridor, HOA health, and long-term appreciation trajectory. The difference between browsing 3,000 listings from 800 miles away and reviewing 7 properties that genuinely fit is the difference between a stressful relocation and a strategic one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy text-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              The properties on this page represent a fraction of what&apos;s available. Kayden&apos;s curated search identifies homes that match your specific financial, educational, and lifestyle criteria—including off-market opportunities that never appear on public platforms.
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">See Properties Selected for Your Family</h2>
            <p className="text-gray-400 mb-10">
              Book a 30-minute call. Walk through your criteria. Receive a personalized shortlist within 48 hours.
            </p>
            <Link href="/contact" className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 rounded text-lg transition-colors">
              Book Your Call — Includes Off-Market Properties
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
