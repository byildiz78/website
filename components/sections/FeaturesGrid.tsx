"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
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
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">{title}</h2>
          {subtitle && (
            <p className="section-subtitle">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`group relative border-0 hover:border-blue-500 hover-lift hover-glow overflow-hidden bg-transparent shadow-none h-[320px] ${
                inView ? 'animate-fadeIn' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/70 transition-all duration-500 z-10" />
                <Image
                  src={feature.bgImage}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              
              {/* Content */}
              <div className="relative z-20 h-full flex flex-col p-5">
                <div className="flex-grow">
                  <div className="bg-white/90 backdrop-blur-sm p-2.5 rounded-lg mb-4 w-fit group-hover:bg-blue-500 transition-colors duration-300">
                    <div className="group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed line-clamp-3">
                    {feature.description}
                  </p>
                </div>
                <Link 
                  href={feature.link} 
                  className="inline-flex items-center text-white/90 hover:text-white group-hover:translate-x-2 transition-all duration-300 mt-4 text-sm"
                >
                  <span className="font-medium">Daha Fazla Bilgi</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}