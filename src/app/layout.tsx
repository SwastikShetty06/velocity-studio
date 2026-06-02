import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mustang NASCAR Edition | Interactive 3D Experience",
  description: "A premium, scroll-driven interactive 3D WebGL experience showcasing the legendary 2019 NASCAR Ford Mustang, built with Next.js, React Three Fiber, and GSAP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
