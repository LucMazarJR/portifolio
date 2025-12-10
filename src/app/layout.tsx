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
  title: "Portfólio | Desenvolvedor Full Stack",
  description: "Portfólio profissional de desenvolvedor Full Stack especializado em React, Next.js e Node.js",
  keywords: ["desenvolvedor", "full stack", "react", "nextjs", "nodejs", "portfolio"],
  authors: [{ name: "Seu Nome" }],
  openGraph: {
    title: "Portfólio | Desenvolvedor Full Stack",
    description: "Portfólio profissional de desenvolvedor Full Stack",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
