import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.scss";
import Navbar from "@/components/navbar/navbar";
import LanguageOptions from "@/components/languageOptions/languageOptions";
import { useTranslations } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artur Pietrzak",
  description: "IT engineer and developer",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const t = useTranslations("Navigation");

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navbar linkNames={{ home: t("home"), projects: t("projects") }} />
        {children}
        <LanguageOptions />
      </body>
    </html>
  );
}
