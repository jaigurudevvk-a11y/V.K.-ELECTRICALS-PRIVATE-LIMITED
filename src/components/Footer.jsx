"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronUp } from "lucide-react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0b1220] to-[#0a1020] text-gray-300">
      {/* ===== MAIN FOOTER ===== */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* ===== LEFT: BRAND ===== */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                 src="/favicon.png" // V.K. ELECTRICALS logo
                alt="V.K. ELECTRICALS Logo"
                width={42}
                height={42}
                className="object-contain"
              />
              <div>
                <p className="text-white font-semibold tracking-wider text-lg leading-none">
                  V.K. ELECTRICALS
                </p>
                <p className="text-xs text-gray-400 mt-1">Indore, Madhya Pradesh</p>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-[420px]">
              Expert electrical installation, wiring, cable jointing, testing, maintenance, and quality electrical supplies for residential, commercial, and industrial projects across India.
            </p>
          </div>

          {/* ===== CENTER: QUICK LINKS ===== */}
          <div className="md:pl-6 lg:pl-10">
            <p className="text-white font-semibold mb-5">Quick Links</p>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-orange-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-orange-400 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== RIGHT: CONTACT INFO ===== */}
          <div>
            <p className="text-white font-semibold mb-5">Contact Info</p>

            <div className="space-y-4 text-sm text-gray-400">
              {/* Address */}
              <div className="flex gap-3">
                <MapPinIcon className="w-5 h-5 mt-1 text-orange-400 flex-shrink-0" />
                <p className="leading-relaxed">
                  Building No./Flat No.: 70B, 71B, 81B, 82B <br /> Royal Town
                  Colony, Mhow Goan <br /> Dr. Ambedkar Nagar, Indore (M.P.) –
                  453441
                </p>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <PhoneIcon className="w-5 h-5 mt-1 text-orange-400 flex-shrink-0" />
                <div className="space-y-1">
                  <span>+91 93005 50509</span>
                  <br />
                  <span>+91 89622 97950</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <EnvelopeIcon className="w-5 h-5 mt-1 text-orange-400 flex-shrink-0" />
                <span>jaigurudev.vk@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-gray-400">
  © {new Date().getFullYear()}{" "}
  <span className="text-white font-medium">V.K. ELECTRICALS</span>. All
  rights reserved.
</div>

      </div>

      {/* ===== SCROLL TO TOP ===== */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-sm shadow-lg transition"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-3 h-3" />
      </button>
    </footer>
  );
}
