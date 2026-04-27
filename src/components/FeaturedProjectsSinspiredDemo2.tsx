"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Adventure Legacy",
    image: "https://sinspiredstudio.com/wp-content/uploads/Artboard-1-1024x411.jpg",
    link: "#",
    wide: true,
  },
  {
    title: "Claws & Paws",
    image: "https://sinspiredstudio.com/wp-content/uploads/Artboard-1-copy-1024x411.jpg",
    link: "#",
    wide: true,
  },
  {
    title: "Doctor Brain",
    image: "https://sinspiredstudio.com/wp-content/uploads/Artboard-2-copy-1024x850.jpg",
    link: "#",
    wide: false,
  },
  {
    title: "Greytail Adventure",
    image: "https://sinspiredstudio.com/wp-content/uploads/Artboard-2-1-1024x850.jpg",
    link: "#",
    wide: false,
  },
  {
    title: "Mavka Enchanted Game",
    image: "https://sinspiredstudio.com/wp-content/uploads/Artboard-2-copy-4-1024x850.jpg",
    link: "#",
    wide: false,
  },
];

export default function FeaturedProjectsSinspiredDemo2() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 lg:py-32">
      {/* Background Decorative Text */}
      <div
        className="pointer-events-none absolute inset-x-0 top-6 text-center text-[64px] md:text-[120px] lg:text-[180px] font-black tracking-tighter text-transparent select-none"
        style={{
          fontFamily: "var(--font-rajdhani)",
          WebkitTextStroke: "1px rgba(255,255,255,0.06)",
        }}
      >
        OUR PROJECTS
      </div>

      <div className="relative z-10 mx-auto" style={{ width: "var(--layout-width, 85%)" }}>
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[48px] font-black tracking-tight"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            <span className="text-white">OUR </span>
            <span className="text-amber-400">PROJECTS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-[#141414] border border-white/5 transition-all duration-500 hover:border-white/20 ${
                project.wide ? "md:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
            >
              <div className={`relative w-full overflow-hidden ${project.wide ? "h-[320px] md:h-[450px]" : "h-[450px]"}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Overlay with Title */}
                <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-rajdhani)" }}>
                      {project.title}
                    </h3>
                    <div className="h-1 w-12 bg-amber-400" />
                  </div>
                </div>
              </div>
              
              {/* Static Title for mobile or always visible fallback */}
              <div className="p-6 md:hidden">
                 <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-rajdhani)" }}>
                      {project.title}
                 </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
