"use client";

import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import ToastProvider from "./components/ToastProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
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
    </>
  );
}
