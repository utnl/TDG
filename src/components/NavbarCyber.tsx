"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "HOME", href: "/home-cyber" },
  { label: "SERVICES", href: "/services" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "ABOUT", href: "/about" },
  { label: "BLOG", href: "/blog" },
  { label: "CAREERS", href: "/careers" },
];

export default function NavbarCyber() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-4 lg:mx-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/video/logo/logo_td2.png"
            alt="TD Games"
            width={160}
            height={48}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav with SVG border gấp khúc */}
        <div className="hidden md:block relative">
          {/* SVG border gấp khúc với glow effect */}
          <svg 
            className="absolute pointer-events-none" 
            style={{ 
              left: '-12px', 
              top: '-8px', 
              width: 'calc(100% + 24px)', 
              height: 'calc(100% + 16px)',
              filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.2))'
            }}
            viewBox="0 0 600 60"
            preserveAspectRatio="none"
          >
            <path
              d="M 30 0 L 15 10 L 15 50 L 30 60 L 570 60 L 585 50 L 585 10 L 570 0 Z"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          {/* Corner accents - dày hơn, ngắn hơn, gần chữ hơn */}
          <div className="absolute top-2 left-4 w-3 h-3 border-t-2 border-l-2 border-amber-400" />
          <div className="absolute bottom-2 right-4 w-3 h-3 border-b-2 border-r-2 border-amber-400" />
          
          <nav className="flex items-center gap-10 px-8 py-4 relative z-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-base font-bold tracking-[0.15em] transition-all duration-200 pb-1 group ${
                    isActive ? "text-amber-400" : "text-white/90 hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {link.label}
                  {/* Active underline với glow */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                  )}
                  {/* Hover effect */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* CTA - GIỮ NGUYÊN THEO BẢN CYBER */}
        <Link
          href="/contact"
          className="hidden md:flex relative items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-neutral-800 to-neutral-900 hover:from-neutral-700 hover:to-neutral-800 border border-white/20 hover:border-white/30 text-white font-black text-base transition-all duration-200 tracking-wider uppercase"
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
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-base tracking-wider font-semibold transition-colors ${
                  isActive ? "text-amber-400" : "text-white/80 hover:text-amber-400"
                }`}
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
      )}
    </header>
  );
}
