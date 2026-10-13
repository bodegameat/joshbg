import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { site } from "@/lib/content";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: `${site.line} ${site.bio}`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable} antialiased`}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
