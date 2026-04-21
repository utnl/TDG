"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "2D Character Art",
    description:
      "Cartoon-ready character sets designed for readability, variation, and production speed.",
    image: "/video/CutScene_SE/1.png",
    stat: "120+ assets",
  },
  {
    id: "02",
    title: "2D Animation",
    description:
      "Spine and frame-by-frame animation with clean loops and game-ready export standards.",
    image: "/video/CutScene_SE/2.png",
    stat: "300+ clips",
  },
  {
    id: "03",
    title: "VFX",
    description:
      "Skill and UI VFX crafted for impact while staying optimized on real mobile devices.",
    image: "/video/CutScene_SE/3.png",
    stat: "50+ VFX sets",
  },
  {
    id: "04",
    title: "Environment Art",
    description:
      "Stylized backgrounds and scene packages that keep visual consistency across content updates.",
    image: "/video/CutScene_SE/4.png",
    stat: "80+ scenes",
  },
  {
    id: "05",
    title: "LiveOps Art Support",
    description:
      "Fast-turnaround art production for events, skins, and seasonal content pipelines.",
    image: "/video/CutScene_SE/5.png",
    stat: "Monthly support",
  },
];

export default function OurServicesSection() {
  const [featured, ...rest] = services;

  return (
    <section className="relative overflow-hidden bg-[#0c0f14] py-24 lg:py-28">
      <div className="absolute inset-0 bg-linear-to-b from-[#121622] via-[#0e1219] to-[#0a0d12]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(255,255,255,0.05),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px] opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.35)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/14" />
      <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-white/7 to-transparent" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-24 left-[9%] h-10 w-10 rounded-full border border-white/10" />
        <div className="absolute top-40 right-[13%] h-14 w-14 border border-amber-300/18 rotate-12" />
        <div className="absolute bottom-20 left-[14%] h-8 w-8 rotate-45 border border-white/12" />
        <div
          className="absolute bottom-24 right-[9%] h-14 w-14 border border-white/10"
          style={{ clipPath: "polygon(50% 0, 0 100%, 100% 100%)" }}
        />
        <div className="absolute top-[42%] left-[5%] h-px w-14 bg-amber-300/30" />
        <div className="absolute top-[62%] right-[6%] h-px w-18 bg-white/20" />
        <div className="absolute top-[30%] left-[2.5%] h-6 w-6 rounded-full border border-amber-300/22" />
        <div className="absolute top-[53%] left-[10%] h-12 w-12 border border-white/10 rotate-45" />
        <div
          className="absolute bottom-[18%] left-[4%] h-10 w-10 border border-white/12"
          style={{ clipPath: "polygon(50% 0, 0 100%, 100% 100%)" }}
        />
        <div className="absolute bottom-[10%] left-[8%] h-px w-20 bg-white/15" />
        <div className="absolute top-[20%] right-[5%] h-7 w-7 rounded-full border border-white/11" />
        <div className="absolute top-[48%] right-[2.5%] h-11 w-11 border border-amber-300/16 rotate-45" />
        <div
          className="absolute bottom-[16%] right-[4.5%] h-9 w-9 border border-white/12"
          style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
        />
        <div className="absolute bottom-[9%] right-[10%] h-px w-16 bg-amber-300/20" />
        <div className="absolute top-[74%] left-[18%] h-5 w-5 rounded-full border border-white/10" />
        <div className="absolute top-[26%] right-[18%] h-5 w-5 rounded-full border border-amber-300/22" />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 top-6 text-center text-[48px] md:text-[92px] lg:text-[128px] font-black tracking-[0.09em] text-transparent opacity-70"
        style={{
          fontFamily: "var(--font-nav-display)",
          WebkitTextStroke: "1px rgba(255,255,255,0.08)",
        }}
      >
        OUR SERVICES
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-10">
        <motion.div
          className="mb-12 lg:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <motion.p
            className="text-xs font-bold tracking-[0.2em] uppercase text-amber-300/90"
            style={{ fontFamily: "var(--font-rajdhani)" }}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.05, duration: 0.35 }}
          >
            What We Deliver
          </motion.p>
          <motion.h2
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-rajdhani)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.45 }}
          >
            Outsource Services Built For
            <span className="text-amber-300"> Mobile Game Teams</span>
          </motion.h2>
          <motion.p
            className="mt-4 max-w-3xl text-white/62 text-base leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.16, duration: 0.45 }}
          >
            TD Games provides end-to-end outsource production for mobile titles,
            focused on cartoon 2D quality, predictable delivery, and clean
            handoff for live game teams.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.article
            className="group relative overflow-hidden rounded-2xl border border-white/12 bg-[#171b23] lg:col-span-7"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative h-[360px] md:h-[430px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0d1016] via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/12 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-amber-100">
                  Core Service
                </div>
                <h3
                  className="text-3xl md:text-4xl font-bold text-white"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-xl text-white/72 leading-relaxed">
                  {featured.description}
                </p>
                <div className="mt-5 flex items-center gap-3 text-sm text-white/75">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                  {featured.stat}
                </div>
              </div>
            </div>
          </motion.article>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-5">
            {rest.map((service, idx) => (
              <motion.article
                key={service.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#171b23] transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/45"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.08 * (idx + 1), duration: 0.45, ease: "easeOut" }}
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/45 to-transparent" />
                  <span
                    className="absolute left-3 top-3 rounded-md border border-white/20 bg-black/35 px-2 py-0.5 text-[10px] tracking-[0.12em] text-white/75"
                    style={{ fontFamily: "var(--font-nav-display)" }}
                  >
                    {service.id}
                  </span>
                </div>

                <div className="p-4">
                  <h4
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {service.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-white/62">
                    {service.description}
                  </p>

                  <div className="mt-4 border-t border-white/10 pt-3 text-[11px] uppercase tracking-[0.14em] text-white/55">
                    {service.stat}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#171b23]/70 px-6 py-5"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.12, duration: 0.45, ease: "easeOut" }}
        >
          <p className="text-sm text-white/65">
            Need a dedicated art pipeline instead of one-off assets?
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-amber-300/45 bg-amber-300/15 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-amber-100 transition-colors duration-200 hover:bg-amber-300/24"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            See Full Capability Deck
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
