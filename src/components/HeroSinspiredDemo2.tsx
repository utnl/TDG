"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect, useCallback } from 'react';

const showcaseList = [
  {
    id: 1,
    name: "Summoner",
    title: "BUILD YOUR OWN",
    subtitle: "ENJOY THE FANTASY REALM",
    path: "/video/CutScene_SE/video_summoner_1_skill_1_skin_2.mp4",
    thumbnail: "/video/CutScene_SE/1.png",
  },
  {
    id: 2,
    name: "Summoner III",
    title: "MASTER THE MAGIC",
    subtitle: "UNLEASH POWERFUL SPELLS",
    path: "/video/CutScene_SE/video_summoner_3_skill_1_skin_2.mp4",
    thumbnail: "/video/CutScene_SE/2.png",
  },
  {
    id: 3,
    name: "Bigby",
    title: "LONG ARM OF THE LAW",
    subtitle: "CRUSH YOUR ENEMIES",
    path: "/video/Super_Move/BIGBY-Long Arm of the Law_Closed.mp4",
    thumbnail: "/video/CutScene_SE/4.png",
  }
];

export default function HeroSinspiredDemo2() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  
  const currentShowcase = showcaseList[currentIdx];

  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0 },
  };

  const switchShowcase = useCallback((idx: number) => {
    if (idx !== currentIdx) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIdx(idx);
        setIsTransitioning(false);
      }, 200);
    }
  }, [currentIdx]);

  useEffect(() => {
    if (bgVideoRef.current) {
      bgVideoRef.current.load();
      bgVideoRef.current.play().catch(() => {});
    }
  }, [currentIdx]);

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]`}>
      {/* Background Image / Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={bgVideoRef}
          key={`bg-${currentIdx}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          src={currentShowcase.path}
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Cyberpunk Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0a0a0a]/30 to-[#0a0a0a]/90" />
      </div>

      {/* Cyberpunk Decorative Elements */}
      <div className="absolute top-28 left-[44%] w-px h-20 bg-gradient-to-b from-transparent via-amber-400/15 to-transparent z-10" />
      <div className="absolute bottom-32 right-[20%] w-32 h-32 border border-amber-400/10 rounded-full z-10" />

      {/* Content */}
      <div 
        className="relative z-10 mx-auto pt-[160px] pb-[120px] flex items-center justify-between gap-8 lg:gap-12"
        style={{ width: "var(--layout-width, 75%)" }}
      >
        <motion.div 
          className="max-w-[650px] xl:max-w-[700px]"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.18 } },
          }}
        >
          {/* Badge */}
          <motion.div className="flex items-center gap-3 mb-6" variants={fadeUp} transition={{ duration: 0.45, ease: "easeOut" }}>
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
            <div className="w-8 h-px bg-amber-400/50" />
            <span className="text-amber-400/90 text-sm font-bold tracking-[0.25em] uppercase" style={{ fontFamily: "var(--font-rajdhani)" }}>
              Premium Game Art Studio
            </span>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-7xl lg:text-[92px] font-black text-white leading-[0.9] tracking-tight mb-8" 
            style={{ fontFamily: "var(--font-rajdhani)", textShadow: "0 2px 16px rgba(0,0,0,0.9)" }}
            variants={fadeUp} 
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            WE BRING YOUR <br />
            <span className="text-amber-400 relative inline-block">
              GAME VISION
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-transparent shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
            </span><br />
            TO LIFE.
          </motion.h1>
          
          <motion.div className="flex items-center gap-3 mb-8" variants={fadeUp} transition={{ duration: 0.45, ease: "easeOut" }}>
            <div className="w-12 h-px bg-amber-400/60" />
            <div className="w-1.5 h-1.5 rotate-45 border border-amber-400/50" />
            <div className="w-32 h-px bg-gradient-to-r from-amber-400/25 to-transparent" />
          </motion.div>

          <motion.p 
            className="max-w-[547px] text-white/70 text-[18px] leading-relaxed mb-10"
            variants={fadeUp} 
            transition={{ duration: 0.48, ease: "easeOut" }}
          >
            Professional 2D Art, Animation & VFX for mobile games. From concept to final asset — cartoon style, on time, every time.
          </motion.p>
          
          <motion.div className="flex items-center gap-6" variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href="/contact"
                className="group relative inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-black text-base px-10 py-5 transition-all duration-200 tracking-wider uppercase overflow-hidden shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
                style={{ fontFamily: "var(--font-rajdhani)", clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))" }}
              >
                Start a Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href="/portfolio"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-amber-400/50 bg-white/5 hover:bg-amber-400/10 text-white hover:text-amber-400 font-bold text-sm px-8 py-5 transition-all duration-200 tracking-wider uppercase"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Fantasy Card Section (Right Side) */}
        <div className="hidden lg:flex flex-col items-center gap-6 relative z-20">
          
          {/* Main Vertical Fantasy Frame */}
          <div className="relative w-[340px] h-[480px] xl:w-[380px] xl:h-[540px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIdx}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0"
              >
                {/* Thick Dark Frame */}
                <div className="absolute inset-0 bg-[#1A1A1A] rounded-xl border-[6px] border-[#2A2118] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-visible">
                  
                  {/* Inner Gold Trim */}
                  <div className="absolute inset-1.5 border-2 border-[#D4A373]/80 rounded-lg pointer-events-none z-10" />
                  
                  {/* Image Container */}
                  <div className="absolute inset-2 rounded-lg overflow-hidden bg-black">
                    <Image
                      src={currentShowcase.thumbnail}
                      alt={currentShowcase.name}
                      fill
                      className="object-cover transition-transform duration-1000 hover:scale-105"
                    />
                    {/* Dark gradient at bottom to make white ribbon pop */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>

                  {/* 4 Corner Ornaments (Gold Crosses) */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#2A2118] border-2 border-[#D4A373] rotate-45 flex items-center justify-center z-20">
                    <div className="w-1.5 h-1.5 bg-[#D4A373] rounded-full" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#2A2118] border-2 border-[#D4A373] rotate-45 flex items-center justify-center z-20">
                    <div className="w-1.5 h-1.5 bg-[#D4A373] rounded-full" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#2A2118] border-2 border-[#D4A373] rotate-45 flex items-center justify-center z-20">
                    <div className="w-1.5 h-1.5 bg-[#D4A373] rounded-full" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#2A2118] border-2 border-[#D4A373] rotate-45 flex items-center justify-center z-20">
                    <div className="w-1.5 h-1.5 bg-[#D4A373] rounded-full" />
                  </div>

                  {/* Cookie Run Style Overlapping Ribbon */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[110%] flex flex-col items-center z-30">
                    <div className="relative w-full bg-white text-center py-4 px-6 rounded-md shadow-[0_10px_20px_rgba(0,0,0,0.5)] border-b-4 border-gray-200">
                      {/* Ribbon folded edges */}
                      <div className="absolute top-2 -left-3 w-4 h-full bg-gray-300 -z-10 transform skew-y-12" />
                      <div className="absolute top-2 -right-3 w-4 h-full bg-gray-300 -z-10 transform -skew-y-12" />
                      
                      {/* Text content */}
                      <h3 className="text-[#FF4D6D] text-2xl xl:text-3xl font-black uppercase tracking-tight leading-none mb-1">
                        {currentShowcase.title}
                      </h3>
                      <p className="text-[#2A2118] text-xs xl:text-sm font-bold uppercase tracking-widest">
                        {currentShowcase.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnails row (FanStack equivalent) */}
          <div className="flex items-center gap-3 mt-12">
            {showcaseList.map((item, idx) => {
              const isActive = currentIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => switchShowcase(idx)}
                  className={`relative w-16 h-16 xl:w-20 xl:h-20 rounded-md overflow-hidden transition-all duration-300 border-2 ${isActive ? 'border-[#D4A373] scale-110 shadow-[0_0_15px_rgba(212,163,115,0.6)]' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  {!isActive && <div className="absolute inset-0 bg-black/40" />}
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
