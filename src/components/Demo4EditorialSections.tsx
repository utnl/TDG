"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

type TitleVariant = "outline" | "indexed" | "studio" | "frame";

type Service = {
  title: string;
  icon: "animation" | "art" | "vfx";
  tag: string;
  href: string;
  statValue: string;
  statLabel: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "2D Animation",
    icon: "animation",
    tag: "Motion-first",
    href: "/2d-animation",
    statValue: "50+",
    statLabel: "Completed projects",
    description:
      "Stylized attack loops, promo motion, idle cycles, and lightweight animated sequences built for game readability.",
    image: "/images/service-animation.jpg",
  },
  {
    title: "2D Art",
    icon: "art",
    tag: "Art direction",
    href: "/2d-art",
    statValue: "50+",
    statLabel: "Completed projects",
    description:
      "Character sheets, splash illustrations, UI-support art, and painted assets tuned for a cleaner, friendlier game look.",
    image: "/sinspired/character_6-min-1024x970.jpg",
  },
  {
    title: "2D VFX",
    icon: "vfx",
    tag: "Impact polish",
    href: "/2d-vfx",
    statValue: "50+",
    statLabel: "Completed projects",
    description:
      "Skill bursts, hit flashes, elemental trails, and screen-space accents that add energy without pushing the style too hard.",
    image: "/sinspired/Game_Animation-min-1024x612.jpg",
  },
];

function ServiceIcon({
  type,
  color,
}: {
  type: "animation" | "art" | "vfx";
  color: string;
}) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    style: { color },
  };

  if (type === "animation") {
    return (
      <svg {...common}>
        <path d="M8 5v14l11-7z" />
      </svg>
    );
  }

  if (type === "art") {
    return (
      <svg {...common}>
        <path d="M12 3a9 9 0 0 0 0 18c1.2 0 2-1 .9-2.1-.7-.7-.9-1.8-.5-2.7.6-1.3 2.1-1.2 3.3-1.2a4.8 4.8 0 0 0 0-9.6H12z" />
        <path d="M7.5 10.5h.01" />
        <path d="M9.7 7.9h.01" />
        <path d="M12.6 7.3h.01" />
        <path d="M15.3 8.2h.01" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 3c.8 2.8-.2 4.2-2 6 2.8-.6 4.8.4 6 3 1-3.2 2.8-4.2 5-4-2.4-1.2-4.1-2.7-4-5-1.3 2.2-2.9 2.6-5 0z" />
      <path d="M6 13c.5 1.6-.2 2.5-1.5 3.5 1.7-.2 2.7.4 3.3 1.8.7-2 1.8-2.6 3.1-2.6-1.5-.7-2.5-1.6-2.4-3-.7 1.4-1.6 1.7-2.5.3z" />
    </svg>
  );
}

function ServiceScribble({ color }: { color: string }) {
  return (
    <svg
      className="pointer-events-none absolute right-4 top-4 h-10 w-16 opacity-70"
      viewBox="0 0 80 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 30C18 22 33 18 48 15C60 13 69 11 76 8"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M46 15C55 16 64 20 72 26"
        stroke={color}
        strokeWidth="2.1"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M8 34C21 25 35 21 52 17C63 15 70 13 78 10"
        stroke="#ffffff"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.18"
      />
    </svg>
  );
}

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
            <div className="h-px w-10 bg-white/10" />
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
    classes[safeActive] =
      `lg:col-start-${bigColStart} lg:row-start-${bigRowStart} lg:col-span-2 lg:row-span-2`;

    let cellIdx = 0;
    for (let i = 0; i < 9; i++) {
      if (i === safeActive) continue;
      const cell = availableCells[cellIdx++];
      classes[i] =
        `lg:col-start-${cell.col} lg:row-start-${cell.row} lg:col-span-1 lg:row-span-1`;
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
      hoverLockUntilRef.current = Date.now() + 420;
    }, 120);
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

          <div className="mx-auto mt-6 grid max-w-5xl items-center gap-5 md:mt-8 md:grid-cols-3 lg:gap-6">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: 0.08 * (index + 1),
                  duration: 0.45,
                  ease: "easeOut",
                }}
                className="group relative h-[460px] w-full overflow-visible hover:z-10"
              >
                <div className="absolute left-0 right-0 top-1/2 z-20 flex -translate-y-1/2 flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#212933] shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:border-[#ff8c3a]/35 group-hover:shadow-[0_32px_90px_rgba(0,0,0,0.42)]">
                  <a
                    href={service.href}
                    aria-label={`Open ${service.title}`}
                    className="absolute inset-0 z-10"
                  />
                  <div className="relative h-[250px] w-full shrink-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col px-6 py-5">
                    <div className="flex items-center justify-between gap-4">
                      <h6 className="text-[24px] font-semibold leading-tight text-white tracking-tight">
                        {service.title}
                      </h6>
                      <span
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/25"
                        title={service.title}
                      >
                        <ServiceIcon type={service.icon} color={accentColor} />
                      </span>
                    </div>

                    <div className="grid grid-rows-[0fr] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:mt-3 group-hover:grid-rows-[1fr]">
                      <div className="min-h-0 overflow-hidden">
                        <div className="opacity-0 translate-y-2 transition-all duration-400 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                          <p className="text-[13px] leading-6 text-white/70">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-[1fr_auto] items-center gap-4 pt-2">
                      <div className="min-w-0">
                        <div className="text-base font-semibold leading-tight text-white">
                          {service.statValue}
                        </div>
                        <div className="text-[12px] leading-tight text-white/45">
                          {service.statLabel}
                        </div>
                      </div>

                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/35 text-white/85 transition-colors duration-200 group-hover:bg-[#ffb400] group-hover:text-black">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </span>
                    </div>
                  </div>
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
          className="pointer-events-none absolute right-[10%] top-[20%] h-24 w-56 opacity-80"
          viewBox="0 0 280 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="tdgScribbleOrange"
              x1="0"
              y1="0"
              x2="280"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ff8c3a" />
              <stop offset="1" stopColor="#ffb34f" />
            </linearGradient>
            <filter
              id="tdgGlowOrange"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur stdDeviation="2.2" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0 0 0 0  0 0.55 0 0 0  0 0 0.25 0 0  0 0 0 1 0"
              />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#tdgGlowOrange)">
            <path
              d="M16 86C48 66 86 56 126 50C168 43 205 40 244 28"
              stroke="url(#tdgScribbleOrange)"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M122 50C146 52 174 60 198 74"
              stroke="url(#tdgScribbleOrange)"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.72"
            />
            <path
              d="M18 92C55 70 92 60 136 52C174 45 210 41 252 30"
              stroke="#ffd1a8"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.35"
            />
          </g>
        </svg>

        <svg
          className="pointer-events-none absolute bottom-[10%] right-[4%] h-24 w-56 opacity-55"
          viewBox="0 0 280 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="tdgScribblePurple"
              x1="0"
              y1="0"
              x2="280"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7b6dff" stopOpacity="0.95" />
              <stop offset="1" stopColor="#b7a8ff" stopOpacity="0.85" />
            </linearGradient>
            <filter
              id="tdgGlowPurple"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="0.55 0 0 0 0  0 0.45 0 0 0  0 0 1 0 0  0 0 0 1 0"
              />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#tdgGlowPurple)">
            <path
              d="M22 78C52 66 88 58 126 54C168 49 206 44 252 34"
              stroke="url(#tdgScribblePurple)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M168 49C190 53 214 62 236 74"
              stroke="url(#tdgScribblePurple)"
              strokeWidth="2.1"
              strokeLinecap="round"
              opacity="0.65"
            />
            <path
              d="M24 84C64 70 102 62 142 56C186 49 222 45 258 36"
              stroke="#e9e5ff"
              strokeWidth="1.1"
              strokeLinecap="round"
              opacity="0.22"
            />
          </g>
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

          <div
            className="grid auto-rows-[156px] grid-flow-dense gap-3 md:auto-rows-[220px] lg:grid-cols-4 lg:auto-rows-[190px]"
            onPointerLeave={clearHoverIntent}
          >
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
                    layout: {
                      type: "spring",
                      stiffness: 135,
                      damping: 24,
                      mass: 0.9,
                    },
                    delay: index * 0.05,
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  onPointerEnter={() => handleProjectHover(index)}
                  whileHover={{ y: -3 }}
                  animate={{ opacity: isActive ? 1 : 0.72 }}
                  className={`group relative overflow-hidden rounded-xl border bg-[#1a1a1a] ${
                    isActive
                      ? "border-[#ff8c3a]/85 shadow-[0_0_0_1px_rgba(255,140,58,0.5),0_24px_80px_rgba(0,0,0,0.6),0_0_90px_rgba(255,140,58,0.28)]"
                      : "border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
                  } ${layoutClass}`}
                  style={{ zIndex: isActive ? 30 : 10 }}
                >
                  {isActive && (
                    <>
                      {/* Outer halo */}
                      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[28px] bg-[#ff8c3a]/28 blur-[52px]" />
                      {/* Inner ring glow */}
                      <div className="pointer-events-none absolute inset-0 z-10 rounded-xl ring-1 ring-[#ffb25b]/70 shadow-[inset_0_0_0_1px_rgba(255,140,58,0.55)]" />
                      {/* Top-left hot spot */}
                      <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[18px] bg-[radial-gradient(circle_at_22%_18%,rgba(255,180,82,0.45),transparent_58%)]" />
                    </>
                  )}
                  <div className="relative h-full min-h-[156px] lg:min-h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/25 to-transparent" />
                    {isActive && (
                      <div className="absolute left-6 top-6">
                        <span className="inline-block rounded-sm bg-[#ff8c3a] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-black">
                          Featured Project
                        </span>
                      </div>
                    )}
                    <div
                      className={
                        isActive
                          ? "absolute bottom-0 left-0 right-0 p-8"
                          : "absolute bottom-0 left-0 right-0 p-4"
                      }
                    >
                      <p
                        className={`${isActive ? "mb-1 text-[10px]" : "mb-1 text-[9px]"} font-bold uppercase tracking-[0.15em] text-[#ff8c3a]`}
                      >
                        {project.category.toUpperCase()}
                      </p>
                      <h3
                        className={`${isActive ? "mb-2 text-4xl" : "mb-1 text-lg"} font-bold leading-tight text-white`}
                        style={{ fontFamily: "var(--font-rajdhani)" }}
                      >
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span
                          className={
                            isActive
                              ? "text-xs text-[#9a9aaa]"
                              : "text-[10px] text-[#9a9aaa]"
                          }
                        >
                          2024 • {project.category}
                        </span>
                        {isActive ? (
                          <button className="rounded-md border border-[#ff8c3a]/60 bg-black/45 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all hover:bg-[#ff8c3a] hover:text-black">
                            View Project
                          </button>
                        ) : (
                          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8d8d9d]">
                            Demo
                          </span>
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
