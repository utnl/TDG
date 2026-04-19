"use client";

import Link from "next/link";
import Image from "next/image";

export default function CyberHeroHome() {
  return (
    <section className="relative min-h-screen bg-black pt-24 pb-16 overflow-hidden">
      {/* Cyber border frame */}
      <div className="absolute inset-4 pointer-events-none">
        {/* Top left corner */}
        <svg className="absolute top-0 left-0 w-32 h-32 text-white/20" viewBox="0 0 100 100" fill="none">
          <path d="M 0 20 L 0 0 L 20 0" stroke="currentColor" strokeWidth="0.5" />
          <path d="M 30 0 L 50 0" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        {/* Top right corner */}
        <svg className="absolute top-0 right-0 w-32 h-32 text-white/20" viewBox="0 0 100 100" fill="none">
          <path d="M 100 20 L 100 0 L 80 0" stroke="currentColor" strokeWidth="0.5" />
          <path d="M 70 0 L 50 0" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        {/* Bottom left corner */}
        <svg className="absolute bottom-0 left-0 w-32 h-32 text-white/20" viewBox="0 0 100 100" fill="none">
          <path d="M 0 80 L 0 100 L 20 100" stroke="currentColor" strokeWidth="0.5" />
          <path d="M 30 100 L 50 100" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        {/* Bottom right corner */}
        <svg className="absolute bottom-0 right-0 w-32 h-32 text-white/20" viewBox="0 0 100 100" fill="none">
          <path d="M 100 80 L 100 100 L 80 100" stroke="currentColor" strokeWidth="0.5" />
          <path d="M 70 100 L 50 100" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
          
          {/* LEFT — Content */}
          <div className="relative">
            {/* Cyber panel background */}
            <div 
              className="absolute -inset-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10"
              style={{
                clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))"
              }}
            />
            
            <div className="relative z-10 space-y-8">
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-3 bg-amber-500/10 border border-amber-500/30 px-6 py-2.5"
                style={{
                  clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)"
                }}
              >
                <span className="w-2 h-2 bg-amber-400 animate-pulse" />
                <span 
                  className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  Vietnam-Based Game Art Studio
                </span>
              </div>

              {/* Headline */}
              <h1 
                className="text-6xl md:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tight"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                AWARD-WINNING
                <br />
                <span className="text-amber-400">GAME ART</span>
                <br />
                FOR STUDIOS.
              </h1>

              {/* Description */}
              <div 
                className="bg-black/40 border-l-4 border-amber-500 pl-6 py-4"
              >
                <p className="text-white/70 text-lg leading-relaxed max-w-md">
                  We've helped <span className="text-amber-400 font-bold">200+ games</span> build stunning visuals through expert 2D Art, Animation, and VFX outsourcing since 2015.
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-black text-base px-8 py-4 transition-all duration-200 tracking-wider uppercase shadow-lg shadow-amber-500/30"
                style={{
                  fontFamily: "var(--font-rajdhani)",
                  clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))"
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
                Free Consultation
              </Link>
            </div>
          </div>

          {/* RIGHT — Character showcase */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Main cyber frame */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent border border-amber-500/20"
              style={{
                clipPath: "polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 60px 100%, 0 calc(100% - 60px))"
              }}
            />
            
            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber-400" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-amber-400" />

            {/* Mock character images — replace with real portfolio */}
            <div className="absolute inset-8 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="https://picsum.photos/seed/tdgchar1/600/700"
                  alt="Game Character"
                  fill
                  className="object-contain opacity-90"
                  unoptimized
                />
              </div>
            </div>

            {/* Floating stats */}
            <div 
              className="absolute bottom-8 left-8 bg-black/80 border border-amber-500/30 px-6 py-4 backdrop-blur-sm"
              style={{
                clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)"
              }}
            >
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-3xl font-black text-amber-400" style={{ fontFamily: "var(--font-rajdhani)" }}>200+</div>
                  <div className="text-white/40 text-xs tracking-widest uppercase">Projects</div>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div>
                  <div className="text-3xl font-black text-amber-400" style={{ fontFamily: "var(--font-rajdhani)" }}>8+</div>
                  <div className="text-white/40 text-xs tracking-widest uppercase">Years</div>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div>
                  <div className="text-3xl font-black text-amber-400" style={{ fontFamily: "var(--font-rajdhani)" }}>50+</div>
                  <div className="text-white/40 text-xs tracking-widest uppercase">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex items-center gap-8">
            <span 
              className="text-white/40 text-xs tracking-[0.2em] uppercase font-bold"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              Partners
            </span>
            <div className="flex-1 flex items-center gap-8 opacity-40 grayscale">
              {/* Mock partner logos — replace with real */}
              {["Meta", "Google", "Unity", "Epic"].map((name) => (
                <div key={name} className="text-white/60 text-sm font-bold">{name}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
