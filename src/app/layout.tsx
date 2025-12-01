// src/app/layout.tsx
import "./globals.css";
import React from "react";

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
