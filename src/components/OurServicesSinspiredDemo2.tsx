"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "2D Art",
    projects: "50+",
    image: "/video/CutScene_SE/1.png",
    link: "#",
  },
  {
    title: "3D Art",
    projects: "50+",
    image: "/video/CutScene_SE/2.png",
    link: "#",
  },
  {
    title: "Game animation",
    projects: "50+",
    image: "/video/CutScene_SE/4.png",
    link: "#",
  },
];


export default function OurServicesSinspiredDemo2() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 lg:py-32">
      {/* Background Decorative Text - Outline style like in the image */}
      <div
        className="pointer-events-none absolute inset-x-0 top-6 text-center text-[64px] md:text-[120px] lg:text-[180px] font-black tracking-tighter text-transparent select-none"
        style={{
          fontFamily: "var(--font-rajdhani)",
          WebkitTextStroke: "1px rgba(255,255,255,0.06)",
        }}
      >
        OUR SERVICES
      </div>


      <div className="relative z-10 mx-auto" style={{ width: "var(--layout-width, 85%)" }}>
        <div className="mb-20 text-center">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-rajdhani)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white">OUR </span>
            <span className="text-amber-400">SERVICES</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-linear-to-b from-[#2a2d3e] to-[#141414] border border-white/5 shadow-2xl transition-all duration-500 hover:border-white/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {/* Image Container */}
              <div className="relative h-[280px] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Content Area */}
              <div className="px-6 pb-8 pt-6 relative">
                <h3 
                  className="text-xl font-bold text-white mb-6 tracking-wide"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {service.title}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80">

                      {/* Trophy/Achievement Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                        <path d="M4 22h16" />
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white leading-none tracking-tight">{service.projects}</div>
                      <div className="text-[11px] text-white/40 font-medium mt-1">Completed projects</div>
                    </div>
                  </div>

                  <a 
                    href={service.link}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 transition-all duration-300 hover:scale-110 group-hover:bg-white/10 group-hover:text-white"
                  >

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Bottom Glow Effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
