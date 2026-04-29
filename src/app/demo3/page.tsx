import NavbarDemo1 from "@/components/NavbarDemo1";
import HeroSinspiredDemo1 from "@/components/HeroSinspiredDemo1";
import Demo3SinspiredSections from "@/components/Demo3SinspiredSections";
import LayoutWidthControl from "@/components/LayoutWidthControl";

export default function Demo3Page() {
  return (
    <>
      <NavbarDemo1 />
      <main>
        <HeroSinspiredDemo1 />
        <Demo3SinspiredSections />
      </main>
      <LayoutWidthControl />
    </>
  );
}
