"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CyberShowcaseCard() {
  return (
    <motion.div
      className="relative w-[340px] h-[480px] lg:w-[380px] lg:h-[540px] group cursor-pointer"
      initial={{ opacity: 0, x: 50, rotateY: 15 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      whileHover={{ scale: 1.02, rotateY: -5, rotateX: 5 }}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {/* Outer Glow */}
      <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/40 via-amber-400/0 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 rounded-xl" />
      
      {/* Card Container */}
      <div 
        className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl"
        style={{ clipPath: "polygon(0 0, calc(100% - 35px) 0, 100% 35px, 100% 100%, 35px 100%, 0 calc(100% - 35px))" }}
      >
        {/* Media / Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/video/CutScene_SE/1.png"
            alt="Showcase"
            fill
            className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110"
          />
          {/* Gradients to blend image into background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-transparent" />
        </div>

        {/* Top Decorative Line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-amber-400 via-amber-400/50 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
        
        {/* Status Badge */}
        <div className="absolute top-5 right-5 px-3 py-1.5 bg-black/60 border border-amber-400/30 backdrop-blur-md z-10 flex items-center gap-2 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
          <span className="text-amber-400 text-[11px] font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-rajdhani)" }}>
            Featured
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-8 z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-px bg-amber-400/60" />
            <div className="text-amber-400/80 text-xs font-bold tracking-[0.25em] uppercase" style={{ fontFamily: "var(--font-rajdhani)" }}>
              Character Design
            </div>
          </div>
          
          <h4 className="text-white text-4xl lg:text-5xl font-black uppercase tracking-wide leading-none mb-2" style={{ fontFamily: "var(--font-rajdhani)" }}>
            Summoner
          </h4>
          <p className="text-white/50 text-sm font-medium mb-6 line-clamp-2">
            High-fidelity 2D spine animation & concept art developed for the latest mobile RPG release.
          </p>
          
          <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
            <button className="flex-1 bg-amber-500 hover:bg-amber-400 text-black py-3 text-sm font-black uppercase tracking-[0.15em] transition-colors"
              style={{ fontFamily: "var(--font-rajdhani)", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}>
              Explore Asset
            </button>
            <button className="w-12 h-12 flex items-center justify-center border border-white/20 hover:border-amber-400 hover:text-amber-400 text-white transition-colors bg-white/5 backdrop-blur-sm"
              style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cyber overlay decoration */}
        <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none opacity-20 group-hover:opacity-50 transition-opacity duration-500">
          <svg className="absolute bottom-3 right-3 w-full h-full text-amber-400" viewBox="0 0 100 100" fill="none">
            <path d="M100 0 L100 100 L0 100" stroke="currentColor" strokeWidth="2" />
            <path d="M70 30 L70 70 L30 70" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
        
        {/* Animated Scanline overlay */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent animate-[scan_3s_linear_infinite]" />
        </div>
      </div>
    </motion.div>
  );
}
