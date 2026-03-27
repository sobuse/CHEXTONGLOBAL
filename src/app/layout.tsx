import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CHEXTON GLOBAL | Luxury Real Estate",
  description:
    "Premium real estate solutions tailored for clients in Nigeria and the diaspora.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-deep-teal">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <a
          href="https://wa.me/2349050083475"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-5 right-5 z-50 rounded-full bg-[#24D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#24D366]/30 transition hover:scale-105 md:hidden"
        >
          Chat on WhatsApp
        </a>
      </body>
    </html>
  );
}
