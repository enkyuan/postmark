import "@monorepo/ui/globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "../lib/theme-provider";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Postmark",
  description: "Indexing for your books, articles, and notes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
