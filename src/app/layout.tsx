import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex items-center justify-between `}>
        <div className="min-w-[200px] min-h-screen px-[10%]">
          <Sidebar />
        </div>
        <main className="grid w-full h-full">
          <div className="p-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
