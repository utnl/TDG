import NavbarStudio from "@/components/NavbarStudio";
import HeroStudio from "@/components/HeroStudio";
import OurServicesSection from "@/components/OurServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import ProcessRoadmapSection from "@/components/ProcessRoadmapSection";
import FinalCtaSection from "@/components/FinalCtaSection";

export default function Home() {
  return (
    <>
      <NavbarStudio />
      <main>
        <HeroStudio />
        <OurServicesSection />
        <WhyChooseUsSection />
        <FeaturedProjectsSection />
        <ProcessRoadmapSection />
        <FinalCtaSection />
      </main>
    </>
  );
}
