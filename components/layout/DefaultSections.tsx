import { ReferenceLogos } from "@/components/sections/ReferenceLogos";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { StatisticsSection } from "@/components/sections/StatisticsSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { SectionDivider } from "@/components/ui/section-divider";

import { references } from "@/data/references";
import { testimonials } from "@/data/testimonials";
import { statistics } from "@/data/statistics";

export function DefaultSections() {
  return (
    <>
      <SectionDivider />
      
      <SolutionsSection />
      
      <SectionDivider />
      
      <ReferenceLogos 
        title="En İyi İşletmelerin Tercihi" 
        subtitle="Türkiye'nin önde gelen markalarının tercihi RobotPOS"
        logos={references}
        className="bg-[#F0F7FF]"
      />
      
      <SectionDivider />
      
      <TestimonialsCarousel testimonials={testimonials} />
      
      <SectionDivider />
      
      <StatisticsSection 
        title="Rakamlarla RobotPOS"
        subtitle="İşletmelerin dijital dönüşümüne liderlik ediyoruz"
        statistics={statistics}
      />
    </>
  );
}