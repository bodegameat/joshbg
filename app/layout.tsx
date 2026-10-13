import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Josh Bryant-Gainer | Creative Director & Performance Strategist",
  description: "Brooklyn-based Creative Director & Performance Strategist helping high-growth companies scale digital channels while staying true to their brand.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
