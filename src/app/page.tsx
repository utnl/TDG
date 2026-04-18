import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeTicker />
      </main>
    </>
  );
}
