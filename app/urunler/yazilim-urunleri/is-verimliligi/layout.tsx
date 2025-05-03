import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İş Verimliliği | robotPOS",
  description: "robotPOS İş Verimliliği çözümü ile işletmenizi daha verimli yönetin. Mutfak ekranı ve mobil terminal ile operasyonel verimliliği artırın.",
};

export default function IsVerimliligiLayout({
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
