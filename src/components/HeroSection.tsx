"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// Mock portfolio thumbnails — replace with real assets later
const mockThumbs = [
  {
    id: 1,
    src: "https://picsum.photos/seed/tdg1/400/500",
    label: "Character Art",
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/tdg2/400/500",
    label: "VFX Animation",
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/tdg3/400/500",
    label: "2D Spine Anim",
  },
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-black">
      {/* ── Background Video ── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        src="/video/Super_Move/GWEN-Desperation-4k-anim.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ filter: "grayscale(100%)" }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT — Text */}
            <div className="flex flex-col gap-8">
              {/* Tag */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-amber-400" />
                <span className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase">
                  Vietnam · Est. 2015
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-6xl md:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tight">
                We Make
                <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #f59e0b 0%, #fbbf24 50%, #f97316 100%)",
                  }}
                >
                  Games
                </span>
                <br />
                Look Epic.
              </h1>

              {/* Description */}
              <p className="text-white/60 text-lg leading-relaxed max-w-md">
                2D Art · Animation · VFX outsourcing for mobile games.
                Cartoon-style specialists trusted by studios worldwide.
              </p>

              {/* Stats row */}
              <div className="flex items-center gap-8 py-4 border-t border-white/10">
                {[
                  { num: "200+", label: "Projects" },
                  { num: "8+", label: "Years" },
                  { num: "50+", label: "Clients" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span className="text-3xl font-black text-amber-400">
                      {s.num}
                    </span>
                    <span className="text-white/40 text-xs tracking-widest uppercase">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-black text-sm px-7 py-4 transition-all duration-200 tracking-wider uppercase"
                  style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
                >
                  View Our Work
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/30 hover:border-amber-400/60 text-white/80 hover:text-amber-400 font-bold text-sm px-7 py-4 transition-all duration-200 tracking-wider uppercase"
                >
                  Start a Project
                </Link>
              </div>
            </div>

            {/* RIGHT — Mock portfolio cards */}
            <div className="hidden lg:flex items-end justify-end gap-4 h-[520px]">
              {mockThumbs.map((thumb, i) => (
                <div
                  key={thumb.id}
                  className="relative flex-shrink-0 overflow-hidden group cursor-pointer"
                  style={{
                    width: i === 1 ? "180px" : "150px",
                    height: i === 1 ? "100%" : "75%",
                    marginBottom: i === 1 ? "0" : i === 0 ? "40px" : "20px",
                  }}
                >
                  <Image
                    src={thumb.src}
                    alt={thumb.label}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  {/* Amber overlay on hover */}
                  <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-all duration-500" />
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white text-xs font-bold tracking-widest uppercase">
                      {thumb.label}
                    </span>
                  </div>
                  {/* Corner accent */}
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-400/60" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-8 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-amber-400/60 to-transparent" />
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center mt-4">
          Scroll
        </span>
      </div>
    </section>
  );
}
