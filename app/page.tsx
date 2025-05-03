"use client";

import { HeroSlider } from "@/components/ui/hero-slider";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { SectionDivider } from "@/components/ui/section-divider";
import { CTASection } from "@/components/sections/CTASection";
import { ViewToggle } from "@/components/ui/view-toggle";

import { heroSlides } from "@/data/heroSlides";
import { productFeatures } from "@/data/features";
import { useLayoutStore } from "@/lib/store";

export default function Home() {
  const { layout } = useLayoutStore();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-[400px]">
        <HeroSlider slides={heroSlides} />
      </section>

      {/* View Toggle */}
      <div className={`${layout === "boxed" ? "max-w-7xl mx-auto" : "container"} px-4 py-4`}>
        <ViewToggle />
      </div>

      {/* Ürün Kategorileri Section */}
      <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="relative">
          <FeaturesGrid 
            title="Ürün ve Çözümlerimiz" 
            subtitle="İşletmenizin büyümesine yardımcı olacak kapsamlı çözümler"
            features={productFeatures} 
          />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="İşletmenizi Dijital Dünyaya Taşıyın"
        subtitle="robotPOS ile işletmenizi daha verimli yönetin"
        buttonText="İletişime Geçin"
        buttonLink="/iletisim"
        backgroundImage="/images/general/restaurant-ai.webp"
      />
    </div>
  );
}