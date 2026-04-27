"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "2D Character Art",
    note: "Expressive silhouettes, costume variations, live-ops skins",
    image: "/sinspired/character_1-min-1024x970.jpg",
    accent: "Soft fantasy",
  },
  {
    title: "Environment Paintovers",
    note: "Readable scenes for mobile, social ads, event key visuals",
    image: "/sinspired/Volcano_Arena_render-min-1024x567.jpg",
    accent: "Atmospheric worldbuilding",
  },
  {
    title: "Animation Support",
    note: "2D motion passes, promo loops, polish for showcase moments",
    image: "/images/service-animation.jpg",
    accent: "Lightweight motion",
  },
];

const reasons = [
  "Stylized direction that feels warmer and more approachable than hard-core AAA art.",
  "Production pacing built for content drops, not just one big milestone at the end.",
  "Small review loops so clients can steer look and tone before the asset batch grows.",
  "Art packages prepared for game, pitch deck, and marketing reuse at the same time.",
];

const projects = [
  {
    title: "Painterly mobile fantasy",
    category: "2D environments",
    image: "/sinspired/Artboard-1-copy-13-min-1024x572.jpg",
    className: "md:col-span-2",
  },
  {
    title: "Character lineup with softer rendering",
    category: "hero skins",
    image: "/sinspired/character_8-min-1024x970.jpg",
    className: "",
  },
  {
    title: "Promo art for event launches",
    category: "campaign visuals",
    image: "/sinspired/promo_amanda.jpg",
    className: "",
  },
  {
    title: "Casual action scene styling",
    category: "key art",
    image: "/sinspired/space_arena_source_nature_render_final-min-1024x599.jpg",
    className: "",
  },
  {
    title: "Color-first fantasy mood",
    category: "painted concept",
    image: "/sinspired/lab_asset-min-1024x506.jpg",
    className: "",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Reference pass",
    body: "We agree on softness, saturation, shape language, and how far the art should stay from cinematic AAA.",
  },
  {
    step: "02",
    title: "Visual lock",
    body: "A few target frames are approved first so later batches stay consistent and lighter in tone.",
  },
  {
    step: "03",
    title: "Batch production",
    body: "Characters, props, and scenes move in compact weekly drops with revision notes already mapped.",
  },
  {
    step: "04",
    title: "Delivery set",
    body: "Final assets come grouped for game use, socials, and presentation decks so handoff stays clean.",
  },
];

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mb-10 md:mb-12"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a46f56]">
        {eyebrow}
      </p>
      <h2
        className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-[#201714] md:text-4xl lg:text-5xl"
        style={{ fontFamily: "var(--font-rajdhani)" }}
      >
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-[#5e534c]">
        {copy}
      </p>
    </motion.div>
  );
}

export default function Demo2EditorialSections() {
  return (
    <div className="bg-[#f4ede4] text-[#201714]">
      <section className="snap-start border-t border-[#d8c8b8] bg-[linear-gradient(180deg,#f4ede4_0%,#efe5d9_100%)] py-20 lg:py-24">
        <div className="mx-auto" style={{ width: "min(var(--layout-width, 85%), 1240px)" }}>
          <SectionIntro
            eyebrow="Our Services"
            title="A softer art direction for teams that want style, warmth, and clarity."
            copy="This demo shifts away from the heavy cinematic look. The goal here is more illustrative, more game-friendly, and easier to trust at a glance for casual and mid-core audiences."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="overflow-hidden rounded-[24px] border border-[#d9c9b7] bg-[#fbf7f2] shadow-[0_18px_60px_rgba(84,52,31,0.08)]"
              >
                <div className="relative aspect-[4/4.4] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d1f18]/18 via-transparent to-transparent" />
                </div>
                <div className="space-y-4 p-6">
                  <span className="inline-flex rounded-full bg-[#f1e2d2] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[#8d5e48]">
                    {service.accent}
                  </span>
                  <div>
                    <h3
                      className="text-[26px] font-semibold leading-tight text-[#221814]"
                      style={{ fontFamily: "var(--font-rajdhani)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#645953]">{service.note}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="snap-start border-t border-[#ddcec0] bg-[#f7f1e9] py-20 lg:py-24">
        <div
          className="mx-auto grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]"
          style={{ width: "min(var(--layout-width, 85%), 1240px)" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
          >
            <SectionIntro
              eyebrow="Why This Version"
              title="The page now reads closer to boutique 2D craft than high-budget combat spectacle."
              copy="Instead of selling intensity, this section stack sells confidence, taste, and process. That usually lands better when the client wants approachable stylized art."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <div
                  key={reason}
                  className="rounded-[20px] border border-[#decdbd] bg-white/65 p-5"
                >
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#a77960]">
                    0{index + 1}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#544b46]">{reason}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="relative min-h-[240px] overflow-hidden rounded-[24px] border border-[#decdbd] bg-[#ead8c7] sm:col-span-2">
              <Image
                src="/sinspired/Character-Design-min-822x1024.jpg"
                alt="Stylized character art"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-[24px] border border-[#decdbd] bg-[#f3e7da] p-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#9a6e58]">
                Tone Shift
              </p>
              <p className="mt-3 text-lg leading-8 text-[#2d221d]">
                Softer contrast, warmer surfaces, and less metallic framing.
              </p>
            </div>
            <div className="rounded-[24px] border border-[#decdbd] bg-[#ece2d3] p-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#9a6e58]">
                Client Signal
              </p>
              <p className="mt-3 text-lg leading-8 text-[#2d221d]">
                More stylized studio, less boss-fight trailer energy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="snap-start border-t border-[#ddcec0] bg-[#efe5d9] py-20 lg:py-24">
        <div className="mx-auto" style={{ width: "min(var(--layout-width, 85%), 1240px)" }}>
          <SectionIntro
            eyebrow="Selected Work"
            title="Project slices presented like an art studio showcase, not a game launch trailer."
            copy="Large imagery still matters, but the framing is quieter. It lets color, brushwork, and appeal carry the section instead of dramatic overlays."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                className={`group overflow-hidden rounded-[26px] border border-[#d7c6b5] bg-[#fbf7f2] ${project.className}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="flex items-end justify-between gap-4 p-5">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-[#9c7059]">
                      {project.category}
                    </p>
                    <h3
                      className="mt-2 text-2xl font-semibold leading-tight text-[#1f1714]"
                      style={{ fontFamily: "var(--font-rajdhani)" }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-[#d8c4b3] px-3 py-1 text-xs text-[#6d5d54]">
                    Demo
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="snap-start border-t border-[#ddcec0] bg-[#f8f1e8] py-20 lg:py-24">
        <div className="mx-auto" style={{ width: "min(var(--layout-width, 85%), 1240px)" }}>
          <SectionIntro
            eyebrow="Process"
            title="A lighter visual language also needs a lighter way of explaining the workflow."
            copy="This replaces the old hard-tech roadmap with a simpler studio process. It feels closer to illustration production and easier for clients to read quickly."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                className="rounded-[24px] border border-[#dbcbbb] bg-[#fffaf4] p-6"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#a77960]">
                  Step {step.step}
                </p>
                <h3
                  className="mt-3 text-2xl font-semibold text-[#251b16]"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#5f564f]">{step.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="snap-start border-t border-[#ddcec0] bg-[linear-gradient(180deg,#f1e5d6_0%,#ead8c8_100%)] py-20 lg:py-24">
        <div
          className="mx-auto overflow-hidden rounded-[32px] border border-[#d3bfac] bg-[#f8f1e9]"
          style={{ width: "min(var(--layout-width, 85%), 1240px)" }}
        >
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9b6a52]">
                Final CTA
              </p>
              <h2
                className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[#231914] md:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                Better fit for clients who want polished 2D game art without the overly aggressive AAA tone.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f554d]">
                This demo ending is more conversational and less sales-heavy. It closes the page like a design studio presentation rather than a shooter campaign site.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#projects"
                  className="rounded-full bg-[#221814] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3a2a23]"
                >
                  Start a visual brief
                </Link>
                <Link
                  href="#projects"
                  className="rounded-full border border-[#c7b29d] px-6 py-3 text-sm font-medium text-[#392a23] transition-colors hover:bg-white/60"
                >
                  Review sample style
                </Link>
              </div>

              <div className="mt-8 grid gap-3 text-sm text-[#594f49] md:grid-cols-3">
                <div className="rounded-[18px] bg-white/55 p-4">Stylized 2D focused</div>
                <div className="rounded-[18px] bg-white/55 p-4">Warm presentation tone</div>
                <div className="rounded-[18px] bg-white/55 p-4">Demo-safe local assets</div>
              </div>
            </div>

            <div className="relative min-h-[320px] border-t border-[#d3bfac] lg:min-h-full lg:border-l lg:border-t-0">
              <Image
                src="/sinspired/3-min-1024x683.jpg"
                alt="Stylized fantasy key art"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
