import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "../style.css";

import "../globals.css";

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
    <html lang="en">
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
