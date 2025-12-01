// src/app/layout.tsx
import "./globals.css"; // only place global CSS should be imported
import React from "react";

export const metadata = {
  title: "N&V Dashboard",
  description: "Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
