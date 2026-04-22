"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHeroModeListener, useCardRotateListener, useCardSpacingListener } from "./LayoutWidthControl";

const videoList = [
  {
    id: 1,
    name: "Summoner",
    label: "Skin 2 — I",
    path: "/video/CutScene_SE/video_summoner_1_skill_1_skin_2.mp4",
    category: "CutScene",
    thumbnail: "/video/CutScene_SE/1.png",
  },
  {
    id: 2,
    name: "Summoner",
    label: "Skin 2 — III",
    path: "/video/CutScene_SE/video_summoner_3_skill_1_skin_2.mp4",
    category: "CutScene",
    thumbnail: "/video/CutScene_SE/2.png",
  },
  {
    id: 3,
    name: "Summoner",
    label: "Skin 2 — IV",
    path: "/video/CutScene_SE/video_summoner_4_skill_1_skin_2.mp4",
    category: "CutScene",
    thumbnail: "/video/CutScene_SE/3.png",
  },
  {
    id: 4,
    name: "Bigby",
    label: "Long Arm",
    path: "/video/Super_Move/BIGBY-Long Arm of the Law_Closed.mp4",
    category: "Super Move",
    thumbnail: "/video/CutScene_SE/4.png",
  },
  {
    id: 5,
    name: "???",
    label: "On Your Knees",
    path: "/video/Super_Move/On_Your_Knees.mp4",
    category: "Super Move",
    thumbnail: "/video/CutScene_SE/5.png",
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
        scale: 1,
        marginBottom: 0,
      }}
      whileHover={{ scale: isActive ? 1 : 0.94 }}
      transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
      style={{ transform: "translateY(0)" }}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: "polygon(25% 0%, 100% 0%, 100% 96%, 75% 100%, 0% 100%, 0% 4%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={video.thumbnail}
          alt={video.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isActive ? "bg-black/8" : "bg-black/55 group-hover:bg-black/20"
          }`}
        />

        {isActive && (
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent pointer-events-none animate-[scan_3s_linear_infinite]" />
        )}

        {isActive && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/35 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-amber-400/5" />
          </>
        )}

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/75 to-transparent" />

        <div className="absolute top-3 left-4 flex items-center gap-2">
          <div className="flex flex-col gap-0.5">
            <div className="w-px h-2 bg-amber-400/70" />
            <div className="w-px h-1 bg-amber-400/40" />
          </div>
          <span
            className={`text-[11px] font-black tracking-[0.22em] transition-colors duration-200 ${
              isActive ? "text-amber-400" : "text-white/28 group-hover:text-white/65"
            }`}
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {isActive && (
          <div className="absolute top-3 right-4 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          </div>
        )}

        {!isActive && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black/50 border border-amber-400/70 backdrop-blur-sm">
              <svg className="w-4 h-4 text-amber-400 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

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
              isActive ? "text-amber-400" : "text-white/32 group-hover:text-amber-400/85"
            }`}
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {video.label}
          </div>
        </div>
      </div>

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
          style={isActive ? { filter: "drop-shadow(0 0 4px rgba(251,191,36,0.7))" } : {}}
        />
      </svg>

      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 shadow-[0_0_16px_6px_rgba(251,191,36,0.6)]" />
      )}
    </motion.button>
  );
}

function FanStack({
  videoList, currentIdx, switchVideo, cardRefs, rotatePerStep, spacingPerStep,
}: {
  videoList: { id: number; name: string; label: string; path: string; category: string; thumbnail: string }[];
  currentIdx: number;
  switchVideo: (i: number) => void;
  cardRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  rotatePerStep: number;
  spacingPerStep: number;
}) {
  const dragStartX = useRef<number | null>(null);
  const [dragX, setDragX] = useState(0);
  const wasDragging = useRef(false);
  const THRESHOLD = 80;

  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    wasDragging.current = false;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 8) wasDragging.current = true;
    setDragX(Math.max(-160, Math.min(160, delta)));
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (wasDragging.current && Math.abs(delta) >= THRESHOLD) {
      if (delta < 0 && currentIdx < videoList.length - 1) switchVideo(currentIdx + 1);
      if (delta > 0 && currentIdx > 0) switchVideo(currentIdx - 1);
    }
    dragStartX.current = null;
    setDragX(0);
    wasDragging.current = false;
  };

  const onPointerLeave = () => {
    if (dragStartX.current !== null) {
      dragStartX.current = null;
      setDragX(0);
      wasDragging.current = false;
      setTimeout(() => { isDragging.current = false; }, 50);
    }
  };

  return (
    <div
      className="relative select-none"
      style={{ width: "340px", height: "320px", cursor: dragX !== 0 ? "grabbing" : "grab", touchAction: "none" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerLeave}
    >
      {/* Drag hint */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none">
        <svg className="w-3 h-3 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-white/25 text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-rajdhani)" }}>drag</span>
        <svg className="w-3 h-3 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {[...videoList].reverse().map((video, revI) => {
        const i = videoList.length - 1 - revI;
        const isActive = currentIdx === i;
        const offset = i - currentIdx;
        const absOffset = Math.abs(offset);

        // base fan position
        const baseRotate = offset * rotatePerStep;
        const baseX = offset * spacingPerStep;
        const baseY = absOffset * 10;
        const baseScale = 1 - absOffset * 0.08;

        // drag influence: CHỈ card active follow tay, các card khác giữ nguyên
        const dragInfluence = isActive ? dragX : 0;
        const dragRotate = isActive ? (dragX / 160) * -12 : 0;

        const finalX = baseX + dragInfluence;
        const finalRotate = baseRotate + dragRotate;
        const zIndex = isActive ? 20 : 10 - absOffset;

        return (
          <div
            key={video.id}
            className="absolute bottom-0 left-1/2"
            style={{
              zIndex,
              transform: `translateX(calc(-50% + ${finalX}px)) translateY(${baseY}px) rotate(${finalRotate}deg) scale(calc(${baseScale} * var(--hero-card-size, 1)))`,
              transition: dragX !== 0 ? "none" : "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
              transformOrigin: "bottom center",
            }}
          >
            <ThumbnailCard
              video={video}
              isActive={isActive}
              onClick={() => { if (!wasDragging.current) switchVideo(i); }}
              index={i}
              cardRef={(el) => { cardRefs.current[i] = el; }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function HeroDemo1() {
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [currentIdx, setCurrentIdx] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const heroMode = useHeroModeListener();
  const cardRotate = useCardRotateListener();
  const cardSpacing = useCardSpacingListener();

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

      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/88 via-[#0a0a0a]/45 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-28 left-[44%] w-px h-20 bg-gradient-to-b from-transparent via-amber-400/15 to-transparent" />
        <div className="absolute bottom-52 left-[28%] w-6 h-6 border border-amber-400/12 rotate-45" />
      </div>

      {/* Main layout */}
      <div className="relative z-10 min-h-screen flex items-center" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="mx-auto flex items-center justify-between" style={{ width: "var(--layout-width, 75%)" }}>
          {/* LEFT — Text */}
          <div style={{ transform: "translateY(var(--hero-text-y, 0px))" }}>
          <AnimatePresence mode="wait">
          {heroMode === "studio" ? (
          <motion.div
            key="studio"
            className="max-w-2xl"
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -10 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.18 } },
            }}
          >
            {/* Badge */}
            <motion.div className="flex items-center gap-3 mb-8" variants={fadeUp} transition={{ duration: 0.45, ease: "easeOut" }}>
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
              <div className="w-8 h-px bg-amber-400/50" />
              <span className="text-amber-400/80 text-xs font-bold tracking-[0.22em] uppercase" style={{ fontFamily: "var(--font-rajdhani)" }}>
                Premium Game Art & Animation Studio
              </span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl xl:text-[88px] font-black text-white leading-[0.9] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-rajdhani)", textShadow: "0 2px 16px rgba(0,0,0,0.9)" }}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              WE BRING YOUR
              <br />
              <span className="text-amber-400">GAME VISION</span>
              <br />
              TO LIFE.
            </motion.h1>

            <motion.div className="flex items-center gap-3 mb-6" variants={fadeUp} transition={{ duration: 0.45, ease: "easeOut" }}>
              <div className="w-10 h-px bg-amber-400/60" />
              <div className="w-1.5 h-1.5 rotate-45 border border-amber-400/50" />
              <div className="w-24 h-px bg-gradient-to-r from-amber-400/25 to-transparent" />
            </motion.div>

            <motion.p className="text-white/70 text-lg leading-relaxed max-w-lg mb-10" variants={fadeUp} transition={{ duration: 0.48, ease: "easeOut" }}>
              Professional 2D Art, Animation & VFX for mobile games. From concept to final asset — cartoon style, on time, every time.
            </motion.p>

            <motion.div className="flex items-center gap-4" variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link href="/portfolio" className="group inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-black font-black text-sm px-8 py-4 transition-all duration-200 tracking-wider uppercase"
                  style={{ fontFamily: "var(--font-rajdhani)", clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}>
                  View Our Work
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link href="/contact" className="inline-flex items-center gap-2 border border-white/22 hover:border-amber-400/55 bg-white/4 hover:bg-amber-400/6 text-white/75 hover:text-white font-bold text-sm px-8 py-4 transition-all duration-200 tracking-wider uppercase"
                  style={{ fontFamily: "var(--font-rajdhani)" }}>
                  Start a Project
                </Link>
              </motion.div>
            </motion.div>

          </motion.div>
          ) : (
          <motion.div
            key="cyber"
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Cyber badge */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                <div className="w-12 h-px bg-amber-400/50" />
              </div>
              <span className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase" style={{ fontFamily: "var(--font-rajdhani)" }}>
                Premium Game Art & Animation Studio
              </span>
            </div>

            {/* Cyber headline */}
            <h1 className="text-6xl md:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-rajdhani)", textShadow: "0 2px 10px rgba(0,0,0,0.9), 0 4px 20px rgba(0,0,0,0.8)" }}>
              WE BRING YOUR
              <br />
              <span className="relative inline-block">
                <span className="text-amber-400" style={{ textShadow: "0 0 30px rgba(245,158,11,0.8), 0 0 60px rgba(245,158,11,0.4)" }}>GAME VISION</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-transparent shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
              </span>
              <br />
              TO LIFE.
            </h1>

            {/* Cyber divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-px bg-amber-400" />
              <div className="w-2 h-2 rotate-45 border border-amber-400" />
              <div className="flex-1 h-px bg-gradient-to-r from-amber-400/50 to-transparent" />
            </div>

            {/* Cyber tagline */}
            <p className="text-white/90 text-xl font-bold leading-relaxed mb-2" style={{ fontFamily: "var(--font-rajdhani)" }}>
              FROM CONCEPT TO EPIC REALITY
            </p>
            <p className="text-white/70 text-base leading-relaxed max-w-lg mb-10">
              Professional 2D Art, Animation & VFX that transforms your ideas into stunning game experiences.
            </p>

            {/* Cyber CTAs */}
            <div className="flex items-center gap-4">
              <Link href="/portfolio"
                className="group relative inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-black text-base px-10 py-5 transition-all duration-200 tracking-wider uppercase overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)]"
                style={{ fontFamily: "var(--font-rajdhani)" }}>
                <div className="absolute top-0 left-0 w-4 h-4 bg-black" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-black" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />
                View Our Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contact"
                className="relative inline-flex items-center gap-2 border-2 border-amber-400 hover:border-amber-300 bg-black/40 hover:bg-amber-400/10 text-amber-400 hover:text-amber-300 font-black text-base px-10 py-5 transition-all duration-200 tracking-wider uppercase"
                style={{ fontFamily: "var(--font-rajdhani)" }}>
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-400" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-400" />
                Start a Project
              </Link>
            </div>

          </motion.div>
          )}
          </AnimatePresence>
          </div>

          {/* RIGHT — Fan stack */}
          <div className="hidden lg:block flex-shrink-0" style={{ transform: "translateY(var(--hero-cards-y, 0px))" }}>
            <FanStack
              videoList={videoList}
              currentIdx={currentIdx}
              switchVideo={switchVideo}
              cardRefs={cardRefs}
              rotatePerStep={cardRotate}
              spacingPerStep={cardSpacing}
            />
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
