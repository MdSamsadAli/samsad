import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Samsad Ali",
  description: "Full-Stack Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Color blobs — these are what make glass visible */}
        <div className="bg-blob w-[500px] h-[500px] bg-purple-400 -top-32 -left-20 opacity-30" />
        <div className="bg-blob w-[350px] h-[350px] bg-cyan-300 top-48 -right-16 opacity-25" />
        <div className="bg-blob w-[300px] h-[300px] bg-amber-300 bottom-32 left-1/3 opacity-20" />
        <div className="bg-blob w-[250px] h-[250px] bg-pink-300 bottom-48 right-1/4 opacity-20" />

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
