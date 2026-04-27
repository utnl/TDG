import HeroSection from "@/components/sinspired/HeroSection";
import ServicesCards from "@/components/sinspired/ServicesCards";
import FeaturedProjects from "@/components/sinspired/FeaturedProjects";
import GameArtPortfolio from "@/components/sinspired/GameArtPortfolio";
import Advantages from "@/components/sinspired/Advantages";
import TestimonialsSection from "@/components/sinspired/TestimonialsSection";
import ClientsSection from "@/components/sinspired/ClientsSection";
import RecentPostsSection from "@/components/sinspired/RecentPostsSection";
import ContactSection from "@/components/sinspired/ContactSection";
import AosInit from "@/components/sinspired/AosInit";

export default function Home() {
  return (
    <>
      <AosInit />
      <main id="main" className="site-main" role="main">
        <HeroSection />
        <ServicesCards />
        <FeaturedProjects />
        <GameArtPortfolio />
        <Advantages />
        <TestimonialsSection />
        <ClientsSection />
        <RecentPostsSection />
        <ContactSection />
      </main>
    </>
  );
}
