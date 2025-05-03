"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { DefaultSections } from "./DefaultSections";
import { useLayoutStore } from "@/lib/store";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

interface MainLayoutProps {
  children: ReactNode;
  hideDefaultSections?: boolean;
}

export default function MainLayout({ children, hideDefaultSections = false }: MainLayoutProps) {
  const { layout } = useLayoutStore();
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main 
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`flex-grow pt-16 md:pt-20 ${layout === "boxed" ? "max-w-7xl mx-auto w-full px-4" : ""}`}
        >
          {children}
          {!hideDefaultSections && <DefaultSections />}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ScrollToTop />
    </div>
  );
}