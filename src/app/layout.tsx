import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fensterservice Niederösterreich & Wien - Reparatur & Wartung",
  description: "Ihr zuverlässiger Partner für Fensterreparatur und Wartung in Niederösterreich und Wien. Schnelle Hilfe bei Notfällen.",
  metadataBase: new URL('https://fensterservice.at'),
  openGraph: {
    title: 'Fensterservice Niederösterreich & Wien',
    description: 'Ihr zuverlässiger Partner für Fensterreparatur und Wartung in Niederösterreich und Wien.',
    url: 'https://fensterservice.at',
    siteName: 'Fensterservice',
    locale: 'de_AT',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
