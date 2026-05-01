"use client";

import Image from "next/image";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import Demo4CharacterMarquee from "@/components/demo4/Demo4CharacterMarquee";
import type { Demo4CharacterMarqueeProps } from "@/components/demo4/Demo4CharacterMarquee";

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

function CountUp({
  end,
  durationMs = 900,
  suffix = "",
  className = "",
}: {
  end: number;
  durationMs?: number;
  suffix?: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      setVal(end);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(end * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationMs, end, isInView, reduceMotion]);

  return (
    <span ref={ref} className={className}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

function TypingText({
  text,
  cps = 45,
  className = "",
}: {
  text: string;
  cps?: number; // characters per second
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [shown, setShown] = useState("");

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      setShown(text);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const total = Math.max(1, text.length);
    const duration = (total / Math.max(1, cps)) * 1000;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const count = Math.floor(total * t);
      setShown(text.slice(0, count));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [cps, isInView, reduceMotion, text]);

  return (
    <p ref={ref} className={className}>
      {shown}
      {!reduceMotion && isInView && shown.length < text.length ? (
        <span className="inline-block w-[0.6ch] translate-y-px animate-pulse bg-white/45 align-baseline" />
      ) : null}
    </p>
  );
}

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

type MarqueeFilter = {
  id: string;
  label: string;
  images: Demo4CharacterMarqueeProps["images"];
};

const characterMarqueeFilters: MarqueeFilter[] = [
  {
    id: "characters",
    label: "3D Characters",
    images: [
      { src: "/sinspired/character_1-min-1024x970.jpg", alt: "Character 1" },
      { src: "/sinspired/character_5-min-1024x970.jpg", alt: "Character 2" },
      { src: "/sinspired/character_6-min-1024x970.jpg", alt: "Character 3" },
      { src: "/sinspired/character_8-min-1024x970.jpg", alt: "Character 4" },
      { src: "/sinspired/character_10-min-1024x970.jpg", alt: "Character 5" },
    ],
  },
  {
    id: "props",
    label: "3D Props",
    images: [
      { src: "/sinspired/lab_asset-min-1024x506.jpg", alt: "Prop 1" },
      {
        src: "/sinspired/Volcano_Arena_render-min-1024x567.jpg",
        alt: "Prop 2",
      },
      { src: "/sinspired/Artboard-1-copy-13-min-1024x572.jpg", alt: "Scene 1" },
      {
        src: "/sinspired/space_arena_source_nature_render_final-min-1024x599.jpg",
        alt: "Scene 2",
      },
      {
        src: "/sinspired/lab_asset_dark_final-min-1024x506.jpg",
        alt: "Scene 3",
      },
    ],
  },
  {
    id: "backgrounds",
    label: "Backgrounds",
    images: [
      { src: "/sinspired/Artboard-2-copy-4-1024x850.jpg", alt: "Background 1" },
      { src: "/sinspired/Artboard-2-copy-1024x850.jpg", alt: "Background 2" },
      {
        src: "/sinspired/Artboard-1-copy-11-min-1024x572.jpg",
        alt: "Background 3",
      },
      {
        src: "/sinspired/Artboard-1-copy-13-min-1024x572.jpg",
        alt: "Background 4",
      },
      {
        src: "/sinspired/space_arena_source_nature_render_final-min-1024x599.jpg",
        alt: "Background 5",
      },
    ],
  },
  {
    id: "design",
    label: "Character design",
    images: [
      { src: "/sinspired/Character-Design-min-822x1024.jpg", alt: "Design 1" },
      { src: "/sinspired/2D-Art-min-947x1024.jpg", alt: "Design 2" },
      { src: "/sinspired/promo_amanda.jpg", alt: "Design 3" },
      {
        src: "/sinspired/3a7ab9112768871.602fbfbfa228c-882x1024.jpg",
        alt: "Design 4",
      },
      { src: "/sinspired/character_8-min-1024x970.jpg", alt: "Design 5" },
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
                ? "1px rgba(255, 255, 255, 0.14)"
                : "1px rgba(255, 255, 255, 0.11)",
            color: "transparent",
            textShadow: "0 0 10px rgba(255,255,255,0.035)",
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
  const [activeMarqueeFilter, setActiveMarqueeFilter] = useState<MarqueeFilter>(
    characterMarqueeFilters[0],
  );
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

  // Keep these as literal Tailwind classes so the compiler always generates them.
  // Dynamic templates like `lg:col-start-${n}` can cause missing classes and grid "breaks" on hover.
  const COL_START = [
    "",
    "lg:col-start-1",
    "lg:col-start-2",
    "lg:col-start-3",
    "lg:col-start-4",
  ] as const;
  const ROW_START = [
    "",
    "lg:row-start-1",
    "lg:row-start-2",
    "lg:row-start-3",
  ] as const;
  const COL_SPAN = ["", "lg:col-span-1", "lg:col-span-2"] as const;
  const ROW_SPAN = ["", "lg:row-span-1", "lg:row-span-2"] as const;

  const gridClass = (opts: {
    colStart: 1 | 2 | 3 | 4;
    rowStart: 1 | 2 | 3;
    colSpan: 1 | 2;
    rowSpan: 1 | 2;
  }) =>
    `${COL_START[opts.colStart]} ${ROW_START[opts.rowStart]} ${COL_SPAN[opts.colSpan]} ${ROW_SPAN[opts.rowSpan]}`;

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
    classes[safeActive] = gridClass({
      colStart: bigColStart as 1 | 2 | 3,
      rowStart: bigRowStart as 1 | 2,
      colSpan: 2,
      rowSpan: 2,
    });

    let cellIdx = 0;
    for (let i = 0; i < 9; i++) {
      if (i === safeActive) continue;
      const cell = availableCells[cellIdx++];
      classes[i] = gridClass({
        colStart: cell.col as 1 | 2 | 3 | 4,
        rowStart: cell.row as 1 | 2 | 3,
        colSpan: 1,
        rowSpan: 1,
      });
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

      <motion.section
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="snap-start border-t border-[#252525] bg-[linear-gradient(180deg,#171717_0%,#101010_100%)] pt-6 pb-20 lg:pt-8 lg:pb-24"
      >
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
      </motion.section>

      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
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
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="snap-start border-t border-[#252525] bg-[#0b0b10] py-16 lg:py-20"
      >
        <div
          className="mx-auto"
          style={{ width: "min(var(--layout-width, 85%), 1240px)" }}
        >
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <h3
                className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                CHARACTER <span style={{ color: accentColor }}>SHOWCASE</span>
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
                Hover để chạy chậm lại, và giữ chuột kéo trái/phải để xem thêm.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                Drag
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                Hover slow
              </span>
            </div>
          </div>

          <div className="mb-5 flex flex-wrap items-center gap-2">
            {characterMarqueeFilters.map((f) => {
              const isActive = f.id === activeMarqueeFilter.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveMarqueeFilter(f)}
                  className={`rounded-full px-4 py-2 text-[11px] font-bold tracking-[0.14em] transition-all ${
                    isActive
                      ? "bg-white text-black"
                      : "border border-white/12 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <Demo4CharacterMarquee
            images={activeMarqueeFilter.images}
            baseSpeedMs={5200}
            hoverSlowdownPct={0.1}
          />
        </div>
      </motion.section>

      {/* Benefits — dark Sinspired-style: layered title, 4 cards, stats bar */}
      <motion.section
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="snap-start relative overflow-hidden border-t border-white/10 bg-[#0b0b0b] py-20 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,140,58,0.08),transparent_55%)]" />
        <div className="pointer-events-none absolute -left-24 top-14 h-[380px] w-[380px] rounded-full bg-[#ff8c3a]/12 blur-[90px]" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-[420px] w-[420px] rounded-full bg-[#7b6dff]/8 blur-[110px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255,180,80,0.12) 0, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,120,40,0.1) 0, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_45%)] mix-blend-overlay opacity-50" />

        {/* subtle ember particles */}
        {[
          { left: "6%", top: "22%", s: 6, o: 0.18, d: 14 },
          { left: "18%", top: "62%", s: 10, o: 0.14, d: 18 },
          { left: "52%", top: "18%", s: 8, o: 0.12, d: 16 },
          { left: "78%", top: "44%", s: 12, o: 0.12, d: 20 },
          { left: "90%", top: "72%", s: 7, o: 0.16, d: 15 },
        ].map((p, idx) => (
          <motion.div
            key={`benefit-ember-${idx}`}
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, p.o, 0], y: [0, -16, 0] }}
            transition={{
              duration: p.d,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.9,
            }}
            className="pointer-events-none absolute rounded-full bg-[#ff8c3a] blur-[10px]"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.s}px`,
              height: `${p.s}px`,
            }}
          />
        ))}
        <div
          className="relative z-10 mx-auto"
          style={{ width: "min(var(--layout-width, 85%), 1240px)" }}
        >
          <div className="text-center">
            <div
              className="pointer-events-none mx-auto w-fit select-none text-[52px] font-black uppercase leading-none tracking-tight text-transparent md:text-[84px] lg:text-[120px]"
              style={{
                fontFamily: "var(--font-rajdhani)",
                WebkitTextStroke: "1px rgba(255,255,255,0.14)",
                textShadow: "0 0 10px rgba(255,255,255,0.035)",
              }}
            >
              BENEFITS
            </div>
            <h3
              className="-mt-8 text-2xl font-black uppercase tracking-tight text-white md:-mt-12 md:text-3xl lg:text-4xl"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              WHY CHOOSE{" "}
              <span
                className="relative inline-block"
                style={{ color: accentColor }}
              >
                TD Games
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-1 left-0 h-[3px] w-full rounded-full opacity-90"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,180,0,0) 0%, rgba(255,180,0,1) 18%, rgba(255,140,58,1) 82%, rgba(255,140,58,0) 100%)",
                    boxShadow: "0 0 18px rgba(255,180,0,0.25)",
                  }}
                />
              </span>
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/55">
              We create immersive 2D animation, stunning game art, and
              eye-catching VFX that bring ideas to life and captivate players.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "HIGH QUALITY ART",
                body: "Every asset is crafted with attention to detail, style consistency, and production-ready polish.",
                icon: (
                  <path d="M12 3l2.4 5.5L20 9.3l-4.2 3.6 1.3 5.6L12 15.9 6.9 18.5l1.3-5.6L4 9.3l5.6-.8L12 3z" />
                ),
              },
              {
                title: "REASONABLE PRICES",
                body: "Clear scopes and predictable delivery so teams can plan budgets without surprises.",
                icon: (
                  <path d="M4 10h16v2H4v-2zm0-4h10v2H4V6zm0 8h16v2H4v-2z" />
                ),
              },
              {
                title: "STREAMLINED WORKFLOW",
                body: "Fast feedback loops, organized handoffs, and milestones that keep production moving.",
                icon: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
              },
              {
                title: "PROTECTING YOUR IDEA",
                body: "NDA-friendly process and careful handling of concepts, references, and unreleased work.",
                icon: (
                  <path d="M12 2L4 6v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V6l-8-4zm0 2.2l6 3v4.8c0 4-2.5 7.8-6 9-3.5-1.2-6-5-6-9V7.2l6-3zM10 10h4v6h-2v-4h-2v-2z" />
                ),
              },
            ].map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/12 bg-[#141414] p-6 text-center shadow-[0_22px_70px_rgba(0,0,0,0.52)] transition-colors hover:border-white/20"
              >
                {/* top specular + bottom glow line */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/6 via-transparent to-transparent opacity-70" />
                <div
                  className="pointer-events-none absolute inset-x-8 bottom-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,140,58,0) 0%, rgba(255,140,58,0.9) 35%, rgba(255,180,0,0.9) 65%, rgba(255,180,0,0) 100%)",
                  }}
                />

                <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/12 bg-black/45 text-[#ff8c3a] shadow-[0_0_0_1px_rgba(255,140,58,0.12),0_18px_40px_rgba(0,0,0,0.45)] transition-transform group-hover:scale-[1.06]">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    {item.icon}
                  </svg>
                </div>
                <h4
                  className="relative mt-4 text-[13px] font-black uppercase tracking-[0.12em] text-white"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {item.title}
                </h4>
                <p className="relative mt-3 text-[13px] leading-6 text-white/60">
                  {item.body}
                </p>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-10 rounded-2xl border border-[#ff8c3a]/40 bg-[#111]/80 px-4 py-8 md:px-8"
          >
            <div className="grid gap-8 md:grid-cols-3 md:divide-x md:divide-white/10">
              {[
                {
                  value: "150+",
                  label: "PROJECTS COMPLETED",
                  icon: (
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7v-7zm4-3h2v10h-2V7zm4 3h2v7h-2v-7z" />
                  ),
                },
                {
                  value: "50+",
                  label: "HAPPY CLIENTS",
                  icon: (
                    <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3c-.2 0-.4 0-.6.1C15.2 4.2 13.4 3 11.5 3 9 3 7 5 7 7.5c0 2.3 1.8 4.3 4.1 4.5-.3.5-.6 1-1 1.5H7v2h3.5c-.4.6-.7 1.3-.9 2H7v2h2.1c.4 1.7 1.9 3 3.9 3h6v-2h-6c-.8 0-1.5-.5-1.8-1.2L16 11zm-4.5-6C12.9 5 14 6.1 14 7.5S12.9 10 11.5 10 9 8.9 9 7.5 10.1 5 11.5 5z" />
                  ),
                },
                {
                  value: "3700+",
                  label: "ASSETS DELIVERED",
                  icon: (
                    <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44-.16.09-.16-.09-7.9-4.44A.99.99 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44.16-.09.16.09 7.9 4.44c.32.17.53.5.53.88v9zM12 4.15L5.04 8 12 11.85 18.96 8 12 4.15zM5 14.5l6 3.35v-6.7L5 9.15v5.35zm14 0v-5.35l-6 3.35v6.7l6-3.35z" />
                  ),
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-3 text-center md:px-4"
                >
                  <div className="text-[#ff8c3a]">
                    <svg
                      className="h-8 w-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      {stat.icon}
                    </svg>
                  </div>
                  <div
                    className="text-4xl font-black tracking-tight text-[#ff8c3a] md:text-5xl"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {stat.value === "150+" ? (
                      <CountUp end={150} suffix="+" />
                    ) : stat.value === "50+" ? (
                      <CountUp end={50} suffix="+" />
                    ) : (
                      <CountUp end={3700} suffix="+" />
                    )}
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Reviews + Join us — dark cards, avatars, stars; full-bleed CTA */}
      <motion.section
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.14 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="snap-start border-t border-white/10 bg-[#08080a] py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,140,58,0.08),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(123,109,255,0.10),transparent_45%)]" />
        <svg
          className="pointer-events-none absolute left-[6%] top-[14%] h-24 w-56 opacity-35"
          viewBox="0 0 280 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="tdgScribbleWarm"
              x1="0"
              y1="0"
              x2="280"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ff8c3a" stopOpacity="0.9" />
              <stop offset="1" stopColor="#ffb34f" stopOpacity="0.85" />
            </linearGradient>
          </defs>
          <path
            d="M18 86C50 66 88 56 128 50C170 43 210 40 252 30"
            stroke="url(#tdgScribbleWarm)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M126 50C150 52 178 60 202 74"
            stroke="url(#tdgScribbleWarm)"
            strokeWidth="2.2"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>

        {/* subtle ember particles */}
        {[
          { left: "10%", top: "74%", s: 7, o: 0.14, d: 18 },
          { left: "42%", top: "22%", s: 9, o: 0.12, d: 16 },
          { left: "66%", top: "60%", s: 11, o: 0.1, d: 20 },
          { left: "86%", top: "30%", s: 6, o: 0.14, d: 15 },
        ].map((p, idx) => (
          <motion.div
            key={`review-ember-${idx}`}
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, p.o, 0], y: [0, -14, 0] }}
            transition={{
              duration: p.d,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6 + idx * 0.8,
            }}
            className="pointer-events-none absolute rounded-full bg-[#ff8c3a] blur-[10px]"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.s}px`,
              height: `${p.s}px`,
            }}
          />
        ))}
        <div
          className="mx-auto"
          style={{ width: "min(var(--layout-width, 85%), 1240px)" }}
        >
          <div className="text-center">
            <div
              className="pointer-events-none mx-auto w-fit select-none text-[52px] font-black uppercase leading-none tracking-tight text-transparent md:text-[84px] lg:text-[120px]"
              style={{
                fontFamily: "var(--font-rajdhani)",
                WebkitTextStroke: "1px rgba(255,255,255,0.13)",
                textShadow: "0 0 10px rgba(255,255,255,0.03)",
              }}
            >
              REVIEWS
            </div>
            <h3
              className="-mt-8 text-2xl font-black uppercase tracking-tight text-white md:-mt-12 md:text-3xl lg:text-4xl"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              WHAT ARE PEOPLE <span style={{ color: accentColor }}>SAYING</span>
            </h3>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-stretch">
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="flex flex-col rounded-2xl border border-white/14 bg-[#17171a] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.55)] lg:row-span-2 lg:min-h-[420px]"
            >
              <span
                className="text-4xl font-serif leading-none text-[#ff8c3a]"
                aria-hidden
              >
                &ldquo;
              </span>
              <TypingText
                text="Overall we are EXTREMELY happy! This is one thing we'll love to improve upon in more frequent communication. Twice a day can be doable in order to keep things moving."
                cps={46}
                className="mt-2 flex-1 text-[14px] leading-7 text-white/80"
              />
              <div className="mt-6 flex items-center gap-3 border-t border-white/12 pt-5">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-[#ff8c3a]/40">
                  <Image
                    src="/sinspired/character_1-min-1024x970.jpg"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-bold text-white">
                    Jens Weinberg
                  </div>
                  <div className="text-xs text-white/55">Animation lead</div>
                </div>
                <div className="flex shrink-0 gap-0.5 text-[#ff8c3a]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-sm" aria-hidden>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-2">
              {[
                {
                  quote:
                    "I recently had a 3D character created, and the experience was fantastic. The team nailed my vision and delivered on time.",
                  name: "Tom Brunner",
                  role: "Indie dev",
                  avatar: "/sinspired/character_5-min-1024x970.jpg",
                  stars: 5,
                },
                {
                  quote:
                    "Awesome job, guys! Thanks for cooperation, delivery in time, and of course quality of the animation.",
                  name: "Adel Wazir",
                  role: "Producer",
                  avatar: "/sinspired/character_6-min-1024x970.jpg",
                  stars: 5,
                },
                {
                  quote:
                    "Worked with this team on a couple of titles — quality is smooth and consistent. Would recommend.",
                  name: "Tom Johnson",
                  role: "Art director",
                  avatar: "/sinspired/character_8-min-1024x970.jpg",
                  stars: 4,
                },
                {
                  quote:
                    "Very short deadline for characters after our previous vendor slipped — you helped us ship on time.",
                  name: "Peter Wilson",
                  role: "Studio lead",
                  avatar: "/sinspired/character_10-min-1024x970.jpg",
                  stars: 5,
                },
              ].map((r, idx) => (
                <motion.article
                  key={r.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.04 * idx,
                    ease: "easeOut",
                  }}
                  className="flex flex-col rounded-2xl border border-white/14 bg-[#17171a] p-5 shadow-[0_18px_70px_rgba(0,0,0,0.5)]"
                >
                  <span
                    className="text-3xl font-serif leading-none text-[#ff8c3a]"
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <TypingText
                    text={r.quote}
                    cps={52}
                    className="mt-1 flex-1 text-[13.5px] leading-6 text-white/80"
                  />
                  <div className="mt-4 flex items-center gap-3 border-t border-white/12 pt-4">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-[#ff8c3a]/35">
                      <Image
                        src={r.avatar}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-white">
                        {r.name}
                      </div>
                      <div className="text-[11px] text-white/55">{r.role}</div>
                    </div>
                    <div className="flex shrink-0 gap-0.5 text-[#ff8c3a]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className="text-xs" aria-hidden>
                          {i < r.stars ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative mx-auto mt-16 md:mt-20"
          style={{ width: "min(var(--layout-width, 85%), 1240px)" }}
        >
          <div className="grid min-h-[380px] gap-4 md:min-h-[460px] md:grid-cols-[1.25fr_1fr] md:items-center md:gap-2">
            <div className="relative mx-auto flex w-full items-center justify-center md:justify-end">
              <div className="relative h-[420px] w-full max-w-none md:h-[520px]">
                <Image
                  src="/video/CutScene_SE/1.gif"
                  alt="Character"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 92vw, 720px"
                  unoptimized
                  priority={false}
                />
              </div>
            </div>

            <div className="relative flex flex-col justify-center pb-6 md:pb-0 md:pl-2">
              <div
                className="pointer-events-none mb-2 text-[48px] font-black uppercase leading-none tracking-tight text-transparent md:text-[72px]"
                style={{
                  fontFamily: "var(--font-rajdhani)",
                  WebkitTextStroke: "1px rgba(255,255,255,0.15)",
                  textShadow: "0 0 10px rgba(255,255,255,0.035)",
                }}
              >
                JOIN US
              </div>
              <h4
                className="-mt-4 max-w-xl text-2xl font-black uppercase tracking-tight text-white md:-mt-6 md:text-3xl lg:text-4xl"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                LET&apos;S CREATE{" "}
                <span style={{ color: accentColor }}>AMAZING GAMES</span>{" "}
                TOGETHER
              </h4>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
                We&apos;re passionate, talented individuals. Join our team and
                help shape the future of game art.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[11px] font-black uppercase tracking-[0.18em] text-black transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: accentColor }}
                >
                  View vacancies
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-[11px] font-black uppercase tracking-[0.18em] text-white/90 transition-colors hover:bg-white/10"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Trust / Clients + Blog + Small CTA (dark, with logo marquee) */}
      <motion.section
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="snap-start relative overflow-hidden border-t border-white/10 bg-[#0b0b0f] py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(123,109,255,0.07),transparent_45%)]" />
        <div
          className="mx-auto"
          style={{ width: "min(var(--layout-width, 85%), 1240px)" }}
        >
          <div className="relative flex items-end justify-center py-2 md:py-4">
            <div className="relative inline-flex items-end justify-center">
              <div
                className="pointer-events-none absolute right-full bottom-0 mr-4 select-none text-[66px] font-black uppercase leading-none tracking-tight text-transparent md:text-[104px] lg:text-[140px]"
                style={{
                  fontFamily: "var(--font-rajdhani)",
                  WebkitTextStroke: "1px rgba(255,255,255,0.12)",
                  textShadow: "0 0 10px rgba(255,255,255,0.025)",
                }}
              >
                TRUST
              </div>

              <h3
                className="relative z-10 text-2xl font-black uppercase tracking-tight text-white md:text-3xl lg:text-4xl"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                OUR <span style={{ color: accentColor }}>CLIENTS</span>
              </h3>
            </div>
          </div>

          {/* full-bleed client marquee (no border/rounded container) */}
          <div className="relative mt-12">
            <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-10 md:py-12">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#0b0b0f] to-transparent md:w-48" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#0b0b0f] to-transparent md:w-48" />
              <div className="pointer-events-none absolute inset-0 bg-white/2" />

              <motion.div
                className="relative flex w-max items-center gap-20 px-10 md:gap-28 md:px-20"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
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
                ].map((src, idx) => (
                  <div
                    key={`${src}-${idx}`}
                    className="relative h-14 w-[220px] shrink-0 md:h-16 md:w-[260px]"
                  >
                    <Image
                      src={src}
                      alt="Client logo"
                      fill
                    className="object-contain opacity-80 brightness-[1.15] contrast-[1.05] transition-opacity hover:opacity-100"
                      sizes="260px"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h4
              className="text-xl font-black uppercase tracking-tight text-white md:text-2xl"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              STAY INFORMED WITH{" "}
              <span style={{ color: accentColor }}>OUR BLOG</span>
            </h4>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "How to create a game character",
                date: "01.22.2024",
                image: "/images/blog-1.jpg",
              },
              {
                title: "High poly and low poly modeling",
                date: "01.22.2024",
                image: "/images/blog-2.jpg",
              },
              {
                title: "Animation outsourcing: a guide for success",
                date: "01.22.2024",
                image: "/images/blog-1.jpg",
              },
            ].map((post, idx) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.05,
                  ease: "easeOut",
                }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#141418] shadow-[0_18px_70px_rgba(0,0,0,0.55)]"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/20 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
                    {post.date}
                  </div>
                  <div
                    className="mt-2 line-clamp-2 text-base font-black uppercase tracking-tight text-white"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {post.title}
                  </div>
                  <div className="mt-4">
                    <button
                      className="inline-flex items-center justify-center rounded-full px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-black transition-transform hover:scale-[1.02]"
                      style={{ backgroundColor: accentColor }}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-[1fr_180px] md:items-center md:p-10">
            <div>
              <div
                className="text-xs font-black uppercase tracking-[0.18em] text-white/55"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                Ready to bring your vision to life?
              </div>
              <div
                className="mt-2 text-2xl font-black uppercase tracking-tight text-white md:text-3xl"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                Let&apos;s talk
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-black transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: accentColor }}
                >
                  Get a quote
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-white/18 bg-transparent px-6 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="relative mx-auto h-[160px] w-[160px]">
              <Image
                src="/logoCompany/5-min-1-1024x970.jpg"
                alt="Mascot"
                fill
                className="rounded-2xl object-cover"
                sizes="160px"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer (demo4) */}
      <motion.footer
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-t border-white/10 bg-[#070709] py-16"
      >
        <div
          className="mx-auto"
          style={{ width: "min(var(--layout-width, 85%), 1240px)" }}
        >
          <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
            <div>
              <div className="relative h-10 w-[170px]">
                <Image
                  src="/video/logo/logo_td2.png"
                  alt="TD Games"
                  fill
                  className="object-contain"
                  sizes="170px"
                />
              </div>
              <div
                className="mt-4 h-[2px] w-20 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,180,0,0) 0%, rgba(255,180,0,1) 22%, rgba(255,140,58,1) 78%, rgba(255,140,58,0) 100%)",
                }}
              />
              <p className="mt-5 text-sm leading-7 text-white/58">
                Founded in 2019, TD Games emerged from a shared passion for
                creating visually stunning game experiences. What started as a
                small team of artists has grown into a full-service game art
                studio trusted by developers worldwide.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/58">
                We believe that great art is the foundation of memorable games.
                Our mission is to help developers bring their creative visions
                to life with professional-grade assets that enhance gameplay and
                captivate players.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {[
                  {
                    id: "in",
                    label: "LinkedIn",
                    icon: (
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5C0 2.12 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.1c.53-1 1.84-2.1 3.79-2.1 4.05 0 4.8 2.67 4.8 6.14V23h-4v-7.32c0-1.75-.03-4-2.44-4-2.44 0-2.81 1.9-2.81 3.87V23h-4V8.5z" />
                    ),
                  },
                  {
                    id: "fb",
                    label: "Facebook",
                    icon: (
                      <path d="M13.5 24v-8.7h2.9l.4-3.4h-3.3V9.7c0-1 .3-1.7 1.8-1.7h1.6V5c-.3 0-1.5-.1-2.9-.1-2.9 0-4.9 1.8-4.9 5v2.9H6.4v3.4h2.7V24h4.4z" />
                    ),
                  },
                  {
                    id: "ig",
                    label: "Instagram",
                    icon: (
                      <>
                        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9z" />
                        <path d="M12 7.3A4.7 4.7 0 1 1 7.3 12 4.7 4.7 0 0 1 12 7.3zm0 2A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3z" />
                        <path d="M17.6 6.2a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1z" />
                      </>
                    ),
                  },
                  {
                    id: "be",
                    label: "Behance",
                    icon: (
                      <>
                        <path d="M10.8 12.1c1.1-.6 1.8-1.7 1.8-3 0-2.4-1.8-3.6-4.3-3.6H2V23h6.6c3 0 4.9-1.3 4.9-4.2 0-1.9-1.1-3.4-2.7-3.9zm-6.5-4h3.8c1.3 0 2 .5 2 1.6 0 1.2-.8 1.7-2.1 1.7H4.3V8.1zm4.2 12.3H4.3v-5.2h4.3c1.6 0 2.4.8 2.4 2.6 0 1.8-.9 2.6-2.5 2.6z" />
                        <path d="M14.6 10.1h6.2V8.3h-6.2v1.8z" />
                        <path d="M18.4 10.9c-3.2 0-5.3 2.3-5.3 6.1 0 3.9 2 6.1 5.4 6.1 2.6 0 4.4-1.4 4.9-3.7h-2.3c-.3 1-1.1 1.6-2.5 1.6-1.7 0-2.7-1.1-2.8-3.1h7.6c.2-3.9-1.7-7-5-7zm2.6 5h-5.2c.2-1.9 1.2-3 2.6-3 1.6 0 2.5 1 2.6 3z" />
                      </>
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.id}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition-colors hover:border-[#ff8c3a]/45 hover:text-white"
                    aria-label={s.label}
                    title={s.label}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                      aria-hidden
                    >
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <div
                  className="text-sm font-black uppercase tracking-[0.14em] text-white"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  Contacts
                </div>
                <div className="mt-4 space-y-3 text-sm text-white/55">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#ff8c3a]" aria-hidden>
                      •
                    </span>
                    <span>505 Minh Khai, Hà Nội</span>
                  </div>
                  <a
                    href="mailto:contact@tdgames.vn"
                    className="flex items-start gap-2 transition-colors hover:text-white"
                  >
                    <span className="mt-0.5 text-[#ff8c3a]" aria-hidden>
                      •
                    </span>
                    <span>contact@tdgames.vn</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-start gap-2 transition-colors hover:text-white"
                  >
                    <span className="mt-0.5 text-[#ff8c3a]" aria-hidden>
                      •
                    </span>
                    <span>Contact us</span>
                  </a>
                </div>
              </div>

              <div>
                <div
                  className="text-sm font-black uppercase tracking-[0.14em] text-white"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  Services
                </div>
                <div className="mt-4 space-y-3 text-sm text-white/55">
                  {["2D Art", "2D Animation", "2D VFX", "Game UI"].map((t) => (
                    <a
                      key={t}
                      href="#"
                      className="block transition-colors hover:text-white"
                    >
                      {t}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <div
                  className="text-sm font-black uppercase tracking-[0.14em] text-white"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  Company
                </div>
                <div className="mt-4 space-y-3 text-sm text-white/55">
                  {["Company", "Our projects", "Careers", "Blog"].map((t) => (
                    <a
                      key={t}
                      href="#"
                      className="block transition-colors hover:text-white"
                    >
                      {t}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <div
                  className="text-sm font-black uppercase tracking-[0.14em] text-white"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  Info
                </div>
                <div className="mt-4 space-y-3 text-sm text-white/55">
                  {["Privacy policy", "Terms of use", "FAQ", "Glossary"].map(
                    (t) => (
                      <a
                        key={t}
                        href="#"
                        className="block transition-colors hover:text-white"
                      >
                        {t}
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
            © {new Date().getFullYear()} TD Games. All rights reserved.
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
