"use client";

import Image from "next/image";

export default function ServicesHeroSection() {
  return (
    <main className="bg-[#f7f6f3]">
      {/* HERO STRIP */}
      <div className="relative h-[220px] md:h-[260px] w-full">
        <Image
          src="/sbanner.jpg"
          alt="Electrical Infrastructure Services"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* CONTENT WRAPPER */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16 bg-white -mt-20 relative z-10">
        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-14">
          Comprehensive Electrical Services
          <br className="hidden sm:block" />
          for Power & Infrastructure Projects
        </h1>

        {/* SERVICES */}
        <ServiceCategory
          title="Electrical Contracting Services"
          description="End-to-end electrical contracting solutions for industrial, commercial, and infrastructure projects."
          cards={[
            {
              title: "Turnkey Electrical Works",
              image: "/s21.jpg",
            },
            {
              title: "HT & LT Electrical Installations",
              image: "/s2.jpg",
            },
            {
              title: "Industrial & Commercial Systems",
              image: "/s23.jpg",
            },
          ]}
        />

        <ServiceCategory
          title="Power Generation, Transmission & Distribution"
          description="Execution and support services across the complete power value chain."
          cards={[
            {
              title: "Power Plant Electrical Works",
              image: "/s4.jpg",
            },
            {
              title: "Substation Installation & Maintenance",
              image: "/s25.jpg",
            },
            {
              title: "Transmission & Distribution Networks",
              image: "/s26.jpg",
            },
          ]}
        />

        <ServiceCategory
          title="Installation, Testing & Commissioning"
          description="Ensuring safe, compliant, and efficient electrical system deployment."
          cards={[
            {
              title: "Electrical Installation (IS Standards)",
              image: "/s7.jpg",
            },
            {
              title: "System Testing & Inspection",
              image: "/s8.jpg",
            },
            {
              title: "Equipment Commissioning",
              image: "/s9.jpg",
            },
          ]}
        />

        <ServiceCategory
          title="Operation & Maintenance (O&M)"
          description="Reliable maintenance services to ensure uninterrupted electrical operations."
          cards={[
            {
              title: "Preventive & Breakdown Maintenance",
              image: "/s30.jpg",
            },
            {
              title: "Electrical System Health Checks",
              image: "/s31.jpg",
            },
            {
              title: "Long-Term Maintenance Contracts",
              image: "/s12.jpg",
            },
          ]}
        />

        <ServiceCategory
          title="Electrical Consultancy"
          description="Expert advisory services to optimize performance, safety, and compliance."
          cards={[
            {
              title: "Project Planning & Consultancy",
              image: "/s32.jpg",
            },
            {
              title: "System Design & Evaluation",
              image: "/s34.jpg",
            },
            {
              title: "Compliance & Safety Advisory",
              image: "/s35.jpg",
            },
          ]}
        />
      </section>
    </main>
  );
}

function ServiceCategory({ title, description, cards }) {
  return (
    <div className="mb-20">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-gray-600 max-w-3xl">{description}</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border border-gray-200 bg-white hover:shadow-lg transition"
          >
            <div className="relative h-[200px] w-full">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <div className="h-1 w-10 bg-orange-600 mb-3"></div>
              <p className="text-sm font-medium text-gray-800">{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
