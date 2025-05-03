"use client";

import React from "react";

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

/**
 * CustomLink bileşeni, standart HTML <a> etiketi kullanarak sayfa içi navigasyonu sağlar.
 * Next.js'in Link bileşeni yerine kullanılır ve navigasyon sorunlarını çözer.
 */
export function CustomLink({ href, children, ...props }: CustomLinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

// Next.js Link bileşenini override etmek için bir wrapper
export default function Link({ href, children, ...props }: CustomLinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
