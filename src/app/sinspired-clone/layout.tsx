import type { Metadata } from "next";
import "./globals.css";
import LayoutClient from "@/components/sinspired/LayoutClient";

export const metadata: Metadata = {
  title: "2D & 3D GAME ART STUDIO | Sinspired Studio",
  description: "Game art outsource - Sinspired Studio specializes in transforming creative ideas into vibrant art.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className="mdl-js">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Changa+One&family=Nunito+Sans:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/sinspired-styles.css" />
      </head>
      <body className="home page-template ast-desktop ast-plain-container ast-no-sidebar astra-4.3.1">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
