// app/layout.tsx  (root layout — KEEP THIS a server component)
import "./globals.css";
import React from "react";

export const metadata = {
  title: "N&V Dashboard",
  description: "Dashboard",
  icons: {
    icon: "/logos/logocmti3.png",             // ← favicon for browser tab
    shortcut: "/logos/logocmti3.png",
    apple: "/logos/logocmti3.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
