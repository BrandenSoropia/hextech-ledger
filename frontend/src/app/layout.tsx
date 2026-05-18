import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@styles/globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hextech Ledger",
  description: "Fan-made Riftbound Competitive VOD and Learning Hub.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Fill screen using Tailwind source: https://stackoverflow.com/a/68083692 */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-carbon-back min-h-screen flex flex-col`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
