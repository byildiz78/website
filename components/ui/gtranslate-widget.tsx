"use client";

import React, { useEffect } from "react";

export default function GTranslateWidget() {
  useEffect(() => {
    // Script'in daha önce yüklenip yüklenmediğini kontrol et
    if (document.querySelector('#gtranslate-settings-script') || 
        document.querySelector('#gtranslate-main-script')) {
      return;
    }
    
    // GTranslate ayarlarını ekle
    const settingsScript = document.createElement('script');
    settingsScript.id = 'gtranslate-settings-script';
    settingsScript.innerHTML = `window.gtranslateSettings = {"default_language":"tr","native_language_names":true,"url_structure":"sub_domain","languages":["tr","en","ru","az","ar"],"wrapper_selector":".gtranslate_wrapper","switcher_horizontal_position":"inline","float_switcher_open_direction":"bottom","flag_style":"3d"}`;
    document.head.appendChild(settingsScript);
    
    // GTranslate script'ini ekle
    const gtScript = document.createElement('script');
    gtScript.id = 'gtranslate-main-script';
    gtScript.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    gtScript.defer = true;
    document.head.appendChild(gtScript);
  }, []);

  return <div className="gtranslate_wrapper" />;
}
