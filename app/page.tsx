import ConstructionMarkers from "@/components/ConstructionMarkers";
import EditorialGrid from "@/components/EditorialGrid";
import Hero from "@/components/Hero";
import ParticleField from "@/components/particlefield";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F2F0ED] text-[#1b1c1c]">
      <ParticleField />
      <EditorialGrid />
      <ConstructionMarkers />
      <div className="relative z-10">
        <Hero />
      </div>
    </main>
  );
}
