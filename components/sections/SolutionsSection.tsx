"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { whyChooseUs } from "@/data/features";

interface SolutionsSectionProps {
  className?: string;
}

export function SolutionsSection({ className }: SolutionsSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className={`py-24 bg-white ${className}`}>
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className={`transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="section-title mb-4">
                Neden <span className="text-blue-600">RobotPOS</span>?
              </h2>
              <p className="section-subtitle">
                En Kolay, En Hızlı, En Sorunsuz Restoran Otomasyonu ve Yönetim Sistemi
              </p>
            </div>
            <div className="space-y-8">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-start transition-all duration-1000 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`relative group transition-all duration-1000 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100/30 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="/images/rs5-min.webp" 
                  alt="RobotPOS Kullanımı" 
                  className="w-full h-auto relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-lg max-w-xs hidden md:block transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
              <p className="font-semibold text-lg mb-2">20 Yıllık Deneyim</p>
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