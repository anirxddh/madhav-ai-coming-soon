"use client";

import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const options: ISourceOptions = {
  fullScreen: {
    enable: false,
    zIndex: 0,
  },
  background: {
    color: "transparent",
  },
  detectRetina: true,
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: [],
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 72,
        duration: 1.8,
        factor: 0.45,
        speed: 0.5,
      },
    },
  },
  particles: {
    color: {
      value: "rgba(26,26,26,0.35)",
    },
    links: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "out",
      },
      random: true,
      speed: {
        min: 0.08,
        max: 0.32,
      },
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 1200,
      },
      value: 180,
    },
    opacity: {
      value: 0.22,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 1.5,
    },
  },
};

async function particlesInit(engine: Engine) {
  await loadSlim(engine);
}

const mobileOptions: ISourceOptions = {
  ...options,
  particles: {
    ...options.particles,
    number: {
      density: {
        enable: true,
        area: 1200,
      },
      value: 90,
    },
    opacity: {
      value: 0.1,
    },
  },
};

export default function ParticleField() {
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
    <div className="pointer-events-none fixed inset-0 z-1 overflow-hidden">
      <Particles
        id="particle-field"
        init={particlesInit}
        options={isMobile ? mobileOptions : options}
        className="fixed inset-0 z-1 h-full w-full"
      />
    </div>
  );
}
