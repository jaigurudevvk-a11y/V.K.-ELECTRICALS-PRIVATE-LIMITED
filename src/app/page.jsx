import HeroSection from "@/components/Home/HeroSection";
import AboutEditorialSection from "@/components/Home/AboutSection";
import CoreServicesSection from "@/components/Home/CoreServicesSection";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";
import IndustriesWeServe from "@/components/Home/IndustriesWeServe";

export default function Home() {
  return (
    <main className="true">
      <HeroSection />
      <AboutEditorialSection />
      <CoreServicesSection />
      <WhyChooseUsSection />
      <IndustriesWeServe />
    </main>
  );
}
