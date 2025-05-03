import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entegrasyonlar | robotPOS",
  description: "robotPOS Entegrasyon çözümleri ile işletmenizi daha verimli yönetin. Harici sistemler ile kusursuz entegrasyon çalışmaları.",
};

export default function EntegrasyonlarLayout({
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
