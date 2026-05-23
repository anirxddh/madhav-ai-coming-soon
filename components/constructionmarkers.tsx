import type { RefObject } from "react";

type ConstructionMarkersProps = {
  containerRef?: RefObject<HTMLDivElement | null>;
};

export default function ConstructionMarkers({
  containerRef,
}: ConstructionMarkersProps) {
  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-3 transform-gpu"
    >
      <div className="fixed inset-5 transform-gpu sm:inset-10 lg:inset-16">
        <div className="absolute inset-0 border border-[rgba(26,26,26,0.12)]" />

        <span className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 font-(family-name:--font-heading) text-[12px] leading-none text-[#1a1a1a] opacity-60">
          +
        </span>
        <span className="absolute left-full top-0 -translate-x-1/2 -translate-y-1/2 font-(family-name:--font-heading) text-[12px] leading-none text-[#1a1a1a] opacity-60">
          +
        </span>
        <span className="absolute left-0 top-full -translate-x-1/2 -translate-y-1/2 font-(family-name:--font-heading) text-[12px] leading-none text-[#1a1a1a] opacity-60">
          +
        </span>
        <span className="absolute left-full top-full -translate-x-1/2 -translate-y-1/2 font-(family-name:--font-heading) text-[12px] leading-none text-[#1a1a1a] opacity-60">
          +
        </span>
      </div>
    </div>
  );
}
