import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { DefaultSections } from "./DefaultSections";

interface MainLayoutProps {
  children: ReactNode;
  hideDefaultSections?: boolean;
}

export default function MainLayout({ children, hideDefaultSections = false }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        {children}
        {!hideDefaultSections && <DefaultSections />}
      </main>
      <Footer />
    </div>
  );
}