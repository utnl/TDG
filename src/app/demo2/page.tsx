"use client";

import NavbarDemo1 from "@/components/NavbarDemo1";
import HeroSinspiredDemo1 from "@/components/HeroSinspiredDemo1";
import Demo2EditorialSections from "@/components/Demo2EditorialSections";
import LayoutWidthControl from "@/components/LayoutWidthControl";

export default function Demo2Page() {
  return (
    <>
      <NavbarDemo1 />
      <main className="scroll-smooth">
        <HeroSinspiredDemo1 />
        <Demo2EditorialSections />
      </main>
      <LayoutWidthControl />
    </>
  );
}
