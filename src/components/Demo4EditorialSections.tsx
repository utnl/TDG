"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

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
  const renderedTitle =
    highlight && title.includes(highlight) ? title.split(highlight) : [title];

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
            <p className={`mt-4 max-w-3xl text-base leading-7 ${copyClass}`}>
              {copy}
            </p>
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
            <span
              className="text-sm font-black italic tracking-tighter"
              style={accentStyle}
            >
              // {index}
            </span>
            <div className="w-10 h-[1px] bg-white/10" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
              {index === "01"
                ? "Capabilities"
                : index === "02"
                  ? "Portfolio"
                  : "Information"}
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
          <p
            className={`mx-auto mt-5 max-w-2xl text-base leading-7 opacity-70 ${copyClass}`}
          >
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
          <p
            className={`mx-auto max-w-2xl text-sm leading-relaxed opacity-60 ${copyClass}`}
          >
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
      <div
        className={`relative ${align === "center" ? "overflow-hidden text-center" : "text-left"}`}
      >
        <div
          className={`pointer-events-none absolute top-0 whitespace-nowrap font-black uppercase leading-none tracking-tight ${
            align === "center"
              ? "inset-x-0 text-center text-[64px] md:text-[112px] lg:text-[188px]"
              : "left-0 text-left text-[48px] md:text-[84px] lg:text-[120px] w-max"
          }`}
          style={{
            fontFamily: "var(--font-rajdhani)",
            WebkitTextStroke:
              align === "center"
                ? "1px rgba(255, 255, 255, 0.12)"
                : "1px rgba(255, 255, 255, 0.08)",
            color: "transparent",
          }}
        >
          {eyebrow}
        </div>

        <div
          className={`relative z-10 mx-auto ${
            align === "center"
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
          <p
            className={`mt-4 max-w-3xl text-base leading-7 ${copyClass} ${align === "center" ? "mx-auto" : "mx-0"}`}
          >
            {copy}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Demo4EditorialSections() {
  const [titleVariant, setTitleVariant] = useState<TitleVariant>("outline");
  const [accentColor, setAccentColor] = useState("#ffb400");
  const [activeProject, setActiveProject] = useState(0);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverLockUntilRef = useRef(0);
  const { scrollY } = useScroll();
  const servicesBackdropY = useTransform(scrollY, [0, 900], [0, -36]);
  const heroProjects = featuredProjects.slice(0, 5);
  const bottomProjects = [
    featuredProjects[5],
    featuredProjects[6],
    featuredProjects[7],
    featuredProjects[4],
  ];
  const projects = [...heroProjects, ...bottomProjects];

  const basePositions: Array<{ col: number; row: number }> = [
    { col: 1, row: 1 }, // 0 (big default area)
    { col: 3, row: 1 }, // 1
    { col: 4, row: 1 }, // 2
    { col: 3, row: 2 }, // 3
    { col: 4, row: 2 }, // 4
    { col: 1, row: 3 }, // 5
    { col: 2, row: 3 }, // 6
    { col: 3, row: 3 }, // 7
    { col: 4, row: 3 }, // 8
  ];

  const getGridLayoutForActive = (activeIndex: number): string[] => {
    const safeActive = Math.max(0, Math.min(8, activeIndex));
    const origin = basePositions[safeActive] ?? basePositions[0];

    const bigColStart = origin.col >= 4 ? 3 : origin.col;
    const bigRowStart = origin.row >= 3 ? 2 : 1;

    const bigCells = new Set<string>();
    for (let r = bigRowStart; r <= bigRowStart + 1; r++) {
      for (let c = bigColStart; c <= bigColStart + 1; c++) {
        bigCells.add(`${r}-${c}`);
      }
    }

    const availableCells: Array<{ row: number; col: number }> = [];
    for (let r = 1; r <= 3; r++) {
      for (let c = 1; c <= 4; c++) {
        if (!bigCells.has(`${r}-${c}`)) availableCells.push({ row: r, col: c });
      }
    }

    const classes = new Array<string>(9);
    classes[safeActive] = `lg:col-start-${bigColStart} lg:row-start-${bigRowStart} lg:col-span-2 lg:row-span-2`;

    let cellIdx = 0;
    for (let i = 0; i < 9; i++) {
      if (i === safeActive) continue;
      const cell = availableCells[cellIdx++];
      classes[i] = `lg:col-start-${cell.col} lg:row-start-${cell.row} lg:col-span-1 lg:row-span-1`;
    }

    return classes;
  };

  const handleProjectHover = (index: number) => {
    if (index === activeProject) return;
    if (Date.now() < hoverLockUntilRef.current) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);

    hoverTimeoutRef.current = setTimeout(() => {
      setActiveProject(index);
      // Prevent immediate oscillation while grid reflows under cursor.
      hoverLockUntilRef.current = Date.now() + 180;
    }, 90);
  };

  const clearHoverIntent = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

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
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-[#ff7a1a] text-black"
                  : "bg-white/6 text-white/75 hover:bg-white/12 hover:text-white"
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
        <div
          className="mx-auto"
          style={{ width: "min(var(--layout-width, 85%), 1240px)" }}
        >
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
                transition={{
                  delay: index * 0.1,
                  duration: 0.55,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#1a1a1a] shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
              >
                <div className="relative aspect-[4/4.3] overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.04, y: -4 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
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
                    style={{
                      backgroundColor: accentColor,
                      transformOrigin: "left center",
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      delay: 0.18 + index * 0.1,
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                  />
                  <p className="mt-3 text-sm leading-6 text-white/68">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="snap-start relative overflow-hidden border-t border-[#252525] bg-[#0d0d12] py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(57,45,138,0.22),transparent_40%)]" />
        <svg
          className="pointer-events-none absolute right-[13%] top-[24%] h-20 w-40 opacity-70"
          viewBox="0 0 160 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 58C34 44 63 36 95 32C119 29 136 26 154 20"
            stroke="#ff8c3a"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M95 32C107 35 120 39 133 47"
            stroke="#ff8c3a"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
        <svg
          className="pointer-events-none absolute bottom-[12%] right-[5%] h-16 w-36 opacity-40"
          viewBox="0 0 144 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 44C28 35 50 30 79 25C101 21 122 14 139 8"
            stroke="#8a78ff"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
        <div
          className="relative z-10 mx-auto"
          style={{ width: "min(var(--layout-width, 85%), 1240px)" }}
        >
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

          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            {["ALL", "2D ANIMATION", "GAME ART", "VFX", "CINEMATIC"].map(
              (filter) => {
                const isActive = filter === "ALL";
                return (
                  <button
                    key={filter}
                    className={`relative rounded-lg border px-7 py-2 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-200 ${
                      isActive
                        ? "border-[#ff8c3a] bg-[#ff8c3a] text-black shadow-[0_0_0_1px_rgba(255,140,58,0.2),0_0_24px_rgba(255,140,58,0.24)]"
                        : "border-[#34343f] bg-[#111119] text-[#9f9fac] hover:border-[#ff8c3a] hover:text-white"
                    }`}
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {filter}
                  </button>
                );
              },
            )}
            <button
              className="rounded-lg border border-[#34343f] bg-[#111119] px-6 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#9f9fac] transition-all hover:border-[#ff8c3a] hover:text-white"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              SORT BY
              <svg
                className="ml-2 inline-block h-3 w-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          <div className="grid auto-rows-[156px] grid-flow-dense gap-3 md:auto-rows-[220px] lg:grid-cols-4 lg:auto-rows-[190px]">
            {projects.map((project, index) => {
              const isActive = index === activeProject;
              const layoutClass = getGridLayoutForActive(activeProject)[index];

              return (
                <motion.article
                  key={`${project.title}-${index}`}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    layout: { type: "spring", stiffness: 135, damping: 24, mass: 0.9 },
                    delay: index * 0.05,
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  onHoverStart={() => handleProjectHover(index)}
                  onHoverEnd={clearHoverIntent}
                  whileHover={{ y: -3 }}
                  animate={{ opacity: isActive ? 1 : 0.72 }}
                  className={`group relative overflow-hidden rounded-xl border bg-[#1a1a1a] ${
                    isActive ? "border-[#ff8c3a]/45 shadow-[0_0_40px_rgba(255,122,26,0.2)]" : "border-white/10"
                  } ${layoutClass}`}
                  style={{ zIndex: isActive ? 30 : 10 }}
                >
                  {isActive && (
                    <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[18px] bg-[#ff8c3a]/22 blur-2xl" />
                  )}
                  <div className="relative h-full min-h-[156px] lg:min-h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                    {isActive && (
                      <div className="absolute left-6 top-6">
                        <span className="inline-block rounded-sm bg-[#ff8c3a] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-black">
                          Featured Project
                        </span>
                      </div>
                    )}
                    <div className={isActive ? "absolute bottom-0 left-0 right-0 p-8" : "absolute bottom-0 left-0 right-0 p-4"}>
                      <p className={`${isActive ? "mb-1 text-[10px]" : "mb-1 text-[9px]"} font-bold uppercase tracking-[0.15em] text-[#ff8c3a]`}>
                        {project.category.toUpperCase()}
                      </p>
                      <h3
                        className={`${isActive ? "mb-2 text-4xl" : "mb-1 text-lg"} font-bold leading-tight text-white`}
                        style={{ fontFamily: "var(--font-rajdhani)" }}
                      >
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className={isActive ? "text-xs text-[#9a9aaa]" : "text-[10px] text-[#9a9aaa]"}>
                          2024 • {project.category}
                        </span>
                        {isActive ? (
                          <button className="rounded-md border border-[#ff8c3a]/60 bg-black/45 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all hover:bg-[#ff8c3a] hover:text-black">
                            View Project
                          </button>
                        ) : (
                          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8d8d9d]">Demo</span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
