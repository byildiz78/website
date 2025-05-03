import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dokunmatik Terminal | robotPOS",
  description: "robotPOS Sektörel Dayanımlı Dokunmatik PC Terminal. 7×24 Kullanıma uygun Endüstriyel Donanım seçeneklerimiz ile Sorunsuz ve Kesintisiz bir iş akışı.",
};

export default function DokunmatikTerminalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
