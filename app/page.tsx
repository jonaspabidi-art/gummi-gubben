import Header from "@/components/Header";
import HomeHero from "@/components/home/HomeHero";
import Services from "@/components/home/Services";
import Offers from "@/components/home/Offers";
import Info from "@/components/home/Info";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header activePage="hem" />
      <main>
        <HomeHero />
        <ScrollReveal>
          <Services />
        </ScrollReveal>
        <ScrollReveal delay={50}>
          <Offers />
        </ScrollReveal>
        <ScrollReveal delay={50}>
          <Info />
        </ScrollReveal>
      </main>
      <SiteFooter />
    </>
  );
}
