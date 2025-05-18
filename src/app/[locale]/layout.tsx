import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "../globals.css";
import BackToTop from "@/components/common/BackToTop";
import { inter, montserrat, plusJakartaSans, spaceGrotesk } from "@/app/fonts";
export const metadata: Metadata = {
  title:
    "Contractor - The only operating system for build & service contractors",
  description:
    "All the power of big software, none of the pain. One platform—not six—to manage jobs, crews, customers, and growth.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages({ locale });

  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <BackToTop />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
