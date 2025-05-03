import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stok Maliyet Yönetimi | robotPOS",
  description: "robotPOS Stok Maliyet Yönetimi çözümü ile işletmenizi daha verimli yönetin. Stok takibi, maliyet analizi ve raporlama araçları.",
};

export default function StokMaliyetLayout({
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