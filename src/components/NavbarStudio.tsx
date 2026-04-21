"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "ABOUT", href: "/about" },
  { label: "BLOG", href: "/blog" },
  { label: "CAREERS", href: "/careers" },
];

export default function NavbarStudio() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`mx-5 lg:mx-10 transition-all duration-400 ${
          scrolled ? "mt-4" : "mt-0"
        }`}
      >
        <div
          className={`h-22 flex items-center justify-between px-1 transition-all duration-400 ${
            scrolled ? "rounded-2xl border border-white/12 bg-[#090a0f]/78 backdrop-blur-xl shadow-[0_14px_34px_rgba(0,0,0,0.45)]" : "bg-transparent border border-transparent"
          }`}
        >
          <Link href="/" className="shrink-0 pl-3 pr-2 lg:pr-6">
            <Image
              src="/video/logo/logo_td2.png"
              alt="TD Games"
              width={170}
              height={50}
              className="object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative text-[13px] font-bold uppercase tracking-[0.18em] transition-colors duration-200 ${
                    isActive ? "text-amber-300" : "text-white/78 hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-nav-display)" }}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-amber-300 transition-all duration-250 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 pr-2 lg:pr-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-white/92 hover:bg-white text-black px-6 py-2.5 text-[12px] font-black uppercase tracking-[0.15em] transition-all duration-200"
              style={{ fontFamily: "var(--font-nav-display)" }}
            >
              Get a Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <button
              className="md:hidden flex flex-col gap-1.5 p-2.5 rounded-lg border border-white/14 bg-white/6"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="mx-5 mt-2 md:hidden rounded-2xl border border-white/12 bg-[#090a0f]/96 backdrop-blur-xl px-5 py-5 flex flex-col gap-2 shadow-[0_18px_36px_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] ${
                  isActive ? "bg-amber-400/16 text-amber-200" : "text-white/80 hover:bg-white/8 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-nav-display)" }}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-white text-black hover:bg-amber-300 px-6 py-3 text-sm font-black uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-nav-display)" }}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
