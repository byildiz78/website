import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import MainLayout from "@/components/layout/MainLayout";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RobotPOS | Restoran ve Cafe Otomasyon Sistemi | Adisyon & Sipariş Yazılımı",
  description:
    "RobotPOS, cafe ve restoran işletmeleri için modern, kullanımı kolay ve kapsamlı satış noktası ve yönetim sistemi. 4000+ işletme tarafından tercih edilen otomasyon çözümü.",
  keywords: "restoran otomasyon, cafe otomasyon, adisyon sistemi, restaurant pos, sipariş takip, yemek sipariş sistemi",
  authors: [{ name: "RobotPOS" }],
  creator: "RobotPOS",
  publisher: "RobotPOS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.robotpos.com"),
  alternates: {
    canonical: "/",
    languages: {
      'tr': '/',
      'en': '/en',
      'ru': '/ru',
      'ar': '/ar',
    },
  },
  openGraph: {
    title: "RobotPOS | Restoran ve Cafe Otomasyon Sistemi",
    description: "Cafe ve restoranlar için modern, kullanımı kolay ve kapsamlı satış noktası ve yönetim sistemi.",
    url: "/",
    siteName: "RobotPOS",
    images: [
      {
        url: "/images/robotpos-logo.png",
        width: 1200,
        height: 630,
        alt: "RobotPOS Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RobotPOS | Restoran ve Cafe Otomasyon Sistemi",
    description: "Cafe ve restoranlar için modern, kullanımı kolay ve kapsamlı satış noktası ve yönetim sistemi.",
    images: ["/images/robotpos-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || "https://www.robotpos.com"} />
        <link rel="alternate" hrefLang="tr" href={process.env.NEXT_PUBLIC_SITE_URL || "https://www.robotpos.com"} />
        <link rel="alternate" hrefLang="en" href={`${process.env.NEXT_PUBLIC_SITE_URL}/en` || "https://www.robotpos.com/en"} />
        <link rel="alternate" hrefLang="ru" href={`${process.env.NEXT_PUBLIC_SITE_URL}/ru` || "https://www.robotpos.com/ru"} />
        <link rel="alternate" hrefLang="ar" href={`${process.env.NEXT_PUBLIC_SITE_URL}/ar` || "https://www.robotpos.com/ar"} />
        <link rel="alternate" hrefLang="x-default" href={process.env.NEXT_PUBLIC_SITE_URL || "https://www.robotpos.com"} />
      </head>
      <body className={inter.className}>
        <Providers>
          <MainLayout>{children}</MainLayout>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}