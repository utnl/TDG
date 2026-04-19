import type { Metadata } from "next";
import { Geist, Rajdhani } from "next/font/google";
import "./globals.css";
import ClickSpark from "@/components/ClickSpark";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TD Games — 2D Art & Animation Studio",
  description:
    "TD Games is a Vietnam-based outsourcing studio specializing in 2D Art, Animation, and VFX for mobile games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${rajdhani.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-white">
        <ClickSpark />
        {children}
      </body>
    </html>
  );
}
