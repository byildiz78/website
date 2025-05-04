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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left; // x position within the card
    const y = e.clientY - card.top; // y position within the card
    
    const centerX = card.width / 2;
    const centerY = card.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setMousePosition({ x: rotateY, y: rotateX });
    setActiveCard(index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          {/* Modern başlık */}
          <h2 className="section-title mb-3 font-bold text-gray-800 text-3xl">
            {title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-5 rounded-full"></div>
          
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
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => {
                setActiveCard(null);
                setMousePosition({ x: 0, y: 0 });
              }}
            >
              <div 
                className={`group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/70 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 h-[280px] transform-gpu ${
                  inView ? 'animate-fadeIn' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: activeCard === index 
                    ? `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale3d(1.02, 1.02, 1.02)`
                    : 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
                  transition: 'transform 0.3s ease'
                }}
              >
                {/* 3D Card Inner */}
                <div className="absolute inset-0 w-full h-full transform-gpu preserve-3d" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Background with Gradient Overlay */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ transform: 'translateZ(-10px)' }}>
                    {/* Background Image */}
                    <Image
                      src={feature.bgImage}
                      alt={feature.title}
                      fill
                      className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300 filter brightness-[1.1]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40"></div>
                  </div>
                  
                  {/* 3D Floating Elements */}
                  <div 
                    className="absolute w-16 h-16 rounded-full bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-all duration-300"
                    style={{ 
                      transform: activeCard === index ? 'translateZ(20px) translate(-30%, -30%)' : 'translateZ(5px) translate(-30%, -30%)',
                      background: `linear-gradient(135deg, ${getAccentColor(index, 0.3)}, transparent)`,
                      top: '20%',
                      left: '20%'
                    }}
                  ></div>
                  
                  <div 
                    className="absolute w-20 h-20 rounded-full bg-gradient-to-tl opacity-10 group-hover:opacity-20 transition-all duration-300"
                    style={{ 
                      transform: activeCard === index ? 'translateZ(15px) translate(50%, 50%)' : 'translateZ(5px) translate(50%, 50%)',
                      background: `linear-gradient(135deg, ${getAccentColor(index, 0.3)}, transparent)`,
                      bottom: '10%',
                      right: '10%'
                    }}
                  ></div>
                  
                  {/* Gradient Border Effect with 3D */}
                  <div 
                    className="absolute inset-0 p-[1px] rounded-xl z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ transform: 'translateZ(5px)' }}
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-30"></div>
                  </div>
                  
                  {/* Content with 3D Elevation */}
                  <div className="relative z-20 h-full flex flex-col p-6" style={{ transform: 'translateZ(30px)' }}>
                    {/* Icon with Gradient Background and 3D Effect */}
                    <div 
                      className={`w-14 h-14 mb-5 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 bg-gradient-to-br ${getGradientClass(index)}`}
                      style={{ 
                        transform: activeCard === index ? 'translateZ(40px)' : 'translateZ(20px)',
                        boxShadow: activeCard === index ? `0 10px 20px -5px ${getAccentColor(index, 0.3)}` : ''
                      }}
                    >
                      {React.cloneElement(feature.icon as React.ReactElement, { 
                        className: "w-7 h-7 text-white" 
                      })}
                    </div>
                    
                    <div className="flex-grow" style={{ transform: 'translateZ(20px)' }}>
                      {/* Title */}
                      <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${getTextColor(index)}`}>
                        {feature.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Modern Button with 3D Effect */}
                    <div 
                      className={`absolute bottom-4 right-4 flex items-center justify-center w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 ${getButtonClass(index)}`}
                      style={{ 
                        transform: activeCard === index ? 'translateZ(50px) translateY(0)' : 'translateZ(30px) translateY(8px)',
                        boxShadow: activeCard === index ? `0 10px 15px -3px ${getAccentColor(index, 0.3)}` : ''
                      }}
                    >
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Glass Reflection Effect with 3D */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/20 to-transparent rounded-t-xl"
                    style={{ transform: 'translateZ(10px)' }}
                  ></div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Yardımcı fonksiyonlar
function getGradientClass(index: number): string {
  const gradients = [
    "from-blue-500 to-blue-600",
    "from-emerald-500 to-teal-600",
    "from-purple-500 to-indigo-600",
    "from-pink-500 to-rose-600",
    "from-cyan-500 to-blue-600",
    "from-amber-500 to-orange-600",
    "from-indigo-500 to-violet-600",
    "from-teal-500 to-green-600"
  ];
  
  return gradients[index % gradients.length];
}

function getTextColor(index: number): string {
  const colors = [
    "text-blue-600", 
    "text-emerald-600", 
    "text-purple-600", 
    "text-pink-600", 
    "text-cyan-600", 
    "text-amber-600", 
    "text-indigo-600", 
    "text-teal-600"
  ];
  
  return colors[index % colors.length];
}

function getButtonClass(index: number): string {
  const backgrounds = [
    "bg-blue-500 shadow-blue-200",
    "bg-emerald-500 shadow-emerald-200",
    "bg-purple-500 shadow-purple-200",
    "bg-pink-500 shadow-pink-200",
    "bg-cyan-500 shadow-cyan-200",
    "bg-amber-500 shadow-amber-200",
    "bg-indigo-500 shadow-indigo-200",
    "bg-teal-500 shadow-teal-200"
  ];
  
  return backgrounds[index % backgrounds.length];
}

function getAccentColor(index: number, opacity: number = 1): string {
  const colors = [
    `rgba(59, 130, 246, ${opacity})`, // blue
    `rgba(16, 185, 129, ${opacity})`, // emerald
    `rgba(139, 92, 246, ${opacity})`, // purple
    `rgba(236, 72, 153, ${opacity})`, // pink
    `rgba(6, 182, 212, ${opacity})`, // cyan
    `rgba(245, 158, 11, ${opacity})`, // amber
    `rgba(99, 102, 241, ${opacity})`, // indigo
    `rgba(20, 184, 166, ${opacity})` // teal
  ];
  
  return colors[index % colors.length];
}