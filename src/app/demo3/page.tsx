import NavbarDemo1 from "@/components/NavbarDemo1";
import HeroSinspiredDemo2 from "@/components/HeroSinspiredDemo2";
import OurServicesSection from "@/components/OurServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import ProcessRoadmapSection from "@/components/ProcessRoadmapSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import LayoutWidthControl from "@/components/LayoutWidthControl";

export default function Demo3Page() {
  return (
    <>
      <NavbarDemo1 />
      <main>
        <HeroSinspiredDemo2 />
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
