import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopTag from "@/components/toptag/TopTag";
import Background from "@/components/background/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Savinay Kumar",
  description: "Savinay Kumar Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} h-screen`}>
        <Background count={10} speed={0.1} />
        <TopTag />
        {children}
      </body>
    </html>
  );
}
