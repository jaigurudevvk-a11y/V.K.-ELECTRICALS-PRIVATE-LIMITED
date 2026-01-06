"use client";

import React, { useState, useEffect } from "react";
import { X, Linkedin, Twitter, Facebook, Youtube, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="h-[92px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/VK-electricals.png"
              alt="VK Electricals Logo"
              width={45}
              height={40}
              className={`object-contain mb-2  ${
                isScrolled
                  ? "bg-orange-400 rounded-full mb-0 gap-5"
                  : "bg-transparent gap-5"
              } `}
              priority
            />

            <span
              className={`font-semibold tracking-wider text-lg whitespace-nowrap leading-none relative top-[1px] ${
                isScrolled ? "text-orange-400" : "text-white"
              } `}
            >
              V.K. ELECTRICALS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className={`hidden lg:flex items-center gap-10 text-sm ${
              isScrolled ? "text-orange-400" : "text-white"
            } `}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-medium hover:text-orange-600 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 text-white px-6 py-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Socials */}
              <div className="flex gap-5 pt-4 text-gray-300">
                <Linkedin size={18} />
                <Twitter size={18} />
                <Facebook size={18} />
                <Youtube size={18} />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
