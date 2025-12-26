import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Lexend } from "next/font/google";
import App from "./app";
import author from "@/constants/author";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: `${author.name} - ${author.nickname}`,
  description: `${author.nickname}'s Portfolio`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={lexend.className}>
      <body
        className={cn(
          "antialiased min-h-screen transition-all duration-200 ease-out bg-background"
        )}
      >
        <App>{children}</App>
      </body>
    </html>
  );
}
