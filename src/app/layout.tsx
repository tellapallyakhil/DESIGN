import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startr — Launch Your Next Big Thing",
  description:
    "The AI-powered platform that turns your ideas into production-ready products. Build, ship, and scale faster than ever before.",
  keywords: ["SaaS", "AI", "startup", "platform", "launch", "build"],
  openGraph: {
    title: "Startr — Launch Your Next Big Thing",
    description:
      "The AI-powered platform that turns your ideas into production-ready products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
