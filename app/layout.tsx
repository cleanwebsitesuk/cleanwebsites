import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cleanwebsites.co.uk"),
  title: {
    default: "Clean Websites | Professional websites built in 24 hours",
    template: "%s | Clean Websites",
  },
  description:
    "Professional websites for UK businesses. Clean, mobile-first websites designed, built and launched in 24 hours.",
  keywords: [
    "web design UK",
    "small business website",
    "website built in 24 hours",
    "professional business website",
    "local business website",
    "website design for trades",
    "website design for salons",
    "website design for restaurants",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Clean Websites | Professional websites built in 24 hours",
    description:
      "Professional websites for UK businesses. Clean, mobile-first websites designed, built and launched in 24 hours.",
    url: "https://cleanwebsites.co.uk",
    siteName: "Clean Websites",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clean Websites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clean Websites | Professional websites built in 24 hours",
    description:
      "Professional websites for UK businesses. Clean, mobile-first websites designed, built and launched in 24 hours.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
