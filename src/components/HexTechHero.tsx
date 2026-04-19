"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const videoList = [
  // CutScene Videos
  { id: 1, name: "Archer Lv2", path: "/video/CutScene_SE/CutScene_Archer_Lv2.mp4", category: "CutScene" },
  { id: 2, name: "Warrior Lv2", path: "/video/CutScene_SE/Cutscene_Warrior_Lv2.mp4", category: "CutScene" },
  { id: 3, name: "Summoner 0", path: "/video/CutScene_SE/video_summoner_0_skill_1.mp4", category: "CutScene" },
  { id: 4, name: "Summoner 1", path: "/video/CutScene_SE/video_summoner_1_skill_1_skin_2.mp4", category: "CutScene" },
  { id: 5, name: "Summoner 3", path: "/video/CutScene_SE/video_summoner_3_skill_1_skin_2.mp4", category: "CutScene" },
  { id: 6, name: "Summoner 4", path: "/video/CutScene_SE/video_summoner_4_skill_1_skin_2.mp4", category: "CutScene" },
  
  // Super Move Videos
  { id: 7, name: "BBB Beta Thrust", path: "/video/Super_Move/BBB-Beta Thrust.mp4", category: "Super Move" },
  { id: 8, name: "BBB Piston Hurricane", path: "/video/Super_Move/BBB-Piston Hurricane.mp4", category: "Super Move" },
  { id: 9, name: "BIGBY Long Arm", path: "/video/Super_Move/BIGBY-Long Arm of the Law_Closed.mp4", category: "Super Move" },
  { id: 10, name: "BIGBY Sovereign", path: "/video/Super_Move/BIGBY-Sovereign Immunity.mp4", category: "Super Move" },
  { id: 11, name: "GLORIA Overdose", path: "/video/Super_Move/GLORIA-Overdose.mp4", category: "Super Move" },
  { id: 12, name: "GLORIA Sun Moon", path: "/video/Super_Move/GLORIA-Sun and Moon.mp4", category: "Super Move" },
  { id: 13, name: "GWEN Desperation", path: "/video/Super_Move/GWEN-Desperation-4k-anim.mp4", category: "Super Move" },
  { id: 14, name: "GWEN Ice Shards", path: "/video/Super_Move/GWEN-Ice Shards-4k-anim.mp4", category: "Super Move" },
  { id: 15, name: "Mistress Command", path: "/video/Super_Move/Mistress_s Command.mp4", category: "Super Move" },
  { id: 16, name: "On Your Knees", path: "/video/Super_Move/On_Your_Knees.mp4", category: "Super Move" },
  { id: 17, name: "ONIMARU Clockwork", path: "/video/Super_Move/ONIMARU-Clockwork Soldiers.mp4", category: "Super Move" },
  { id: 18, name: "ONIMARU Martial Law", path: "/video/Super_Move/ONIMARU-Martial Law.mp4", category: "Super Move" },
  { id: 19, name: "QUINCE Consent", path: "/video/Super_Move/QUINCE-Consent Of The Governed.mp4", category: "Super Move" },
  { id: 20, name: "QUINCE Patriot", path: "/video/Super_Move/QUINCE-Patriot Mirror.mp4", category: "Super Move" },
  { id: 21, name: "VENDETTA Maximum", path: "/video/Super_Move/VENDETTA-Maximum Ven.mp4", category: "Super Move" },
  { id: 22, name: "VENDETTA Surgical", path: "/video/Super_Move/VENDETTA-Surgical Strike.mp4", category: "Super Move" },
  { id: 23, name: "ZANE Maximum", path: "/video/Super_Move/ZANE-Maximum_Anarchy.mp4", category: "Super Move" },
  { id: 24, name: "ZANE Slipstream", path: "/video/Super_Move/ZANE-Slipstream_Phase.mp4", category: "Super Move" },
];

export default function HexTechHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "CutScene", "Super Move"];
  const filteredVideos = selectedCategory === "All" 
    ? videoList 
    : videoList.filter(v => v.category === selectedCategory);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentVideo]);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background video - rõ nét 100% */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-100"
        src={videoList[currentVideo].path}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Gradient overlay nhẹ - chỉ tối ở text */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating triangles */}
        <div className="absolute top-32 right-32 w-16 h-16 border-2 border-amber-400/40 rotate-45 animate-pulse" />
        <div className="absolute top-64 left-24 w-8 h-8 bg-amber-400/20 rotate-12" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
        <div className="absolute bottom-48 right-64 w-12 h-12 border border-amber-400/60 rotate-45" />
        
        {/* Floating hexagons */}
        <div className="absolute top-48 left-1/3 w-10 h-10 border border-amber-400/30 rotate-12" style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }} />
        <div className="absolute bottom-32 left-48 w-6 h-6 bg-amber-400/10" style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }} />
        
        {/* Floating circles */}
        <div className="absolute top-80 right-48 w-4 h-4 border border-amber-400/50 rounded-full animate-ping" />
        <div className="absolute bottom-64 left-1/4 w-8 h-8 border-2 border-amber-400/30 rounded-full" />
        
        {/* Floating lines */}
        <div className="absolute top-56 left-1/2 w-24 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent rotate-45" />
        <div className="absolute bottom-40 right-1/3 w-16 h-px bg-gradient-to-r from-amber-400/30 to-transparent -rotate-12" />
      </div>

      {/* Video selector buttons - góc dưới bên phải */}
      <div className="absolute bottom-8 right-8 z-20 flex flex-col gap-3 max-w-md">
        {/* Category filter */}
        <div className="flex gap-2 justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentVideo(0);
              }}
              className={`px-4 py-1.5 text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-amber-500 text-black"
                  : "bg-black/60 text-white/60 hover:text-white border border-white/20 hover:border-amber-400/50"
              }`}
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="text-white/60 text-xs tracking-widest uppercase text-right" style={{ fontFamily: "var(--font-rajdhani)" }}>
          Select Video ({filteredVideos.length})
        </div>
        
        {/* Video grid */}
        <div className="flex flex-wrap gap-2 justify-end max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-amber-500/50 scrollbar-track-black/20">
          {filteredVideos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => setCurrentVideo(videoList.indexOf(video))}
              className={`relative px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                currentVideo === videoList.indexOf(video)
                  ? "bg-amber-500 text-black"
                  : "bg-black/60 text-white/70 hover:text-white border border-white/20 hover:border-amber-400/50"
              }`}
              style={{ 
                fontFamily: "var(--font-rajdhani)",
                clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))"
              }}
            >
              {video.id}
              {currentVideo === videoList.indexOf(video) && (
                <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-black" />
              )}
            </button>
          ))}
        </div>
        
        <div className="text-amber-400 text-xs text-right mt-1 font-bold" style={{ fontFamily: "var(--font-rajdhani)" }}>
          {videoList[currentVideo].name}
        </div>
      </div>

      {/* HexTech geometric grid overlay - BỎ ĐI */}

      {/* Main content container - BỎ tech borders */}
      <div className="relative z-10 min-h-screen flex flex-col pt-20">
        
        <div className="flex-1 flex items-start pt-24 px-12 w-full">
          {/* Content sát trái, lên trên hơn nữa */}
          <div className="max-w-2xl">
            
            {/* Content - BỎ backdrop blur, giữ tự nhiên */}
            <div className="relative">
              {/* Geometric elements - tránh chạm chữ, đẩy ra xa hơn */}
              <div className="absolute -top-12 -left-16 w-6 h-6 border-2 border-amber-400 rotate-45" />
              <div className="absolute -top-8 -right-24 w-4 h-4 bg-amber-400/30" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
              <div className="absolute top-48 -right-32 w-8 h-8 border border-amber-400/50" style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }} />
              <div className="absolute -bottom-12 -left-12 w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
              <div className="absolute -bottom-16 -right-16 w-12 h-px bg-amber-400/60" />
              
              <div className="relative z-10 space-y-8 py-8">
                {/* Tech badge */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                    <div className="w-12 h-px bg-amber-400/50" />
                  </div>
                  <span 
                    className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    Premium Game Art & Animation Studio
                  </span>
                </div>

                {/* Headline với text shadow mạnh */}
                <h1 
                  className="text-6xl md:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tight"
                  style={{ 
                    fontFamily: "var(--font-rajdhani)",
                    textShadow: "0 2px 10px rgba(0,0,0,0.9), 0 4px 20px rgba(0,0,0,0.8), 0 8px 40px rgba(0,0,0,0.7)"
                  }}
                >
                  WE BRING YOUR
                  <br />
                  <span className="relative inline-block">
                    <span className="text-amber-400" style={{ textShadow: "0 0 30px rgba(245,158,11,0.8), 0 0 60px rgba(245,158,11,0.4)" }}>GAME VISION</span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-transparent shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
                  </span>
                  <br />
                  TO LIFE.
                </h1>

                {/* Tech divider */}
                <div className="flex items-center gap-4 py-4">
                  <div className="w-16 h-px bg-amber-400" />
                  <div className="w-2 h-2 rotate-45 border border-amber-400" />
                  <div className="flex-1 h-px bg-gradient-to-r from-amber-400/50 to-transparent" />
                </div>

                {/* Powerful tagline */}
                <div className="space-y-4">
                  <p className="text-white/90 text-xl font-bold leading-relaxed" style={{ fontFamily: "var(--font-rajdhani)" }}>
                    FROM CONCEPT TO EPIC REALITY
                  </p>
                  <p className="text-white/70 text-base leading-relaxed max-w-lg">
                    Professional 2D Art, Animation & VFX that transforms your ideas into stunning game experiences.
                  </p>
                </div>

                {/* CTA - làm rõ hơn */}
                <div className="flex items-center gap-4 pt-4">
                  <Link
                    href="/portfolio"
                    className="group relative inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-black text-base px-10 py-5 transition-all duration-200 tracking-wider uppercase overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)]"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {/* Diagonal cut corners */}
                    <div className="absolute top-0 left-0 w-4 h-4 bg-black" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-black" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />
                    
                    View Our Work
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  <Link
                    href="/contact"
                    className="relative inline-flex items-center gap-2 border-2 border-amber-400 hover:border-amber-300 bg-black/40 hover:bg-amber-400/10 text-amber-400 hover:text-amber-300 font-black text-base px-10 py-5 transition-all duration-200 tracking-wider uppercase shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {/* Corner cuts */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-400" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-400" />
                    Start a Project
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Video Preview Cards - bên phải */}
          <div className="hidden lg:flex flex-col gap-4 ml-auto mr-16 mt-24">
            <div className="text-white/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-rajdhani)" }}>
              More Videos
            </div>
            {videoList.slice(0, 4).map((video, index) => {
              const videoIndex = videoList.indexOf(video);
              const isActive = currentVideo === videoIndex;
              
              return (
                <button
                  key={video.id}
                  onClick={() => setCurrentVideo(videoIndex)}
                  className={`group relative overflow-hidden transition-all duration-500 ${
                    isActive 
                      ? 'w-48 h-28 scale-105' 
                      : 'w-44 h-24 hover:w-48 hover:h-28 hover:scale-105'
                  }`}
                >
                  {/* Thumbnail background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-black/80" />
                  
                  {/* Border animation */}
                  <div className={`absolute inset-0 border-2 transition-all duration-300 ${
                    isActive 
                      ? 'border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.6)]' 
                      : 'border-amber-400/30 group-hover:border-amber-400/60'
                  }`} />
                  
                  {/* Corner cuts */}
                  <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 transition-colors duration-300 ${
                    isActive ? 'border-amber-400' : 'border-amber-400/50'
                  }`} />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-3">
                    {/* Video number */}
                    <div className={`text-xs font-black tracking-wider transition-colors duration-300 ${
                      isActive ? 'text-amber-400' : 'text-white/60 group-hover:text-amber-400'
                    }`} style={{ fontFamily: "var(--font-rajdhani)" }}>
                      #{video.id}
                    </div>
                    
                    {/* Video name */}
                    <div>
                      <div className={`text-xs font-bold tracking-wide transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-white/80 group-hover:text-white'
                      }`} style={{ fontFamily: "var(--font-rajdhani)" }}>
                        {video.name}
                      </div>
                      <div className="text-[10px] text-white/40 uppercase tracking-wider mt-0.5">
                        {video.category}
                      </div>
                    </div>
                  </div>
                  
                  {/* Play icon overlay */}
                  {!isActive && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute top-2 left-2 w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator - giữa dưới */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-rajdhani)" }}>Scroll</span>
          <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
