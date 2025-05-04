"use client";

import React from "react";

interface ExperienceBadgeProps {
  className?: string;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

export function ExperienceBadge({ 
  className = "", 
  position = "top-right" 
}: ExperienceBadgeProps) {
  // Position classes based on the position prop
  const positionClasses = {
    "top-right": "top-6 right-12",
    "top-left": "top-6 left-12",
    "bottom-right": "bottom-6 right-12",
    "bottom-left": "bottom-6 left-12"
  };

  return (
    <div className={`absolute ${positionClasses[position]} z-50 ${className}`}>
      <div className="relative group">
        <div 
          className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg shadow-lg overflow-hidden transform hover:bg-white/40 transition-all duration-300" 
          style={{width: '220px'}}
        >
          <div className="flex items-center px-3 py-2">
            {/* Left side with number */}
            <div className="bg-gradient-to-br from-blue-600/80 to-blue-800/80 text-white px-3 py-1.5 rounded-md flex items-center justify-center mr-3">
              <span className="text-2xl font-bold leading-none">22</span>
              <span className="text-xs font-medium ml-1 mt-1">YIL</span>
            </div>
            
            {/* Right side with text */}
            <div className="flex-1">
              <div className="text-white font-medium text-sm leading-tight drop-shadow-md">
                ilk günkü heyecan ile...
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-lg blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
}
