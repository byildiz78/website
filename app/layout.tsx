import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import MainLayout from "@/components/layout/MainLayout";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

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
    canonical: "https://www.robotpos.com",
    languages: {
      'tr': 'https://www.robotpos.com',
      'ru': 'https://ru.robotpos.com',
      'az': 'https://az.robotpos.com',
      'ar': 'https://ar.robotpos.com',
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
        <meta name="google-site-verification" content="ql9L6tHWIhoEb5U2Dw-VXI2yrBSdqCmUq52al2gO7oY" />
        <link rel="canonical" href="https://www.robotpos.com" />
        <link rel="alternate" hrefLang="tr" href="https://www.robotpos.com" />
        <link rel="alternate" hrefLang="ru" href="https://ru.robotpos.com" />
        <link rel="alternate" hrefLang="az" href="https://az.robotpos.com" />
        <link rel="alternate" hrefLang="ar" href="https://ar.robotpos.com" />
        <link rel="alternate" hrefLang="x-default" href="https://www.robotpos.com" />
        
        {/* CSP meta etiketini kaldırdık */}
        
        {/* Facebook Pixel Code */}
        <Script id="facebook-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '139620993426526');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=139620993426526&ev=PageView&noscript=1"
          />
        </noscript>
        
        {/* Google Ads Tag */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=AW-966206215"
          strategy="lazyOnload"
        />
        <Script id="google-ads" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-966206215');
          `}
        </Script>
        
        {/* Event snippet for Telefon Takibi AdRoket */}
        <Script id="google-conversion" strategy="lazyOnload">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-966206215/8P40CL3u4qIBEIfG3MwD',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
        
        {/* Google Analytics 4 */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-7XYGT311WK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7XYGT311WK');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        
        <Providers>
          <MainLayout>{children}</MainLayout>
          <Toaster />
        </Providers>
        
        {/* Bitrix24 Call Tracker */}
        <Script id="bitrix24-call-tracker" strategy="lazyOnload">
          {`
            (function(w,d,u){
              var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
              var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
            })(window,document,'https://cdn.bitrix24.com.tr/b30736271/crm/tag/call.tracker.js');
          `}
        </Script>
        {/* End Bitrix24 Call Tracker */}
      </body>
    </html>
  );
}