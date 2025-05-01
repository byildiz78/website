"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";

interface Statistic {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  icon: React.ReactNode;
}

interface StatisticsSectionProps {
  title?: string;
  subtitle?: string;
  statistics: Statistic[];
}

export function StatisticsSection({
  title,
  subtitle,
  statistics,
}: StatisticsSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-[#F0F7FF]">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            {title}
          </h2>
          {subtitle && (
            <p className="section-subtitle">
              {subtitle}
            </p>
          )}
          
          <div className="mt-8 flex justify-center">
            <div className="w-32">
              <svg className="w-full h-auto text-blue-400" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M3 17L9 11L13 15L21 7" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {statistics.map((stat, index) => (
            <StatCard key={index} stat={stat} animate={inView} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, animate, index }: { stat: Statistic; animate: boolean; index: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(stat.value * progress);
      
      setCount(currentCount);
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [animate, stat.value]);

  return (
    <div 
      className={`text-center ${animate ? 'animate-fadeIn' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-center mb-4">
        <div className="text-blue-400">
          {stat.icon}
        </div>
      </div>
      <div className="flex items-center justify-center text-4xl font-bold text-gray-800">
        {stat.prefix && <span>{stat.prefix}</span>}
        <span>{animate ? count : 0}</span>
        {stat.suffix && <span>{stat.suffix}</span>}
      </div>
      <p className="text-gray-600 mt-2">{stat.label}</p>
    </div>
  );
}