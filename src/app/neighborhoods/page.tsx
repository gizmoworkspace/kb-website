import Link from "next/link";
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
    profile: "Union County\u2019s crown jewels. Large wooded lots (1\u20135 acres), new construction, and access to North Carolina\u2019s highest-ranked public schools. This is where the $45K\u2013$90K tuition elimination becomes most tangible. The community is heavily transplant\u2014doctors, attorneys, banking executives from the same coastal metros you\u2019re leaving.",
    schools: "Weddington High School and Marvin Ridge High School\u2014both consistently top 20 statewide. Cuthbertson Middle, Weddington Middle.",
    clubs: "Providence Country Club, TPC Wakefield Plantation. Active parent networks and youth sports leagues.",
    ideal: "Families with school-aged children who prioritize academic rigor above all else. Former Westchester, Northern NJ, and Fairfield County residents.",
    price: "$850K\u2013$1.8M for estate homes on acreage. $600K\u2013$850K for newer construction.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    name: "Ballantyne / South Charlotte",
    tagline: "For the Family That Needs Corporate Proximity and Convenience.",
    profile: "Charlotte\u2019s commercial-suburban hub: corporate offices, national restaurants, retail density, and master-planned neighborhoods with strong HOA infrastructure. The commute to Uptown is 20\u201330 minutes. The commute to Ballantyne Corporate Park is often under 10.",
    schools: "Ardrey Kell High School\u2014top 20 statewide. Community House Middle, Hawk Ridge Elementary.",
    clubs: "Ballantyne Country Club. Golf, tennis, pool, and active social programming.",
    ideal: "Dual-income families where one or both spouses work in the Ballantyne or SouthPark corporate corridors. Former residents of Bethesda, Tysons Corner, or Stamford.",
    price: "$700K\u2013$1.5M for executive-level homes. $1.5M\u2013$2.5M for gated estate properties.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    name: "Lake Norman",
    tagline: "For the Retiree or Semi-Retiree Who Wants Waterfront Luxury.",
    profile: "Charlotte\u2019s premier waterfront destination: 520 miles of shoreline, deep-water dock access, and luxury communities built around golf, boating, and an active social calendar. Cornelius, Davidson, and Mooresville each offer a distinct flavor. CLT Airport is 20\u201340 minutes south.",
    schools: "Lake Norman Charter, Pine Lake Prep (private). Davidson IB World School. School quality varies more by specific zone\u2014Kayden\u2019s feeder mapping is critical here.",
    clubs: "The Peninsula Club, The Point (private gated), Northstone Country Club, Lake Norman Yacht Club.",
    ideal: "Early retirees (55\u201365) from the Northeast or Florida seeking waterfront living, no state estate tax, golf, boating, and proximity to CLT\u2019s 191 nonstop destinations.",
    price: "$1.0M\u2013$3.0M+ for waterfront with dock access. $600K\u2013$1.0M for golf community homes.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  },
  {
    name: "SouthPark",
    tagline: "For the Family That Wants Urban Convenience Without Urban Density.",
    profile: "SouthPark sits at the intersection of Charlotte\u2019s best restaurants, retail, and professional offices. The surrounding residential streets offer established homes on wooded lots with 10\u201315 minute drives to Uptown, Myers Park, and Ballantyne. It\u2019s the closest Charlotte gets to a \u201cwalkable suburb.\u201d",
    schools: "South Mecklenburg High School, Carmel Middle, Sharon Elementary. Proximity to several strong magnet programs.",
    clubs: "Carmel Country Club\u2014one of Charlotte\u2019s most active and well-regarded private clubs.",
    ideal: "Professionals who want short commutes, dining and retail within five minutes. Former residents of Chevy Chase, Short Hills, or Pasadena.",
    price: "$800K\u2013$2.0M for updated estate homes. $600K\u2013$800K for traditional homes.",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
  },
];

export default function NeighborhoodsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-navy py-32 md:py-40 lg:py-44 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-gold/[0.06] rounded-full blur-[120px]" />
        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.15] text-white font-semibold hero-animate max-w-4xl">
            Your Neighborhood Determines Whether This Move Works.{" "}
            <span className="text-gold-light">Choose Precisely.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-white/60 max-w-2xl font-body hero-animate hero-animate-delay-1">
            Charlotte&apos;s metro stretches across 3,000+ square miles. The financial arbitrage is consistent across all of it. The lifestyle fit is not. The wrong neighborhood means the wrong commute, the wrong school zone, and 18 months of regret.
          </p>
          <div className="mt-8 hero-animate hero-animate-delay-2">
            <Link href="/contact" className="btn-gold">Book Your Neighborhood Matching Call</Link>
          </div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-cream py-5 border-b border-warm-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-warm-600 font-body">
            <span>✓ 5 Distinct Luxury Micro-Markets</span>
            <span>✓ Top-Ranked School Zones</span>
            <span>✓ $750K–$2.5M Price Range</span>
            <span>✓ 15–25 Min to Uptown</span>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      {neighborhoods.map((hood, i) => (
        <section key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-cream"} py-14 sm:py-16 md:py-20 lg:py-24`}>
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className={`lg:col-span-7 ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                <AnimateOnScroll animation={i % 2 === 0 ? "fade-left" : "fade-right"}>
                  <h2 className="font-heading text-3xl md:text-4xl tracking-tight leading-[1.2] text-warm-950 font-semibold mb-2">{hood.name}</h2>
                  <p className="font-heading text-lg text-gold-dark italic mb-6">{hood.tagline}</p>
                  <p className="text-base md:text-[17px] leading-relaxed text-warm-700 font-body mb-6">{hood.profile}</p>

                  <div className="space-y-4">
                    <div>
                      <p className="text-[11px] tracking-[0.15em] uppercase font-body font-semibold text-gold-dark mb-1">Schools</p>
                      <p className="text-[15px] text-warm-600 font-body">{hood.schools}</p>
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.15em] uppercase font-body font-semibold text-gold-dark mb-1">Country Clubs & Social</p>
                      <p className="text-[15px] text-warm-600 font-body">{hood.clubs}</p>
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.15em] uppercase font-body font-semibold text-gold-dark mb-1">Ideal For</p>
                      <p className="text-[15px] text-warm-600 font-body">{hood.ideal}</p>
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.15em] uppercase font-body font-semibold text-gold-dark mb-1">Price Range</p>
                      <p className="text-[15px] text-warm-600 font-body">{hood.price}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>

              <div className={`lg:col-span-5 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <AnimateOnScroll animation={i % 2 === 0 ? "fade-right" : "fade-left"} delay={100}>
                  <div className="rounded-[8px] overflow-hidden shadow-card">
                    <img src={hood.image} alt={hood.name} className="w-full h-64 md:h-80 object-cover" loading="lazy" />
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CLOSE */}
      <section className="bg-navy py-16 md:py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gold/[0.06] rounded-full blur-[150px]" />
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center relative z-10">
          <AnimateOnScroll animation="scale-up">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.2] text-white font-semibold">
              Which Neighborhood <span className="text-gold-light">Fits Your Family?</span>
            </h2>
            <p className="mt-6 text-base text-white/50 font-body max-w-xl mx-auto">
              You don&apos;t need to figure this out from a web page. Kayden&apos;s Lifestyle Mapping Consultation narrows Charlotte&apos;s 3,000+ square miles to the 2–3 neighborhoods that actually match how you live.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold">Book Your Matching Call</Link>
              <Link href="/calculator" className="btn-outline">Run Your Numbers First</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
