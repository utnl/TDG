"use client";

import { motion } from "framer-motion";

const roadmap = [
  {
    id: "PHASE 01",
    title: "Discovery & Brief",
    duration: "2-3 days",
    output: "Scope map, art direction notes, priority list",
    detail:
      "We align on goals, references, production scope, and delivery priorities before any asset work starts.",
  },
  {
    id: "PHASE 02",
    title: "Styleframe & Alignment",
    duration: "4-7 days",
    output: "Styleframe pack, feedback loop, final visual lock",
    detail:
      "Key styleframes are produced first so stakeholders can validate quality and direction early.",
  },
  {
    id: "PHASE 03",
    title: "Production Sprint",
    duration: "1-4 weeks",
    output: "Asset batches, weekly updates, QA checkpoints",
    detail:
      "Assets are delivered in sprint-based batches with clear tracking, revisions, and quality control.",
  },
  {
    id: "PHASE 04",
    title: "Delivery & LiveOps",
    duration: "Ongoing",
    output: "Final package, source files, support handoff",
    detail:
      "We deliver clean production files and continue as your long-term partner for LiveOps content cadence.",
  },
];

export default function ProcessRoadmapSection() {
  return (
    <section className="relative overflow-hidden bg-[#060910] py-24 lg:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(140deg,#090d17_0%,#070a12_48%,#05070c_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(56,189,248,0.13),transparent_34%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_82%,rgba(245,158,11,0.12),transparent_36%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/14" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-24 h-9 w-9 rotate-45 border border-cyan-300/30" />
        <div className="absolute right-[10%] top-32 h-10 w-10 border border-amber-300/30" />
        <div className="absolute left-[12%] bottom-24 h-px w-20 bg-cyan-300/35" />
        <div className="absolute right-[12%] bottom-20 h-px w-14 bg-amber-300/35" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-10">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p
            className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200/90"
            style={{ fontFamily: "var(--font-nav-display)" }}
          >
            Production Roadmap
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            Cyber Process
            <span className="text-amber-300"> From Brief To Delivery</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/62">
            A transparent, milestone-driven workflow designed for business teams
            that need predictable quality and timeline control.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-linear-to-b from-cyan-300/60 via-cyan-300/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-6 lg:space-y-8">
            {roadmap.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ delay: idx * 0.06, duration: 0.42, ease: "easeOut" }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-4 ${isEven ? "" : "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"}`}
                >
                  <div className="hidden md:block" />
                  <article
                    className="relative overflow-hidden border border-white/16 bg-[#0f1420] p-5 md:p-6"
                    style={{
                      clipPath:
                        "polygon(0 14px, 14px 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
                    }}
                  >
                    <div className="absolute top-0 right-0 h-11 w-11 border-l border-b border-cyan-300/35 bg-cyan-200/8" />
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span
                        className="inline-flex items-center border border-cyan-300/45 bg-cyan-300/12 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-cyan-100"
                        style={{ fontFamily: "var(--font-nav-display)" }}
                      >
                        {step.id}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.12em] text-amber-200/90">
                        {step.duration}
                      </span>
                    </div>

                    <h3
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "var(--font-rajdhani)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/72">{step.detail}</p>
                    <div className="mt-4 border-t border-white/10 pt-3 text-[11px] uppercase tracking-[0.12em] text-white/62">
                      Output: {step.output}
                    </div>
                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-linear-to-r from-cyan-300/70 via-cyan-200/28 to-transparent" />
                  </article>

                  <div className="pointer-events-none absolute left-5 top-8 h-3 w-3 rounded-full border border-cyan-300/80 bg-[#07101a] shadow-[0_0_12px_rgba(34,211,238,0.6)] md:left-1/2 md:-translate-x-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
