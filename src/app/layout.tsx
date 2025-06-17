import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { satoshi } from "@/lib/fonts";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Tiago's Portfolio",
  description: "A showcase of my web development projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${satoshi.className} antialiased bg-bg-900 text-text-primary`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster position="bottom-center" theme="light" />
      </body>
    </html>
  );
}
