import { Zap, ShieldCheck, Settings } from "lucide-react";
import Image from "next/image";

export default function OurObjectiveSection() {
  return (
    <section className="relative bg-[#f9faf8] overflow-hidden py-16 md:py-24">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/img4.jpg"
          alt="objectivebackground"
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-3xl mb-14">
            <h3 className="text-2xl md:text-3xl lg:text-4xl leading-snug text-gray-900 max-w-md mx-auto lg:mx-0">
              Our Objective
            </h3>
            <div className="w-24 h-0.5 bg-orange-600 mt-2 mb-6"></div>

            <p className="mt-8 text-gray-600 max-w-lg leading-relaxed mx-auto lg:mx-0">
              To carry on the business as service providers, contractors, and
              consultants in the field of electricity boards and electrical
              infrastructure, including the establishment, operation, and
              maintenance of power generation, transmission, and distribution
              systems.
            </p>

            <p className="mt-8 text-gray-600 max-w-lg leading-relaxed mx-auto lg:mx-0">
              Electrical infrastructure is the backbone of modern living —
              powering industries, communities, and economies through reliable
              and future-ready energy networks.
            </p>

            {/* Icon Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="w-8 h-8 text-orange-500" />
                <p className="mt-2 text-sm font-normal text-gray-700">
                  Reliable Support
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Zap className="w-8 h-8 text-orange-500" />
                <p className="mt-2 text-sm font-normal text-gray-700">
                  Efficient Execution
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Settings className="w-8 h-8 text-orange-500" />
                <p className="mt-2 text-sm font-normal text-gray-700">
                  Quality Assurance
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden shadow-lg">
            <Image
              src="/img1.jpg"
              alt="Electrical Infrastructure"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
