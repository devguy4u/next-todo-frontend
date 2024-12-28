import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "./components/Logo";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "A Simple Todo List Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full min-h-screen bg-[#1A1A1A] text-white">
          {/* Logo */}
          <header className="h-[200px] bg-[#0D0D0D]">
            <Logo />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
