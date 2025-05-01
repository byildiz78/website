import { HeroSlider } from "@/components/ui/hero-slider";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { SectionDivider } from "@/components/ui/section-divider";
import { FeaturesSection } from "@/components/sections/FeaturesSection";

import { heroSlides } from "@/data/heroSlides";
import { productFeatures } from "@/data/features";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSlider slides={heroSlides} />

      <SectionDivider />

      {/* Ürün Kategorileri Section */}
      <FeaturesGrid 
        title="Ürün ve Çözümlerimiz" 
        subtitle="İşletmenizin büyümesine yardımcı olacak kapsamlı çözümler"
        features={productFeatures} 
      />

      <SectionDivider />

      {/* Features Section */}
      <FeaturesSection />
    </div>
  );
}