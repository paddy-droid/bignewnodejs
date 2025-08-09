import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image"; // Import the Image component
import Script from 'next/script'; // Import the Script component
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviews from "@/components/GoogleReviews";
import FloatingCTAButton from "@/components/FloatingCTAButton";

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
      <head>
        <link rel="apple-touch-icon" href="/Images/Fensterservice ROWO Fensterreparatur Tulln, Wien und Niederösterreich.png" />
        <meta name="google-site-verification" content="EQPajf2paCExhJQbaP4P1rFPaS1zYxoN6kxwO1bPxUI" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <GoogleReviews />
        <Footer />
        <FloatingCTAButton />
        <a
          href="https://wa.me/+436644351622"
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <Image src="/Images/whatsapp-icon.png.png" alt="WhatsApp Icon" width={50} height={50} />
        </a>
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
