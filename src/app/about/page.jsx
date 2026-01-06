import AboutOverviewSection from "@/components/About/AboutContent";
import AboutHeroSection from "@/components/About/AboutHeroSection";
import OurExpertiseSection from "@/components/About/OurExpertiseSection";
import OurObjectiveSection from "@/components/About/OurObjectiveSection";
import ValuesVisionSection from "@/components/About/ValuesVisionSection";

export default function AboutPage() {
  return (
    <main className="true">
      <AboutHeroSection />
      <AboutOverviewSection />
      <OurObjectiveSection />
      <OurExpertiseSection />
      <ValuesVisionSection />
    </main>
  );
}
