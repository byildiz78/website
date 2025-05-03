"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { whyChooseUs } from "@/data/whyChooseUs";
import { ArrowRight } from "lucide-react";

export function FeaturesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50/50">
      <div ref={ref} className="container mx-auto px-4">
        {/* Header with improved visual hierarchy */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="section-title mb-4 relative inline-block">
              Neden <span className="text-blue-600 font-bold">robotPOS</span>?
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </h2>
            <p className="section-subtitle text-gray-600 max-w-2xl mx-auto">
              En Kolay, En Hızlı, En Sorunsuz Restoran Otomasyonu ve Yönetim Sistemi
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left side - Feature cards in a 2x2 grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <a 
                href={item.link}
                key={index} 
                className={`group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:bg-blue-50/30 transition-all duration-300 transform hover:-translate-y-1 ${
                  inView ? 'animate-fadeIn' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div className="bg-blue-100/50 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                  <div className="mt-4 text-blue-500 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Daha Fazla</span>
                    <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right side - Image with floating info card */}
          <div className={`lg:col-span-5 relative transition-all duration-1000 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              {/* Background glow effect */}
              <div className="absolute -inset-4 bg-blue-100/30 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Main image container with hover effects */}
              <div className="relative rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="/images/general/rs5-min.webp" 
                  alt="robotPOS Kullanımı" 
                  className="w-full h-auto relative z-10"
                />
              </div>
            </div>
            
            {/* Floating info card */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-5 rounded-2xl shadow-lg max-w-xs hidden md:block transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
              <p className="font-semibold text-lg mb-2">22 Yıllık Deneyim</p>
              <p className="text-sm opacity-90">
                2003'ten beri restoran ve cafe sektörüne özel çözümler üretiyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}