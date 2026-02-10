import React from "react"
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lora } from "next/font/google";

import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Una Invitacion Especial Para Ti",
  description: "Una invitacion romantica de San Valentin llena de amor",
};

export const viewport: Viewport = {
  themeColor: "#FF1744",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${lora.variable} font-serif antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
