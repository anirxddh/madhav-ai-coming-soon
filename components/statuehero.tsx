"use client";

import Image from "next/image";
import type { RefObject } from "react";

import useMouseParallax from "@/components/useMouseParallax";

type StatueHeroProps = {
  imageRef?: RefObject<HTMLDivElement | null>;
};

export default function StatueHero({ imageRef }: StatueHeroProps) {
  const { x, y } = useMouseParallax();

  return (
    <div className="relative h-screen w-full overflow-visible">
      <div
        ref={imageRef}
        className="group absolute bottom-[-40px] right-[-90px] w-full max-w-[650px]"
      >
        <div
          className="w-full opacity-95 transition-opacity duration-300 group-hover:opacity-100"
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
    </div>
  );
}
