import { ReferenceLogos } from "@/components/sections/ReferenceLogos";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { StatisticsSection } from "@/components/sections/StatisticsSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { SectionDivider } from "@/components/ui/section-divider";

import referansData from "@/public/files/referanslar.json";
import musteriGorusleriData from "@/public/files/musteri-gorusleri.json";
import { statistics } from "@/data/statistics";

export function DefaultSections() {
  // Filter chain businesses and sort by branch count
  const chainBusinesses = referansData
    .filter(ref => ref.referans_tipi === "Zincir İşletmeler")
    .sort((a, b) => (b.sube_sayisi || 0) - (a.sube_sayisi || 0))
    .slice(0, 6); // Limit to 6 businesses for the homepage

  // Get customer testimonials from JSON file
  const customerTestimonials = musteriGorusleriData.slice(0, 5); // Limit to first 5 testimonials

  return (
    <>
      <SectionDivider />
      
      <SolutionsSection />
      
      <SectionDivider />
      
      <ReferenceLogos 
        title="En İyi İşletmelerin Tercihi" 
        subtitle="Türkiye'nin önde gelen markalarının tercihi robotPOS"
        logos={chainBusinesses}
        className="bg-[#F0F7FF]"
      />
      
      <SectionDivider />
      
      <TestimonialsCarousel testimonials={customerTestimonials} />
      
      <SectionDivider />
      
      <StatisticsSection 
        title="Rakamlarla robotPOS"
        subtitle="İşletmelerin dijital dönüşümüne liderlik ediyoruz"
        statistics={statistics}
      />
    </>
  );
}