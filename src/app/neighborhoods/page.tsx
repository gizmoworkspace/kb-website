"use client";

import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const neighborhoods = [
  {
    name: "Myers Park / Eastover",
    tagline: "For the Family That Wants Charlotte\u2019s Most Established Address.",
    profile: "Tree-lined streets, historic estates, and walkable proximity to SouthPark\u2019s restaurants, boutiques, and galleries. Myers Park is Charlotte\u2019s answer to the established, old-money neighborhoods you\u2019re leaving behind\u2014with none of the financial penalty. Eastover is quieter, more understated, and five minutes from Uptown. These are Charlotte\u2019s original luxury addresses.",
    schools: "Myers Park High School, Selwyn Elementary, Alexander Graham Middle. Strong AP offerings. Walking distance from many Myers Park homes.",
    clubs: "Myers Park Country Club, Charlotte Country Club. Established social calendars. Membership by invitation.",
    ideal: "Families who value architectural character, walkability, mature trees, and proximity to Charlotte\u2019s cultural core. Former Brooklynites, Georgetown residents, and anyone who equates neighborhood character with quality of life.",
    price: "$1.2M\u2013$3.5M+ for estate-level properties. $750K\u2013$1.2M for updated traditional homes.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
  },
  {
    name: "Weddington / Marvin",
    tagline: "For the Family That Relocates Primarily for Schools.",
    profile: "Union County\u2019s crown jewels. Weddington and Marvin offer large wooded lots (1\u20135 acres), new construction, and access to North Carolina\u2019s highest-ranked public schools. This is where the $45K\u2013$90K tuition elimination becomes most tangible. The community is heavily transplant\u2014doctors, attorneys, banking executives from the same coastal metros you\u2019re leaving.",
    schools: "Weddington High School and Marvin Ridge High School\u2014both consistently top 20 statewide. Cuthbertson Middle, Weddington Middle. Feeder patterns are the primary driver of home selection in this area.",
    clubs: "Providence Country Club, TPC Wakefield Plantation (nearby). Active parent networks and youth sports leagues.",
    ideal: "Families with school-aged children who prioritize academic rigor above all else. Willing to trade urban walkability for space, top schools, and a tight-knit transplant community. Former Westchester, Northern NJ, and Fairfield County residents.",
    price: "$850K\u2013$1.8M for estate homes on acreage. $600K\u2013$850K for newer construction in established subdivisions.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    name: "Ballantyne / South Charlotte",
    tagline: "For the Family That Needs Corporate Proximity and Convenience.",
    profile: "Ballantyne is Charlotte\u2019s commercial-suburban hub: corporate offices, national restaurant chains, retail density, and master-planned neighborhoods with strong HOA infrastructure. South Charlotte\u2019s broader corridor offers more variety\u2014from gated enclaves to established neighborhoods with mature trees. The commute to Uptown is 20\u201330 minutes. The commute to Ballantyne Corporate Park is often under 10.",
    schools: "Ardrey Kell High School\u2014top 20 statewide. Community House Middle, Hawk Ridge Elementary. Solid feeder patterns with strong AP programs.",
    clubs: "Ballantyne Country Club. Golf, tennis, pool, and active social programming.",
    ideal: "Dual-income families where one or both spouses work in the Ballantyne or SouthPark corporate corridors. Value convenience, infrastructure, and a polished suburban environment. Former residents of Bethesda, Tysons Corner, or Stamford.",
    price: "$700K\u2013$1.5M for executive-level homes. $1.5M\u2013$2.5M for gated estate properties.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    name: "Lake Norman",
    tagline: "For the Retiree or Semi-Retiree Who Wants Waterfront Luxury.",
    profile: "Lake Norman is Charlotte\u2019s premier waterfront destination: 520 miles of shoreline, deep-water dock access, and luxury communities built around golf, boating, and an active social calendar. Cornelius, Davidson, and Mooresville each offer a distinct flavor\u2014from the college-town walkability of Davidson to the resort-scale estates of The Peninsula. CLT Airport is 20\u201340 minutes south.",
    schools: "Lake Norman Charter, Pine Lake Prep (private options). Davidson IB World School. School quality varies more by specific zone than in Union County\u2014Kayden\u2019s feeder mapping is critical here.",
    clubs: "The Peninsula Club, The Point (private gated), Northstone Country Club, Lake Norman Yacht Club, Davidson College athletic events.",
    ideal: "Early retirees (55\u201365) from the Northeast or Florida seeking waterfront living, no state estate tax, golf, boating, and proximity to CLT\u2019s 191 nonstop destinations. \u201cHalf-back\u201d migrants who left the Northeast for Florida and now want milder summers, lower insurance, and closer proximity to Mid-Atlantic family.",
    price: "$1.0M\u2013$3.0M+ for waterfront with dock access. $600K\u2013$1.0M for golf community homes off the water.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  },
  {
    name: "SouthPark",
    tagline: "For the Family That Wants Urban Convenience Without Urban Density.",
    profile: "SouthPark sits at the intersection of Charlotte\u2019s best restaurants, retail, and professional offices. SouthPark Mall anchors the commercial core, but the surrounding residential streets offer established homes on wooded lots with 10\u201315 minute drives to Uptown, Myers Park, and Ballantyne. It\u2019s the closest Charlotte gets to a \u201cwalkable suburb\u201d\u2014and it\u2019s where many Charlotte executives choose to live for the daily convenience.",
    schools: "South Mecklenburg High School, Carmel Middle, Sharon Elementary. Solid district options. Proximity to several strong magnet programs.",
    clubs: "Carmel Country Club\u2014one of Charlotte\u2019s most active and well-regarded private clubs with golf, tennis, dining, and a strong social membership.",
    ideal: "Professionals who want short commutes, dining and retail within five minutes, and an established neighborhood that doesn\u2019t feel like a master-planned subdivision. Former residents of Chevy Chase, Short Hills, or Pasadena.",
    price: "$800K\u2013$2.0M for updated estate homes. $600K\u2013$800K for traditional homes in established sections.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
];

export default function NeighborhoodsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-white pt-32 pb-28 md:pt-40 md:pb-36 lg:pt-44 lg:pb-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[1.05] text-[#1a1a2e] font-light max-w-4xl">
              Your Neighborhood Determines Whether This Move Works. Choose Precisely.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[#555] mt-8">
              Charlotte&apos;s metro stretches across 3,000+ square miles. The financial arbitrage is consistent across all of it. The lifestyle fit is not. The wrong neighborhood means the wrong commute, the wrong school zone, and 18 months of regret. Kayden maps your family&apos;s priorities to the 2&ndash;3 micro-markets that actually match how you live.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <Link href="/contact" className="inline-block mt-10 px-8 py-4 bg-[#c9a84c] text-white text-sm tracking-[0.1em] uppercase font-semibold hover:bg-[#d4b96a] transition-all duration-300">
              Book Your Neighborhood Matching Call
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-[#FAF8F5] border-y border-[#eee]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-[#999] tracking-[0.1em] uppercase">
            <span>5 Distinct Luxury Micro-Markets</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>Top-Ranked School Zones</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>$750K&ndash;$2.5M Price Range</span>
            <span className="hidden md:inline text-[#ddd]">|</span>
            <span>15&ndash;25 Min to Uptown</span>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      {neighborhoods.map((n, i) => (
        <section key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-[#FAF8F5]"} py-28 md:py-36 lg:py-44`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <AnimateOnScroll>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light mb-4">
                    {n.name}
                  </h2>
                  <p className="font-serif text-xl text-[#c9a84c] font-light mb-8">{n.tagline}</p>
                </AnimateOnScroll>
                <AnimateOnScroll delay={100}>
                  <p className="text-base md:text-lg leading-relaxed text-[#555] mb-8">{n.profile}</p>
                </AnimateOnScroll>
                <AnimateOnScroll delay={200}>
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#999] font-medium mb-2">Schools</p>
                      <p className="text-base leading-relaxed text-[#555]">{n.schools}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#999] font-medium mb-2">Country Clubs &amp; Social</p>
                      <p className="text-base leading-relaxed text-[#555]">{n.clubs}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#999] font-medium mb-2">Ideal For</p>
                      <p className="text-base leading-relaxed text-[#555]">{n.ideal}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#999] font-medium mb-2">Price Range</p>
                      <p className="text-base leading-relaxed text-[#555]">{n.price}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
              <AnimateOnScroll delay={150}>
                <div className="relative h-[400px] lg:h-full min-h-[400px]">
                  <img
                    src={n.image}
                    alt={n.name}
                    className="w-full h-full object-cover"
                    style={{ maskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)" }}
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      ))}

      {/* CLOSE */}
      <section className="bg-[#FAF8F5] py-28 md:py-36 lg:py-44">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a2e] font-light mb-8">
              Which Neighborhood Fits Your Family?
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-[#555] mb-10">
              You don&apos;t need to figure this out from a web page. Kayden&apos;s Lifestyle Mapping Consultation takes your commute, school priorities, social preferences, and weekend patterns and narrows Charlotte&apos;s 3,000+ square miles to the 2&ndash;3 neighborhoods that actually match how you live. Every family is different. The map should be too.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block px-10 py-4 bg-[#c9a84c] text-white text-sm tracking-[0.1em] uppercase font-semibold hover:bg-[#d4b96a] transition-all duration-300">
                Book Your Neighborhood Matching Call
              </Link>
              <Link href="/calculator" className="inline-block px-10 py-4 border border-[#1a1a2e] text-[#1a1a2e] text-sm tracking-[0.1em] uppercase font-semibold hover:bg-white transition-all duration-300">
                Or Run Your Numbers First in the Calculator
              </Link>
            </div>
            <p className="text-xs text-[#999] mt-4">30 minutes. Walk through your priorities. Get your personalized shortlist.</p>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
