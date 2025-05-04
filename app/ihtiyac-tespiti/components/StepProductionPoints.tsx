import React from "react";
import { Monitor, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { FormDataType } from "@/app/ihtiyac-tespiti/types";

interface StepProductionPointsProps {
  formData: FormDataType;
  updateCount: (section: 'devices' | 'productionPoints', field: string, increment: number) => void;
}

export function StepProductionPoints({ formData, updateCount }: StepProductionPointsProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center mb-6">Üretim Noktaları İhtiyacınızı Belirleyin</h2>
      
      <Card className="p-6 hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3 flex justify-center">
            <Printer className="w-40 h-40 text-blue-600" />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Printer className="mr-2 text-blue-600" />
              Mutfak Yazıcısı
            </h3>
            <p className="text-gray-600 mb-4">
              Siparişlerin mutfakta yazdırılması için termal yazıcılar
            </p>
            <div className="flex items-center">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => updateCount('productionPoints', 'printer', -1)}
                disabled={formData.productionPoints.printer === 0}
              >
                -
              </Button>
              <span className="mx-4 text-xl font-semibold w-10 text-center">
                {formData.productionPoints.printer}
              </span>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => updateCount('productionPoints', 'printer', 1)}
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </Card>
      
      <Card className="p-6 hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3 flex justify-center">
            <Monitor className="w-40 h-40 text-blue-600" />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Monitor className="mr-2 text-blue-600" />
              Mutfak Ekranı
            </h3>
            <p className="text-gray-600 mb-4">
              Siparişlerin mutfakta dijital olarak görüntülenmesi için ekranlar
            </p>
            <div className="flex items-center">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => updateCount('productionPoints', 'kitchenScreen', -1)}
                disabled={formData.productionPoints.kitchenScreen === 0}
              >
                -
              </Button>
              <span className="mx-4 text-xl font-semibold w-10 text-center">
                {formData.productionPoints.kitchenScreen}
              </span>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => updateCount('productionPoints', 'kitchenScreen', 1)}
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
