import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobil Terminaller | robotPOS",
  description: "robotPOS Mobil Terminaller ile işletmenizde hızlı ve esnek sipariş alma imkanı. Android işletim sistemi ve güçlü donanım özellikleriyle.",
};

export default function MobilTerminallerLayout({
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
