import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
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
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
