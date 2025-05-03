"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AydinlatmaMetniPage() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/files/aydinlatma-metni.txt')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading content:', error));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[200px] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/general/ofis.webp"
            alt="robotPOS Aydınlatma Metni"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70" />
        </motion.div>
        <div className="container relative z-10 h-full mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Aydınlatma Metni
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            {content && content.split('\n\n').map((paragraph, index) => {
              // Check if paragraph is a heading
              if (paragraph.startsWith('#')) {
                const match = paragraph.match(/^#+/);
                if (!match) return null;
                const level = match[0].length;
                const text = paragraph.replace(/^#+\s/, '');
                const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
                return (
                  <HeadingTag 
                    key={index}
                    className={`text-${4-level}xl font-bold mt-8 mb-4`}
                  >
                    {text}
                  </HeadingTag>
                );
              }
              
              // Check if paragraph is a list
              if (paragraph.includes('\n•')) {
                const items = paragraph.split('\n•');
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2">
                    {items.map((item, i) => (
                      item.trim() && <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              }
              
              // Regular paragraph
              return paragraph.trim() && (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}