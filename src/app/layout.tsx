import Nav from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Next Url Shortener",
  description: "Next Url Shortener",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
