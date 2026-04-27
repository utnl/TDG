"use client";
import { useEffect } from "react";

export default function AosInit() {
  useEffect(() => {
    // AOS-like fade-up on scroll
    const aosEls = document.querySelectorAll("[data-aos]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("aos-animate");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    
    aosEls.forEach((el) => {
      el.classList.add("aos-init");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
