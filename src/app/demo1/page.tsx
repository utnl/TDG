import NavbarDemo1 from "@/components/NavbarDemo1";
import HeroDemo1 from "@/components/HeroDemo1";
import OurServicesSection from "@/components/OurServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import ProcessRoadmapSection from "@/components/ProcessRoadmapSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import LayoutWidthControl from "@/components/LayoutWidthControl";

export default function Demo1Page() {
  return (
    <>
      <NavbarDemo1 />
      <main>
        <HeroDemo1 />
        <OurServicesSection />
        <WhyChooseUsSection />
        <FeaturedProjectsSection />
        <ProcessRoadmapSection />
        <FinalCtaSection />
      </main>
      <LayoutWidthControl />
    </>
  );
}
