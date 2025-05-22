import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ogZwami from "./og-zwami.png";

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
  metadataBase: new URL("https://zwami.online"),
  openGraph: {
    title: "Zwami",
    type: "website",
    description:
      "We connect Ukrainian citizens living outside Ukraine with trusted, multilingual lawyers who specialize in immigration, asylum, family, and civil law.",
    siteName: "Zwami",
    images: {
      url: ogZwami.src,
      width: ogZwami.width,
      height: ogZwami.height,
      alt: "Zwami",
    },
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
