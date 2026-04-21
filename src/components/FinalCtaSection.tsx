"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#05070d] py-24 lg:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(130deg,#080c15_0%,#060911_50%,#04060b_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(56,189,248,0.16),transparent_36%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_82%,rgba(245,158,11,0.14),transparent_36%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/12" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-20 h-10 w-10 rotate-45 border border-cyan-300/28" />
        <div className="absolute right-[10%] top-28 h-12 w-12 border border-amber-300/26" />
        <div className="absolute left-[12%] bottom-20 h-px w-24 bg-cyan-300/34" />
        <div className="absolute right-[12%] bottom-24 h-px w-16 bg-amber-300/34" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden border border-white/14 bg-[#0b1019]/70 p-7 md:p-10 lg:p-12"
          style={{
            clipPath:
              "polygon(0 20px, 20px 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)",
          }}
        >
          <div className="absolute top-0 right-0 h-16 w-16 border-l border-b border-cyan-300/35 bg-cyan-200/8" />
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-linear-to-r from-cyan-300/75 via-cyan-200/28 to-transparent" />

          <p
            className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200/90"
            style={{ fontFamily: "var(--font-nav-display)" }}
          >
            Final Step
          </p>
          <h2
            className="mt-3 max-w-4xl text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            Need A Reliable
            <span className="text-amber-300"> Art & Animation Partner</span>
            {" "}For Your Next Mobile Release?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/66">
            Share your scope, timeline, and art direction. We will send a clear
            production proposal with milestones and delivery plan.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-cyan-300/50 bg-cyan-300/14 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-cyan-100 transition-colors duration-200 hover:bg-cyan-300/24"
              style={{
                fontFamily: "var(--font-nav-display)",
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              }}
            >
              Book A Discovery Call
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border border-amber-300/48 bg-amber-300/14 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-amber-100 transition-colors duration-200 hover:bg-amber-300/24"
              style={{
                fontFamily: "var(--font-nav-display)",
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              }}
            >
              View Portfolio
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 md:grid-cols-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-white/45">Response time</p>
              <p className="mt-1 text-sm text-white/82">Within 24 hours</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-white/45">Work model</p>
              <p className="mt-1 text-sm text-white/82">Project-based / Dedicated team</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-white/45">Timezone overlap</p>
              <p className="mt-1 text-sm text-white/82">Flexible for global teams</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
