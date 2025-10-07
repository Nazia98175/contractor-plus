"use client";
import Script from "next/script";

interface AccessibilityWidgetProps {
  lang?: "en" | "es" | "fr";
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}

export default function AccessibilityWidget({
  lang = "en",
  position = "bottom-left",
}: AccessibilityWidgetProps) {
  return (
    <Script
      defer
      src="https://widget.webability.io/widget.min.js"
      strategy="afterInteractive"
      data-asw-lang={lang}
      data-asw-position={position}
      onLoad={() => console.log("Accessibility widget loaded!")}
    />
  );
}
