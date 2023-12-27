import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  manifest: "/manifest.json", // we are accessing our manifest file here
  title: "...",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  // ... other options
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon-192x192.png"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#84A59D" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
