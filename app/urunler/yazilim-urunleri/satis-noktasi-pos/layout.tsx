import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Satış Noktası (POS) | robotPOS",
  description: "robotPOS Satış Noktası (POS) çözümü ile işletmenizi daha verimli yönetin. Kolay kullanım, hızlı işlem ve güvenilir sistem.",
};

export default function POSLayout({
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