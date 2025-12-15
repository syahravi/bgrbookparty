import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bogor Book Party - Komunitas Literasi Bogor | Membaca Bersama Setiap Minggu",
  description: "Bergabunglah dengan komunitas literasi terbesar di Bogor. Silent reading, diskusi buku, dan kegiatan seru setiap Minggu di Taman Sempur. Kami hadir bukan sekadar sebagai teman baca, tapi untuk merawat rasa, menghidupkan literasi di Kota Bogor.",
  keywords: "bogor book party, komunitas baca bogor, literasi bogor, perpustakaan bogor, diskusi buku, silent reading, taman sempur",
  openGraph: {
    title: "Bogor Book Party - Komunitas Literasi Bogor",
    description: "Bergabunglah dengan komunitas literasi terbesar di Bogor. Silent reading, diskusi buku, dan kegiatan seru setiap Minggu.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bogor Book Party - Komunitas Literasi Bogor",
    description: "Bergabunglah dengan komunitas literasi terbesar di Bogor.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${playfair.variable} antialiased font-[family-name:var(--font-outfit)]`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
