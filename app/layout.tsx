import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anoosh Farhad | Full Stack Developer",
  description: "Experienced Full Stack Developer with 3+ years specializing in Laravel, Next.js, React, Node.js, and modern web applications. Building scalable full-stack solutions.",
  keywords: ["Laravel", "Next.js", "React", "Node.js", "MongoDB", "MySQL", "PHP", "Full Stack Developer", "Web Development"],
  authors: [{ name: "Anoosh Farhad" }],
  openGraph: {
    title: "Anoosh Farhad | Full Stack Developer",
    description: "Experienced Full Stack Developer with 3+ years specializing in Laravel, Next.js, React, Node.js, and modern web applications.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
