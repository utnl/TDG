"use client";

import NavbarDemo1 from "@/components/NavbarDemo1";
import HeroSinspiredDemo1 from "@/components/HeroSinspiredDemo1";
import OurServicesSection from "@/components/OurServicesSection";
import OurServicesSinspiredDemo2 from "@/components/OurServicesSinspiredDemo2";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import FeaturedProjectsSinspiredDemo2 from "@/components/FeaturedProjectsSinspiredDemo2";
import ProcessRoadmapSection from "@/components/ProcessRoadmapSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import LayoutWidthControl, { useServicesTemplateListener, useProjectsTemplateListener } from "@/components/LayoutWidthControl";

export default function Demo2Page() {
  const servicesTemplate = useServicesTemplateListener("v2");
  const projectsTemplate = useProjectsTemplateListener("v2");



  return (
    <>
      <NavbarDemo1 />
      <main className="scroll-smooth">
        <HeroSinspiredDemo1 />

        <div className="snap-start">
          {servicesTemplate === "v1" ? <OurServicesSection /> : <OurServicesSinspiredDemo2 />}
        </div>
        <div className="snap-start"><WhyChooseUsSection /></div>
        <div className="snap-start">
          {projectsTemplate === "v1" ? <FeaturedProjectsSection /> : <FeaturedProjectsSinspiredDemo2 />}
        </div>
        <div className="snap-start"><ProcessRoadmapSection /></div>
        <div className="snap-start"><FinalCtaSection /></div>
      </main>
      <LayoutWidthControl />
    </>
  );

}