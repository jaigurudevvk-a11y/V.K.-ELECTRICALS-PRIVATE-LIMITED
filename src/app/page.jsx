import HeroSection from "@/components/Home/HeroSection";
import AboutEditorialSection from "@/components/Home/AboutSection";
import CoreServicesSection from "@/components/Home/CoreServicesSection";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";
import IndustriesWeServe from "@/components/Home/IndustriesWeServe";
import CTA from "@/components/Home/CTA";
import "./globals.css";


export const metadata = {
  title: "V.K. Electricals Private Limited - Electrical Solutions & Services",
  description:
    "V.K. Electricals Private Limited provides top-notch electrical solutions and services for residential, commercial, and industrial projects. Quality, reliability, and customer satisfaction guaranteed.",
  keywords: [
    "V.K. Electricals",
    "electrical services",
    "residential electrical solutions",
    "commercial electrical solutions",
    "industrial electrical services",
    "electrical contractors",
  ],
  alternates: {
    canonical: "https://vkelectricalspvt.com/",
  },
};

export default function Home() {
  return (
    <main className="true">
      <HeroSection />
      <AboutEditorialSection />
      <CoreServicesSection />
      <WhyChooseUsSection />
      <IndustriesWeServe />
      <CTA />
    </main>
  );
}
