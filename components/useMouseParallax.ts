"use client";

import { useEffect, useState } from "react";

type Offset = {
  x: number;
  y: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function useMouseParallax(): Offset {
  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 });

  useEffect(() => {
    let frame = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;

      const nextOffset = {
        x: clamp(mouseX * 0.008, -18, 18),
        y: clamp(mouseY * 0.005, -18, 18),
      };

      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setOffset(nextOffset);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return offset;
}
