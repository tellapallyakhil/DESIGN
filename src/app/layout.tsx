import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startr Studio — High-Performance Web Creation & Optimization",
  description:
    "Bespoke web design, full-stack Next.js development, and technical Core Web Vitals optimization. We turn your digital presence into a growth engine.",
  keywords: ["web design", "Next.js agency", "web optimization", "Core Web Vitals", "SEO agency", "custom web development"],
  openGraph: {
    title: "Startr Studio — High-Performance Web Creation & Optimization",
    description:
      "Bespoke web design, Next.js development, and technical Core Web Vitals speed optimization.",
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
