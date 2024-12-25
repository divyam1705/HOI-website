
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';
import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google"
import { twMerge } from "tailwind-merge";
import { useRef } from 'react';
import { ScrollProvider } from './ScrollContext';

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "House Of India",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={twMerge(dmSans.className, "antialiased bg-black")}>
        <ScrollProvider>
          <Header />
          {children}
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
