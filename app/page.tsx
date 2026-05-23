"use client";

import { useRef } from "react";

import ConstructionMarkers from "@/components/ConstructionMarkers";
import EditorialGrid from "@/components/EditorialGrid";
import Hero from "@/components/Hero";
import ParticleField from "@/components/particlefield";
import useHeroReveal from "@/components/useHeroReveal";

export default function Home() {
  const constructionMarkersRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const launchRef = useRef<HTMLParagraphElement>(null);
  const featureCardRefs = useRef<(HTMLElement | null)[]>([]);
  const statueRef = useRef<HTMLDivElement>(null);

  useHeroReveal({
    constructionMarkersRef,
    headlineRef,
    subtextRef,
    ctaRef,
    launchRef,
    featureCardRefs,
    statueRef,
  });

  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#F2F0ED] pb-[env(safe-area-inset-bottom)] text-[#1b1c1c]">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-4 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.1\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'160\' height=\'160\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
        }}
      />
      <ParticleField />
      <EditorialGrid />
      <ConstructionMarkers containerRef={constructionMarkersRef} />
      <div className="relative z-10">
        <Hero
          headlineRef={headlineRef}
          subtextRef={subtextRef}
          ctaRef={ctaRef}
          launchRef={launchRef}
          featureCardRefs={featureCardRefs}
          statueRef={statueRef}
        />
      </div>
    </main>
  );
}
