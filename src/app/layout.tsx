import { inter, montserrat, plusJakartaSans, spaceGrotesk } from "@/app/fonts";
import Head from "next/head";
import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./globals.css";
import "./style.css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable}`}
    >
      <Head>
        <script
          type="text/javascript"
          src="https://www.bugherd.com/sidebarv2.js?apikey=nre7tlm6cnhon4wmpdkbvq"
          async={true}
        ></script>
      </Head>
      <body>{children}</body>
    </html>
  );
}
