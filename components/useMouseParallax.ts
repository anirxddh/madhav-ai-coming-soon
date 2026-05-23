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

    const updateOffset = (clientX: number, clientY: number) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const mouseX = clientX - centerX;
      const mouseY = clientY - centerY;

      const nextOffset = {
        x: clamp(mouseX * 0.008, -18, 18),
        y: clamp(mouseY * 0.005, -18, 18),
      };

      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setOffset(nextOffset);
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      updateOffset(event.clientX, event.clientY);
    };

    const handleMouseMove = (event: MouseEvent) => {
      updateOffset(event.clientX, event.clientY);
    };

    const resetOffset = () => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setOffset({ x: 0, y: 0 });
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", resetOffset);
    window.addEventListener("blur", resetOffset);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", resetOffset);
      window.removeEventListener("blur", resetOffset);
    };
  }, []);

  return offset;
}
