"use client";

import Image from "next/image";
import { useEffect, useState, type RefObject } from "react";

import useMouseParallax from "@/components/useMouseParallax";

type StatueHeroProps = {
  imageRef?: RefObject<HTMLDivElement | null>;
};

export default function StatueHero({ imageRef }: StatueHeroProps) {
  const { x, y } = useMouseParallax();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const applyMatch = () => {
      setIsMobile(mediaQuery.matches);
    };

    applyMatch();
    mediaQuery.addEventListener("change", applyMatch);

    return () => {
      mediaQuery.removeEventListener("change", applyMatch);
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-visible">
      <div
        ref={imageRef}
        className="group pointer-events-none absolute bottom-[8%] right-[-22%] w-full max-w-[92%] md:bottom-[-40px] md:right-[-90px] md:max-w-[650px]"
      >
        <div
          className="w-full opacity-[0.12] transition-opacity duration-300 md:opacity-95 md:group-hover:opacity-100"
          style={{
            transform: `translate3d(${x * (isMobile ? 0.3 : 1)}px, ${y * (isMobile ? 0.3 : 1)}px, 0) scale(${isMobile ? 0.78 : 1.08})`,
            transformOrigin: "bottom right",
            maskImage:
              "linear-gradient(to bottom, black 68%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 68%, transparent 100%)",
          }}
        >
          <Image
            src="/statue.png"
            alt="Lady Justice statue representing legal intelligence"
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
