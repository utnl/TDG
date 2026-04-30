"use client";

import NavbarDemo1 from "@/components/NavbarDemo1";
import HeroSinspiredDemo1 from "@/components/HeroSinspiredDemo1";
import Demo4EditorialSections from "@/components/Demo4EditorialSections";
import LayoutWidthControl from "@/components/LayoutWidthControl";

export default function Demo4Page() {
  return (
    <>
      <NavbarDemo1 />
      <main className="scroll-smooth">
        <HeroSinspiredDemo1 />
        <Demo4EditorialSections />
      </main>
      <LayoutWidthControl />
    </>
  );
}
