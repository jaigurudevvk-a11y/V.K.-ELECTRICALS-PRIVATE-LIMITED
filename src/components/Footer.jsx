"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, Youtube, ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2f2f2f] text-[#cfcfcf]">
      {/* ===== TOP SECTION ===== */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-12 lg:pt-14 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 lg:gap-12 items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center justify-center lg:justify-start gap-3"
          >
            <Image
              src="/VK-electricals.png"
              alt="VK Electricals Logo"
              width={42}
              height={42}
              className="object-contain"
            />
            <span className="text-white font-semibold tracking-wider text-lg whitespace-nowrap leading-none relative top-[1px]">
              V.K. ELECTRICALS
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <Link href="/services" className="hover:text-white transition">
              Services
            </Link>
            <Link href="/about" className="hover:text-white transition">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-end gap-6">
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:text-white transition" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-white transition" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Youtube className="w-5 h-5 hover:text-white transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="border-t border-white/20" />
      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center text-sm">
          {/* Policy Links */}
          {/* <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3">
            <Link href="/disclaimer" className="hover:text-white transition">
              Disclaimer
            </Link>
            <Link href="/hse-policies" className="hover:text-white transition">
              HSE Policies & Documents
            </Link>
            <Link
              href="/quality-policy"
              className="hover:text-white transition"
            >
              Quality Policy
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <Link href="/sitemap" className="hover:text-white transition">
              Sitemap
            </Link>
          </div> */}

          {/* Copyright */}
          <div className="text-center lg:text-right text-[#bdbdbd]">
            © 2026 V.K. Electricals Pvt. Ltd.
          </div>
        </div>
      </div>

      {/* Scroll To Top */}
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
