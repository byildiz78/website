"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { ExperienceBadge } from "@/components/ui/experience-badge";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  video?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface HeroSliderProps {
  slides: Slide[];
  priority?: boolean;
}

export function HeroSlider({ slides, priority = false }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Görselleri önceden yükle
  useEffect(() => {
    const preloadImages = async () => {
      try {
        // İlk görseli öncelikli olarak yükle
        const firstImage = new window.Image();
        firstImage.src = slides[0].image;
        firstImage.onload = () => setImagesLoaded(true);

        // Diğer görselleri arka planda yükle
        const imagePromises = slides.slice(1).map((slide) => {
          return new Promise((resolve, reject) => {
            const img = new window.Image();
            img.src = slide.image;
            img.onload = resolve;
            img.onerror = reject;
          });
        });

        await Promise.all(imagePromises);
      } catch (error) {
        console.error("Görsel yükleme hatası:", error);
      }
    };

    if (typeof window !== 'undefined') {
      preloadImages();
    }
  }, [slides]);

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
  }, [slides.length]);

  // Klavye ile gezinme için
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative h-full overflow-hidden" ref={ref}>
      {/* Slider içeriği */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: index === currentSlide ? 10 : 0 }}
          >
            {/* Arka plan görseli - LCP için optimize edilmiş */}
            <div className="absolute inset-0 bg-black">
              {slide.image && (
                <div className="relative h-full w-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority={priority && index === 0}
                    quality={index === 0 ? 90 : 75}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
              )}
            </div>

            {/* Video arka plan (varsa) */}
            {slide.video && (
              <div className="absolute inset-0 z-10">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                  preload={index === 0 ? "auto" : "none"}
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            )}

            {/* İçerik */}
            <div className="relative z-20 flex h-full items-center justify-center px-4 text-center">
              <div className="max-w-4xl">
                <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="mb-6 text-lg text-gray-200 md:text-xl">
                  {slide.description}
                </p>
                {slide.buttonText && slide.buttonLink && (
                  <Button asChild size="lg">
                    <a href={slide.buttonLink}>{slide.buttonText}</a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Deneyim rozeti */}
      <div className="absolute right-0 top-0 z-30">
        <ExperienceBadge />
      </div>

      {/* Gezinme okları */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
        aria-label="Önceki slayt"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
        aria-label="Sonraki slayt"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* İlerleme göstergesi */}
      <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setCurrentSlide(index);
              setTimeout(() => setIsTransitioning(false), 500);
            }}
            className={`h-2 w-8 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Slayt ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}