"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import WalletContextProvider from "../components/ConnectWallet/WalletContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <WalletContextProvider>
          <Toaster position="top-center" reverseOrder={false} />
          {children}
        </WalletContextProvider>
      </body>
    </html>
  );
}
