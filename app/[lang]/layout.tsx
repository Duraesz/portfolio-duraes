import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { site, content, locales, hasLocale } from "../site";
import "../globals.css";

const jetbrainsMono = localFont({
  src: [
    { path: "../fonts/JetBrainsMono-VariableFont_wght.ttf", style: "normal" },
    { path: "../fonts/JetBrainsMono-Italic-VariableFont_wght.ttf", style: "italic" },
  ],
  weight: "100 800",
  variable: "--font-jetbrains",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = content[lang];
  const title = `${site.name} — ${t.role}`;

  return {
    title: {
      default: `${title} | ${t.headline}`,
      template: `%s | ${site.name}`,
    },
    description: t.description,
    authors: [{ name: site.name, url: site.linkedin }],
    creator: site.name,
    keywords: t.keywords,
    openGraph: {
      type: "website",
      locale: t.ogLocale,
      title,
      description: t.description,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: t.description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={content[lang].htmlLang} className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
