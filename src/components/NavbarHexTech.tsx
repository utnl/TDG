"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

export default function NavbarHexTech() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md pt-4">
      <div className="max-w-[96%] mx-auto">
        <div className="flex items-center h-16 relative">
          
          {/* LEFT PANEL — Logo (trapezoid shape) */}
          <div 
            className="relative flex items-center justify-center px-12 h-full bg-black/60 border border-white/20"
            style={{
              clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 100%, 0 100%)"
            }}
          >
            <Link href="/" className="relative z-10">
              <Image
                src="/video/logo/logo_td2.png"
                alt="TD Games"
                width={140}
                height={42}
                className="object-contain"
              />
            </Link>
          </div>

          {/* CENTER PANEL — Nav Links (trapezoid shape) */}
          <nav 
            className="hidden md:flex flex-1 items-center justify-center gap-8 px-12 h-full bg-black/40 border-t border-b border-r border-white/20 relative ml-[-1px]"
            style={{
              clipPath: "polygon(24px 0, calc(100% - 24px) 0, 100% 100%, 0 100%)"
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm tracking-[0.15em] uppercase font-semibold transition-colors duration-200
                    ${isActive ? "text-amber-400" : "text-white/60 hover:text-white"}`}
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {link.label}
                  {isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-px bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT PANEL — Get Quote Button (trapezoid + corner accent like image) */}
          <Link
            href="/contact"
            className="hidden md:flex relative items-center justify-center gap-3 px-10 h-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border border-white/20 hover:border-white/30 text-white font-black text-base transition-all duration-200 tracking-wider uppercase ml-[-1px]"
            style={{
              fontFamily: "var(--font-rajdhani)",
              clipPath: "polygon(24px 0, 100% 0, 100% 100%, 0 100%)"
            }}
          >
            {/* Corner accent — amber L shape top-right */}
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-amber-400" />
            
            GET A QUOTE
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto mr-6 flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Bottom border line */}
        <div className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mt-px" />
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-base tracking-wider uppercase font-semibold transition-colors
                    ${isActive ? "text-amber-400" : "text-white/80 hover:text-amber-400"}`}
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm px-6 py-3 transition-colors tracking-wider uppercase w-full"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
