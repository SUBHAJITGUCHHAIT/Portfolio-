import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-delta-lac-26.vercel.app/"),

  title: "Soumyadip Maity | Full Stack Developer & AI Enthusiast",
  description:
    "Official portfolio of Soumyadip Maity. Specialized in MERN Stack, Next.js, and AI solutions with Python.",
  keywords: [
    "Soumyadip",
    "Full Stack Developer",
    "AI Engineer",
    "MERN Stack",
    "Next.js Portfolio",
    "React Developer India",
  ],
  authors: [
    { name: "Soumyadip Maity", url: "https://portfolio-delta-lac-26.vercel.app/" },
  ],
  icons: {
    icon: "https://res.cloudinary.com/dvbqa8mtw/image/upload/v1747535455/soumyadip_csufrp.jpg",
    apple: "https://res.cloudinary.com/dvbqa8mtw/image/upload/v1747535455/soumyadip_csufrp.jpg",
  },
  openGraph: {
    title: "Soumyadip Maity | Portfolio",
    description: "Digital Architect & Full Stack Developer",
    url: "https://portfolio-delta-lac-26.vercel.app/",
    siteName: "Soumyadip Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dvbqa8mtw/image/upload/v1747535455/soumyadip_csufrp.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soumyadip Maity | Full Stack Developer",
    description: "Building the future of web with code and AI.",
    images: ["https://res.cloudinary.com/dvbqa8mtw/image/upload/v1747535455/soumyadip_csufrp.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.className} antialiased selection:bg-purple-500/30 selection:text-purple-900 dark:selection:text-purple-200`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
