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
  title: "Zwami",
  description:
    "We connect Ukrainian citizens living outside Ukraine with trusted, multilingual lawyers who specialize in immigration, asylum, family, and civil law.",
  icons: {
    icon: "/zwami.svg",
  },
  openGraph: {
    title: "Zwami",
    type: "website",
    locale: "en_US",
    description:
      "We connect Ukrainian citizens living outside Ukraine with trusted, multilingual lawyers who specialize in immigration, asylum, family, and civil law.",
    siteName: "Zwami",
    url: "https://zwami.online",
    images: [
      {
        url: "https://zwami.online/zwami-graph.png",
        width: 1920,
        height: 1080,
        alt: "Zwami logo, featuring a blue with yellow accent color, displayed on a solid white background.",
        type: "image/png",
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
