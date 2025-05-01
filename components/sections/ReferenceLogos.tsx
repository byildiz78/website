"use client";

import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface ReferenceLogo {
  id: number;
  name: string;
  logo: string;
  branchCount?: number;
}

interface ReferenceLogosProps {
  title?: string;
  subtitle?: string;
  logos: ReferenceLogo[];
  className?: string;
}

export function ReferenceLogos({
  title,
  subtitle,
  logos,
  className,
}: ReferenceLogosProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div 
              key={logo.id} 
              className={`group relative transition-all duration-1000 ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-32 h-20 md:w-40 md:h-24 relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={logo.logo}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              {logo.branchCount && (
                <div className="absolute -bottom-2 left-0 right-0 mx-auto w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {logo.branchCount} Şube
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
    </section>
  );
}