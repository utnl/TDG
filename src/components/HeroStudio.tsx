"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videoList = [
  {
    id: 1,
    name: "Summoner",
    label: "Skin 2 — I",
    path: "/video/CutScene_SE/video_summoner_1_skill_1_skin_2.mp4",
    category: "CutScene",
    thumbnail: "/video/CutScene_SE/1.png",
    gif: "/video/CutScene_SE/1.gif",
    big: "/video/CutScene_SE/1big.gif",
  },
  {
    id: 2,
    name: "Summoner",
    label: "Skin 2 — III",
    path: "/video/CutScene_SE/video_summoner_3_skill_1_skin_2.mp4",
    category: "CutScene",
    thumbnail: "/video/CutScene_SE/2.png",
    gif: "",
    big: "/video/CutScene_SE/2big.gif",
  },
  {
    id: 3,
    name: "Summoner",
    label: "Skin 2 — IV",
    path: "/video/CutScene_SE/video_summoner_4_skill_1_skin_2.mp4",
    category: "CutScene",
    thumbnail: "/video/CutScene_SE/3.png",
    gif: "",
    big: "/video/CutScene_SE/3big.gif",
  },
  {
    id: 4,
    name: "Bigby",
    label: "Long Arm",
    path: "/video/Super_Move/BIGBY-Long Arm of the Law_Closed.mp4",
    category: "Super Move",
    thumbnail: "/video/CutScene_SE/4.png",
    gif: "",
    big: "/video/CutScene_SE/4big.gif",
  },
  {
    id: 5,
    name: "???",
    label: "On Your Knees",
    path: "/video/Super_Move/On_Your_Knees.mp4",
    category: "Super Move",
    thumbnail: "/video/CutScene_SE/5.png",
    gif: "",
    big: "/video/CutScene_SE/5big.gif",
  },
];

function ThumbnailCard({
  video,
  isActive,
  onClick,
  index,
  cardRef,
}: {
  video: (typeof videoList)[0];
  isActive: boolean;
  onClick: () => void;
  index: number;
  cardRef?: (el: HTMLButtonElement | null) => void;
}) {
  return (
    <motion.button
      ref={cardRef}
      onClick={onClick}
      className="group relative flex-shrink-0 w-44 h-64"
      initial={false}
      animate={{
        scale: isActive ? 1 : 0.88,
        marginBottom: isActive ? "10px" : "0px",
      }}
      whileHover={{
        scale: isActive ? 1 : 0.94,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.8,
      }}
      style={{
        transform: "skewY(-4deg) translateY(0)",
      }}
    >
      {/* Card content with clip-path */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath:
            "polygon(25% 0%, 100% 0%, 100% 96%, 75% 100%, 0% 100%, 0% 4%)",
        }}
      >
        {/* Thumbnail image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={video.thumbnail}
          alt={video.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Base overlay */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isActive ? "bg-black/8" : "bg-black/55 group-hover:bg-black/20"
          }`}
        />

        {/* Animated scan line — only when active */}
        {isActive && (
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent pointer-events-none animate-[scan_3s_linear_infinite]" />
        )}

        {/* Active tint */}
        {isActive && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/35 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-amber-400/5" />
          </>
        )}

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/75 to-transparent" />

        {/* HUD index */}
        <div className="absolute top-3 left-4 flex items-center gap-2">
          <div className="flex flex-col gap-0.5">
            <div className="w-px h-2 bg-amber-400/70" />
            <div className="w-px h-1 bg-amber-400/40" />
          </div>
          <span
            className={`text-[11px] font-black tracking-[0.22em] transition-colors duration-200 ${
              isActive
                ? "text-amber-400"
                : "text-white/28 group-hover:text-white/65"
            }`}
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Active badge — small dot only */}
        {isActive && (
          <div className="absolute top-3 right-4 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          </div>
        )}

        {/* Play button */}
        {!isActive && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black/50 border border-amber-400/70 backdrop-blur-sm">
              <svg
                className="w-4 h-4 text-amber-400 ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
          <div
            className={`text-base font-black tracking-wide leading-tight transition-colors duration-200 ${
              isActive ? "text-white" : "text-white/78 group-hover:text-white"
            }`}
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {video.name}
          </div>
          <div
            className={`text-[11px] font-bold tracking-[0.15em] uppercase mt-0.5 transition-colors duration-200 ${
              isActive
                ? "text-amber-400"
                : "text-white/32 group-hover:text-amber-400/85"
            }`}
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {video.label}
          </div>
        </div>
      </div>

      {/* SVG border — follows exact clip-path shape */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 25 0 L 100 0 L 100 96 L 75 100 L 0 100 L 0 4 Z"
          fill="none"
          stroke={isActive ? "#fbbf24" : "rgba(255,255,255,0.12)"}
          strokeWidth={isActive ? "1.5" : "0.8"}
          vectorEffect="non-scaling-stroke"
          className="transition-all duration-300 group-hover:stroke-amber-400/55"
          style={
            isActive
              ? { filter: "drop-shadow(0 0 4px rgba(251,191,36,0.7))" }
              : {}
          }
        />
      </svg>

      {/* Active glow bottom */}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 shadow-[0_0_16px_6px_rgba(251,191,36,0.6)]" />
      )}
    </motion.button>
  );
}

export default function HeroStudio() {
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const displayRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentVideo = videoList[currentIdx];

  const switchVideo = useCallback(
    (globalIdx: number) => {
      if (globalIdx !== currentIdx) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIdx(globalIdx);
          setIsTransitioning(false);
        }, 150);
      }
    },
    [currentIdx],
  );

  useEffect(() => {
    if (bgVideoRef.current) {
      bgVideoRef.current.load();
      bgVideoRef.current.play().catch(() => {});
    }
  }, [currentIdx]);

  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* BG Video */}
      <video
        ref={bgVideoRef}
        key={currentIdx}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
        src={currentVideo.path}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/88 via-[#0a0a0a]/45 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      {/* Subtle decorative lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-28 left-[44%] w-px h-20 bg-gradient-to-b from-transparent via-amber-400/15 to-transparent" />
        <div className="absolute bottom-52 left-[28%] w-6 h-6 border border-amber-400/12 rotate-45" />
      </div>

      {/* Main layout */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between pt-20">
        {/* Center content */}
        <div className="flex-1 flex items-center px-8 lg:px-16">
          {/* LEFT — Text */}
          <motion.div
            className="max-w-xl"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.18 } },
            }}
          >
            {/* Badge */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              variants={fadeUp}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
              <div className="w-8 h-px bg-amber-400/50" />
              <span
                className="text-amber-400/80 text-xs font-bold tracking-[0.22em] uppercase"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                Premium Game Art & Animation Studio
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-6xl md:text-7xl xl:text-[82px] font-black text-white leading-[0.92] tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-rajdhani)",
                textShadow: "0 2px 16px rgba(0,0,0,0.9)",
              }}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              WE BRING YOUR
              <br />
              <span className="text-amber-400">GAME VISION</span>
              <br />
              TO LIFE.
            </motion.h1>

            {/* Divider */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              variants={fadeUp}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="w-10 h-px bg-amber-400/60" />
              <div className="w-1.5 h-1.5 rotate-45 border border-amber-400/50" />
              <div className="w-24 h-px bg-gradient-to-r from-amber-400/25 to-transparent" />
            </motion.div>

            {/* Sub text */}
            <motion.p
              className="text-white/55 text-base leading-relaxed max-w-md mb-10"
              variants={fadeUp}
              transition={{ duration: 0.48, ease: "easeOut" }}
            >
              Professional 2D Art, Animation & VFX for mobile games. From
              concept to final asset — cartoon style, on time, every time.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex items-center gap-4"
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-black font-black text-sm px-8 py-4 transition-all duration-200 tracking-wider uppercase"
                style={{
                  fontFamily: "var(--font-rajdhani)",
                  clipPath:
                    "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                }}
              >
                View Our Work
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/22 hover:border-amber-400/55 bg-white/4 hover:bg-amber-400/6 text-white/75 hover:text-white font-bold text-sm px-8 py-4 transition-all duration-200 tracking-wider uppercase"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                Start a Project
              </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex items-center gap-8 mt-12 pt-8 border-t border-white/8"
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            >
              {[
                { num: "200+", label: "Projects" },
                { num: "8+", label: "Years" },
                { num: "50+", label: "Clients" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 + i * 0.1, duration: 0.35 }}
                >
                  <motion.div
                    className="text-2xl font-black text-amber-400"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                    initial={{ scale: 0.92 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.25 }}
                  >
                    {s.num}
                  </motion.div>
                  <div className="text-white/35 text-xs tracking-widest uppercase mt-0.5">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM RIGHT — Character showcase + cards */}
        <div className="absolute bottom-12 right-4 lg:right-8 hidden lg:block">
          {/* Big image display area - tách riêng */}
          <div
            ref={displayRef}
            className="relative w-[29rem] h-[500px] flex items-end justify-center mb-4 pointer-events-none translate-x-32 lg:translate-x-[13.75rem]"
          >
            {/* Beam */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-t from-amber-400/60 via-amber-400/20 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-40 bg-gradient-to-t from-amber-400/15 to-transparent blur-xl" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-4 bg-amber-400/30 blur-lg rounded-full" />

            {/* Display content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, scale: 0.7, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  scale: { type: "spring", stiffness: 200, damping: 25 },
                }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                {currentVideo.big ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-radial from-amber-400/10 via-amber-400/5 to-transparent blur-2xl" />
                    <div
                      className="relative overflow-hidden bg-black/20 backdrop-blur-sm border border-amber-400/30"
                      style={{
                        clipPath: "polygon(8% 0%, 100% 0%, 100% 92%, 92% 100%, 0% 100%, 0% 8%)",
                        width: "85%",
                        height: "85%",
                        boxShadow: "0 0 40px rgba(251,191,36,0.3), inset 0 0 20px rgba(251,191,36,0.1)",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={currentVideo.big}
                        alt={currentVideo.name}
                        className="w-full h-full object-cover"
                        style={{ filter: "brightness(1.1) contrast(1.05) saturate(1.1)" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent" />
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M 8 0 L 100 0 L 100 92 L 92 100 L 0 100 L 0 8 Z" fill="none" stroke="#fbbf24" strokeWidth="0.8" vectorEffect="non-scaling-stroke" style={{ filter: "drop-shadow(0 0 6px rgba(251,191,36,0.8))", strokeDasharray: "200", strokeDashoffset: "0", animation: "border-glow 3s ease-in-out infinite" }} />
                      </svg>
                      <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-amber-400/60" />
                      <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-amber-400/60" />
                      <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-amber-400/60" />
                      <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-amber-400/60" />
                    </div>
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="absolute w-1 h-1 bg-amber-400/40 rounded-full" style={{ left: `${20 + i * 12}%`, top: `${30 + (i % 3) * 20}%`, animation: `float-${(i % 3) + 1} ${3 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }} />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="h-80 w-60 overflow-hidden" style={{ clipPath: "polygon(15% 0%, 100% 0%, 100% 95%, 85% 100%, 0% 100%, 0% 5%)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={currentVideo.thumbnail} alt={currentVideo.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M 15 0 L 100 0 L 100 95 L 85 100 L 0 100 L 0 5 Z" fill="none" stroke="rgba(251,191,36,0.5)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Character name */}
            <motion.div
              key={`name-${currentIdx}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute -bottom-8 left-0 right-0 text-center z-20"
            >
              <div className="text-amber-400 text-sm font-black tracking-[0.2em] uppercase mb-1" style={{ fontFamily: "var(--font-rajdhani)", textShadow: "0 0 15px rgba(251,191,36,0.8), 0 0 30px rgba(251,191,36,0.4)" }}>
                {currentVideo.name}
              </div>
              <div className="text-white/50 text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-rajdhani)" }}>
                {currentVideo.label}
              </div>
            </motion.div>
          </div>

          {/* Cards row */}
          <div className="flex items-end justify-center gap-2 pointer-events-auto">
            {videoList.map((video, i) => (
              <ThumbnailCard
                key={video.id}
                video={video}
                isActive={currentIdx === i}
                onClick={() => switchVideo(i)}
                index={i}
                cardRef={(el) => { cardRefs.current[i] = el; }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
        <span
          className="text-white/25 text-[10px] tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-rajdhani)" }}
        >
          Scroll
        </span>
        <div className="w-px h-7 bg-gradient-to-b from-white/18 to-transparent" />
      </div>
    </section>
  );
}
