import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter-tight/700.css";
import { CompanyProvider } from "@/lib/company-context";
import { ToastProvider } from "@/components/ToastProvider";
import { NavBar } from "@/components/NavBar";
import { UploadsProvider } from "@/context/UploadsContext";
import { ToastProvider as UploadsToastProvider } from "@/components/uploads/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 text-slate-900 font-sans min-h-screen">
        <UploadsProvider>
          <CompanyProvider>
            <UploadsToastProvider />
            <NavBar />
            {children}
          </CompanyProvider>
        </UploadsProvider>
      </body>
    </html>
  );
}
