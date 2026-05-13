import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import SiteFooter from "@/components/SiteFooter";

export default function Dackhotell() {
  return (
    <>
      <Header activePage="dackhotell" />
      <main>
        <Hero />
        <ValueProps />
        <Pricing />
        <CTA />
      </main>
      <SiteFooter />
    </>
  );
}
