import AboutOverviewSection from "@/components/About/AboutContent";
import AboutHeroSection from "@/components/About/AboutHeroSection";
import OurExpertiseSection from "@/components/About/OurExpertiseSection";
import OurObjectiveSection from "@/components/About/OurObjectiveSection";
import ValuesVisionSection from "@/components/About/ValuesVisionSection";

export const metadata = {
  title: "About Us",
  description:
    "Learn more about Your App Name, our mission, values, and expertise in delivering scalable web solutions.",
  keywords: [
    "about software company",
    "web development team",
    "tech company profile",
  ],
  alternates: {
    canonical: "https://www.yourdomain.com/about",
  },
};

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
