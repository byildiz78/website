export type FormDataType = {
  devices: {
    touchTerminal: number;
    waiterTerminal: number;
  };
  productionPoints: {
    printer: number;
    kitchenScreen: number;
  };
  platforms: {
    yemeksepeti: boolean;
    getir: boolean;
    foody: boolean;
    migros: boolean;
    trendyol: boolean;
    [key: string]: boolean; // Index signature
  };
  contact: {
    name: string;
    company: string;
    email: string;
    phone: string;
    notes: string;
  };
};

export type PlatformType = {
  id: string;
  name: string;
  color: string;
};
