import React from "react";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import type { FormDataType, PlatformType } from "@/app/ihtiyac-tespiti/types";

interface StepPlatformsProps {
  formData: FormDataType;
  onlinePlatforms: PlatformType[];
  togglePlatform: (platformId: string) => void;
}

export function StepPlatforms({ formData, onlinePlatforms, togglePlatform }: StepPlatformsProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center mb-6">Online Yemek Platformları</h2>
      <p className="text-center text-gray-600 mb-8">
        Entegrasyon istediğiniz online yemek platformlarını seçin
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {onlinePlatforms.map((platform) => (
          <Card 
            key={platform.id}
            className={`p-6 cursor-pointer transition-all duration-300 ${
              formData.platforms[platform.id] 
                ? 'ring-2 ring-blue-500 bg-blue-50 transform scale-105' 
                : 'hover:bg-gray-50 hover:shadow-md'
            }`}
            onClick={() => togglePlatform(platform.id)}
          >
            <div className="flex flex-col items-center">
              <div className={`w-full h-16 mb-4 flex items-center justify-center rounded-lg ${platform.color}`}>
                <span className="text-xl font-bold">{platform.name}</span>
              </div>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                formData.platforms[platform.id] 
                  ? 'bg-blue-600 text-white' 
                  : 'border border-gray-300'
              }`}>
                {formData.platforms[platform.id] && <Check className="w-4 h-4" />}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
