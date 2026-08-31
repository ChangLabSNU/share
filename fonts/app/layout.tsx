import type { Metadata } from "next";
import { siteMetadata } from "./content";
import "./globals.css";

const siteUrl = "https://qbio.io/share/fonts";
const socialImageUrl = `${siteUrl}/og.png?v=20260831`;
const { title, description, socialImageAlt } = siteMetadata;

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ko_KR",
    url: `${siteUrl}/`,
    images: [{ url: socialImageUrl, width: 1200, height: 630, alt: socialImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImageUrl],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
