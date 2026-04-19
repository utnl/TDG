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

export default function NavbarMarcoStyle() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-6">
      <div className="max-w-[98%] mx-auto relative">
        
        {/* SVG Border Frame — Marco_Game style with sharp diagonal cuts */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 1400 80" 
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Logo panel — rounded left, diagonal cut right */}
          <path 
            d="M 30 5 
               L 260 5 
               L 290 40 
               L 260 75 
               L 30 75 
               Q 15 75 15 60 
               L 15 20 
               Q 15 5 30 5 Z" 
            stroke="rgba(255,255,255,0.25)" 
            strokeWidth="1.5" 
            fill="rgba(0,0,0,0.7)"
          />
          
          {/* Nav links panel — diagonal cuts both sides */}
          <path 
            d="M 300 5 
               L 1050 5 
               L 1080 40 
               L 1050 75 
               L 300 75 
               L 270 40 
               Z" 
            stroke="rgba(255,255,255,0.25)" 
            strokeWidth="1.5" 
            fill="rgba(0,0,0,0.5)"
          />
          
          {/* Button panel — diagonal cut left, rounded right */}
          <path 
            d="M 1090 5 
               L 1350 5 
               Q 1365 5 1365 20 
               L 1365 60 
               Q 1365 75 1350 75 
               L 1090 75 
               L 1060 40 
               Z" 
            stroke="rgba(255,255,255,0.3)" 
            strokeWidth="1.5" 
            fill="rgba(255,255,255,0.1)"
          />
          
          {/* Glowing bottom accent line */}
          <line x1="0" y1="78" x2="1400" y2="78" stroke="url(#glow)" strokeWidth="1.5" />
          
          <defs>
            <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(245,158,11,0.7)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        {/* Content */}
        <div className="relative z-10 flex items-center h-16 px-4">
          
          {/* Logo */}
          <div className="flex items-center justify-center w-[220px]">
            <Link href="/">
              <Image
                src="/video/logo/logo_td2.png"
                alt="TD Games"
                width={140}
                height={42}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-10 px-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm tracking-[0.15em] uppercase font-semibold transition-colors duration-200
                    ${isActive ? "text-white" : "text-white/50 hover:text-white/80"}`}
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {link.label}
                  {isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-px bg-white" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Get Quote Button — nổi bật hơn */}
          <Link
            href="/contact"
            className="hidden md:flex items-center justify-center gap-3 w-[200px] h-14 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-black text-base transition-all duration-200 tracking-wider uppercase shadow-lg shadow-amber-500/40 hover:shadow-amber-400/60 hover:scale-105"
            style={{ 
              fontFamily: "var(--font-rajdhani)",
              clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))"
            }}
          >
            GET A QUOTE
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 mx-6 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <div className="space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-base tracking-wider uppercase font-semibold transition-colors
                    ${isActive ? "text-white" : "text-white/60 hover:text-white"}`}
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors tracking-wider uppercase w-full"
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
