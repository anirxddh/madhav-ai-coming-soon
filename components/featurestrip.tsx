import type { MutableRefObject } from "react";
import { BookOpen, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Built for lawyers & firms.",
    description: "Precision first search.",
  },
  {
    icon: Sparkles,
    title: "Context-powered legal intelligence.",
    description: "It gives you what you need.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted. Transparent. Reliable.",
    description: "Built with accuracy in mind.",
  },
];

type FeatureStripProps = {
  featureCardRefs: MutableRefObject<(HTMLElement | null)[]>;
};

export default function FeatureStrip({ featureCardRefs }: FeatureStripProps) {
  return (
    <section className="relative mt-12 border-t border-[#c4c7c7] pt-10">
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            ref={(node) => {
              featureCardRefs.current[index] = node;
            }}
            className={[
              "group flex flex-col gap-3 opacity-80 transition-opacity duration-250 hover:opacity-100",
              index > 0 ? "md:border-l md:border-[#c4c7c7] md:pl-8" : "",
            ].join(" ")}
          >
            <feature.icon className="h-5 w-5 text-[#1b1c1c] transition-transform duration-250 group-hover:-translate-y-0.5" strokeWidth={1.5} />
            <h3 className="max-w-46 font-(family-name:--font-heading) text-[12px] uppercase leading-[1.1] tracking-widest text-[#1b1c1c] transition-colors duration-250 group-hover:text-[#1b1c1c]">
              {feature.title}
            </h3>
            <p className="max-w-52 text-[17px] leading-7 text-[#5e5e5c]">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
