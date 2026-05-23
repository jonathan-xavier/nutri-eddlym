import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { site } from "@/lib/site-data";
import { images } from "@/lib/images";
import { nutritionBusinessJsonLd } from "@/lib/schema";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: site.seo.title,
  description: site.seo.description,
  keywords: [
    "nutricionista Recife",
    "nutricionista online",
    "emagrecimento",
    "longevidade",
    "performance",
    "Dra. Eddlym",
    "Fala Nutri",
  ],
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    locale: "pt_BR",
    type: "website",
    images: [{ url: images.og, width: 1200, height: 630, alt: `${site.brand} — ${site.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [images.og],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = nutritionBusinessJsonLd();

  return (
    <html lang="pt-BR" className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
