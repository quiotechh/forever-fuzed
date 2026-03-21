import FounderTeaser from "@/components/AboutSection";
import BrandStatement from "@/components/BrandStatementSections";
import CTABanner from "@/components/Cta";
import Gallery from "@/components/Gallery";
import Hero from "@/components/HeroSection";
import ServicesOverview from "@/components/ServiceSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUse";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <BrandStatement />
      <FounderTeaser />
      <WhyChooseUs />
      <ServicesOverview />
      <Testimonials />
      <Gallery />
      <CTABanner />
    </div>
  );
}
