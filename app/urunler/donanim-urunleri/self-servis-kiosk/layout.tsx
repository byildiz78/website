import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self Servis Kiosk | robotPOS",
  description: "robotPOS Self Servis Kiosk çözümü ile kasiyere ihtiyaç duyulmadan sipariş verme ve ödeme alma imkanı. Modern ve kullanıcı dostu arayüz.",
};

export default function SelfServisKioskLayout({
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
