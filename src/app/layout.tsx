import type { Metadata } from "next";
import { Geist_Mono, Inter_Tight } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { AppMain } from "@/components/AppMain";
import { PageCurtain } from "@/components/PageCurtain";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/content/site";
import "./globals.css";

const sans = Inter_Tight({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [{ url: site.portrait }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.portrait],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${geistMono.variable} h-full antialiased`} data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col text-ink">
        <PageCurtain />
        <SiteHeader />
        <AppMain>{children}</AppMain>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
