import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kayden Benfield | Luxury Real Estate Relocation to Charlotte, NC",
  description:
    "Helping high-income families from NYC, DC, and LA capture the full financial and lifestyle arbitrage of relocating to Charlotte. Licensed NC Broker with INNOVATE Real Estate.",
  openGraph: {
    title: "Kayden Benfield | Luxury Real Estate Relocation to Charlotte, NC",
    description:
      "Your $350K salary should feel like $350K. Charlotte makes the math work.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
