import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "../styles/globals.css";
import { Footer}  from "@/components/footer";

const jakarta = Plus_Jakarta_Sans({
    variable: "--font-jakarta",
});

const outfit = Outfit({
    variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Jamly — Where Music Meets Real Moments",
  description: "Snap, share, and soundtrack your life. See what's playing in your friends' world, right now.",
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
