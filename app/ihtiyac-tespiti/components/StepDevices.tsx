import React from "react";
import { Monitor, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { FormDataType } from "@/app/ihtiyac-tespiti/types";

interface StepDevicesProps {
  formData: FormDataType;
  updateCount: (section: 'devices' | 'productionPoints', field: string, increment: number) => void;
}

export function StepDevices({ formData, updateCount }: StepDevicesProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center mb-6">Cihaz İhtiyacınızı Belirleyin</h2>
      
      <Card className="p-6 hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3 flex justify-center">
            <Monitor className="w-40 h-40 text-blue-600" />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Monitor className="mr-2 text-blue-600" />
              Dokunmatik Terminal
            </h3>
            <p className="text-gray-600 mb-4">
              Kasa noktalarında kullanılacak dokunmatik ekranlı POS terminalleri
            </p>
            <div className="flex items-center">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => updateCount('devices', 'touchTerminal', -1)}
                disabled={formData.devices.touchTerminal === 0}
              >
                -
              </Button>
              <span className="mx-4 text-xl font-semibold w-10 text-center">
                {formData.devices.touchTerminal}
              </span>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => updateCount('devices', 'touchTerminal', 1)}
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
            <Smartphone className="w-40 h-40 text-blue-600" />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Smartphone className="mr-2 text-blue-600" />
              Garson El Terminali
            </h3>
            <p className="text-gray-600 mb-4">
              Garsonların sipariş almak için kullanacağı mobil el terminalleri
            </p>
            <div className="flex items-center">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => updateCount('devices', 'waiterTerminal', -1)}
                disabled={formData.devices.waiterTerminal === 0}
              >
                -
              </Button>
              <span className="mx-4 text-xl font-semibold w-10 text-center">
                {formData.devices.waiterTerminal}
              </span>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => updateCount('devices', 'waiterTerminal', 1)}
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
