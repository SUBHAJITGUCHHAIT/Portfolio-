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
};

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-delta-lac-26.vercel.app/"),

  title: {
    default: "Soumyadip Maity | Full Stack Developer & AI Enthusiast",
    template: "%s | Soumyadip Maity",
  },
  description:
    "Official portfolio of Soumyadip Maity. Specialized in MERN Stack, Next.js, and AI solutions with Python. Building modern, scalable web applications.",

  keywords: [
    "Soumyadip Maity",
    "Soumyadip",
    "Full Stack Developer India",
    "MERN Stack Developer",
    "Next.js Expert",
    "AI Enthusiast",
    "Software Engineer Portfolio",
    "Web Developer West Bengal",
    "full stack developer",
    "next.js developer",
    "react developer",
    "node.js developer",
    "python developer",
    "ai solutions developer",
    "soumyadip maity portfolio",
    "soumyadip maity developer",
    "soumyadip maity full stack",
    "soumyadip maity ai enthusiast",
    "MongoDB Developer",
    "Express.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Web Application Developer",
    "Tailwind CSS Specialist",
    "Portfolio Website",
    "nextjs developer india",
    "nextjs developer west bengal",
    "nextjs developer kolkata",
    "nextjs developer",
    "mern stack developer india",
    "mern stack developer west bengal",
    "mern stack developer kolkata",
  ],

  authors: [
    {
      name: "Soumyadip Maity",
      url: "https://portfolio-delta-lac-26.vercel.app/",
    },
  ],
  creator: "Soumyadip Maity",
  publisher: "Soumyadip Maity",

  verification: {
    google: "sNv55sfGvBeZ7asoFMOnxlrAWg8zY5Byk8gV0znbAtM",
  },

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

  icons: {
    icon: "/soumya.png",
    shortcut: "/soumya.png",
    apple: "/soumya.png",
  },

  openGraph: {
    title: "Soumyadip Maity | Portfolio",
    description:
      "Digital Architect & Full Stack Developer building the future with Code and AI.",
    url: "https://portfolio-delta-lac-26.vercel.app/",
    siteName: "Soumyadip Portfolio",
    images: [
      {
        url: "/soumya.png",
        width: 1200,
        height: 630,
        alt: "Soumyadip Maity Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Soumyadip Maity | Full Stack Developer",
    description: "Building the future of web with code and AI.",
    images: ["/soumya.png"],
    creator: "@soumyadip2maity",
    site: "@soumyadip2maity",
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
