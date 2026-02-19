import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/JsonLTD";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.demo.in"),

  title: {
    default: "Subhajit Guchhait | Java Developer & Full Stack Developer",
    template: "%s | Subhajit Guchhait",
  },

  description:
    "Subhajit Guchhait - Full Stack Developer specializing in scalable web applications using Java, Spring Boot, and modern cloud technologies.",

  keywords: [
    "Subhajit Guchhait",
    "Full Stack Developer",
    "Software Engineer",
    "Spring Boot Developer",
    "Java Developer",
    "Android Developer",
    "Cloud Engineer",
    "REST API Developer",
    "AI Solutions Developer",
    "Freelance Web Developer",
  ],

  authors: [
    {
      name: "Subhajit Guchhait",
      url: "https://www.demo.in",
    },
  ],

  creator: "Subhajit Guchhait",
  publisher: "Subhajit Guchhait",

  category: "Technology",
  classification: "Portfolio Website",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  // ❌ icons removed
  // ❌ manifest removed

  openGraph: {
    title: "Subhajit Guchhait | Java Stack Developer",
    description:
      "Crafting scalable applications with Java, Spring Boot & Go.",
    url: "https://www.demo.in",
    siteName: "Subhajit Guchhait Portfolio",
    images: [
      {
        url: "/certificates/my.jpg",
        width: 1200,
        height: 630,
        alt: "Subhajit Guchhait - Java Stack Developer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Subhajit Guchhait | Java Stack Developer",
    description:
      "Crafting scalable applications with Java, Spring Boot & Go.",
    images: ["/certificates/my.jpg"],
    creator: "@subhajitguchhait",
    site: "@subhajitguchhait",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.className} antialiased selection:bg-purple-500/30 selection:text-purple-600 dark:selection:text-purple-400`}
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
