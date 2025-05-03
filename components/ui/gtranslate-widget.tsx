"use client";

import React from "react";
import Script from "next/script";

export function GTranslateWidget() {
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
              "url_structure": "sub_directory",
              "languages": ["tr", "en", "ru", "az", "ar"],
              "wrapper_selector": ".gtranslate_wrapper",
              "switcher_horizontal_position": "inline",
              "float_switcher_open_direction": "bottom",
              "flag_style": "3d"
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
