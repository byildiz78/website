"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  bgImage: string;
}

interface FeaturesGridProps {
  title: string;
  subtitle?: string;
  features: Feature[];
}

export function FeaturesGrid({ title, subtitle, features }: FeaturesGridProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-12">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">{title}</h2>
          {subtitle && (
            <p className="section-subtitle">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <a 
              key={index} 
              href={feature.href} 
              className="block no-underline"
            >
              <div 
                className={`group relative border border-gray-100 overflow-hidden bg-white shadow-md rounded-xl h-[300px] transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer ${
                  inView ? 'animate-fadeIn' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Background Image with Balanced Overlay */}
                <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden">
                  {/* Gradient Overlay - More balanced to show image better */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/75 group-hover:from-gray-800/75 group-hover:via-gray-700/55 group-hover:to-gray-800/80 transition-all duration-500 z-10" />
                  
                  {/* Subtle Pattern */}
                  <div className="absolute inset-0 bg-[url('/images/general/pattern.svg')] opacity-10 mix-blend-overlay z-20"></div>
                  
                  {/* Image with better visibility */}
                  <Image
                    src={feature.bgImage}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-75 contrast-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                
                {/* Content with improved styling for better readability */}
                <div className="relative z-20 h-full flex flex-col p-6">
                  <div className="flex-grow">
                    {/* Decorative line */}
                    <div className="w-12 h-1.5 bg-blue-400 rounded-full mb-4 group-hover:w-20 transition-all duration-300"></div>
                    
                    {/* Title with improved styling for better visibility */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300 drop-shadow-md">
                      {feature.title}
                    </h3>
                    
                    {/* Description with improved styling for better readability */}
                    <p className="text-white text-sm leading-relaxed line-clamp-3 drop-shadow-md font-medium">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Link with improved styling */}
                  <div className="mt-4 pt-4 border-t border-white/30">
                    <div className="inline-flex items-center text-white font-semibold group-hover:translate-x-1 transition-all duration-300 text-sm">
                      <span className="border-b border-blue-300/70 group-hover:border-blue-300 pb-0.5">Daha Fazla Bilgi</span>
                      <ArrowRight className="ml-1.5 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
                
                {/* Enhanced decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-1.5 bg-gradient-to-l from-blue-400/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-24 h-1.5 bg-gradient-to-r from-blue-400/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-white/40 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-white/40 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}