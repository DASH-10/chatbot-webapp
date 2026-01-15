import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

// Load the Manrope font and expose it as a CSS variable.
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Omar's Kebab House",
  description:
    "Authentic kebab and shawarma in town with warm hospitality and fresh ingredients.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} bg-white text-slate-900 antialiased`}>
        {/* Shared page structure: navbar -> page content -> footer */}
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        {/* Floating chat widget that stays on every page */}
        <ChatWidget />
      </body>
    </html>
  );
}
