import type { Metadata } from "next";
import { Space_Mono, Lato } from "next/font/google";
import "./global.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Madhav.ai",
  description: "India's first native legal AI platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}