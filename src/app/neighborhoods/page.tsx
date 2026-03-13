"use client";

import Link from "next/link";
import { FadeIn, ParallaxBg } from "@/components/ScrollAnimations";

const neighborhoods = [
  {
    name: "Myers Park / Eastover",
    tagline: "For the Family That Wants Charlotte\u2019s Most Established Address.",
    profile: "Tree-lined streets, historic estates, and walkable proximity to SouthPark\u2019s restaurants, boutiques, and galleries. Myers Park is Charlotte\u2019s answer to the established, old-money neighborhoods you\u2019re leaving behind\u2014with none of the financial penalty. Eastover is quieter, more understated, and five minutes from Uptown. These are Charlotte\u2019s original luxury addresses.",
    schools: "Myers Park High School, Selwyn Elementary, Alexander Graham Middle. Strong AP offerings. Walking distance from many Myers Park homes.",
    clubs: "Myers Park Country Club, Charlotte Country Club. Established social calendars. Membership by invitation.",
    ideal: "Families who value architectural character, walkability, mature trees, and proximity to Charlotte\u2019s cultural core. Former Brooklynites, Georgetown residents, and anyone who equates neighborhood character with quality of life.",
    price: "$1.2M\u2013$3.5M+ for estate-level properties. $750K\u2013$1.2M for updated traditional homes.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
  },
  {
    name: "Weddington / Marvin",
    tagline: "For the Family That Relocates Primarily for Schools.",
    profile: "Union County\u2019s crown jewels. Weddington and Marvin offer large wooded lots (1\u20135 acres), new construction, and access to North Carolina\u2019s highest-ranked public schools. This is where the $45K\u2013$90K tuition elimination becomes most tangible. The community is heavily transplant\u2014doctors, attorneys, banking executives from the same coastal metros you\u2019re leaving.",
    schools: "Weddington High School and Marvin Ridge High School\u2014both consistently top 20 statewide. Cuthbertson Middle, Weddington Middle. Feeder patterns are the primary driver of home selection in this area.",
    clubs: "Providence Country Club, TPC Wakefield Plantation (nearby). Active parent networks and youth sports leagues.",
    ideal: "Families with school-aged children who prioritize academic rigor above all else. Willing to trade urban walkability for space, top schools, and a tight-knit transplant community. Former Westchester, Northern NJ, and Fairfield County residents.",
    price: "$850K\u2013$1.8M for estate homes on acreage. $600K\u2013$850K for newer construction in established subdivisions.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1920&q=80",
  },
  {
    name: "Ballantyne / South Charlotte",
    tagline: "For the Family That Needs Corporate Proximity and Convenience.",
    profile: "Ballantyne is Charlotte\u2019s commercial-suburban hub: corporate offices, national restaurant chains, retail density, and master-planned neighborhoods with strong HOA infrastructure. South Charlotte\u2019s broader corridor offers more variety\u2014from gated enclaves to established neighborhoods with mature trees. The commute to Uptown is 20\u201330 minutes. The commute to Ballantyne Corporate Park is often under 10.",
    schools: "Ardrey Kell High School\u2014top 20 statewide. Community House Middle, Hawk Ridge Elementary. Solid feeder patterns with strong AP programs.",
    clubs: "Ballantyne Country Club. Golf, tennis, pool, and active social programming.",
    ideal: "Dual-income families where one or both spouses work in the Ballantyne or SouthPark corporate corridors. Value convenience, infrastructure, and a polished suburban environment. Former residents of Bethesda, Tysons Corner, or Stamford.",
    price: "$700K\u2013$1.5M for executive-level homes. $1.5M\u2013$2.5M for gated estate properties.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
  },
  {
    name: "Lake Norman",
    tagline: "For the Retiree or Semi-Retiree Who Wants Waterfront Luxury.",
    profile: "Lake Norman is Charlotte\u2019s premier waterfront destination: 520 miles of shoreline, deep-water dock access, and luxury communities built around golf, boating, and an active social calendar. Cornelius, Davidson, and Mooresville each offer a distinct flavor\u2014from the college-town walkability of Davidson to the resort-scale estates of The Peninsula. CLT Airport is 20\u201340 minutes south.",
    schools: "Lake Norman Charter, Pine Lake Prep (private options). Davidson IB World School. School quality varies more by specific zone than in Union County\u2014Kayden\u2019s feeder mapping is critical here.",
    clubs: "The Peninsula Club, The Point (private gated), Northstone Country Club, Lake Norman Yacht Club, Davidson College athletic events.",
    ideal: "Early retirees (55\u201365) from the Northeast or Florida seeking waterfront living, no state estate tax, golf, boating, and proximity to CLT\u2019s 191 nonstop destinations. \u201cHalf-back\u201d migrants who left the Northeast for Florida and now want milder summers, lower insurance, and closer proximity to Mid-Atlantic family.",
    price: "$1.0M\u2013$3.0M+ for waterfront with dock access. $600K\u2013$1.0M for golf community homes off the water.",
    image: "https://images.unsplash.com/photo-1499793983394-e58fc2e67a11?w=1920&q=80",
  },
  {
    name: "SouthPark",
    tagline: "For the Family That Wants Urban Convenience Without Urban Density.",
    profile: "SouthPark sits at the intersection of Charlotte\u2019s best restaurants, retail, and professional offices. SouthPark Mall anchors the commercial core, but the surrounding residential streets offer established homes on wooded lots with 10\u201315 minute drives to Uptown, Myers Park, and Ballantyne. It\u2019s the closest Charlotte gets to a \u201cwalkable suburb\u201d\u2014and it\u2019s where many Charlotte executives choose to live for the daily convenience.",
    schools: "South Mecklenburg High School, Carmel Middle, Sharon Elementary. Solid district options. Proximity to several strong magnet programs.",
    clubs: "Carmel Country Club\u2014one of Charlotte\u2019s most active and well-regarded private clubs with golf, tennis, dining, and a strong social membership.",
    ideal: "Professionals who want short commutes, dining and retail within five minutes, and an established neighborhood that doesn\u2019t feel like a master-planned subdivision. Former residents of Chevy Chase, Short Hills, or Pasadena.",
    price: "$800K\u2013$2.0M for updated estate homes. $600K\u2013$800K for traditional homes in established sections.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1920&q=80",
  },
];

export default function NeighborhoodsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="viewport-section bg-hero-dark relative">
        <ParallaxBg src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=1920&q=80" className="opacity-25" />
        <div className="absolute inset-0 bg-hero-dark/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[1.05] text-white font-semibold max-w-4xl">
              Your Neighborhood Determines Whether This Move Works.{" "}
              <span className="text-gold-light">Choose Precisely.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/50 max-w-2xl font-body">
              Charlotte&apos;s metro stretches across 3,000+ square miles. The financial arbitrage is consistent across all of it. The lifestyle fit is not. The wrong neighborhood means the wrong commute, the wrong school zone, and 18 months of regret.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="mt-8">
              <Link href="/contact" className="btn-gold">Book Your Neighborhood Matching Call</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-hero-dark border-y border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/30 font-body">
            <span>✓ 5 Distinct Luxury Micro-Markets</span>
            <span>✓ Top-Ranked School Zones</span>
            <span>✓ $750K–$2.5M Price Range</span>
            <span>✓ 15–25 Min to Uptown</span>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS — Each gets a full-viewport hero */}
      {neighborhoods.map((hood, i) => (
        <section key={i} className="viewport-section bg-hero-dark relative">
          <ParallaxBg src={hood.image} className="opacity-25" />
          <div className="absolute inset-0 bg-hero-dark/70" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 w-full">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "direction-rtl" : ""}`}>
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <FadeIn direction={i % 2 === 0 ? "left" : "right"}>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-white font-semibold mb-2">{hood.name}</h2>
                  <p className="font-heading text-lg md:text-xl text-gold italic mb-8">{hood.tagline}</p>
                  <p className="text-lg leading-relaxed text-white/50 font-body mb-8">{hood.profile}</p>
                </FadeIn>
              </div>
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <FadeIn direction={i % 2 === 0 ? "right" : "left"} delay={200}>
                  <div className="space-y-5">
                    {[
                      { label: "Schools", value: hood.schools },
                      { label: "Country Clubs & Social", value: hood.clubs },
                      { label: "Ideal For", value: hood.ideal },
                      { label: "Price Range", value: hood.price },
                    ].map((detail, j) => (
                      <div key={j}>
                        <p className="text-[11px] tracking-[0.15em] uppercase font-body font-semibold text-gold mb-1">{detail.label}</p>
                        <p className="text-[15px] text-white/40 font-body">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CLOSE */}
      <section className="viewport-section bg-navy relative">
        <ParallaxBg src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=1920&q=80" className="opacity-15" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white font-semibold">
              Which Neighborhood <span className="text-gold-light">Fits Your Family?</span>
            </h2>
            <p className="mt-6 text-lg text-white/50 font-body max-w-xl mx-auto">
              You don&apos;t need to figure this out from a web page. Kayden&apos;s Lifestyle Mapping Consultation narrows Charlotte&apos;s 3,000+ square miles to the 2–3 neighborhoods that actually match how you live.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold">Book Your Matching Call</Link>
              <Link href="/calculator" className="btn-outline">Run Your Numbers First</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
