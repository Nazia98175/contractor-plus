import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ParticlesComponent from "@/components/common/ParticlesComponent";
import SmoothScrollSetup from "@/components/common/SmoothScroll";
import { getFooter, getHeader } from "@/services/layout";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { cookies } from "next/headers";
import NextTopLoader from "nextjs-toploader";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const cookiesStore = await cookies();
  const profileData = cookiesStore.get("LOGGED_IN_USER_INFO")
    ? JSON.parse(cookiesStore.get("LOGGED_IN_USER_INFO")?.value as string)
    : null;

  const locale = await getLocale();
  const messages = await getMessages({ locale });
  const useParams = await params;
  const [header, footer] = await Promise.all([
    getHeader(
      useParams?.locale,
      "&populate[btnText]=true&populate[headerMain][on][layout.main-title][populate][headerSubList][populate][links][populate][image]=true&populate[headerMain][on][layout.main-title][populate][headerSubList][populate][links][populate][bottomLinks]=true&populate[headerMain][on][layout.main-title][populate][headerSubList][populate][links][populate][icon]=true",
    ),
    getFooter(
      useParams?.locale,
      "&populate[sections][populate]=*&populate[bottomLinks][populate]=*",
    ),
  ]);

  return (
    <>
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        
      <SmoothScrollSetup />
      <BackToTop />
      <NextTopLoader
        color="#ac0d0e"
        initialPosition={0.1}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={400}
      />
      <NextIntlClientProvider messages={messages}>
        <Header header={header?.data} profileData={profileData} />
        {children}
        <Footer footer={footer?.data} />
        <ParticlesComponent id="star-particles" />
      </NextIntlClientProvider>
    </>
  );
}
