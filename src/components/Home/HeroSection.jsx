"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-[92px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/banner.jpg"
        alt="V.K. Electricals Hero"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-16 text-white">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug tracking-tight">
              Powering India with Reliable Electrical Solutions
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/85 leading-relaxed">
              V.K. Electricals Private Limited is a trusted service provider,
              contractor, and consultant in the electrical sector, delivering
              end-to-end solutions across power generation, transmission, and
              distribution systems.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="/contact"
                className="inline-flex items-center justify-center border border-white text-white px-8 py-3 font-medium transition-all duration-300 hover:bg-white hover:text-black"
              >
                Request a Quote
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center text-white font-medium underline underline-offset-4 hover:opacity-80 transition"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
