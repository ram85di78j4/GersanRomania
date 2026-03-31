import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GERSAN ROMANIA - Soluții Integrate LED & EV | Iluminat Premium, Automatizări & Stații Încărcare",
  description: "GERSAN ROMANIA - Partenerul tău de încredere pentru soluții integrate de iluminat LED, automatizare inteligentă și infrastructură de încărcare EV. Proiectare profesională, execuție impecabilă, suport dedicat pentru spații comerciale, industriale și rezidențiale.",
  keywords: "GERSAN ROMANIA, iluminat LED, soluții integrate LED, iluminat comercial, iluminat industrial, iluminat rezidențial, benzi LED RGB, stații încărcare EV, automatizări inteligente, case smart, infrastructură EV, DMX, DALI, București, România",
  authors: [{ name: "GERSAN ROMANIA" }],
  creator: "GERSAN ROMANIA",
  publisher: "GERSAN ROMANIA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gersanromania.ro'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "GERSAN ROMANIA - Soluții Integrate LED & EV",
    description: "Partenerul tău de încredere pentru soluții integrate de iluminat LED premium, automatizare inteligentă și infrastructură de încărcare EV. Proiectare profesională, execuție impecabilă, suport dedicat.",
    url: 'https://gersanromania.ro',
    siteName: 'GERSAN ROMANIA',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GERSAN ROMANIA - Soluții Integrate LED & EV',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "GERSAN ROMANIA - Soluții Integrate LED & EV",
    description: "Partenerul tău de încredere pentru soluții integrate de iluminat LED premium, automatizare inteligentă și infrastructură de încărcare EV.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
