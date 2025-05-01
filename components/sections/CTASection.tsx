"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
}

export function CTASection({
  title,
  subtitle,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage,
}: CTASectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  const bgColorClass = backgroundImage
    ? ""
    : "bg-gradient-to-r from-blue-600 to-blue-800";

  return (
    <section
      ref={ref}
      className={`py-24 text-white ${bgColorClass}`}
      style={backgroundStyle}
    >
      <div className="container mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 min-w-[200px]"
              asChild
            >
              <Link href={buttonLink}>{buttonText}</Link>
            </Button>
            {secondaryButtonText && secondaryButtonLink && (
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-700 min-w-[200px]"
                asChild
              >
                <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}