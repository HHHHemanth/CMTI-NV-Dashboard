// app/layout.tsx  (root layout — KEEP THIS a server component, do NOT add "use client" here)
import "./globals.css"; // <-- only place global CSS should be imported
import React from "react";
import { Roboto_Flex } from "next/font/google";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
});
export const metadata = {
  title: "N&V Dashboard",
  description: "Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={robotoFlex.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
