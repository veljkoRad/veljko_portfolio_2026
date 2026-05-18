import type { Metadata } from "next";
import { Urbanist, Inter,  Orbitron} from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const orbitron = Orbitron({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veljko Radivojević – Frontend & Marketing Developer",
  description:
    "Portfolio of Veljko Radivojević, frontend and marketing-focused web developer building responsive landing pages, React apps, and production-ready email templates",
  metadataBase: new URL("https://veljko-portfolio-2026.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Veljko Radivojević – Frontend & Marketing Developer",
    description: "Portfolio of Veljko Radivojević...",
    url: "https://veljko-portfolio-2026.vercel.app",
    siteName: "Veljko Radivojević Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veljko Radivojević – Frontend & Marketing Developer",
    description: "Portfolio of Veljko Radivojević...",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${urbanist.className} ${orbitron.className}`}
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme');
                if (!t) {
                  t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                document.documentElement.setAttribute('data-theme', t);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
