"use client";
import { useEffect } from "react";

export default function PageClient({ html }: { html: string }) {
  useEffect(() => {
    // Re-init scroll header
    const header = document.getElementById("masthead");
    if (!header) return;
    const onScroll = () => {
      if (window.scrollY > 10) {
        header.classList.add("show");
      } else {
        header.classList.remove("show");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // AOS-like fade-up on scroll
    const aosEls = document.querySelectorAll("[data-aos]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("aos-animate");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    aosEls.forEach((el) => observer.observe(el));

    // Mobile menu toggle
    const toggle = document.querySelector(".menu-toggle.main-header-menu-toggle");
    const mobileNav = document.getElementById("ast-mobile-site-navigation");
    if (toggle && mobileNav) {
      toggle.addEventListener("click", () => {
        const open = mobileNav.classList.toggle("toggled");
        toggle.setAttribute("aria-expanded", String(open));
      });
    }

    // Contact popup
    const openLinks = document.querySelectorAll('[href="#open-form"]');
    const popup = document.querySelector(".popup-wrap") as HTMLElement | null;
    const closeBtn = document.querySelector(".close-popup");
    openLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        if (popup) popup.style.display = "flex";
      });
    });
    if (closeBtn && popup) {
      closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
      });
      popup.addEventListener("click", (e) => {
        if (e.target === popup) popup.style.display = "none";
      });
    }

    // Running text animation
    const runningText = document.querySelector(".running-text") as HTMLElement | null;
    if (runningText) {
      runningText.style.display = "block";
    }

    // Counter animation
    const counters = document.querySelectorAll(".counter[data-val]");
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseInt(el.getAttribute("data-val") || "0");
          let current = 0;
          const step = Math.ceil(target / 60);
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = current.toString();
            if (current >= target) clearInterval(timer);
          }, 16);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach((c) => counterObserver.observe(c));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      suppressHydrationWarning
    />
  );
}
