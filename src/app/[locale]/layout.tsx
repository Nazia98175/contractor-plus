import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ParticlesComponent from "@/components/common/ParticlesComponent";
import SmoothScrollSetup from "@/components/common/SmoothScroll";
import { getFooter, getHeader } from "@/services/layout";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Free to start, free to stay. Level up when you’re ready.",
  description:
    "What the other guys charge extra for, Contractor+ offers without hidden charges. Upgrade when you need more firepower to grow.",
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

  const [header, footer] = await Promise.all([
    getHeader(
      useParams?.locale,
      "&populate[btnText]=true&populate[headerMain][on][layout.main-title][populate][headerSubList][populate][links][populate][image]=true&populate[headerMain][on][layout.main-title][populate][headerSubList][populate][links][populate][bottomLinks]=true",
    ),
    getFooter(useParams?.locale, "&populate[sections][populate]=*"),
  ]);

  return (
    <>
      <SmoothScrollSetup />
      <BackToTop />
      <NextIntlClientProvider messages={messages}>
        <Header header={header?.data} />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <Footer footer={footer?.data} />
          </div>
        </div>
        <ParticlesComponent id="star-particles" />
      </NextIntlClientProvider>
    </>
  );
}
