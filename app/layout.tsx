import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "../styles/globals.css";
import { Footer}  from "@/components/footer";

const jakarta = Plus_Jakarta_Sans({
    variable: "--font-jakarta",
});

const outfit = Outfit({
    variable: "--font-outfit",
});

const siteUrl = "https://jamly.eu";
const title = "Jamly — Where Music Meets Real Moments";
const description =
  "Snap, share, and soundtrack your life. See what's playing in your friends' world, right now.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Jamly",
  },
  description,
  applicationName: "Jamly",
  keywords: ["Jamly", "music", "social", "music sharing", "Spotify", "Apple Music", "friends", "feed"],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Jamly",
    title,
    description,
    images: [{ url: "/hero-mockup.webp", width: 1252, height: 705, alt: "Friends sharing music moments on Jamly" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/hero-mockup.webp"],
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
    <html lang="en">
      <body
        className={`${jakarta.variable} ${outfit.variable} antialiased font-outfit overflow-x-hidden`}
      >
        {children}

        <Footer/>
      </body>
    </html>
  );
}
