import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});


export const metadata: Metadata = {
  title: {
    default: "Forever Fuzed | Luxury Wedding & Event Planning",
    template: "%s | Forever Fuzed",
  },
  description:
    "Forever Fuzed is a luxury wedding and event planning company serving clients across India, Canada, and USA. We specialise in wedding styling, luxury gifting, curated entertainment, seamless event logistics, and premium vendor management.",
  icons: {
    icon: "/logo/forever-logo.png",
    apple: "/logo/forever-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </body>
    </html>
  );
}
