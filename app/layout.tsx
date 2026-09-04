import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZaloButton from "@/components/ZaloButton";
import { CLINIC } from "@/lib/clinic";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-heading",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VINPETI — Phòng khám thú y Tây Ninh",
  description: "Phòng khám thú y VINPETI tại Tây Ninh. Dịch vụ thú y chuyên nghiệp, khám chữa bệnh, tiêm phòng, spa thú cưng. Đặt lịch online ngay.",
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${lexend.variable} ${sourceSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 font-body text-navy-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VeterinaryCare",
            "name": "VINPETI",
            "telephone": CLINIC.phone,
            "email": CLINIC.email,
            "address": { "@type": "PostalAddress", "streetAddress": CLINIC.address, "addressLocality": "Tây Ninh", "addressCountry": "VN" },
            "openingHours": "Mo-Su 08:00-20:00"
          }) }}
        />
        <Navbar />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
        <ZaloButton />
      </body>
    </html>
  );
}
