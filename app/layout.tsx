import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bogor Book Party - Komunitas Pecinta Buku Bogor",
  description: "Bergabunglah dengan komunitas pecinta buku di Bogor. Diskusi buku, event reading, dan sharing rekomendasi buku bersama Bogor Book Party.",
  keywords: ["komunitas buku", "bogor", "book club", "reading community", "book party"],
  openGraph: {
    title: "Bogor Book Party",
    description: "Komunitas pecinta buku di Bogor",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased font-sans bg-background text-accent">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#053923',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  );
}
