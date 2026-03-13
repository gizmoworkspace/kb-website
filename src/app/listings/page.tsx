import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ListingsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-navy py-32 md:py-40 lg:py-44 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-gold/[0.06] rounded-full blur-[120px]" />
        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.15] text-white font-semibold hero-animate max-w-4xl">
            Charlotte Luxury Properties.{" "}
            <span className="text-gold-light">Curated, Not Filtered.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-white/60 max-w-2xl font-body hero-animate hero-animate-delay-1">
            Every property below has been vetted against the criteria that matter to relocating families: school zone quality, commute corridor, neighborhood micro-culture, HOA health, and long-term appreciation trajectory. This is not a Zillow dump.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 hero-animate hero-animate-delay-2">
            <Link href="/contact" className="btn-gold">Discuss These Properties</Link>
            <Link href="/calculator" className="btn-outline">See Your Buying Power</Link>
          </div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-cream py-5 border-b border-warm-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-warm-600 font-body">
            <span>✓ $750K–$2.5M Range</span>
            <span>✓ Top School Zones</span>
            <span>✓ Off-Market Access</span>
            <span>✓ Updated Weekly</span>
          </div>
        </div>
      </section>

      {/* LISTING FRAMEWORK */}
      <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl tracking-tight leading-[1.2] text-warm-950 font-semibold mb-4 text-center">
              How Kayden Presents <span className="text-gold">Each Property</span>
            </h2>
            <p className="text-center text-warm-600 font-body max-w-2xl mx-auto mb-12">
              Every listing includes context Zillow can&apos;t provide. Here&apos;s what you get with each curated property.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Positioning Statement", desc: "Not the MLS description. A one-line statement: \u201c5,200 sq ft on 1.3 acres in the Weddington High School zone. $1.05M.\u201d" },
              { title: "Neighborhood Context", desc: "Which micro-market, what the commute looks like, and which school feeder pattern it accesses." },
              { title: "Financial Arbitrage Snapshot", desc: "The comparable cost in your origin market. \u201cThis home\u2019s equivalent in Westchester: $2.1M+. In Weddington: $1.05M.\u201d" },
              { title: "School Zone Verification", desc: "Confirmed school assignments (elementary, middle, high) with current enrollment status and rezoning timelines." },
              { title: "Kayden\u2019s Assessment", desc: "What makes this property worth considering, what the drawbacks are, and who it\u2019s best suited for. Radical transparency." },
              { title: "Virtual Tour Access", desc: "Video walkthroughs and written context so your first in-person visit is productive, not exploratory." },
            ].map((item, i) => (
              <AnimateOnScroll key={i} animation="scale-up" delay={i * 80}>
                <div className="bg-white border border-warm-200 rounded-[8px] p-6 md:p-8 shadow-card hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="font-heading text-xl text-warm-950 font-semibold mb-3">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-warm-600 font-body">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="bg-cream py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <AnimateOnScroll>
            <div className="bg-white border border-warm-200 rounded-[8px] p-8 md:p-12 shadow-card">
              <h2 className="font-heading text-2xl md:text-3xl text-warm-950 font-semibold mb-4">Featured Listings Coming Soon</h2>
              <p className="text-[15px] leading-relaxed text-warm-600 font-body mb-6">
                Curated luxury properties are being vetted against Kayden&apos;s criteria: school zone quality, commute corridor, HOA health, and appreciation trajectory. Check back soon or book a call for immediate access to the full curated inventory, including off-market opportunities.
              </p>
              <Link href="/contact" className="btn-gold">Get Your Personalized Shortlist</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* WHY CURATED */}
      <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl tracking-tight leading-[1.2] text-warm-950 font-semibold mb-8">
              Why Curated <span className="text-gold">Beats Filtered</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-base md:text-[17px] leading-relaxed text-warm-700 font-body">
              A Zillow filter shows you 3,000 listings. A curated search shows you 5&ndash;7 that actually fit. The difference is context: school feeder verification, HOA financial health, micro-market pricing intelligence, and neighborhood culture matching that no algorithm can replicate. That&apos;s what turns a four-weekend house hunt into a productive two-day visit.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy py-16 md:py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gold/[0.06] rounded-full blur-[150px]" />
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center relative z-10">
          <AnimateOnScroll animation="scale-up">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.2] text-white font-semibold">
              See Properties <span className="text-gold-light">Selected for Your Family</span>
            </h2>
            <p className="mt-6 text-base text-white/50 font-body">
              Book a 30-minute call. Walk through your criteria. Receive a personalized shortlist within 48 hours. Includes off-market properties not available on Zillow or Redfin.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-gold">Book Your Strategy Call</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
