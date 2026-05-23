"use client";

import { type MutableRefObject, type RefObject } from "react";
import { BookOpen, ShieldCheck, Sparkles } from "lucide-react";

import FeatureStrip from "@/components/FeatureStrip";
import StatueHero from "@/components/StatueHero";

const WAITLIST_URL = "https://tally.so/r/obkAPN";

type HeroProps = {
  headlineRef: RefObject<HTMLHeadingElement | null>;
  subtextRef: RefObject<HTMLParagraphElement | null>;
  ctaRef: RefObject<HTMLAnchorElement | null>;
  launchRef: RefObject<HTMLParagraphElement | null>;
  featureCardRefs: MutableRefObject<(HTMLElement | null)[]>;
  statueRef: RefObject<HTMLDivElement | null>;
};

export default function Hero({
  headlineRef,
  subtextRef,
  ctaRef,
  launchRef,
  featureCardRefs,
  statueRef,
}: HeroProps) {
  const mobileFeatures = [
    {
      icon: BookOpen,
      title: "Built for lawyers & firms.",
      description: "Precision first search.",
    },
    {
      icon: Sparkles,
      title: "Context-powered intelligence.",
      description: "It gives you what you need.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted. Transparent. Reliable.",
      description: "Built with accuracy in mind.",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-16">
      <div className="md:hidden">
        <header className="h-[48px]" />

        <div className="relative isolate overflow-hidden pb-10 pt-3">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
            <StatueHero />
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-x-4 gap-y-6">
            <div className="col-span-2 inline-flex w-fit items-center border border-[#c4c7c7] bg-[#f2f0ed] px-3 py-2 font-(family-name:--font-heading) text-[12px] uppercase tracking-[0.14em] text-[#5e5e5c] opacity-80">
              MADHAV.AI · “यतो धर्मस्ततो जयः”
            </div>

            <h1 className="col-span-2 max-w-full text-left font-(family-name:--font-heading) text-[clamp(40px,10vw,56px)] font-bold uppercase leading-[0.92] tracking-[-0.04em] text-[#1b1c1c]">
              India&apos;s first native legal AI platform
            </h1>

            <p className="col-span-2 max-w-full text-left text-base leading-7 text-[#5e5e5c]">
              Legal intelligence built with context in mind.
            </p>

            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noreferrer"
              className="waitlist-cursor group col-span-2 flex h-[60px] w-full items-center justify-center gap-3 border border-[#1b1c1c] bg-[#f2f0ed] font-(family-name:--font-heading) text-xs uppercase tracking-[0.28em] text-[#1b1c1c] transition-colors duration-250 hover:bg-[#1b1c1c] active:bg-[#1b1c1c]"
            >
              <span className="transition-colors duration-250 group-hover:text-[#f2f0ed] group-active:text-[#f2f0ed]">
                Join waitlist
              </span>
              <span className="transition-transform duration-250 group-hover:translate-x-1 group-hover:text-[#f2f0ed] group-active:text-[#f2f0ed]">
                &rarr;
              </span>
            </a>

            <div
              ref={launchRef}
              className="col-span-2 inline-flex items-center gap-3 font-(family-name:--font-heading) text-xs uppercase tracking-[0.24em] text-[#5e5e5c]"
            >
              <span className="coming-soon-dot h-2.5 w-2.5 rounded-full bg-[#2f7d32]" />
              <span>Coming soon!</span>
            </div>

            <div className="col-span-2 mt-1 border-t border-[#c4c7c7]">
              <div className="flex flex-col gap-0">
                {mobileFeatures.map((feature) => (
                  <article
                    key={feature.title}
                    className="flex items-start gap-4 border-t border-[#e0ded8] py-5 first:border-t-0"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#c4c7c7] text-[#1b1c1c]">
                      <feature.icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <div className="min-w-0 text-left">
                      <h3 className="font-(family-name:--font-heading) text-[12px] uppercase leading-[1.1] tracking-[0.1em] text-[#1b1c1c]">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-6 text-[#5e5e5c]">
                        {feature.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <footer className="col-span-2 flex flex-col items-center gap-4 pt-4 text-center">
              <p className="font-(family-name:--font-heading) text-[11px] uppercase tracking-[0.22em] text-[#5e5e5c] opacity-55">
                ©2026 • MADHAV.AI
              </p>
            </footer>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="grid grid-cols-1 gap-y-12 py-8 md:min-h-screen md:grid-cols-12 md:gap-x-6 md:py-0">
          <div className="flex flex-col justify-center md:col-span-6">
            <div className="space-y-6">
              <p className="font-(family-name:--font-heading) text-xs uppercase tracking-[0.35em] text-[#5e5e5c]">
                Madhav.ai
              </p>
              <h1
                ref={headlineRef}
                className="max-w-[600px] font-(family-name:--font-heading) text-4xl font-bold uppercase leading-[0.95] tracking-[-0.04em] text-[#1b1c1c] sm:text-6xl lg:text-7xl"
              >
                India&apos;s first native legal AI platform
              </h1>
              <p
                ref={subtextRef}
                className="max-w-[420px] text-[17px] leading-7 text-[#444748]"
              >
                Legal intelligence built with context in mind.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-start gap-4">
              <a
                ref={ctaRef}
                href={WAITLIST_URL}
                target="_blank"
                rel="noreferrer"
                className="waitlist-cursor group inline-flex items-center gap-3 border border-[#1b1c1c] bg-[#f2f0ed] px-8 py-4 font-(family-name:--font-heading) text-xs uppercase tracking-[0.28em] text-[#1b1c1c] transition-colors duration-250 hover:bg-[#1b1c1c]"
              >
                <span className="text-[#1b1c1c] transition-colors duration-250 group-hover:text-[#f2f0ed]">
                  Join waitlist
                </span>
                <span className="text-[#1b1c1c] transition-colors duration-250 group-hover:translate-x-1 group-hover:text-[#f2f0ed]">
                  &rarr;
                </span>
              </a>
              <div
                ref={launchRef}
                className="inline-flex items-center gap-3 font-(family-name:--font-heading) text-xs uppercase tracking-[0.24em] text-[#5e5e5c]"
              >
                <span className="coming-soon-dot h-2.5 w-2.5 rounded-full bg-[#2f7d32]" />
                <span>Coming soon</span>
              </div>
            </div>

            <div className="w-full max-w-none">
              <FeatureStrip featureCardRefs={featureCardRefs} />
            </div>

            <div className="pt-12 md:pt-16">
              <p className="font-[family:var(--font-heading)] text-xs uppercase tracking-[0.24em] text-[#1b1c1c]">
                ©2026 • MADHAV AI • यतो धर्मस्ततो जयः
              </p>
            </div>
          </div>

          <div className="relative min-h-[24rem] sm:min-h-[30rem] md:col-span-6 md:min-h-screen">
            <StatueHero imageRef={statueRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
