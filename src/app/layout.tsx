import type { Metadata } from "next";
import { Rubik, Cardo, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["hebrew", "latin"],
});

const cardo = Cardo({
  variable: "--font-cardo",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "תמונה | תמונות מעוצבות לבית",
    template: "%s | תמונה",
  },
  description:
    "סטודיו בוטיק לעיצוב קירות - תמונות, פסלי קיר, שעונים ואמנות מודרנית לבית",
  openGraph: {
    title: "תמונה - TMOOONA",
    description:
      "סטודיו בוטיק לעיצוב קירות - תמונות, פסלי קיר, שעונים ואמנות מודרנית לבית",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${rubik.variable} ${cardo.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
