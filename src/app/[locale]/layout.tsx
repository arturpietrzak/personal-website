import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.scss";
import LanguageOptions from "@/components/languageOptions/languageOptions";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale, getTranslations } from "next-intl/server";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://arturpietrzak.com"),
    title: {
      template: "%s | Artur Pietrzak",
      default: t("title"),
    },
    description: t("description"),
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      languages: {
        en: "/en",
        pl: "/pl",
      },
    },
    openGraph: {
      type: "website",
      title: t("title"),
      description: t("description"),
      siteName: "Artur Pietrzak",
    },
    twitter: {
      card: "summary",
      title: t("title"),
      description: t("description"),
    },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#090a0f',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg+xml"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <LanguageOptions />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
