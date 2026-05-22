"use client";

import { useLayoutEffect, type MutableRefObject, type RefObject } from "react";
import gsap from "gsap";

type HeroRevealRefs = {
  constructionMarkersRef: RefObject<HTMLDivElement | null>;
  headlineRef: RefObject<HTMLHeadingElement | null>;
  subtextRef: RefObject<HTMLParagraphElement | null>;
  ctaRef: RefObject<HTMLAnchorElement | null>;
  launchRef: RefObject<HTMLParagraphElement | null>;
  featureCardRefs: MutableRefObject<(HTMLElement | null)[]>;
  statueRef: RefObject<HTMLDivElement | null>;
};

export default function useHeroReveal({
  constructionMarkersRef,
  headlineRef,
  subtextRef,
  ctaRef,
  launchRef,
  featureCardRefs,
  statueRef,
}: HeroRevealRefs) {
  useLayoutEffect(() => {
    const featureCards = featureCardRefs.current.filter(
      (card): card is HTMLElement => card !== null,
    );
    const copyItems = [subtextRef.current, ctaRef.current, launchRef.current].filter(
      (item): item is HTMLParagraphElement | HTMLAnchorElement => item !== null,
    );

    const timeline = gsap.timeline({
      defaults: {
        ease: "power2.out",
      },
    });

    if (constructionMarkersRef.current) {
      timeline.fromTo(
        constructionMarkersRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
      );
    }

    if (headlineRef.current) {
      timeline.fromTo(
        headlineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.15,
      );
    }

    if (copyItems.length > 0) {
      timeline.fromTo(
        copyItems,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
        0.3,
      );
    }

    if (featureCards.length > 0) {
      timeline.fromTo(
        featureCards,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 },
        0.45,
      );
    }

    if (statueRef.current) {
      timeline.fromTo(
        statueRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 0.95, duration: 1.2, ease: "power2.out" },
        0.2,
      );
    }

    return () => {
      timeline.kill();
    };
  }, [
    constructionMarkersRef,
    headlineRef,
    subtextRef,
    ctaRef,
    launchRef,
    featureCardRefs,
    statueRef,
  ]);
}
