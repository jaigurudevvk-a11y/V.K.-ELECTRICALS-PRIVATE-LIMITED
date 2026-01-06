"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function WhyChooseUsSection() {
  const points = [
    "Experienced Electrical Professionals with decades of hands-on expertise in power generation, transmission, and large-scale electrical infrastructure projects across India.",

    "Strict compliance with Indian Electrical Standards, statutory regulations, and industry best practices to ensure long-term safety, reliability, and regulatory approvals.",

    "Reliable execution with well-defined project planning, disciplined site management, and on-time delivery without compromising quality or operational efficiency.",

    "Safety-focused engineering practices backed by risk assessments, certified procedures, and a strong on-site safety culture to protect people, assets, and operations.",

    "Proven capability to deliver projects suitable for Government bodies, PSUs, utilities, and large infrastructure developers with transparent processes and documented controls.",
  ];

  const swiperRef = useRef(null);
  const progressRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const SLIDE_DURATION = 4000;

  useEffect(() => {
    let start = Date.now();
    let raf;

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / SLIDE_DURATION, 1);

      if (progressRef.current) {
        progressRef.current.style.width = `${progress * 100}%`;
      }

      if (progress === 1) {
        start = Date.now();
        swiperRef.current?.slideNext();
      }

      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, [activeIndex]);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* HEADER */}
        <div className="flex items-center gap-4 mb-14">
          <Award className="text-orange-500" size={32} />

          <h3 className="text-2xl md:text-3xl lg:text-4xl leading-snug text-gray-900 max-w-md mx-auto lg:mx-0">
            What sets us apart
          </h3>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT IMAGE */}
          <div>
            <Image
              src="/why-choose.jpg"
              alt="V.K. Electricals Infrastructure"
              width={900}
              height={550}
              className="w-full h-auto object-cover"
              priority
            />
            <p className="mt-3 text-xs text-gray-500">
              Electrical Infrastructure, India
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">
            {/* COUNTER + PROGRESS */}
            <div className="flex items-center gap-4 mb-16">
              <span className="text-orange-500 font-medium text-sm">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <div className="relative w-40 h-[2px] bg-gray-200 overflow-hidden">
                <div
                  ref={progressRef}
                  className="absolute left-0 top-0 h-full bg-orange-500"
                  style={{ width: "0%" }}
                />
              </div>

              <span className="text-gray-400 font-medium text-sm">
                {String(points.length).padStart(2, "0")}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl  text-gray-900">
              Why Choose V.K. Electricals
            </h2>
            {/* TEXT SLIDER */}
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              autoHeight
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
                if (progressRef.current) {
                  progressRef.current.style.width = "0%";
                }
              }}
              loop
              speed={800}
              navigation={{
                nextEl: ".why-next",
                prevEl: ".why-prev",
              }}
            >
              {points.map((point, index) => (
                <SwiperSlide key={index}>
                  <div className="max-w-md">
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                      {point}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* NAV BUTTONS */}
            <div className="flex items-center gap-4 mt-16">
              <button className="why-prev w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-orange-500 hover:bg-gray-200 transition">
                <ChevronLeft size={18} />
              </button>
              <button className="why-next w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-orange-500 hover:bg-gray-200 transition">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
