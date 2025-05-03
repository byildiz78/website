import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sadakat ve Kazanç Arttırıcı Çözümler | robotPOS",
  description: "robotPOS Müşteri Sadakat Yönetimi Sistemi ile müşteri bağlılığını artırın, sadakat programları oluşturun ve kazancınızı yükseltin.",
};

export default function SadakatVeKazancArttiriciCozumlerLayout({
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
