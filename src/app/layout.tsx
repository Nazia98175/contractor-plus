import { inter, montserrat, plusJakartaSans, spaceGrotesk } from "@/app/fonts";
import AccessibilityWidget from "@/components/scripts/AccessibilityWidget";
import CookieBanner from "@/components/scripts/CookieBanner";
import PushLapScript from "@/components/scripts/PushLapScript";
import Head from "next/head";
import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
import "./resources.css";
import "./style.css";
import BugHerdScript from "@/components/scripts/BugHerd";
import GoogleTagManager from "@/components/scripts/GoogleTagManager";
import MetaPixel from "@/components/scripts/MetaPixel";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <BugHerdScript />
        <GoogleTagManager />
        <MetaPixel />
      </head>
      <body className="font-jakarta">
        {children}
        <PushLapScript />
        <CookieBanner />
        <AccessibilityWidget lang="en" position="bottom-left" />
      </body>
    </html>
  );
}
