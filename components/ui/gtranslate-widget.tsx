"use client";

import React, { useEffect } from "react";
import Script from "next/script";

export function GTranslateWidget() {
  // Sayfa yüklendikten sonra çeviriyi zorlamak için basit bir yaklaşım
  useEffect(() => {
    // Sayfa tamamen yüklendikten sonra çalıştır
    const handleLoad = () => {
      // GTranslate'in yüklenmesini bekle
      setTimeout(() => {
        // Dil değiştiğinde tüm sayfayı yeniden yükle (en basit çözüm)
        const gtElements = document.querySelectorAll('.gt_float_switcher a');
        gtElements.forEach(el => {
          el.addEventListener('click', (e) => {
            const lang = (e.currentTarget as HTMLElement).getAttribute('data-gt-lang');
            if (lang && lang !== 'tr') {
              // Seçilen dili localStorage'a kaydet
              localStorage.setItem('gt_selected_lang', lang);
              
              // Sayfayı yeniden yükle
              setTimeout(() => {
                window.location.reload();
              }, 300);
            }
          });
        });
        
        // Sayfa yüklendiğinde önceki seçili dili kontrol et
        const savedLang = localStorage.getItem('gt_selected_lang');
        if (savedLang && savedLang !== 'tr') {
          const w = window as any;
          if (w.doGTranslate) {
            setTimeout(() => {
              w.doGTranslate('tr|' + savedLang);
            }, 500);
          }
        }
      }, 2000);
    };

    window.addEventListener('load', handleLoad);
    
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <div className="gtranslate_wrapper"></div>
      <Script
        id="gtranslate-settings"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.gtranslateSettings = {
              "default_language": "tr",
              "native_language_names": true,
              "detect_browser_language": true,
              "languages": ["tr", "en", "ru", "az", "ar"],
              "wrapper_selector": ".gtranslate_wrapper",
              "switcher_horizontal_position": "inline",
              "float_switcher_open_direction": "bottom",
              "flag_style": "3d",
              "alt_flags": {"en":"usa","ar":"sa"}
            }
          `,
        }}
      />
      <Script
        id="gtranslate-script"
        src="https://cdn.gtranslate.net/widgets/latest/float.js"
        strategy="afterInteractive"
      />
      <style jsx global>{`
        /* GTranslate widget z-index ayarları */
        .gt_float_switcher {
          z-index: 49 !important; /* Header'ın z-index değerinden düşük */
        }
      `}</style>
    </>
  );
}
