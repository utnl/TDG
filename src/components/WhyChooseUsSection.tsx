"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    id: "01",
    title: "Reliable Production Pipeline",
    description:
      "Clear milestones, organized feedback loops, and consistent weekly delivery rhythm.",
  },
  {
    id: "02",
    title: "Mobile-First Art Quality",
    description:
      "Stylized cartoon visuals optimized for readability and performance on real devices.",
  },
  {
    id: "03",
    title: "Deadline-Driven Execution",
    description:
      "Production planning built around your release roadmap to reduce delays and rework.",
  },
  {
    id: "04",
    title: "Long-Term Team Extension",
    description:
      "Flexible outsourcing support for both content bursts and long-running LiveOps cycles.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0d12] py-24 lg:py-28">
      <div className="absolute inset-0 bg-linear-to-b from-[#0d1118] via-[#0a0d12] to-[#090b10]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.07),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(245,158,11,0.08),transparent_38%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/12" />

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-10">
        <motion.div
          className="mb-12 lg:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase text-amber-300/90"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            Why Choose TD Games
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            A Production Partner Built For
            <span className="text-amber-300"> Business Outcomes</span>
          </h2>
          <p className="mt-4 max-w-3xl text-white/62 text-base leading-relaxed">
            We operate like an extension of your internal team: structured,
            accountable, and focused on quality that ships on time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {reasons.map((reason, idx) => (
            <motion.article
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: idx * 0.08, duration: 0.45, ease: "easeOut" }}
              className="group rounded-2xl border border-white/10 bg-[#151a22]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/45"
            >
              <div className="flex items-start gap-4">
                <div
                  className="mt-0.5 inline-flex h-9 min-w-9 items-center justify-center rounded-lg border border-amber-300/35 bg-amber-300/10 text-[11px] font-bold tracking-[0.12em] text-amber-200"
                  style={{ fontFamily: "var(--font-nav-display)" }}
                >
                  {reason.id}
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/63">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
