"use client";

import "./globals.css";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "./_components/theme-provider";
import ToastProvider from "./_components/ToastProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={manrope.variable}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <main>{children}</main>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
