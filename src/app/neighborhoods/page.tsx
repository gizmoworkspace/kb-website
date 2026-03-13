"use client";

import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const neighborhoods = [
  {
    name: "Myers Park / Eastover",
    tagline: "For the Family That Wants Charlotte\u2019s Most Established Address.",
    profile: "Tree-lined streets, historic estates, and walkable proximity to SouthPark\u2019s restaurants, boutiques, and galleries. Myers Park is Charlotte\u2019s answer to the established, old-money neighborhoods you\u2019re leaving behind\u2014with none of the financial penalty. Eastover is quieter, more understated, and five minutes from Uptown.",
    schools: "Myers Park High School, Selwyn Elementary, Alexander Graham Middle. Strong AP offerings. Walking distance from many Myers Park homes.",
    clubs: "Myers Park Country Club, Charlotte Country Club. Established social calendars. Membership by invitation.",
    ideal: "Families who value architectural character, walkability, mature trees, and proximity to Charlotte\u2019s cultural core. Former Brooklynites, Georgetown residents.",
    price: "$1.2M\u2013$3.5M+ for estate-level properties. $750K\u2013$1.2M for updated traditional homes.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    name: "Weddington / Marvin",
    tagline: "For the Family That Relocates Primarily for Schools.",
    profile: "Union County\u2019s crown jewels. Large wooded lots (1\u20135 acres), new construction, and access to North Carolina\u2019s highest-ranked public schools. This is where the $45K\u2013$90K tuition elimination becomes most tangible.",
    schools: "Weddington High School and Marvin Ridge High School\u2014both consistently top 20 statewide. Feeder patterns are the primary driver of home selection.",
    clubs: "Providence Country Club, TPC Wakefield Plantation (nearby). Active parent networks and youth sports leagues.",
    ideal: "Families with school-aged children who prioritize academic rigor above all else. Former Westchester, Northern NJ, and Fairfield County residents.",
    price: "$850K\u2013$1.8M for estate homes on acreage. $600K\u2013$850K for newer construction.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
  },
  {
    name: "Ballantyne / South Charlotte",
    tagline: "For the Family That Needs Corporate Proximity and Convenience.",
    profile: "Charlotte\u2019s commercial-suburban hub: corporate offices, retail density, and master-planned neighborhoods with strong HOA infrastructure. The commute to Uptown is 20\u201330 minutes. To Ballantyne Corporate Park, often under 10.",
    schools: "Ardrey Kell High School\u2014top 20 statewide. Community House Middle, Hawk Ridge Elementary. Solid feeder patterns with strong AP programs.",
    clubs: "Ballantyne Country Club. Golf, tennis, pool, and active social programming.",
    ideal: "Dual-income families where one or both spouses work in the Ballantyne or SouthPark corporate corridors. Former Bethesda, Tysons Corner, or Stamford residents.",
    price: "$700K\u2013$1.5M for executive-level homes. $1.5M\u2013$2.5M for gated estate properties.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    name: "Lake Norman",
    tagline: "For the Retiree or Semi-Retiree Who Wants Waterfront Luxury.",
    profile: "Charlotte\u2019s premier waterfront destination: 520 miles of shoreline, deep-water dock access, and luxury communities built around golf, boating, and an active social calendar. CLT Airport is 20\u201340 minutes south.",
    schools: "Lake Norman Charter, Pine Lake Prep (private options). Davidson IB World School. School quality varies by zone\u2014Kayden\u2019s feeder mapping is critical here.",
    clubs: "The Peninsula Club, The Point (private gated), Northstone Country Club, Lake Norman Yacht Club.",
    ideal: "Early retirees (55\u201365) from the Northeast or Florida seeking waterfront living, no state estate tax, golf, boating. \u201cHalf-back\u201d migrants.",
    price: "$1.0M\u2013$3.0M+ for waterfront with dock access. $600K\u2013$1.0M for golf community homes.",
    image: "https://images.unsplash.com/photo-1499793983394-e58fc2e67a11?w=800&q=80",
  },
  {
    name: "SouthPark",
    tagline: "For the Family That Wants Urban Convenience Without Urban Density.",
    profile: "SouthPark sits at the intersection of Charlotte\u2019s best restaurants, retail, and professional offices. The surrounding residential streets offer established homes on wooded lots with 10\u201315 minute drives to Uptown. It\u2019s the closest Charlotte gets to a \u201cwalkable suburb.\u201d",
    schools: "South Mecklenburg High School, Carmel Middle, Sharon Elementary. Proximity to several strong magnet programs.",
    clubs: "Carmel Country Club\u2014one of Charlotte\u2019s most active and well-regarded private clubs.",
    ideal: "Professionals who want short commutes, dining and retail within five minutes. Former Chevy Chase, Short Hills, or Pasadena residents.",
    price: "$800K\u2013$2.0M for updated estate homes. $600K\u2013$800K for traditional homes.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
  },
];

export default function NeighborhoodsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <AnimateOnScroll>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-heading max-w-4xl">
              Your Neighborhood Determines Whether This Move Works. Choose Precisely.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <p className="mt-6 md:mt-8 text-lg leading-relaxed text-body max-w-2xl">
              Charlotte&apos;s metro stretches across 3,000+ square miles. The financial arbitrage is consistent across all of it. The lifestyle fit is not. The wrong neighborhood means the wrong commute, the wrong school zone, and 18 months of regret.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">Book Your Neighborhood Matching Call</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="py-5 border-y border-border-light">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-body-light font-body">
            <span>✓ 5 Distinct Luxury Micro-Markets</span>
            <span>✓ Top-Ranked School Zones</span>
            <span>✓ $750K–$2.5M Price Range</span>
            <span>✓ 15–25 Min to Uptown</span>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-8 md:px-12 space-y-12 md:space-y-16">
          {neighborhoods.map((hood, i) => (
            <AnimateOnScroll key={i} delay={i * 60}>
              <div className="card p-0 overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto min-h-[280px]">
                    <Image
                      src={hood.image}
                      alt={hood.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-10">
                    <h2 className="font-heading text-2xl md:text-3xl text-heading mb-1">{hood.name}</h2>
                    <p className="font-heading text-base text-gold italic mb-6">{hood.tagline}</p>
                    <p className="text-[15px] leading-relaxed text-body mb-6">{hood.profile}</p>
                    <div className="space-y-4">
                      {[
                        { label: "Schools", value: hood.schools },
                        { label: "Country Clubs & Social", value: hood.clubs },
                        { label: "Ideal For", value: hood.ideal },
                        { label: "Price Range", value: hood.price },
                      ].map((detail, j) => (
                        <div key={j}>
                          <p className="text-xs tracking-widest uppercase text-gold font-body font-medium mb-1">{detail.label}</p>
                          <p className="text-sm text-body">{detail.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CLOSE */}
      <section className="dark-section py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto px-8 md:px-12 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Which Neighborhood Fits Your Family?
            </h2>
            <p className="mt-6 text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
              Kayden&apos;s Lifestyle Mapping Consultation narrows Charlotte&apos;s 3,000+ square miles to the 2–3 neighborhoods that actually match how you live.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary !bg-white !text-heading hover:!bg-gray-100">Book Your Matching Call</Link>
              <Link href="/calculator" className="btn-secondary !border-white/30 !text-white hover:!border-white">Run Your Numbers First</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
