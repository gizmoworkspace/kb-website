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

const neighborhoods = [
  {
    name: "Myers Park / Eastover",
    tagline: "For the Family That Wants Charlotte's Most Established Address.",
    profile:
      "Tree-lined streets, historic estates, and walkable proximity to SouthPark's restaurants, boutiques, and galleries. Myers Park is Charlotte's answer to the established, old-money neighborhoods you're leaving behind—with none of the financial penalty. Eastover is quieter, more understated, and five minutes from Uptown. These are Charlotte's original luxury addresses.",
    schools:
      "Myers Park High School, Selwyn Elementary, Alexander Graham Middle. Strong AP offerings. Walking distance from many Myers Park homes.",
    clubs:
      "Myers Park Country Club, Charlotte Country Club. Established social calendars. Membership by invitation.",
    idealFor:
      "Families who value architectural character, walkability, mature trees, and proximity to Charlotte's cultural core. Former Brooklynites, Georgetown residents, and anyone who equates neighborhood character with quality of life.",
    price:
      "$1.2M–$3.5M+ for estate-level properties. $750K–$1.2M for updated traditional homes.",
  },
  {
    name: "Weddington / Marvin",
    tagline: "For the Family That Relocates Primarily for Schools.",
    profile:
      "Union County's crown jewels. Weddington and Marvin offer large wooded lots (1–5 acres), new construction, and access to North Carolina's highest-ranked public schools. This is where the $45K–$90K tuition elimination becomes most tangible. The community is heavily transplant—doctors, attorneys, banking executives from the same coastal metros you're leaving.",
    schools:
      "Weddington High School and Marvin Ridge High School—both consistently top 20 statewide. Cuthbertson Middle, Weddington Middle. Feeder patterns are the primary driver of home selection in this area.",
    clubs:
      "Providence Country Club, TPC Wakefield Plantation (nearby). Active parent networks and youth sports leagues.",
    idealFor:
      "Families with school-aged children who prioritize academic rigor above all else. Willing to trade urban walkability for space, top schools, and a tight-knit transplant community. Former Westchester, Northern NJ, and Fairfield County residents.",
    price:
      "$850K–$1.8M for estate homes on acreage. $600K–$850K for newer construction in established subdivisions.",
  },
  {
    name: "Ballantyne / South Charlotte",
    tagline: "For the Family That Needs Corporate Proximity and Convenience.",
    profile:
      "Ballantyne is Charlotte's commercial-suburban hub: corporate offices, national restaurant chains, retail density, and master-planned neighborhoods with strong HOA infrastructure. South Charlotte's broader corridor offers more variety—from gated enclaves to established neighborhoods with mature trees. The commute to Uptown is 20–30 minutes. The commute to Ballantyne Corporate Park is often under 10.",
    schools:
      "Ardrey Kell High School—top 20 statewide. Community House Middle, Hawk Ridge Elementary. Solid feeder patterns with strong AP programs.",
    clubs:
      "Ballantyne Country Club. Golf, tennis, pool, and active social programming.",
    idealFor:
      "Dual-income families where one or both spouses work in the Ballantyne or SouthPark corporate corridors. Value convenience, infrastructure, and a polished suburban environment. Former residents of Bethesda, Tysons Corner, or Stamford.",
    price:
      "$700K–$1.5M for executive-level homes. $1.5M–$2.5M for gated estate properties.",
  },
  {
    name: "Lake Norman",
    tagline: "For the Retiree or Semi-Retiree Who Wants Waterfront Luxury.",
    profile:
      "Lake Norman is Charlotte's premier waterfront destination: 520 miles of shoreline, deep-water dock access, and luxury communities built around golf, boating, and an active social calendar. Cornelius, Davidson, and Mooresville each offer a distinct flavor—from the college-town walkability of Davidson to the resort-scale estates of The Peninsula. CLT Airport is 20–40 minutes south.",
    schools:
      "Lake Norman Charter, Pine Lake Prep (private options). Davidson IB World School. School quality varies more by specific zone than in Union County—Kayden's feeder mapping is critical here.",
    clubs:
      "The Peninsula Club, The Point (private gated), Northstone Country Club, Lake Norman Yacht Club, Davidson College athletic events.",
    idealFor:
      "Early retirees (55–65) from the Northeast or Florida seeking waterfront living, no state estate tax, golf, boating, and proximity to CLT's 191 nonstop destinations. \"Half-back\" migrants who left the Northeast for Florida and now want milder summers, lower insurance, and closer proximity to Mid-Atlantic family.",
    price:
      "$1.0M–$3.0M+ for waterfront with dock access. $600K–$1.0M for golf community homes off the water.",
  },
  {
    name: "SouthPark",
    tagline: "For the Family That Wants Urban Convenience Without Urban Density.",
    profile:
      "SouthPark sits at the intersection of Charlotte's best restaurants, retail, and professional offices. SouthPark Mall anchors the commercial core, but the surrounding residential streets offer established homes on wooded lots with 10–15 minute drives to Uptown, Myers Park, and Ballantyne. It's the closest Charlotte gets to a \"walkable suburb\"—and it's where many Charlotte executives choose to live for the daily convenience.",
    schools:
      "South Mecklenburg High School, Carmel Middle, Sharon Elementary. Solid district options. Proximity to several strong magnet programs.",
    clubs:
      "Carmel Country Club—one of Charlotte's most active and well-regarded private clubs with golf, tennis, dining, and a strong social membership.",
    idealFor:
      "Professionals who want short commutes, dining and retail within five minutes, and an established neighborhood that doesn't feel like a master-planned subdivision. Former residents of Chevy Chase, Short Hills, or Pasadena.",
    price:
      "$800K–$2.0M for updated estate homes. $600K–$800K for traditional homes in established sections.",
  },
];

export default function NeighborhoodsPage() {
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
            Your Neighborhood Determines Whether This Move Works.{" "}
            <span className="text-gold">Choose Precisely.</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
            Charlotte&apos;s metro stretches across 3,000+ square miles. The financial arbitrage is consistent across all of it. The lifestyle fit is not. The wrong neighborhood means the wrong commute, the wrong school zone, and 18 months of regret. Kayden maps your family&apos;s priorities to the 2–3 micro-markets that actually match how you live.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gold text-navy font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
            >
              Book Your Neighborhood Matching Call
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-cream border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-charcoal">
            <span>✓ 5 Distinct Luxury Micro-Markets</span>
            <span>✓ Top-Ranked School Zones</span>
            <span>✓ $750K–$2.5M Price Range</span>
            <span>✓ 15–25 Min to Uptown</span>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-28 space-y-20">
        {neighborhoods.map((hood, i) => (
          <motion.section
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="border border-gray-200 bg-white"
          >
            <div className="bg-navy text-white p-8">
              <motion.h2 variants={fadeIn} className="font-serif text-2xl md:text-3xl mb-2">
                {hood.name}
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gold italic">
                {hood.tagline}
              </motion.p>
            </div>

            <div className="p-8 space-y-6">
              <motion.div variants={fadeIn}>
                <h3 className="font-serif text-lg text-navy mb-2">Neighborhood Profile</h3>
                <p className="text-charcoal leading-relaxed">{hood.profile}</p>
              </motion.div>

              <motion.div variants={fadeIn}>
                <h3 className="font-serif text-lg text-navy mb-2">Schools</h3>
                <p className="text-charcoal leading-relaxed">{hood.schools}</p>
              </motion.div>

              <motion.div variants={fadeIn}>
                <h3 className="font-serif text-lg text-navy mb-2">Country Clubs &amp; Social</h3>
                <p className="text-charcoal leading-relaxed">{hood.clubs}</p>
              </motion.div>

              <motion.div variants={fadeIn}>
                <h3 className="font-serif text-lg text-navy mb-2">Ideal For</h3>
                <p className="text-charcoal leading-relaxed">{hood.idealFor}</p>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-cream p-4 border border-gray-200">
                <h3 className="font-serif text-lg text-navy mb-1">Price Range</h3>
                <p className="text-charcoal">{hood.price}</p>
              </motion.div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* CLOSE */}
      <section className="bg-navy text-white py-20 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-3xl mx-auto px-6 lg:px-8 text-center"
        >
          <motion.h2 variants={fadeIn} className="font-serif text-3xl md:text-4xl mb-6">
            Which Neighborhood Fits Your Family?
          </motion.h2>
          <motion.p variants={fadeIn} className="text-gray-300 leading-relaxed mb-8">
            You don&apos;t need to figure this out from a web page. Kayden&apos;s Lifestyle Mapping Consultation takes your commute, school priorities, social preferences, and weekend patterns and narrows Charlotte&apos;s 3,000+ square miles to the 2–3 neighborhoods that actually match how you live. Every family is different. The map should be too.
          </motion.p>
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-gold text-navy font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
            >
              Book Your Neighborhood Matching Call
            </Link>
            <Link
              href="/calculator"
              className="px-10 py-4 border border-gold/40 text-gold text-sm tracking-wide hover:bg-gold/10 transition-colors"
            >
              Or Run Your Numbers First in the Calculator
            </Link>
          </motion.div>
          <motion.p variants={fadeIn} className="mt-4 text-sm text-gray-400">
            30 minutes. Walk through your priorities. Get your personalized shortlist.
          </motion.p>
        </motion.div>
      </section>

      <div className="h-16 lg:hidden" />
    </div>
  );
}
