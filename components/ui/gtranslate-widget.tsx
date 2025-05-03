"use client";

import React, { useEffect } from "react";
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
              "languages": ["tr", "en", "ru", "ar"],
              "wrapper_selector": ".gtranslate_wrapper",
              "switcher_horizontal_position": "inline",
              "float_switcher_open_direction": "bottom",
              "flag_style": "3d",
              "custom_domains": {
                "en": "localhost:3000/en",
                "ru": "localhost:3000/ru",
                "ar": "localhost:3000/ar",
                "tr": "localhost:3000"
              }
            }
          `,
        }}
      />
      <Script
        id="gtranslate-script"
        src="https://cdn.gtranslate.net/widgets/latest/float.js"
        strategy="afterInteractive"
      />
    </>
  );
}
