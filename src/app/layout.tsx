import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Privacy Policy | AzTU LMS App",
  description: "Privacy policy for the AzTU LMS community-built mobile app.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex min-h-screen flex-col bg-bg text-text">{children}</body>
    </html>
  );
}
