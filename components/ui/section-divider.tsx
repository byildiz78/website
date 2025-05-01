import React from "react";

export function SectionDivider() {
  return (
    <div className="relative py-8">
      <div className="absolute left-1/2 -translate-x-1/2 w-2 h-16">
        <div className="w-full h-full flex flex-col items-center justify-between">
          <div className="w-2 h-2 rounded-full bg-blue-200"></div>
          <div className="w-1 flex-1 bg-gradient-to-b from-blue-200 to-blue-400"></div>
          <div className="w-3 h-3 rounded-full bg-blue-400"></div>
        </div>
      </div>
    </div>
  );
}