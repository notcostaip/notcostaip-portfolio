import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://notcostaip.site"),
  title: {
    default: "notcostaip | Builder e Desenvolvedor Full Stack",
    template: "%s | notcostaip",
  },
  description:
    "Site oficial de Pablo Henrick Costa Silva, conhecido como notcostaip (CNPJ 60.778.755/0001-43): desenvolvimento full stack, SaaS, IA, automação e e-commerce em Brasília-DF.",
  applicationName: "Pablo Henrick — notcostaip",
  authors: [{ name: "Pablo Henrick Costa Silva", url: "https://notcostaip.site" }],
  creator: "Pablo Henrick Costa Silva",
  publisher: "Pablo Henrick Costa Silva",
  category: "technology",
  keywords: [
    "Pablo Henrick Costa Silva",
    "notcostaip",
    "@notcostaip",
    "60.778.755/0001-43",
    "60778755000143",
    "CNPJ 60.778.755/0001-43",
    "Pablo Henrick Brasília",
    "desenvolvedor full stack",
    "criador de SaaS",
    "inteligência artificial",
    "automação empresarial",
    "e-commerce",
    "ColdconnectPay",
    "ColdconnectPay CRM",
    "iSHOPBOX",
    "dropshipping",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Pablo Henrick — notcostaip",
    title: "Pablo Henrick Costa Silva (notcostaip) | Builder",
    description: "Site oficial de Pablo Henrick Costa Silva, notcostaip: sistemas, SaaS, IA, automação e negócios digitais em Brasília-DF.",
    images: [{ url: "/images/gallery/optimized/03-builder-retrato.webp", width: 2048, height: 1299, alt: "Pablo Henrick Costa Silva, conhecido como notcostaip" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablo Henrick Costa Silva — notcostaip",
    description: "SaaS, inteligência artificial, automação e e-commerce.",
    creator: "@notcostaip",
    images: ["/images/gallery/optimized/03-builder-retrato.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="antialiased bg-gray-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-300">
        <LanguageProvider>
          <ScrollProgress />
          <Navbar />
          {children}
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
