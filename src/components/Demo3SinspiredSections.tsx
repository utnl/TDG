"use client";

import { useEffect } from "react";
import AosInit from "@/components/sinspired/AosInit";
import ServicesCards from "@/components/sinspired/ServicesCards";
import FeaturedProjects from "@/components/sinspired/FeaturedProjects";
import GameArtPortfolio from "@/components/sinspired/GameArtPortfolio";
import Advantages from "@/components/sinspired/Advantages";
import TestimonialsSection from "@/components/sinspired/TestimonialsSection";
import ClientsSection from "@/components/sinspired/ClientsSection";
import RecentPostsSection from "@/components/sinspired/RecentPostsSection";
import ContactSection from "@/components/sinspired/ContactSection";
import Footer from "@/components/sinspired/Footer";

const BODY_CLASSES = [
  "home",
  "page-template",
  "page-template-sections",
  "page-template-sections-php",
  "page",
  "page-id-8",
  "wp-custom-logo",
  "ast-desktop",
  "ast-plain-container",
  "ast-no-sidebar",
  "astra-4.3.1",
  "ast-single-post",
  "ast-inherit-site-logo-transparent",
  "ast-theme-transparent-header",
  "ast-hfb-header",
];

export default function Demo3SinspiredSections() {
  useEffect(() => {
    const linkId = "sinspired-demo3-stylesheet";
    let link = document.getElementById(linkId) as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      link.href = "/sinspired-styles.css";
      document.head.appendChild(link);
    }

    const body = document.body;
    const previousHeaderTheme = body.getAttribute("data-header-theme");
    const previousBarba = body.getAttribute("data-barba");
    const previousAosEasing = body.getAttribute("data-aos-easing");
    const previousAosDuration = body.getAttribute("data-aos-duration");
    const previousAosDelay = body.getAttribute("data-aos-delay");

    BODY_CLASSES.forEach((className) => body.classList.add(className));
    body.setAttribute("data-header-theme", "light");
    body.setAttribute("data-barba", "wrapper");
    body.setAttribute("data-aos-easing", "ease");
    body.setAttribute("data-aos-duration", "400");
    body.setAttribute("data-aos-delay", "0");

    return () => {
      BODY_CLASSES.forEach((className) => body.classList.remove(className));

      if (previousHeaderTheme === null) body.removeAttribute("data-header-theme");
      else body.setAttribute("data-header-theme", previousHeaderTheme);

      if (previousBarba === null) body.removeAttribute("data-barba");
      else body.setAttribute("data-barba", previousBarba);

      if (previousAosEasing === null) body.removeAttribute("data-aos-easing");
      else body.setAttribute("data-aos-easing", previousAosEasing);

      if (previousAosDuration === null) body.removeAttribute("data-aos-duration");
      else body.setAttribute("data-aos-duration", previousAosDuration);

      if (previousAosDelay === null) body.removeAttribute("data-aos-delay");
      else body.setAttribute("data-aos-delay", previousAosDelay);
    };
  }, []);

  return (
    <div className="sinspired-page">
      <AosInit />
      <div className="hfeed site" id="page">
        <div id="content" className="site-content">
          <div className="ast-container">
            <div id="primary" className="content-area primary" data-barba="container" data-barba-namespace="page">
              <main id="main" className="site-main" role="main">
                <ServicesCards />
                <FeaturedProjects />
                <GameArtPortfolio />
                <Advantages />
                <TestimonialsSection />
                <ClientsSection />
                <RecentPostsSection />
                <ContactSection />
              </main>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
