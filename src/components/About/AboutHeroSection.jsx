"use client";

import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="bg-white relative">
      {/* TOP BACKGROUND STRIP */}
      <div className="h-[260px] md:h-[300px] bg-[#c0bbb1]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 -mt-32 md:-mt-50">
        {/* PAGE TITLE */}
        <h1 className="text-xl font-medium text-gray-900 mb-6">About</h1>

        {/* HERO IMAGE */}
        <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[550px] overflow-hidden">
          <Image
            src="/about3.jpg"
            alt="V.K. Electricals Project Overview"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* IMAGE CAPTION */}
        <div className="flex justify-end mt-3">
          <p className="text-xs text-gray-500">
            Electrical Infrastructure, India
          </p>
        </div>
      </div>
    </section>
  );
}
