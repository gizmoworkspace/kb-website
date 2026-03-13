import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
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
    <html lang="en" className={`${instrumentSerif.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
