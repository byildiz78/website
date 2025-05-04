import React from "react";
import { Monitor, Printer, ShoppingBag, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { FormDataType, PlatformType } from "@/app/ihtiyac-tespiti/types";

interface StepSummaryProps {
  formData: FormDataType;
  onlinePlatforms: PlatformType[];
  onContinue: () => void;
}

export function StepSummary({ formData, onlinePlatforms, onContinue }: StepSummaryProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center mb-6">Seçimlerinizin Özeti</h2>
      <p className="text-center text-gray-600 mb-8">
        Lütfen seçimlerinizi gözden geçirin ve iletişim bilgilerinizi girmek için devam edin
      </p>
      
      <Card className="p-6 border-l-4 border-l-blue-500">
        <h3 className="text-xl font-bold mb-4 text-blue-700">Talep Özeti</h3>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cihaz İhtiyacı */}
            <Card className="p-4 border border-gray-200 bg-gray-50 hover:shadow-md transition-shadow duration-300">
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                <Monitor className="w-5 h-5 mr-2 text-blue-600" />
                Cihaz İhtiyacı
              </h4>
              
              {(formData.devices.touchTerminal > 0 || formData.devices.waiterTerminal > 0) ? (
                <div className="space-y-4">
                  {formData.devices.touchTerminal > 0 && (
                    <div className="flex items-center">
                      <div className="w-12 h-12 mr-3 flex justify-center items-center">
                        <Monitor className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Dokunmatik Terminal</p>
                        <p className="text-sm text-gray-600">{formData.devices.touchTerminal} adet</p>
                      </div>
                    </div>
                  )}
                  
                  {formData.devices.waiterTerminal > 0 && (
                    <div className="flex items-center">
                      <div className="w-12 h-12 mr-3 flex justify-center items-center">
                        <Smartphone className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Garson El Terminali</p>
                        <p className="text-sm text-gray-600">{formData.devices.waiterTerminal} adet</p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-600">Seçilen cihaz bulunmamaktadır.</p>
              )}
            </Card>
            
            {/* Üretim Noktaları */}
            <Card className="p-4 border border-gray-200 bg-gray-50 hover:shadow-md transition-shadow duration-300">
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                <Printer className="w-5 h-5 mr-2 text-blue-600" />
                Üretim Noktaları
              </h4>
              
              {(formData.productionPoints.printer > 0 || formData.productionPoints.kitchenScreen > 0) ? (
                <div className="space-y-4">
                  {formData.productionPoints.printer > 0 && (
                    <div className="flex items-center">
                      <div className="w-12 h-12 mr-3 flex justify-center items-center">
                        <Printer className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Mutfak Yazıcısı</p>
                        <p className="text-sm text-gray-600">{formData.productionPoints.printer} adet</p>
                      </div>
                    </div>
                  )}
                  
                  {formData.productionPoints.kitchenScreen > 0 && (
                    <div className="flex items-center">
                      <div className="w-12 h-12 mr-3 flex justify-center items-center">
                        <Monitor className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Mutfak Ekranı</p>
                        <p className="text-sm text-gray-600">{formData.productionPoints.kitchenScreen} adet</p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-600">Seçilen üretim noktası bulunmamaktadır.</p>
              )}
            </Card>
            
            {/* Online Platform Entegrasyonları */}
            <Card className="p-4 border border-gray-200 bg-gray-50 hover:shadow-md transition-shadow duration-300">
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                <ShoppingBag className="w-5 h-5 mr-2 text-blue-600" />
                Online Platform Entegrasyonları
              </h4>
              
              {Object.entries(formData.platforms).some(([_, value]) => value) ? (
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(formData.platforms).map(([key, value]) => {
                    if (value) {
                      const platform = onlinePlatforms.find(p => p.id === key);
                      return platform ? (
                        <div 
                          key={key} 
                          className={`px-3 py-2 rounded-md text-sm font-medium ${platform.color}`}
                        >
                          {platform.name}
                        </div>
                      ) : null;
                    }
                    return null;
                  })}
                </div>
              ) : (
                <p className="text-gray-600">Seçilen platform bulunmamaktadır.</p>
              )}
            </Card>
          </div>
        </div>
      </Card>
      
      <div className="flex justify-center mt-8">
        <Button 
          onClick={onContinue}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
        >
          İletişim Bilgilerinizi Girin
        </Button>
      </div>
    </div>
  );
}
