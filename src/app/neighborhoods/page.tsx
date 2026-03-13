"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const neighborhoods = [
  {
    name: "Myers Park / Eastover",
    tagline: "For the Family That Wants Charlotte\u2019s Most Established Address.",
    profile: "Tree-lined streets, historic estates, and walkable proximity to SouthPark\u2019s restaurants, boutiques, and galleries. Myers Park is Charlotte\u2019s answer to the established, old-money neighborhoods you\u2019re leaving behind\u2014with none of the financial penalty. Eastover is quieter, more understated, and five minutes from Uptown. These are Charlotte\u2019s original luxury addresses.",
    schools: "Myers Park High School, Selwyn Elementary, Alexander Graham Middle. Strong AP offerings. Walking distance from many Myers Park homes.",
    clubs: "Myers Park Country Club, Charlotte Country Club. Established social calendars. Membership by invitation.",
    idealFor: "Families who value architectural character, walkability, mature trees, and proximity to Charlotte\u2019s cultural core. Former Brooklynites, Georgetown residents, and anyone who equates neighborhood character with quality of life.",
    price: "$1.2M\u2013$3.5M+ for estate-level properties. $750K\u2013$1.2M for updated traditional homes.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  },
  {
    name: "Weddington / Marvin",
    tagline: "For the Family That Relocates Primarily for Schools.",
    profile: "Union County\u2019s crown jewels. Weddington and Marvin offer large wooded lots (1\u20135 acres), new construction, and access to North Carolina\u2019s highest-ranked public schools. This is where the $45K\u2013$90K tuition elimination becomes most tangible. The community is heavily transplant\u2014doctors, attorneys, banking executives from the same coastal metros you\u2019re leaving.",
    schools: "Weddington High School and Marvin Ridge High School\u2014both consistently top 20 statewide. Cuthbertson Middle, Weddington Middle. Feeder patterns are the primary driver of home selection in this area.",
    clubs: "Providence Country Club, TPC Wakefield Plantation (nearby). Active parent networks and youth sports leagues.",
    idealFor: "Families with school-aged children who prioritize academic rigor above all else. Willing to trade urban walkability for space, top schools, and a tight-knit transplant community. Former Westchester, Northern NJ, and Fairfield County residents.",
    price: "$850K\u2013$1.8M for estate homes on acreage. $600K\u2013$850K for newer construction in established subdivisions.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
  },
  {
    name: "Ballantyne / South Charlotte",
    tagline: "For the Family That Needs Corporate Proximity and Convenience.",
    profile: "Ballantyne is Charlotte\u2019s commercial-suburban hub: corporate offices, national restaurant chains, retail density, and master-planned neighborhoods with strong HOA infrastructure. South Charlotte\u2019s broader corridor offers more variety\u2014from gated enclaves to established neighborhoods with mature trees. The commute to Uptown is 20\u201330 minutes. The commute to Ballantyne Corporate Park is often under 10.",
    schools: "Ardrey Kell High School\u2014top 20 statewide. Community House Middle, Hawk Ridge Elementary. Solid feeder patterns with strong AP programs.",
    clubs: "Ballantyne Country Club. Golf, tennis, pool, and active social programming.",
    idealFor: "Dual-income families where one or both spouses work in the Ballantyne or SouthPark corporate corridors. Value convenience, infrastructure, and a polished suburban environment. Former residents of Bethesda, Tysons Corner, or Stamford.",
    price: "$700K\u2013$1.5M for executive-level homes. $1.5M\u2013$2.5M for gated estate properties.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  },
  {
    name: "Lake Norman",
    tagline: "For the Retiree or Semi-Retiree Who Wants Waterfront Luxury.",
    profile: "Lake Norman is Charlotte\u2019s premier waterfront destination: 520 miles of shoreline, deep-water dock access, and luxury communities built around golf, boating, and an active social calendar. Cornelius, Davidson, and Mooresville each offer a distinct flavor\u2014from the college-town walkability of Davidson to the resort-scale estates of The Peninsula. CLT Airport is 20\u201340 minutes south.",
    schools: "Lake Norman Charter, Pine Lake Prep (private options). Davidson IB World School. School quality varies more by specific zone than in Union County\u2014Kayden\u2019s feeder mapping is critical here.",
    clubs: "The Peninsula Club, The Point (private gated), Northstone Country Club, Lake Norman Yacht Club, Davidson College athletic events.",
    idealFor: "Early retirees (55\u201365) from the Northeast or Florida seeking waterfront living, no state estate tax, golf, boating, and proximity to CLT\u2019s 191 nonstop destinations. \u201cHalf-back\u201d migrants who left the Northeast for Florida and now want milder summers, lower insurance, and closer proximity to Mid-Atlantic family.",
    price: "$1.0M\u2013$3.0M+ for waterfront with dock access. $600K\u2013$1.0M for golf community homes off the water.",
    image: "https://images.unsplash.com/photo-1499793983394-e58fc3373a05?w=1200&q=80",
  },
  {
    name: "SouthPark",
    tagline: "For the Family That Wants Urban Convenience Without Urban Density.",
    profile: "SouthPark sits at the intersection of Charlotte\u2019s best restaurants, retail, and professional offices. SouthPark Mall anchors the commercial core, but the surrounding residential streets offer established homes on wooded lots with 10\u201315 minute drives to Uptown, Myers Park, and Ballantyne. It\u2019s the closest Charlotte gets to a \u201cwalkable suburb\u201d\u2014and it\u2019s where many Charlotte executives choose to live for the daily convenience.",
    schools: "South Mecklenburg High School, Carmel Middle, Sharon Elementary. Solid district options. Proximity to several strong magnet programs.",
    clubs: "Carmel Country Club\u2014one of Charlotte\u2019s most active and well-regarded private clubs with golf, tennis, dining, and a strong social membership.",
    idealFor: "Professionals who want short commutes, dining and retail within five minutes, and an established neighborhood that doesn\u2019t feel like a master-planned subdivision. Former residents of Chevy Chase, Short Hills, or Pasadena.",
    price: "$800K\u2013$2.0M for updated estate homes. $600K\u2013$800K for traditional homes in established sections.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
  },
];

export default function NeighborhoodsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(".n-hero-title", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" })
        .fromTo(".n-hero-sub", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6")
        .fromTo(".n-hero-cta", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5");

      gsap.utils.toArray<HTMLElement>(".reveal-block").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Neighborhood cards - dramatic reveal
      gsap.utils.toArray<HTMLElement>(".hood-card").forEach((card) => {
        const stl = gsap.timeline({ scrollTrigger: { trigger: card, start: "top 80%" } });
        stl.fromTo(card, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" });
        stl.fromTo(card.querySelector(".hood-image"), { scale: 1.1 }, { scale: 1, duration: 1.2, ease: "power2.out" }, "-=0.9");
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-navy-dark">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1920&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/85 via-navy/75 to-navy-dark" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-32">
          <h1 className="n-hero-title font-serif display-xl text-white mb-6 opacity-0">
            Your Neighborhood Determines Whether This Move Works.{" "}
            <span className="text-gold">Choose Precisely.</span>
          </h1>
          <p className="n-hero-sub text-lg text-gray-300/90 leading-relaxed mb-8 max-w-2xl opacity-0">
            Charlotte&apos;s metro stretches across 3,000+ square miles. The financial arbitrage is consistent across all of it. The lifestyle fit is not. The wrong neighborhood means the wrong commute, the wrong school zone, and 18 months of regret. Kayden maps your family&apos;s priorities to the 2–3 micro-markets that actually match how you live.
          </p>
          <div className="n-hero-cta opacity-0">
            <Link href="/contact" className="inline-block px-8 py-4 bg-gold text-navy font-semibold text-sm tracking-[0.1em] uppercase hover:bg-gold-light transition-all duration-300">
              Book Your Neighborhood Matching Call
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            {["5 Distinct Luxury Micro-Markets", "Top-Ranked School Zones", "$750K–$2.5M Price Range", "15–25 Min to Uptown"].map((item, i) => (
              <span key={i} className="flex items-center gap-2"><span className="text-gold text-xs">✦</span> {item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28 space-y-24">
        {neighborhoods.map((hood, i) => (
          <div key={i} className="hood-card glass rounded-xl overflow-hidden">
            {/* Hero image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={hood.image}
                alt={hood.name}
                className="hood-image w-full h-full object-cover opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
              <div className="absolute bottom-6 left-8 right-8">
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">{hood.name}</h2>
                <p className="text-gold italic text-lg">{hood.tagline}</p>
              </div>
            </div>

            <div className="p-8 lg:p-10 space-y-8">
              <div>
                <h3 className="text-xs text-gold tracking-[0.2em] uppercase mb-3">Neighborhood Profile</h3>
                <p className="text-gray-300/80 leading-relaxed">{hood.profile}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xs text-gold tracking-[0.2em] uppercase mb-3">Schools</h3>
                  <p className="text-gray-300/80 leading-relaxed">{hood.schools}</p>
                </div>
                <div>
                  <h3 className="text-xs text-gold tracking-[0.2em] uppercase mb-3">Country Clubs &amp; Social</h3>
                  <p className="text-gray-300/80 leading-relaxed">{hood.clubs}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xs text-gold tracking-[0.2em] uppercase mb-3">Ideal For</h3>
                <p className="text-gray-300/80 leading-relaxed">{hood.idealFor}</p>
              </div>

              <div className="glass rounded-lg p-6">
                <h3 className="text-xs text-gold tracking-[0.2em] uppercase mb-2">Price Range</h3>
                <p className="text-white font-serif text-lg">{hood.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CLOSE */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="reveal-block max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="font-serif display-lg text-white mb-6">
            Which Neighborhood Fits Your Family?
          </h2>
          <p className="text-gray-300/80 leading-relaxed mb-8">
            You don&apos;t need to figure this out from a web page. Kayden&apos;s Lifestyle Mapping Consultation takes your commute, school priorities, social preferences, and weekend patterns and narrows Charlotte&apos;s 3,000+ square miles to the 2–3 neighborhoods that actually match how you live. Every family is different. The map should be too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 py-4 bg-gold text-navy font-semibold text-sm tracking-[0.1em] uppercase hover:bg-gold-light transition-all duration-300">
              Book Your Neighborhood Matching Call
            </Link>
            <Link href="/calculator" className="px-10 py-4 border border-white/20 text-white text-sm tracking-[0.1em] uppercase hover:bg-white/10 transition-all duration-300">
              Or Run Your Numbers First in the Calculator
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            30 minutes. Walk through your priorities. Get your personalized shortlist.
          </p>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </div>
  );
}
