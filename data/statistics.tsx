import { Users, Building2, Award, Globe, Cog } from "lucide-react";

export const statistics = [
  {
    value: 10,
    label: "Ülkede Hizmet",
    suffix: "+",
    icon: <Globe className="h-8 w-8" />,
  },
  {
    value: 100,
    label: "Yerli Yazılım",
    prefix: "%",
    icon: <Cog className="h-8 w-8" />,
  },
  {
    value: 3000,
    label: "Şubede Aktif",
    suffix: "+",
    icon: <Building2 className="h-8 w-8" />,
  },
  {
    value: 10,
    label: "Çoklu Şube",
    suffix: "+",
    icon: <Users className="h-8 w-8" />,
  },
  {
    value: 360,
    label: "360° Çözümler",
    icon: <Award className="h-8 w-8" />,
  },
];