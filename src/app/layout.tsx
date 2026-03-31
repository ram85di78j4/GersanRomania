import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gersan Romania - Iluminat LED Premium, Automatizări & Stații Încărcare EV",
  description: "Gersan Romania oferă soluții complete de iluminat LED comercial, industrial și rezidențial, automatizări inteligente și infrastructură de încărcare pentru vehicule electrice. Tehnologie avansată, eficiență energetică, calitate superioară.",
  keywords: "iluminat LED, iluminat comercial, iluminat industrial, iluminat rezidențial, benzi LED, stații încărcare EV, automatizări, case inteligente, Gersan Romania",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
