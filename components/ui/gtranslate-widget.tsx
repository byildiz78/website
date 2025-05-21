"use client";

import React, { useEffect } from "react";

export default function GTranslateWidget() {
  return (
    <>
      <div className="gtranslate_wrapper"></div>
      <script dangerouslySetInnerHTML={{
        __html: `window.gtranslateSettings = {"default_language":"tr","native_language_names":true,"url_structure":"sub_domain","languages":["tr","en","ru","az","ar"],"wrapper_selector":".gtranslate_wrapper","switcher_horizontal_position":"inline","float_switcher_open_direction":"bottom","flag_style":"3d"}`
      }} />
      <script src="https://cdn.gtranslate.net/widgets/latest/float.js" defer />
    </>
  );
}
