import SmoothScroll from "@/components/common/SmoothScroll";
import Head from "next/head";
import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./globals.css";
import "./style.css";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <Head>
        <script
          type="text/javascript"
          src="https://www.bugherd.com/sidebarv2.js?apikey=nre7tlm6cnhon4wmpdkbvq"
          async={true}
        ></script>
      </Head>
      <body><SmoothScroll />
      {children}</body>
      
    </html>
  );
}
