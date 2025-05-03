"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import referansData from "@/public/files/referanslar.json";

// Define types for reference data
type ReferansData = {
  referans_tipi: string;
  adi: string;
  logo_yolu: string;
  sube_sayisi?: number;
  sehir?: string;
};

type ReferenceData = {
  id: number;
  name: string;
  logo: string;
  branchCount?: number;
};

interface ReferenceLogosProps {
  title?: string;
  subtitle?: string;
  className?: string;
  logos?: Array<ReferansData | ReferenceData>;
}

// Type guards
function isReferansData(data: any): data is ReferansData {
  return 'adi' in data && 'logo_yolu' in data;
}

function isReferenceData(data: any): data is ReferenceData {
  return 'name' in data && 'logo' in data;
}

export function ReferenceLogos({
  title = "En İyi İşletmelerin Tercihi",
  subtitle = "Türkiye'nin önde gelen markalarının tercihi robotPOS",
  className,
  logos,
}: ReferenceLogosProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Get chain businesses and sort by branch count
  const chainBusinesses = logos 
    ? logos
    : referansData
        .filter(ref => ref.referans_tipi === "Zincir İşletmeler")
        .sort((a, b) => (b.sube_sayisi || 0) - (a.sube_sayisi || 0));

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 1; // Adjust speed as needed

    const scroll = () => {
      scrollAmount += speed;
      scrollContainer.scrollLeft = scrollAmount;

      // Reset scroll position when reaching the end
      if (scrollAmount >= (scrollContainer.scrollWidth - scrollContainer.clientWidth)) {
        scrollAmount = 0;
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    // Start scrolling animation
    animationRef.current = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    const handleMouseLeave = () => {
      animationRef.current = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className={cn("py-24", className)}>
      <div ref={ref} className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto hide-scrollbar gap-8 px-4 py-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Double the items for seamless scrolling */}
          {[...chainBusinesses, ...chainBusinesses].map((business, index) => (
            <div 
              key={`${isReferansData(business) ? business.adi : isReferenceData(business) ? business.name : ''}-${index}`} 
              className={`flex-shrink-0 group transition-all duration-1000 relative ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                width: '200px'
              }}
            >
              <div className="w-full h-32 relative flex items-center justify-center transition-all duration-300">
                <Image
                  src={isReferansData(business) ? business.logo_yolu : isReferenceData(business) ? business.logo : ''}
                  alt={isReferansData(business) ? business.adi : isReferenceData(business) ? business.name : 'Reference Logo'}
                  fill
                  sizes="200px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              {((isReferansData(business) && business.sube_sayisi) || 
                (isReferenceData(business) && business.branchCount)) && (
                <div className="absolute -bottom-2 left-0 right-0 mx-auto w-max">
                  <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {isReferansData(business) ? business.sube_sayisi : isReferenceData(business) ? business.branchCount : 0}+ Şube
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Separator className="my-12" />

        <div className={`text-center transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a 
            href="/referanslar" 
            className="text-blue-600 hover:text-blue-800 font-medium text-lg inline-flex items-center"
          >
            Tüm Referanslarımız
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}