import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "@/lib/styles.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VVH Destinations | Luxury Hospitality Representation",
  description:
    "Strategic representation and commercial growth firm for luxury hospitality properties. Market access, distribution optimization and revenue growth for premium hotels, resorts, and destinations.",
  keywords: [
    "luxury hospitality representation",
    "hotel commercial strategy",
    "GCC market access",
    "MENAT luxury distribution",
    "European hospitality markets",
    "revenue growth hospitality",
  ],
  openGraph: {
    title: "VVH Destinations",
    description: "Global Luxury Hospitality Representation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${montserrat.variable} font-body antialiased bg-cream text-richblack`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
