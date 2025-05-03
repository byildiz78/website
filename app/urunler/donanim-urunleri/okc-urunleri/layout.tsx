import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ÖKC Ürünleri | robotPOS",
  description: "robotPOS ÖKC (Ödeme Kaydedici Cihaz) ürünleri. Ingenico Move5000F ve diğer yeni nesil ödeme çözümleri ile işletmenizin ihtiyaçlarını karşılayın.",
};

export default function OkcUrunleriLayout({
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
