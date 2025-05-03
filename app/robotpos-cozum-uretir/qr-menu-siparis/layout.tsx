import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR Menü ile Temassız Sipariş | robotPOS",
  description: "robotPOS QR Menü çözümü ile hijyenik, basit ve etkin sipariş süreci. Kağıt menülerin yerini hızlıca alacak akıllı çözüm.",
};

export default function QrMenuSiparisLayout({
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
