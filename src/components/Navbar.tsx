"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/video/logo/logo_td.png"
            alt="TD Games"
            width={48}
            height={48}
            className="object-contain"
          />
          <span className="text-white font-bold text-lg tracking-widest uppercase">
            TD Games
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-amber-400 transition-colors duration-200 tracking-wider uppercase font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm px-5 py-2.5 rounded-full transition-colors duration-200 tracking-wider uppercase"
        >
          Get a Quote
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-amber-400 transition-colors text-base tracking-wider uppercase font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm px-5 py-3 rounded-full transition-colors tracking-wider uppercase"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
