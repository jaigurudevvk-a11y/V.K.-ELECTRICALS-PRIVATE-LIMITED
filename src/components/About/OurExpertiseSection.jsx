import {
  DraftingCompass,
  ShieldCheck,
  TowerControlIcon,
  Wrench,
  Zap,
} from "lucide-react";

export default function OurExpertiseSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <h3 className="text-2xl md:text-3xl lg:text-4xl leading-snug text-gray-900 max-w-md mx-auto lg:mx-0">
            Our Expertise
          </h3>
          <div className="w-24 h-0.5 bg-orange-600 mt-2 mb-6"></div>
          <p className="text-base md:text-lg text-gray-700">
            Our technical expertise covers the complete lifecycle of electrical
            infrastructure projects, ensuring safety, efficiency, and long-term
            operational reliability.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#f7f6f3] border border-gray-200 p-6 hover:shadow-md transition">
            <TowerControlIcon
              className="text-[#1c4268] bg-white p-2.5 rounded-full"
              size={50}
            />
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Electrical Power Infrastructure
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Comprehensive solutions for power generation, transmission, and
              distribution infrastructure.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f7f6f3] border border-gray-200 p-6 hover:shadow-md transition">
            <Zap
              className="text-orange-500 bg-white p-2.5 rounded-full"
              size={50}
            />
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              High & Low Voltage Installations
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Execution of HT & LT electrical installations in compliance with
              Indian electrical standards.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f7f6f3] border border-gray-200 p-6 hover:shadow-md transition">
            <DraftingCompass
              className="text-[#1c4268] bg-white p-2.5 rounded-full"
              size={50}
            />
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Electrical System Design & Consultancy
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Expert design, planning, and consultancy for efficient and
              scalable electrical systems.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#f7f6f3] border border-gray-200 p-6 hover:shadow-md transition">
            <ShieldCheck
              className="text-orange-500 bg-white p-2.5 rounded-full"
              size={50}
            />
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Testing, Commissioning & Safety Audits
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Rigorous testing, commissioning, and safety audits to ensure
              operational compliance.
            </p>
          </div>

          {/* Card 5 */}
          <div className=" bg-[#f7f6f3] border border-gray-200 p-6 hover:shadow-md transition">
            <Wrench
              className="text-[#1c4268] bg-white p-2.5 rounded-full"
              size={50}
            />
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Operation & Maintenance (O&M)
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Preventive and breakdown maintenance ensuring system longevity and
              uninterrupted operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
