"use client";

import React, { useState } from "react";
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
  
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-12">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-14 relative">
          {/* Ana başlık - Sade stil */}
          <h2 className="section-title mb-3 font-bold text-gray-800">
            {title}
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
          
          {/* Alt başlık */}
          {subtitle && (
            <p className="section-subtitle max-w-2xl mx-auto text-gray-600">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <a 
              key={index} 
              href={feature.href} 
              className="block no-underline perspective-1000"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div 
                className={`group relative overflow-hidden bg-white rounded-2xl h-[300px] transform transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl cursor-pointer ${
                  inView ? 'animate-fadeIn' : 'opacity-0'
                } ${activeCard === index ? 'rotate-y-[-5deg] shadow-2xl' : ''}`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: activeCard === index 
                    ? `rotateY(-5deg) scale(1.03)` 
                    : `rotateY(0) scale(1)`,
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                }}
              >
                {/* Glassmorphism Card Design */}
                <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden">
                  {/* Background Image */}
                  <Image
                    src={feature.bgImage}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 scale-110 filter brightness-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    style={{
                      transform: activeCard === index ? 'scale(1.15)' : 'scale(1.1)',
                      transition: 'transform 0.7s ease-out'
                    }}
                  />
                  
                  {/* Glassmorphism Effect */}
                  <div 
                    className="absolute inset-0 bg-white/30 backdrop-blur-md transition-all duration-500"
                    style={{
                      backdropFilter: activeCard === index ? 'blur(5px)' : 'blur(10px)',
                    }}
                  />
                  
                  {/* Colorful Border Gradient */}
                  <div className={`absolute inset-0 p-[2px] rounded-2xl z-10 transition-opacity duration-500 ${activeCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 animate-gradient-xy"></div>
                  </div>
                </div>
                
                {/* Content with 3D effect */}
                <div 
                  className="relative z-20 h-full flex flex-col p-7 transition-all duration-500"
                  style={{
                    transform: activeCard === index ? 'translateY(-5px)' : 'translateY(0)',
                  }}
                >
                  {/* Icon with floating effect */}
                  <div 
                    className="mb-5 bg-white/80 backdrop-blur-sm p-3 rounded-xl inline-block shadow-lg transition-all duration-500"
                    style={{
                      transform: activeCard === index ? 'rotate(3deg) scale(1.1)' : 'rotate(0) scale(1)',
                    }}
                  >
                    {React.cloneElement(feature.icon as React.ReactElement, { 
                      className: `w-7 h-7 ${activeCard === index ? 'text-blue-600' : 'text-blue-500'}` 
                    })}
                  </div>
                  
                  <div className="flex-grow">
                    {/* Title with 3D effect */}
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${activeCard === index ? 'text-blue-600' : 'text-gray-800'}`}>
                      {feature.title}
                    </h3>
                    
                    {/* Description with improved styling */}
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Modern button */}
                  <div className="mt-5">
                    <div 
                      className={`inline-flex items-center text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                        activeCard === index 
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 translate-x-1 shadow-lg' 
                          : 'bg-gradient-to-r from-blue-500 to-blue-600 group-hover:translate-x-1'
                      }`}
                    >
                      <span>Keşfet</span>
                      <ArrowRight className={`ml-1.5 h-4 w-4 transition-transform duration-300 ${activeCard === index ? 'translate-x-0.5' : ''}`} />
                    </div>
                  </div>
                </div>
                
                {/* Floating Particles */}
                <div 
                  className={`absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full transition-all duration-700 animate-float-slow ${
                    activeCard === index ? 'opacity-70' : 'opacity-0 group-hover:opacity-70'
                  }`}
                ></div>
                <div 
                  className={`absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-400 rounded-full transition-all duration-700 animate-float-medium ${
                    activeCard === index ? 'opacity-70' : 'opacity-0 group-hover:opacity-70'
                  }`}
                ></div>
                <div 
                  className={`absolute top-1/2 right-1/3 w-2 h-2 bg-pink-400 rounded-full transition-all duration-700 animate-float-fast ${
                    activeCard === index ? 'opacity-70' : 'opacity-0 group-hover:opacity-70'
                  }`}
                ></div>
                
                {/* Işık Efekti */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-0 transition-opacity duration-500 ${
                    activeCard === index ? 'opacity-100' : 'group-hover:opacity-70'
                  }`}
                ></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}