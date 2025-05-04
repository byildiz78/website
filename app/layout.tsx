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
        
        {/* CSP meta etiketini kaldırdık */}
        
        {/* Facebook Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
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
            alt=""
            fetchPriority="low"
          />
        </noscript>
        {/* End Facebook Pixel Code */}
        
        {/* Google Ads Tag */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=AW-966206215"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-966206215');
          `}
        </Script>
        {/* End Google Ads Tag */}
        
        {/* Event snippet for Telefon Takibi AdRoket */}
        <Script id="google-conversion" strategy="afterInteractive">
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
        {/* End Event snippet */}
        
        {/* Google Tag Manager */}
        <Script id="gtm-script-1" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M659LKN');
          `}
        </Script>
        {/* End Google Tag Manager */}
        
        {/* Google Tag Manager (2nd tag) */}
        <Script id="gtm-script-2" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WWJC785H');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) - Using dangerouslySetInnerHTML for exact HTML format */}
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M659LKN" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        {/* End Google Tag Manager (noscript) */}
        
        {/* Google Tag Manager (noscript) - Using dangerouslySetInnerHTML for exact HTML format */}
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WWJC785H" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        {/* End Google Tag Manager (noscript) */}
        
        <Providers>
          <MainLayout>{children}</MainLayout>
          <Toaster />
        </Providers>
        
        {/* Bitrix24 Call Tracker */}
        <Script id="bitrix24-call-tracker" strategy="afterInteractive">
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