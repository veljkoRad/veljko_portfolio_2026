import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const urbanist = Urbanist({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veljko Radivojević – Frontend & Marketing Developer",
  description:
    "Portfolio of Veljko Radivojević, frontend and marketing-focused web developer building responsive landing pages, React apps, and production-ready email templates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={urbanist.className} data-theme="light">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
