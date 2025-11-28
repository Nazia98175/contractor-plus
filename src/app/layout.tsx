import { inter, montserrat, plusJakartaSans, spaceGrotesk } from "@/app/fonts";
import AccessibilityWidget from "@/components/scripts/AccessibilityWidget";
import CookieBanner from "@/components/scripts/CookieBanner";
import GoogleTagManager from "@/components/scripts/GoogleTagManager";
import MetaPixel from "@/components/scripts/MetaPixel";
import PushLapScript from "@/components/scripts/PushLapScript";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
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
import LeadsyScript from "@/components/scripts/Leadsy";

export const metadata: Metadata = {
  icons: {
    icon: "./favicon.ico",
  },
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <GoogleTagManager />
        <LeadsyScript />
        <MetaPixel />
      </head>
      <body className="font-jakarta">
        {children}
        <PushLapScript />
        <CookieBanner />
        <AccessibilityWidget lang="en" position="bottom-left" />
        <SpeedInsights />
      </body>
    </html>
  );
}
