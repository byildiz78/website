import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raporlama ve Analiz | robotPOS",
  description: "robotPOS Raporlama ve Analiz çözümü ile işletmenizi daha verimli yönetin. Detaylı raporlama ve analiz araçları ile verilerinizi kontrol edin.",
};

export default function RaporlamaVeAnalizLayout({
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
