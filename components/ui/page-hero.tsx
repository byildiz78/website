"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExperienceBadge } from "@/components/ui/experience-badge";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  children?: ReactNode;
  showExperienceBadge?: boolean;
}

export function PageHero({
  title,
  subtitle,
  backgroundImage,
  children,
  showExperienceBadge = true
}: PageHeroProps) {
  // Check if the background is a video (webm, mp4)
  const isVideo = backgroundImage.endsWith('.webm') || backgroundImage.endsWith('.mp4');

  return (
    <section className="relative h-[300px] overflow-hidden">
      <motion.div
        initial={{ scale: 1.2, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        {isVideo ? (
          // Video background
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={backgroundImage} type={backgroundImage.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
          </video>
        ) : (
          // Image background
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-contain bg-gray-100"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70" />
      </motion.div>
      
      {/* Experience Badge */}
      {showExperienceBadge && <ExperienceBadge position="top-right" />}
      
      <div className="container relative z-10 h-full mx-auto px-4 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-blue-50">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
