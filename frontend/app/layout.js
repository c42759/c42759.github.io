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

export const metadata = {
  title: "Carlos Quintinha",
  description: "The digital home of Carlos Quintinha. Discover my experience in software architecture, read my tech blog, and explore my workspace and gaming interests.",
  openGraph: {
    images: [
      {
        url: "/avatar_2.jpg",
        width: 800,
        height: 800,
        alt: "Carlos Quintinha Avatar",
      },
    ],
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import StickyMenu from '@/components/StickyMenu';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background text-foreground font-sans selection:bg-cv-orange selection:text-white pb-20">
            <main className="flex flex-col items-center w-full">
              <StickyMenu />
              {children}
            </main>

            <footer className="text-center text-cv-light/50 text-sm mt-12 py-6 border-t border-cv-dark/30 max-w-4xl mx-auto w-full">
              &copy; {new Date().getFullYear()} Carlos Quintinha. Crafted with Next.js and Tailwind CSS.
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
