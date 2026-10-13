import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://mdsamsadali.com.np/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Md Samsad Ali | Full-Stack Web Developer",
    template: "%s | Md Samsad Ali",
  },

  description:
    "Md Samsad Ali is a Full-Stack Web Developer specializing in Laravel, React, Next.js, JavaScript, and modern web application development.",

  applicationName: "Md Samsad Ali Portfolio",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [{ url: "/circle.png", type: "image/png", sizes: "512x512" }],
    apple: "/circle.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Md Samsad Ali",
    title: "Md Samsad Ali | Full-Stack Web Developer",
    description:
      "Explore my web development projects, technical skills, and services in Laravel, React, and Next.js.",
    locale: "en_US",
    images: [
      {
        url: "/samsad.jpg",
        width: 1200,
        height: 630,
        alt: "Md Samsad Ali - Full-Stack Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Md Samsad Ali | Full-Stack Web Developer",
    description:
      "Explore my portfolio, projects, and full-stack web development skills.",
    images: ["/og-image.jpg"],
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          aria-hidden="true"
          className="bg-blob w-[500px] h-[500px] bg-purple-400 -top-32 -left-20 opacity-30"
        />
        <div
          aria-hidden="true"
          className="bg-blob w-[350px] h-[350px] bg-cyan-300 top-48 -right-16 opacity-25"
        />
        <div
          aria-hidden="true"
          className="bg-blob w-[300px] h-[300px] bg-amber-300 bottom-32 left-1/3 opacity-20"
        />
        <div
          aria-hidden="true"
          className="bg-blob w-[250px] h-[250px] bg-pink-300 bottom-48 right-1/4 opacity-20"
        />

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
