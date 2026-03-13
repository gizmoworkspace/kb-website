"use client";

import { useEffect, useRef, ReactNode } from "react";

// Dynamically import GSAP to avoid SSR issues
let gsapModule: any = null;
let ScrollTriggerModule: any = null;

async function loadGSAP() {
  if (gsapModule) return { gsap: gsapModule, ScrollTrigger: ScrollTriggerModule };
  const g = await import("gsap");
  const st = await import("gsap/ScrollTrigger");
  gsapModule = g.gsap || g.default;
  ScrollTriggerModule = st.ScrollTrigger || st.default;
  gsapModule.registerPlugin(ScrollTriggerModule);
  return { gsap: gsapModule, ScrollTrigger: ScrollTriggerModule };
}

// ─── Pinned Hero with text swap ───
export function PinnedHero({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    loadGSAP().then(({ gsap, ScrollTrigger }) => {
      if (!ref.current) return;
      ctx = gsap.context(() => {
        const headlines = ref.current!.querySelectorAll("[data-hero-text]");
        if (headlines.length < 2) return;

        ScrollTrigger.create({
          trigger: ref.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
          onUpdate: (self: any) => {
            const p = self.progress;
            const h1 = headlines[0] as HTMLElement;
            const h2 = headlines[1] as HTMLElement;
            h1.style.opacity = String(Math.max(0, 1 - p * 3));
            h1.style.transform = `translateY(${p * -60}px)`;
            h2.style.opacity = String(Math.max(0, Math.min(1, (p - 0.3) * 3)));
            h2.style.transform = `translateY(${Math.max(0, (1 - (p - 0.3) * 3)) * 40}px)`;
          },
        });
      }, ref);
    });
    return () => ctx?.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// ─── Fade-in on scroll ───
export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    loadGSAP().then(({ gsap, ScrollTrigger }) => {
      if (!ref.current) return;
      const from: any = { opacity: 0, duration: 1, ease: "power2.out", delay: delay / 1000 };
      if (direction === "up") from.y = 40;
      if (direction === "left") from.x = -40;
      if (direction === "right") from.x = 40;

      ctx = gsap.context(() => {
        gsap.from(ref.current, {
          ...from,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }, ref);
    });
    return () => ctx?.revert();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// ─── Stat Counter ───
export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  className = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let ctx: any;
    loadGSAP().then(({ gsap, ScrollTrigger }) => {
      if (!ref.current) return;
      const obj = { val: 0 };
      ctx = gsap.context(() => {
        gsap.to(obj, {
          val: value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            if (ref.current) {
              ref.current.textContent = prefix + obj.val.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;
            }
          },
        });
      }, ref);
    });
    return () => ctx?.revert();
  }, [value, prefix, suffix, decimals]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}

// ─── Parallax background ───
export function ParallaxBg({
  src,
  className = "",
  speed = 0.3,
}: {
  src: string;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    loadGSAP().then(({ gsap, ScrollTrigger }) => {
      if (!ref.current) return;
      ctx = gsap.context(() => {
        gsap.to(ref.current, {
          yPercent: speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current!.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }, ref);
    });
    return () => ctx?.revert();
  }, [speed]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        ref={ref}
        className={`absolute inset-0 -top-[20%] -bottom-[20%] bg-cover bg-center bg-no-repeat ${className}`}
        style={{ backgroundImage: `url(${src})` }}
      />
    </div>
  );
}

// ─── Scale reveal ───
export function ScaleReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    loadGSAP().then(({ gsap }) => {
      if (!ref.current) return;
      ctx = gsap.context(() => {
        gsap.from(ref.current, {
          scale: 0.9,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: delay / 1000,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }, ref);
    });
    return () => ctx?.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
