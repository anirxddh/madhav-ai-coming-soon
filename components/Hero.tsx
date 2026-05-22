import FeatureStrip from "@/components/FeatureStrip";
import StatueHero from "@/components/StatueHero";

export default function Hero() {
  return (
    <section className="mx-auto min-h-screen w-full max-w-[1440px] px-5 sm:px-10 lg:px-16">
      <div className="grid min-h-screen grid-cols-1 items-center gap-y-16 py-20 md:grid-cols-12 md:gap-x-6 md:py-0">
        <div className="flex flex-col justify-center md:col-span-5">
          <div className="space-y-6">
            <p className="font-[family:var(--font-heading)] text-xs uppercase tracking-[0.35em] text-[#5e5e5c]">
              Madhav.ai
            </p>
            <h1 className="max-w-[600px] font-[family:var(--font-heading)] text-4xl font-bold uppercase leading-[0.95] tracking-[-0.04em] text-[#1b1c1c] sm:text-6xl lg:text-7xl">
              India&apos;s first native legal AI platform
            </h1>
            <p className="max-w-[420px] text-base leading-7 text-[#444748] sm:text-lg">
              Legal intelligence built with context in mind.
            </p>
          </div>

          <div className="mt-10">
            <button
              type="button"
              className="border border-[#1b1c1c] px-8 py-4 font-[family:var(--font-heading)] text-xs uppercase tracking-[0.28em] text-[#1b1c1c]"
            >
              Join waitlist
            </button>
            <p className="mt-4 font-[family:var(--font-heading)] text-xs uppercase tracking-[0.24em] text-[#5e5e5c]">
              Launching soon
            </p>
          </div>

          <div className="max-w-[720px]">
            <FeatureStrip />
          </div>
        </div>

        <div className="hidden md:col-span-2 md:block" />

        <div className="relative min-h-[28rem] md:col-span-5 md:min-h-screen">
          <StatueHero />
        </div>
      </div>
    </section>
  );
}
