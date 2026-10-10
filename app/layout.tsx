import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "./site";
import "./globals.css";

const jetbrainsMono = localFont({
  src: [
    { path: "./fonts/JetBrainsMono-VariableFont_wght.ttf", style: "normal" },
    { path: "./fonts/JetBrainsMono-Italic-VariableFont_wght.ttf", style: "italic" },
  ],
  weight: "100 800",
  variable: "--font-jetbrains",
  display: "swap",
});

const title = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
  title: {
    default: `${title} | ${site.headline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name, url: site.linkedin }],
  creator: site.name,
  keywords: [
    "Pablo Durães",
    "desenvolvedor full stack",
    "desenvolvedor React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Python",
    "Power BI",
    "automação de processos",
    "portfólio",
    "São Paulo",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
