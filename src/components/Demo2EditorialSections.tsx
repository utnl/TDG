"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

type TitleVariant = "outline" | "indexed" | "studio" | "frame";

const services = [
  {
    title: "2D Animation",
    tag: "Motion-first",
    description:
      "Stylized attack loops, promo motion, idle cycles, and lightweight animated sequences built for game readability.",
    image: "/images/service-animation.jpg",
  },
  {
    title: "2D Art",
    tag: "Art direction",
    description:
      "Character sheets, splash illustrations, UI-support art, and painted assets tuned for a cleaner, friendlier game look.",
    image: "/sinspired/character_6-min-1024x970.jpg",
  },
  {
    title: "2D VFX",
    tag: "Impact polish",
    description:
      "Skill bursts, hit flashes, elemental trails, and screen-space accents that add energy without pushing the style too hard.",
    image: "/sinspired/Game_Animation-min-1024x612.jpg",
  },
];

const featuredProjects = [
  {
    title: "Painted fantasy environments",
    category: "Featured project",
    image: "/sinspired/Artboard-1-copy-13-min-1024x572.jpg",
    className: "md:col-span-2",
  },
  {
    title: "Character-led event visuals",
    category: "Campaign art",
    image: "/sinspired/promo_amanda.jpg",
    className: "",
  },
  {
    title: "Warm mobile action styling",
    category: "2D key art",
    image: "/sinspired/space_arena_source_nature_render_final-min-1024x599.jpg",
    className: "",
  },
  {
    title: "Character-driven promo scenes",
    category: "2D campaign",
    image: "/sinspired/3a7ab9112768871.602fbfbfa228c-882x1024.jpg",
    className: "",
  },
  {
    title: "Soft mobile fantasy branding",
    category: "Game identity",
    image: "/sinspired/Artboard-2-copy-4-1024x850.jpg",
    className: "",
  },
  {
    title: "Casual adventure UI mood",
    category: "Illustration support",
    image: "/sinspired/Artboard-2-copy-1024x850.jpg",
    className: "",
  },
  {
    title: "Casual adventure UI mood",
    category: "Illustration support",
    image: "/sinspired/Artboard-2-copy-1024x850.jpg",
    className: "",
  },
  {
    title: "Casual adventure UI mood",
    category: "Illustration support",
    image: "/sinspired/Artboard-2-copy-1024x850.jpg",
    className: "",
  },
];

const portfolioItems = [
  "/sinspired/character_1-min-1024x970.jpg",
  "/sinspired/character_8-min-1024x970.jpg",
  "/sinspired/Volcano_Arena_render-min-1024x567.jpg",
  "/sinspired/lab_asset-min-1024x506.jpg",
  "/sinspired/2D-Art-min-947x1024.jpg",
  "/sinspired/Character-Design-min-822x1024.jpg",
];

const gameTypes = [
  "Casual adventure",
  "Stylized fantasy RPG",
  "Character collectors",
  "Mobile event campaigns",
  "Side-content animation packs",
  "Social promo art drops",
];

const advantages = [
  {
    number: "01",
    title: "Lighter visual tone",
    text: "Built to feel more stylized studio and less heavy cinematic combat.",
  },
  {
    number: "02",
    title: "2D-first production",
    text: "Animation, art, and VFX are framed around practical 2D pipelines and repeatable content batches.",
  },
  {
    number: "03",
    title: "Client-friendly pacing",
    text: "Clear review points help shape style early before the asset count expands.",
  },
  {
    number: "04",
    title: "Brand-safe presentation",
    text: "Orange, black, and white keep the page aligned with TDG while still looking calmer.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Style target",
    body: "We align on references, softness, contrast, and how stylized the final output should feel.",
  },
  {
    step: "02",
    title: "Sample frame",
    body: "A small visual set is approved first for art, animation, or VFX before the main batch starts.",
  },
  {
    step: "03",
    title: "Production batch",
    body: "Assets are grouped into manageable drops so feedback remains quick and the look stays consistent.",
  },
  {
    step: "04",
    title: "Delivery pack",
    body: "Final files are organized for in-game use, showcase pages, and pitch-ready presentation.",
  },
];

const reviews = [
  {
    quote:
      "The page feels much closer to a real 2D partner now. It sells style and trust instead of trying to overpower the viewer.",
    name: "Creative Lead",
    role: "Mobile fantasy publisher",
  },
  {
    quote:
      "Project presentation is clearer, and the orange-black palette keeps the brand without making the site feel too heavy.",
    name: "Art Producer",
    role: "Outsource management",
  },
  {
    quote:
      "Animation, art, and VFX are finally framed as one clean service story. That reads much better for business clients.",
    name: "Studio Manager",
    role: "Game service team",
  },
];

const projectCategories = [
  {
    id: "animation",
    label: "2D Animation",
    description: "Motion loops, skill beats, and polished sequences for character-driven games.",
    items: [
      "/images/service-animation.jpg",
      "/sinspired/Game_Animation-min-1024x612.jpg",
      "/images/img15.png",
      "/images/img12.png",
    ],
  },
  {
    id: "art",
    label: "2D Art",
    description: "Characters, painted scenes, and promotional key visuals with a softer studio look.",
    items: [
      "/sinspired/character_10-min-1024x970.jpg",
      "/sinspired/character_5-min-1024x970.jpg",
      "/sinspired/Artboard-1-copy-11-min-1024x572.jpg",
      "/sinspired/lab_asset_dark_final-min-1024x506.jpg",
    ],
  },
  {
    id: "vfx",
    label: "2D VFX",
    description: "Impact flashes, spell trails, and layered effects that add energy without clutter.",
    items: [
      "/images/img11.jpg",
      "/images/img14.jpg",
      "/sinspired/Frame-30-min-300x141.png",
      "/sinspired/Frame-29-min-300x141.png",
    ],
  },
];

function SectionIntro({
  index,
  eyebrow,
  title,
  copy,
  highlight,
  variant,
  accentColor,
  compact = false,
  dark = false,
  align = "center",
}: {
  index: string;
  eyebrow: string;
  title: string;
  copy: string;
  highlight?: string;
  variant: TitleVariant;
  accentColor: string;
  compact?: boolean;
  dark?: boolean;
  align?: "center" | "left";
}) {
  const renderedTitle = highlight && title.includes(highlight)
    ? title.split(highlight)
    : [title];

  const titleClass = dark ? "text-white" : "text-[#111111]";
  const copyClass = dark ? "text-white/68" : "text-[#c9c9c9]";
  const accentStyle = { color: accentColor };

  if (variant === "indexed") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={compact ? "mb-6 md:mb-8" : "mb-12 md:mb-14"}
      >
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-[120px_1fr] md:items-start">
          <div className="flex items-center justify-center md:justify-start">
            <div
              className="text-[52px] font-black leading-none text-white/28 md:text-[76px]"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              {index}
            </div>
          </div>
          <div>
            <h2
              className={`text-4xl font-black uppercase tracking-tight md:text-5xl lg:text-6xl ${titleClass}`}
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              {renderedTitle.length === 2 ? (
                <>
                  {renderedTitle[0]}
                  <span style={accentStyle}>{highlight}</span>
                  {renderedTitle[1]}
                </>
              ) : (
                title
              )}
            </h2>
            <p className={`mt-4 max-w-3xl text-base leading-7 ${copyClass}`}>{copy}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "studio") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={compact ? "mb-8 md:mb-10" : "mb-12 md:mb-16"}
      >
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="text-sm font-black italic tracking-tighter" style={accentStyle}>
              // {index}
            </span>
            <div className="w-10 h-[1px] bg-white/10" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
              {index === "01" ? "Capabilities" : index === "02" ? "Portfolio" : "Information"}
            </span>
          </div>
          <h2
            className={`text-4xl font-black uppercase tracking-tight md:text-5xl lg:text-7xl ${titleClass}`}
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {renderedTitle.length === 2 ? (
              <>
                {renderedTitle[0]}
                <span style={accentStyle}>{highlight}</span>
                {renderedTitle[1]}
              </>
            ) : (
              title
            )}
          </h2>
          <p className={`mx-auto mt-5 max-w-2xl text-base leading-7 opacity-70 ${copyClass}`}>
            {copy}
          </p>
        </div>
      </motion.div>
    );
  }

  if (variant === "frame") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={compact ? "mb-10 md:mb-12" : "mb-14 md:mb-20"}
      >
        <div className="relative mx-auto w-fit px-8 py-4">
          {/* Decorative brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ff7a1a]" />

          <h2
            className={`text-4xl font-black uppercase tracking-tight md:text-5xl lg:text-6xl ${titleClass}`}
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {renderedTitle.length === 2 ? (
              <>
                {renderedTitle[0]}
                <span style={accentStyle}>{highlight}</span>
                {renderedTitle[1]}
              </>
            ) : (
              title
            )}
          </h2>
        </div>
        <div className="text-center mt-6">
          <p className={`mx-auto max-w-2xl text-sm leading-relaxed opacity-60 ${copyClass}`}>
            {copy}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={compact ? "mb-6 md:mb-8" : "mb-12 md:mb-14"}
    >
      <div className={`relative ${align === "center" ? "overflow-hidden text-center" : "text-left"}`}>
        <div
          className={`pointer-events-none absolute top-0 whitespace-nowrap font-black uppercase leading-none tracking-tight ${align === "center"
              ? "inset-x-0 text-center text-[64px] md:text-[112px] lg:text-[188px]"
              : "left-0 text-left text-[48px] md:text-[84px] lg:text-[120px] w-max"
            }`}
          style={{
            fontFamily: "var(--font-rajdhani)",
            WebkitTextStroke: align === "center" ? '1px rgba(255, 255, 255, 0.12)' : '1px rgba(255, 255, 255, 0.08)',
            color: 'transparent'
          }}
        >
          {eyebrow}
        </div>

        <div
          className={`relative z-10 mx-auto ${align === "center"
              ? "max-w-4xl pt-[72px] md:pt-[92px] lg:pt-[110px]"
              : "max-w-full pt-[52px] md:pt-[68px] lg:pt-[84px]"
            }`}
        >
          <h2
            className={`text-4xl font-black uppercase tracking-tight md:text-5xl lg:text-6xl ${titleClass}`}
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            {renderedTitle.length === 2 ? (
              <>
                {renderedTitle[0]}
                <span style={accentStyle}>{highlight}</span>
                {renderedTitle[1]}
              </>
            ) : (
              title
            )}
          </h2>
          <p className={`mt-4 max-w-3xl text-base leading-7 ${copyClass} ${align === "center" ? "mx-auto" : "mx-0"}`}>
            {copy}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Demo2EditorialSections() {
  const [activeCategory, setActiveCategory] = useState(projectCategories[0]);
  const [titleVariant, setTitleVariant] = useState<TitleVariant>("outline");
  const [accentColor, setAccentColor] = useState("#ffb400");
  const { scrollY } = useScroll();
  const servicesBackdropY = useTransform(scrollY, [0, 900], [0, -36]);

  return (
    <div className="bg-[#0f0f0f] text-white">
      <div className="sticky top-20 z-30 mx-auto mb-4 flex w-fit flex-wrap items-center gap-2 rounded-full border border-white/10 bg-black/70 p-2 backdrop-blur-md">
        {[
          { id: "outline", label: "Outline" },
          { id: "indexed", label: "Indexed" },
          { id: "studio", label: "Studio" },
          { id: "frame", label: "Frame" },
        ].map((option) => {
          const isActive = titleVariant === option.id;
          return (
            <button
              key={option.id}
              onClick={() => setTitleVariant(option.id as TitleVariant)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${isActive ? "bg-[#ff7a1a] text-black" : "bg-white/6 text-white/75 hover:bg-white/12 hover:text-white"
                }`}
            >
              {option.label}
            </button>
          );
        })}
        <label className="ml-2 flex items-center gap-2 rounded-full bg-white/6 px-3 py-2 text-sm text-white/75">
          <span>Accent</span>
          <input
            type="color"
            value={accentColor}
            onChange={(e) => setAccentColor(e.target.value)}
            className="h-6 w-6 cursor-pointer rounded border-0 bg-transparent"
            title="Front title accent color"
          />
        </label>
      </div>

      <section className="snap-start border-t border-[#252525] bg-[linear-gradient(180deg,#171717_0%,#101010_100%)] pt-6 pb-20 lg:pt-8 lg:pb-24">
        <div className="mx-auto" style={{ width: "min(var(--layout-width, 85%), 1240px)" }}>
          <div className="relative">
            {titleVariant === "outline" && (
              <motion.div style={{ y: servicesBackdropY }}>
                <SectionIntro
                  index="01"
                  eyebrow="Our Services"
                  title="OUR SERVICES"
                  copy="This version keeps the brand energy but removes the hard AAA pressure. The layout follows a studio portfolio rhythm closer to the Sinspired reference."
                  highlight="SERVICES"
                  variant={titleVariant}
                  accentColor={accentColor}
                  compact
                  dark
                />
              </motion.div>
            )}
            {titleVariant !== "outline" && (
              <SectionIntro
                index="01"
                eyebrow="Our Services"
                title="OUR SERVICES"
                copy="This version keeps the brand energy but removes the hard AAA pressure. The layout follows a studio portfolio rhythm closer to the Sinspired reference."
                highlight="SERVICES"
                variant={titleVariant}
                accentColor={accentColor}
                compact
                dark
              />
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28, scale: 0.985 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.55, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#1a1a1a] shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
              >
                <div className="relative aspect-[4/4.3] overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.04, y: -4 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/26 via-transparent to-transparent"
                    whileHover={{ opacity: 0.72 }}
                    transition={{ duration: 0.35 }}
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex rounded-full bg-[#2a1a0d] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[#ff9f45]">
                    {service.tag}
                  </span>
                  <h3
                    className="mt-4 text-[28px] font-semibold leading-tight text-white"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {service.title}
                  </h3>
                  <motion.div
                    className="mt-3 h-[2px] rounded-full"
                    style={{ backgroundColor: accentColor, transformOrigin: "left center" }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: 0.18 + index * 0.1, duration: 0.45, ease: "easeOut" }}
                  />
                  <p className="mt-3 text-sm leading-6 text-white/68">{service.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="snap-start border-t border-[#252525] bg-[#121212] py-20 lg:py-24">
        <div className="mx-auto" style={{ width: "min(var(--layout-width, 85%), 1240px)" }}>
          <SectionIntro
            index="02"
            eyebrow="Our Projects"
            title="OUR PROJECTS"
            copy="We create immersive 2D animation, stunning game art, and eye-catching VFX that bring ideas to life and captivate players."
            highlight="PROJECTS"
            variant={titleVariant}
            accentColor={accentColor}
            dark
          />

          {/* Filter Tabs - Exact style from image */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            {["ALL", "2D ANIMATION", "GAME ART", "VFX", "CINEMATIC", "SORT BY"].map((filter) => {
              const isActive = filter === "ALL";
              const isSortBy = filter === "SORT BY";
              return (
                <button
                  key={filter}
                  className={`relative rounded-lg px-8 py-3 text-[13px] font-bold uppercase tracking-[0.08em] transition-all duration-200 ${
                    isActive
                      ? "bg-[#ff8c3a] text-black"
                      : "border border-[#3a3a3a] bg-transparent text-[#999] hover:border-[#ff8c3a] hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {filter}
                  {isSortBy && (
                    <svg className="ml-2 inline-block h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>

          {/* Grid Layout - Exact from image: 1 large left + 2x2 grid right */}
          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_1fr]">
            {/* Large Featured Card - Left side, spans 2 rows */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a] lg:row-span-2"
            >
              <div className="relative h-full min-h-[500px] lg:min-h-[600px]">
                <Image 
                  src={featuredProjects[0].image} 
                  alt={featuredProjects[0].title} 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Play Button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:bg-white">
                    <svg className="ml-1 h-9 w-9 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </motion.div>

                {/* Featured Badge */}
                <div className="absolute left-6 top-6">
                  <span className="inline-block rounded-md bg-[#ff8c3a] px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-black">
                    Featured Project
                  </span>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#ff8c3a]">
                    2D ANIMATION
                  </p>
                  <h3
                    className="mb-3 text-3xl font-bold leading-tight text-white"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {featuredProjects[0].title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#999]">2024 • Animation, Background, Concept</span>
                    <button className="rounded-full border border-[#ff8c3a]/50 bg-black/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:bg-[#ff8c3a] hover:text-black">
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Top Right Cards - 2 columns */}
            {featuredProjects.slice(1, 3).map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (index + 1) * 0.1, duration: 0.5, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a]"
              >
                <div className="relative h-full min-h-[290px]">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  
                  {/* Play Button */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-xl backdrop-blur-sm transition-all hover:bg-white">
                      <svg className="ml-0.5 h-7 w-7 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#ff8c3a]">
                      {project.category.toUpperCase()}
                    </p>
                    <h3
                      className="mb-2 text-xl font-bold leading-tight text-white"
                      style={{ fontFamily: "var(--font-rajdhani)" }}
                    >
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#999]">2024 • {project.category}</span>
                      <span className="rounded-full border border-[#ff8c3a]/50 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                        Demo
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Bottom Right Cards - 2 columns */}
            {featuredProjects.slice(3, 5).map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (index + 3) * 0.1, duration: 0.5, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a]"
              >
                <div className="relative h-full min-h-[290px]">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  
                  {/* Play Button */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-xl backdrop-blur-sm transition-all hover:bg-white">
                      <svg className="ml-0.5 h-7 w-7 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#ff8c3a]">
                      {project.category.toUpperCase()}
                    </p>
                    <h3
                      className="mb-2 text-xl font-bold leading-tight text-white"
                      style={{ fontFamily: "var(--font-rajdhani)" }}
                    >
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#999]">2024 • {project.category}</span>
                      <span className="rounded-full border border-[#ff8c3a]/50 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                        Demo
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-[30px] border border-white/10 bg-[#1a1a1a] p-6 md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h3
                  className="text-3xl font-black uppercase text-white md:text-4xl"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  GAME ART <span style={{ color: accentColor }}>PORTFOLIO</span>
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-white/65">
                  Dùng pill filter và chuyển ảnh có animation để user biết ngay đây là gallery có thể xem tiếp, gần tinh thần phần trượt của site mẫu.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {projectCategories.map((category) => {
                  const isActive = activeCategory.id === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-full px-5 py-3 text-sm transition-all duration-300 ${isActive
                          ? "bg-[#ff7a1a] text-black"
                          : "bg-white/8 text-white/72 hover:bg-white/14 hover:text-white"
                        }`}
                    >
                      {category.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-[#ffae73]">{activeCategory.description}</p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="mt-8 grid gap-4 md:grid-cols-[0.9fr_1.55fr_1.1fr_0.7fr]"
              >
                <div className="relative min-h-[320px] overflow-hidden rounded-[24px]">
                  <Image src={activeCategory.items[0]} alt={activeCategory.label} fill className="object-cover" />
                </div>
                <div className="relative min-h-[320px] overflow-hidden rounded-[24px]">
                  <Image src={activeCategory.items[1]} alt={activeCategory.label} fill className="object-cover" />
                </div>
                <div className="relative min-h-[320px] overflow-hidden rounded-[24px]">
                  <Image src={activeCategory.items[2]} alt={activeCategory.label} fill className="object-cover" />
                </div>
                <div className="grid gap-4">
                  <div className="relative min-h-[152px] overflow-hidden rounded-[24px]">
                    <Image src={activeCategory.items[3]} alt={activeCategory.label} fill className="object-cover" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0.6, x: 0 }}
                    animate={{ opacity: [0.55, 1, 0.55], x: [0, 10, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                    className="flex min-h-[152px] items-center justify-center rounded-[24px] border border-[#ff7a1a]/25 bg-[#20150e] text-center"
                  >
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-[#ff9f45]">Interactive</p>
                      <p
                        className="mt-2 text-2xl font-semibold text-white"
                        style={{ fontFamily: "var(--font-rajdhani)" }}
                      >
                        Slide / Filter Motion
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="snap-start relative min-h-[90vh] flex flex-col justify-center border-t border-[#252525] bg-[#080808] py-32 overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff7a1a]/5 blur-[160px] rounded-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
        </div>

        <div className="relative z-20 mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2
              className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-white"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              ABOUT <span style={{ color: accentColor }}>GAME</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50 leading-relaxed font-light">
              Where artistic vision meets technical mastery. We don't just create assets; we build the visual soul of your game world.
            </p>
          </motion.div>
        </div>

        {/* Scattered Gallery Vortex */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {portfolioItems.map((image, index) => {
            // Random-ish positions for a scattered look
            const positions = [
              { top: "15%", left: "8%", size: "w-48 md:w-64", delay: 0, rotate: -8 },
              { top: "10%", right: "10%", size: "w-40 md:w-56", delay: 0.2, rotate: 12 },
              { bottom: "15%", left: "12%", size: "w-52 md:w-72", delay: 0.4, rotate: 6 },
              { bottom: "10%", right: "8%", size: "w-44 md:w-60", delay: 0.6, rotate: -10 },
              { top: "45%", left: "2%", size: "w-32 md:w-48", delay: 0.3, rotate: 15 },
              { top: "40%", right: "5%", size: "w-36 md:w-52", delay: 0.5, rotate: -5 },
            ];
            const pos = positions[index % positions.length];

            return (
              <motion.div
                key={image + index}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 0.65, scale: 1, y: 0 }}
                whileHover={{ 
                  opacity: 1, 
                  scale: 1.15, 
                  zIndex: 50,
                  boxShadow: "0 0 40px rgba(255,122,26,0.5)" 
                }}
                viewport={{ once: true }}
                transition={{ delay: pos.delay, duration: 1, ease: "easeOut" }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [pos.rotate, pos.rotate + 2, pos.rotate]
                }}
                className={`absolute pointer-events-auto cursor-pointer rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 ${pos.size}`}
                style={{
                  top: pos.top,
                  left: pos.left,
                  right: pos.right,
                  bottom: pos.bottom,
                }}
              >
                <Link href="#projects" className="block relative aspect-[4/5]">
                  <Image 
                    src={image} 
                    alt="Art piece" 
                    fill 
                    className="object-cover saturate-[0.3] brightness-90 hover:saturate-100 hover:brightness-110 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-[#ff7a1a] flex items-center justify-center shadow-lg transform scale-0 hover:scale-100 transition-transform duration-500">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Tags Marquee at Bottom */}
        <div className="absolute bottom-12 left-0 w-full overflow-hidden z-30">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...gameTypes, ...gameTypes, ...gameTypes].map((type, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white/5 italic">
                {type}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Center Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff7a1a]/40 to-transparent"
        />
      </section>

      <section className="snap-start border-t border-[#252525] bg-[#161616] py-20 lg:py-24">
        <div className="mx-auto" style={{ width: "min(var(--layout-width, 85%), 1240px)" }}>
          <SectionIntro
            index="04"
            eyebrow="Advantages"
            title="WHY CHOOSE US"
            copy="These blocks replace the old intense tone with clearer reasons to trust the team: style control, practical pipeline, and a more welcoming presentation."
            highlight="US"
            variant={titleVariant}
            accentColor={accentColor}
            dark
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-4">
            {advantages.map((item, index) => {
              // Create bento layout: items 0 and 3 span 2 columns on large screens
              const isLarge = index === 0 || index === 3;
              
              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                  className={`group relative overflow-hidden rounded-[32px] border border-white/5 bg-[#181818] p-8 md:p-10 transition-colors duration-500 hover:bg-[#1f1a16] hover:border-[#ff7a1a]/30 ${
                    isLarge ? "lg:col-span-2" : "lg:col-span-1"
                  }`}
                >
                  {/* Huge background number */}
                  <div 
                    className="pointer-events-none absolute -bottom-8 -right-4 text-[160px] md:text-[200px] font-black leading-none text-white/[0.02] transition-transform duration-700 group-hover:-translate-y-4 group-hover:scale-110 group-hover:text-white/[0.06]"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {item.number}
                  </div>

                  {/* Accent dot/line */}
                  <div className="mb-8 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff7a1a]/10 text-sm font-bold text-[#ff7a1a]">
                      {item.number}
                    </span>
                    <div className="h-[2px] w-12 bg-gradient-to-r from-[#ff7a1a]/50 to-transparent transition-all duration-500 group-hover:w-32" />
                  </div>

                  <div className="relative z-10">
                    <h3
                      className={`font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-[#ff7a1a] ${
                        isLarge ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
                      }`}
                      style={{ fontFamily: "var(--font-rajdhani)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-base leading-relaxed text-white/50 group-hover:text-white/70 transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="snap-start bg-white py-24 overflow-hidden relative">
        <div className="mx-auto mb-16" style={{ width: "min(var(--layout-width, 85%), 1240px)" }}>
          <SectionIntro
            index="05"
            eyebrow="Trust"
            title="OUR CLIENTS"
            highlight="CLIENTS"
            variant="outline"
            accentColor={accentColor}
            dark={false}
          />
        </div>

        <div className="relative w-full flex overflow-x-hidden pt-8">
          <motion.div
            className="flex whitespace-nowrap gap-16 md:gap-32 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[
              "/logoCompany/Frame-26-min-300x141.png",
              "/logoCompany/Frame-27-min-300x141.png",
              "/logoCompany/Frame-28-min-300x141.png",
              "/logoCompany/Frame-29-min-300x141.png",
              "/logoCompany/Frame-30-min-300x141.png",
              "/logoCompany/Frame-26-min-300x141.png",
              "/logoCompany/Frame-27-min-300x141.png",
              "/logoCompany/Frame-28-min-300x141.png",
              "/logoCompany/Frame-29-min-300x141.png",
              "/logoCompany/Frame-30-min-300x141.png",
              "/logoCompany/Frame-26-min-300x141.png",
              "/logoCompany/Frame-27-min-300x141.png",
              "/logoCompany/Frame-28-min-300x141.png",
              "/logoCompany/Frame-29-min-300x141.png",
              "/logoCompany/Frame-30-min-300x141.png",
              "/logoCompany/Frame-26-min-300x141.png",
              "/logoCompany/Frame-27-min-300x141.png",
              "/logoCompany/Frame-28-min-300x141.png",
              "/logoCompany/Frame-29-min-300x141.png",
              "/logoCompany/Frame-30-min-300x141.png"
            ].map((src, i) => (
              <div 
                key={i} 
                className="relative h-12 w-32 md:h-16 md:w-40 hover:scale-110 transition-transform duration-300 cursor-default shrink-0" 
              >
                <Image src={src} alt={`Client logo`} fill className="object-contain" />
              </div>
            ))}
          </motion.div>
          
          {/* Edge fade gradients for smooth entering/exiting (White Background) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </section>

    </div>
  );
}
