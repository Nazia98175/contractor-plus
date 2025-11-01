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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable}`}
    >
      <Head>
        <script
          defer
          type="text/javascript"
          src="https://www.bugherd.com/sidebarv2.js?apikey=nre7tlm6cnhon4wmpdkbvq"
          async={true}
        ></script>
      </Head>
      <body className="font-jakarta">
        {children}
        <PushLapScript />
        <CookieBanner />
        <AccessibilityWidget lang="en" position="bottom-left" />
      </body>
    </html>
  );
}
