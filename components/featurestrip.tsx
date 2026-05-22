const features = [
  {
    title: "Built for lawyers & firms.",
    description: "Precision first search.",
  },
  {
    title: "Context-powered legal intelligence.",
    description: "It gives you what you need.",
  },
  {
    title: "Trusted. Transparent. Reliable.",
    description: "Built with accuracy in mind.",
  },
];

export default function FeatureStrip() {
  return (
    <section className="relative mt-12 border-t border-[#c4c7c7] pt-10">
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className={[
              "flex flex-col gap-3",
              index > 0 ? "md:border-l md:border-[#c4c7c7] md:pl-8" : "",
            ].join(" ")}
          >
            <p className="text-xs uppercase tracking-[0.28em] text-[#1b1c1c]">
              0{index + 1}
            </p>
            <h3 className="font-[family:var(--font-heading)] text-sm uppercase tracking-[0.16em] text-[#1b1c1c]">
              {feature.title}
            </h3>
            <p className="text-sm leading-6 text-[#444748]">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
