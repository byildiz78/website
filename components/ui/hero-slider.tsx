"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

export function HeroSlider({ slides }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, slides.length]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, slides.length]);

  // Otomatik geçiş için useEffect, bağımlılık dizisi boş
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(timer);
  }, []); // Boş bağımlılık dizisi

  return (
    <div ref={ref} className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-1000 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                {slide.title}
              </h1>
              <p 
                className={`text-lg md:text-xl max-w-3xl mx-auto ${slide.buttonText ? 'mb-8' : 'mb-0'} transition-all duration-1000 delay-200 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                {slide.description}
              </p>
              {slide.buttonText && slide.buttonLink && (
                <Button 
                  size="lg"
                  className={`bg-blue-600 hover:bg-blue-700 text-white transition-all duration-1000 delay-400 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  asChild
                >
                  <a href={slide.buttonLink}>{slide.buttonText}</a>
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}