import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TheReactUIProvider } from "../components/context/ThemeContext";
import { GlobalLayout } from "../components/layout/GlobalLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "theReactUI - Lightning Fast Minimalist UI Library",
  description: "Pure Black & White • No Backgrounds • Borders Only • No Border Radius",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TheReactUIProvider>
          <GlobalLayout>{children}</GlobalLayout>
        </TheReactUIProvider>
      </body>
    </html>
  );
}
