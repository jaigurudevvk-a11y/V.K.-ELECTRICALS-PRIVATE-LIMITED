"use client";

export default function AboutOverviewSection() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT STATEMENT */}
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl leading-snug text-gray-900 max-w-md mx-auto lg:mx-0">
              Delivering end-to-end
              <br />
              electrical excellence.
            </h3>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-gray-700 text-lg leading-relaxed space-y-8 max-w-xl">
            <p>
              V.K. Electricals Private Limited is engaged in providing
              comprehensive electrical contracting, consultancy, and maintenance
              services across the power sector.
            </p>

            <p>
              Our operations cover the complete lifecycle of electrical
              projects—from planning and installation to testing, commissioning,
              and long-term maintenance—ensuring reliable, compliant, and
              efficient solutions for diverse project requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
