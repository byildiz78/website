import React from "react";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <>
      <div className="flex justify-between items-center relative mb-8">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center relative z-10"
          >
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                index === currentStep 
                  ? 'bg-blue-600 text-white scale-110' 
                  : index < currentStep 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
              }`}
            >
              {index < currentStep ? <Check className="w-5 h-5" /> : index + 1}
            </div>
            <span 
              className={`text-sm mt-2 text-center hidden md:block transition-colors duration-300 ${
                index === currentStep 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-600'
              }`}
            >
              {step}
            </span>
          </div>
        ))}
        
        {/* Bağlantı çizgisi */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-0">
          <div 
            className="h-full bg-blue-600 transition-all duration-500"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>
      
      {/* Mobil için adım göstergesi */}
      <div className="md:hidden text-center mb-6">
        <h3 className="font-medium text-blue-600">{steps[currentStep]}</h3>
      </div>
    </>
  );
}
