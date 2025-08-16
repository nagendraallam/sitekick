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
        url: "images/favicon.ico",
        type: "image/x-icon",
      },
    ],
    shortcut: "images/favicon.ico",
    apple: "images/favicon.ico",
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
        <link rel="icon" href="images/favicon.ico" />
        <link rel="icon" href="images/favicon.ico" />

        {/* SiteKick AI Chatbot */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.SiteKickConfig = {
                "projectId": "68a0b1bbc93da7356cf02bad",
                "aiName": "Luna",
                "position": "bottom-right",
                "isActive": true
              };
            `,
          }}
        />
        <script async src="https://www.sitekick.app/embed.js" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <SessionProvider>
          <Navbar />

          <main className="flex-1">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
