"use client";
import Script from "next/script";

export default function CookieBanner() {
  return (
    <Script
      defer
      src="https://app.termly.io/resource-blocker/3390c5ff-eeb4-4a4b-a17a-249e4c421f7c?autoBlock=on"
      strategy="afterInteractive"
      onLoad={() => console.log("Accessibility widget loaded!")}
    />
  );
}
