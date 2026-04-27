import NavbarDemo1 from "@/components/NavbarDemo1";
import HeroSinspiredDemo1 from "@/components/HeroSinspiredDemo1";
import OurServicesSection from "@/components/OurServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import ProcessRoadmapSection from "@/components/ProcessRoadmapSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import LayoutWidthControl from "@/components/LayoutWidthControl";

export default function Demo2Page() {
  return (
    <>
      <NavbarDemo1 />
      <main className="scroll-smooth">
        <HeroSinspiredDemo1 />
        <div className="snap-start"><OurServicesSection /></div>
        <div className="snap-start"><WhyChooseUsSection /></div>
        <div className="snap-start"><FeaturedProjectsSection /></div>
        <div className="snap-start"><ProcessRoadmapSection /></div>
        <div className="snap-start"><FinalCtaSection /></div>
      </main>
      <LayoutWidthControl />
    </>
  );
}
