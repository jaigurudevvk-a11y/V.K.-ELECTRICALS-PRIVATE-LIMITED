import ServicesHeroSection from "@/components/Services/ServicesHeroSection";

export const metadata = {
  title: "Services",
  description:
    "Explore our professional web development, UI/UX design, and digital business services tailored to your needs.",
  keywords: [
    "web development services",
    "next js development services",
    "ui ux design",
    "custom software development",
  ],
  alternates: {
    canonical: "https://www.yourdomain.com/services",
  },
};

export default function ServicePage() {
  return (
    <main className="true">
      <ServicesHeroSection />
    </main>
  );
}
