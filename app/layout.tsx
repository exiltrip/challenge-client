import type { Metadata } from "next";
import "@shared/styles/globals.css";

import { Navbar } from "@/widgets/Navbar";



export const metadata: Metadata = {
  title: "Challenger",
  description: "Challenger - сервис, который ставит тебе вызовы!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body >
          <Navbar />
          <div>{children}</div>
      </body>
    </html>
  );
}
