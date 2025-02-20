import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@shared/styles/file.css";

import { Navbar } from "@/widgets/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Challenge Generator",
  description: "Генератор челленджей - сервис, который ставит тебе вызовы, которые ты должен победить!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
          <Navbar />
          <div>{children}</div>
      </body>
    </html>
  );
}
