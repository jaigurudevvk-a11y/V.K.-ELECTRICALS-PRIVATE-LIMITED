"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Wrench, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function CoreServicesSwiper() {
  const services = [
    {
      title: "Electrical Contracting & EPC Services",
      desc: "End-to-end execution of electrical projects with engineering precision and regulatory compliance.",
    },
    {
      title: "Power Generation, Transmission & Distribution",
      desc: "Solutions across power plants, substations, and transmission networks.",
    },
    {
      title: "Electrical Installation & Commissioning",
      desc: "Safe and reliable installation with structured commissioning processes.",
    },
    {
      title: "Testing, Inspection & Maintenance",
      desc: "Lifecycle support ensuring performance, safety, and uptime.",
    },
    {
      title: "Consultancy for Electrical Projects",
      desc: "Technical advisory, feasibility studies, and execution planning.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-14">
          <div className="flex items-center gap-4">
            <Wrench className="text-orange-600" size={30} />
            <h3 className="text-2xl md:text-3xl lg:text-4xl leading-snug text-gray-900 max-w-md mx-auto lg:mx-0">
              Our Core Services
            </h3>
          </div>

          {/* NAV BUTTONS */}
          <div className="flex items-center gap-3">
            <button className="services-prev w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-orange-500 hover:bg-gray-200 transition">
              <ChevronLeft size={18} />
            </button>
            <button className="services-next w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-orange-500 hover:bg-gray-200 transition">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".services-next",
            prevEl: ".services-prev",
          }}
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#F5F4F2] p-8 min-h-[260px] flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-300 cursor-pointer">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
