import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { josefinSans } from "./fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xin Xiang",
  description: "Portfolio of a Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={josefinSans.className}>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
