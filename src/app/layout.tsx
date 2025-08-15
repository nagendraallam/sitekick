import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionProvider from "@/components/SessionProvider";
import ChatWidget from "@/components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SiteKick.app - AI-Powered Business Growth Tools",
  description:
    "Grow your small business with AI chatbots, 5-star review boosters, and instant analytics. No coding required. Start your 14-day free trial today.",
  icons: {
    icon: [
      {
        url: "images/dog.png",
        type: "image/png",
      },
    ],
    shortcut: "images/dog.png",
    apple: "images/dog.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="corporate">
      <head>
        <link rel="icon" href="images/dog.png" />
        <link rel="icon" href="images/dog.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <SessionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ChatWidget />
        </SessionProvider>
      </body>
    </html>
  );
}
