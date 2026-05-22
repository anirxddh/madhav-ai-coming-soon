"use client";

import Image from "next/image";

import useMouseParallax from "@/components/useMouseParallax";

export default function StatueHero() {
  const { x, y } = useMouseParallax();

  return (
    <div className="relative h-screen w-full overflow-visible">
      <div
        className="absolute bottom-[-40px] right-[-90px] w-full max-w-[650px] opacity-95"
        style={{
          transform: `translate3d(${x}px, ${y}px, 0) scale(1.08)`,
          transformOrigin: "bottom right",
          maskImage:
            "linear-gradient(to bottom, black 68%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 68%, transparent 100%)",
        }}
      >
        <Image
          src="/statue.png"
          alt="Lady Justice statue"
          width={650}
          height={1040}
          priority
          className="h-auto w-full object-contain object-right-bottom"
        />
      </div>
    </div>
  );
}
