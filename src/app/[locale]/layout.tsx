import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "../globals.css";
import BackToTop from "@/components/common/BackToTop";
import { inter, montserrat, plusJakartaSans, spaceGrotesk } from "@/app/fonts";
import Footer from "@/components/common/Footer";
import { getHomePage } from "@/services/homepage";
import { getFooter } from "@/services/layout";
import ParticlesComponent from "@/components/common/ParticlesComponent";
export const metadata: Metadata = {
  title:
    "Contractor - The only operating system for build & service contractors",
  description:
    "All the power of big software, none of the pain. One platform—not six—to manage jobs, crews, customers, and growth.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const locale = await getLocale();
  const messages = await getMessages({ locale });
  const useParams = await params;

  const [homePageContent, contractPlatformsData, footer] = await Promise.all([
    getHomePage(useParams.locale, "&populate=*"),
    getHomePage(
      useParams.locale,
      "&populate[platforms][populate][title]=*&populate[platforms][populate][platforms]=*",
    ),
    getFooter(
      useParams?.locale,
      "&populate[sections][populate]=*&populate[bottomLinks]=*",
    ),
  ]);
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <BackToTop />
        <NextIntlClientProvider messages={messages}>
          {/* <Header header={header?.data?.navbar} /> */}
          {children}
          {/* <Footer footer={footer?.data} /> */}
          <ParticlesComponent id="star-particles" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
