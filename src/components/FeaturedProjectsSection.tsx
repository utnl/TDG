"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "PX-01",
    title: "Mytheria - Battle Of Gods",
    scope: "Login Screen Art + Animation",
    metric: "Delivered in 3 weeks",
    image: "/video/CutScene_SE/1.png",
  },
  {
    id: "PX-02",
    title: "Summoners Era Heroes",
    scope: "Character Art Package",
    metric: "42 production assets",
    image: "/video/CutScene_SE/2.png",
  },
  {
    id: "PX-03",
    title: "VFX Beast Sequence",
    scope: "Skill VFX + Cut-in",
    metric: "18 combat effects",
    image: "/video/CutScene_SE/3.png",
  },
  {
    id: "PX-04",
    title: "Overdrive Event Visuals",
    scope: "LiveOps Art Support",
    metric: "Monthly content cadence",
    image: "/video/CutScene_SE/4.png",
  },
  {
    id: "PX-05",
    title: "Cartoon Arena Promo",
    scope: "Showreel + Marketing Key Visual",
    metric: "Multi-platform export set",
    image: "/video/CutScene_SE/5.png",
  },
];

export default function FeaturedProjectsSection() {
  const [layoutMode, setLayoutMode] = useState<"cyber" | "horizontal" | "stacked">("cyber");
  const [heroProject, ...sideProjects] = projects;

  const modeButtonClass = (mode: "cyber" | "horizontal" | "stacked") =>
    `px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] border transition-colors duration-200 ${
      layoutMode === mode
        ? "border-cyan-300/55 bg-cyan-300/15 text-cyan-100"
        : "border-white/18 bg-black/25 text-white/72 hover:border-cyan-300/35 hover:text-white"
    }`;

  const renderCyber = () => (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      <motion.article
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="group relative overflow-hidden border border-cyan-200/28 bg-[#0d121d] lg:col-span-7"
        style={{
          clipPath:
            "polygon(0 18px, 18px 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)",
        }}
      >
        <div className="relative h-[390px] md:h-[460px]">
          <Image
            src={heroProject.image}
            alt={heroProject.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#04060b]/92 via-black/22 to-transparent" />
          <div className="absolute top-0 right-0 h-16 w-16 border-l border-b border-cyan-300/35 bg-cyan-200/8" />
          <div className="absolute left-5 top-5 inline-flex items-center gap-2 border border-cyan-300/35 bg-black/35 px-3 py-1 text-[11px] tracking-[0.14em] text-cyan-100">
            {heroProject.id}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
            <h3
              className="text-2xl md:text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              {heroProject.title}
            </h3>
            <p className="mt-2 text-xs uppercase tracking-[0.13em] text-cyan-200/90">
              {heroProject.scope}
            </p>
            <p className="mt-3 text-sm text-white/76">{heroProject.metric}</p>
          </div>
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-linear-to-r from-cyan-300/70 via-cyan-200/30 to-transparent" />
        </div>
      </motion.article>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-5">
        {sideProjects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: idx * 0.06, duration: 0.45, ease: "easeOut" }}
            className="group relative overflow-hidden border border-white/14 bg-[#0f141f]"
            style={{
              clipPath:
                "polygon(0 14px, 14px 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
            }}
          >
            <div className="relative h-[220px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/82 via-black/18 to-transparent" />
              <div className="absolute right-0 top-0 h-12 w-12 border-l border-b border-amber-300/35 bg-amber-200/7" />
              <span
                className="absolute left-3 top-3 inline-flex items-center border border-white/22 bg-black/38 px-2.5 py-0.5 text-[10px] tracking-[0.12em] text-white/80"
                style={{ fontFamily: "var(--font-nav-display)" }}
              >
                {project.id}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {project.title}
                </h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.13em] text-amber-200/90">
                  {project.scope}
                </p>
                <p className="mt-2 text-xs text-white/72">{project.metric}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );

  const renderHorizontal = () => (
    <div className="space-y-4">
      <motion.article
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative overflow-hidden border border-cyan-300/26"
      >
        <div className="relative h-[420px]">
          <Image src={heroProject.image} alt={heroProject.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-7">
            <p className="text-cyan-200 text-xs tracking-[0.16em] uppercase">{heroProject.id}</p>
            <h3 className="mt-2 text-4xl font-bold text-white" style={{ fontFamily: "var(--font-rajdhani)" }}>
              {heroProject.title}
            </h3>
            <p className="mt-2 text-white/78">{heroProject.scope}</p>
          </div>
        </div>
      </motion.article>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {sideProjects.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
            className="group relative overflow-hidden border border-white/12"
          >
            <div className="relative h-36 md:h-44">
              <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-3">
                <p className="text-[10px] text-cyan-200 tracking-[0.12em]">{project.id}</p>
                <p className="text-sm text-white font-bold leading-tight">{project.title}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );

  const renderStacked = () => {
    const categories = ["Character Art", "Animation", "VFX", "LiveOps", "Key Visual"];
    const rollingProjects = [...projects, ...projects];

    return (
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category, idx) => (
            <button
              key={category}
              type="button"
              className={`px-3.5 py-1.5 text-xs uppercase tracking-[0.12em] border transition-colors ${
                idx === 0
                  ? "border-cyan-300/55 bg-cyan-300/14 text-cyan-100"
                  : "border-white/18 bg-black/30 text-white/75 hover:border-cyan-300/35 hover:text-white"
              }`}
              style={{
                fontFamily: "var(--font-nav-display)",
                clipPath:
                  "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative overflow-hidden border border-white/16 bg-[#0b1019]/70 px-3 py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-[#070a12] to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-[#070a12] to-transparent z-20" />

          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          >
            {rollingProjects.map((project, idx) => (
              <article
                key={`${project.id}-${idx}`}
                className="group relative h-60 min-w-[300px] overflow-hidden border border-white/15 bg-[#0f141f]"
                style={{
                  clipPath:
                    "polygon(0 14px, 14px 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/84 via-black/12 to-transparent" />
                <div className="absolute top-0 right-0 h-10 w-10 border-l border-b border-cyan-300/35 bg-cyan-200/8" />
                <span
                  className="absolute left-3 top-3 border border-white/24 bg-black/35 px-2 py-0.5 text-[10px] tracking-[0.12em] text-cyan-100"
                  style={{ fontFamily: "var(--font-nav-display)" }}
                >
                  {project.id}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-3.5">
                  <h3
                    className="text-base font-bold text-white leading-tight"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-amber-200/90">
                    {project.scope}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-linear-to-r from-cyan-300/70 via-cyan-200/26 to-transparent" />
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#070a12] py-24 lg:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#090d17_0%,#090b13_45%,#06070d_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(96,165,250,0.16),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_78%,rgba(245,158,11,0.14),transparent_36%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[72px_72px] opacity-35" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/15" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[4%] top-24 h-9 w-9 rotate-45 border border-cyan-300/30" />
        <div className="absolute right-[6%] top-40 h-11 w-11 border border-amber-300/28" />
        <div className="absolute left-[8%] bottom-28 h-px w-20 bg-cyan-300/35" />
        <div className="absolute right-[9%] bottom-24 h-px w-16 bg-amber-300/35" />
      </div>

      <div className="relative mx-auto" style={{ width: "var(--layout-width, 85%)" }}>
        <motion.div
          className="mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-200/90"
            style={{ fontFamily: "var(--font-nav-display)" }}
          >
            Featured Projects
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            Cyber Showcase
            <span className="text-amber-300"> Selected Delivery Highlights</span>
          </h2>
          <p className="mt-4 max-w-3xl text-white/62 text-base leading-relaxed">
            A curated view of selected project outcomes across character art,
            animation, and VFX production for mobile games.
          </p>
        </motion.div>

        <div className="mb-7 flex flex-wrap items-center gap-2">
          <button type="button" onClick={() => setLayoutMode("cyber")} className={modeButtonClass("cyber")} style={{ fontFamily: "var(--font-nav-display)" }}>
            Option A - Cyber Split
          </button>
          <button type="button" onClick={() => setLayoutMode("horizontal")} className={modeButtonClass("horizontal")} style={{ fontFamily: "var(--font-nav-display)" }}>
            Option B - Horizontal
          </button>
          <button type="button" onClick={() => setLayoutMode("stacked")} className={modeButtonClass("stacked")} style={{ fontFamily: "var(--font-nav-display)" }}>
            Option C - Running Showcase
          </button>
        </div>

        {layoutMode === "cyber" && renderCyber()}
        {layoutMode === "horizontal" && renderHorizontal()}
        {layoutMode === "stacked" && renderStacked()}

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border border-white/12 bg-[#0d121b]/70 px-5 py-4">
          <p className="text-sm text-white/66">
            More game-ready deliveries available on our full portfolio page.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 border border-cyan-300/45 bg-cyan-300/12 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-cyan-100 transition-colors duration-200 hover:bg-cyan-300/22"
            style={{
              fontFamily: "var(--font-nav-display)",
              clipPath:
                "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
            }}
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
