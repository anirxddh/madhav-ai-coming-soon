"use client";

import { type MutableRefObject, type RefObject } from "react";

import FeatureStrip from "@/components/FeatureStrip";
import StatueHero from "@/components/StatueHero";

const WAITLIST_URL = "https://tally.so/r/3xXJbY";

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
  return (
    <section className="mx-auto min-h-screen w-full max-w-[1440px] px-5 sm:px-10 lg:px-16">
      <div className="grid min-h-screen grid-cols-1 items-center gap-y-16 py-20 md:grid-cols-12 md:gap-x-6 md:py-0">
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
              className="waitlist-cursor group inline-flex items-center gap-3 border border-[#1b1c1c] px-8 py-4 font-(family-name:--font-heading) text-xs uppercase tracking-[0.28em] text-[#1b1c1c] transition-colors duration-250 hover:bg-[#e6e2dd]"
            >
              <span>Join waitlist</span>
              <span className="transition-transform duration-250 group-hover:translate-x-1">
                →
              </span>
            </a>
            <div
              ref={launchRef}
              className="inline-flex items-center gap-3 font-(family-name:--font-heading) text-xs uppercase tracking-[0.24em] text-[#5e5e5c]"
            >
              <span className="coming-soon-dot h-2 w-2 rounded-full bg-[#00ff41]" />
              <span>Coming soon</span>
            </div>
          </div>

          <div className="w-full max-w-none">
            <FeatureStrip featureCardRefs={featureCardRefs} />
          </div>
        </div>

        <div className="relative min-h-[28rem] md:col-span-6 md:min-h-screen">
          <StatueHero imageRef={statueRef} />
        </div>
      </div>
    </section>
  );
}
