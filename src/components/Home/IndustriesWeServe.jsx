"use client";

import { Factory, Zap, Building2, Leaf } from "lucide-react";
import Link from "next/link";

export default function IndustriesWeServe() {
  const industries = [
    {
      title: "Electricity Boards & Utilities",
      icon: Zap,
    },
    {
      title: "Industrial & Manufacturing Units",
      icon: Factory,
    },
    {
      title: "Commercial & Infrastructure Projects",
      icon: Building2,
    },
    {
      title: "Renewable & Power Projects",
      icon: Leaf,
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT CONTENT */}
          <div>
            <span className="text-orange-500 text-sm font-medium tracking-wide">
              Industries
            </span>

            <h3 className="text-2xl md:text-3xl lg:text-4xl leading-snug text-gray-900 max-w-md mx-auto lg:mx-0">
              Industries We Serve
            </h3>

            <div className="mt-6 w-16 h-[2px] bg-orange-500" />

            <p className="mt-8 text-lg text-gray-600 max-w-md leading-relaxed">
              We work across diverse sectors, delivering safe, reliable, and
              compliant electrical solutions tailored to industry-specific
              requirements and project complexities.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {industries.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#f7f6f3] p-10 flex flex-col justify-between min-h-[220px]"
                >
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                    <Icon className="text-orange-500" size={28} />
                  </div>

                  <h3 className="mt-8 text-lg font-medium text-gray-900 leading-snug">
                    {item.title}
                  </h3>

                  {/* <span className="mt-6 inline-block text-sm font-medium text-gray-800 border-b-2 border-orange-500 w-fit">
                    LEARN MORE
                  </span> */}
                  <Link
                    href="/services"
                    className="mt-6 inline-block text-sm font-medium text-gray-800 border-b-2 border-orange-500 w-fit"
                  >
                    LEARN MORE
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
