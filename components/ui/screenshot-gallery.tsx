"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ScreenshotGalleryProps {
  images: string[];
}

export function ScreenshotGallery({ images }: ScreenshotGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    setSelectedImage(prev => 
      prev === null ? null : prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImage(prev => 
      prev === null ? null : prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative aspect-video cursor-pointer group"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image}
              alt={`Screenshot ${index + 1}`}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-medium">Görüntüle</span>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent 
          className="max-w-[90vw] h-[90vh] p-0 bg-black/95" 
          onKeyDown={handleKeyDown}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-50"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 text-white/70 hover:text-white transition-colors z-50"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 text-white/70 hover:text-white transition-colors z-50"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image */}
            {selectedImage !== null && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full flex items-center justify-center p-8"
                >
                  <Image
                    src={images[selectedImage]}
                    alt={`Screenshot ${selectedImage + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            )}

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {selectedImage !== null && `${selectedImage + 1} / ${images.length}`}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}