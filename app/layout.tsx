import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zhao Ming",
  description: "Seasoned Blockchain Programmer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: any;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
          {children}
      </body>
    </html>
  );
}
