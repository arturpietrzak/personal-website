import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.scss";
import LanguageOptions from "@/components/languageOptions/languageOptions";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Artur Pietrzak | IT Engineer & Web Developer",
  description: "Personal website and portfolio of Artur Pietrzak, an IT Engineer and Web Developer specialized in React, Next.js, TypeScript, and AI/ML systems.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://arturpietrzak.com",
    title: "Artur Pietrzak | IT Engineer & Web Developer",
    description: "Personal website and portfolio of Artur Pietrzak, an IT Engineer and Web Developer specialized in React, Next.js, TypeScript, and AI/ML systems.",
    siteName: "Artur Pietrzak",
  },
  twitter: {
    card: "summary",
    title: "Artur Pietrzak | IT Engineer & Web Developer",
    description: "Personal portfolio of Artur Pietrzak — React, Next.js, TypeScript, AI/ML.",
  },
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
          href="/icon"
          type="image/svg+xml"
        />
        <meta name="theme-color" content="#090a0f" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
