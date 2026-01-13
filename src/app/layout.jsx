import Header from "@/components/Header";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://vkelectricalspvt.com"),

  title: {
    default: "V.K. Electricals Private Limited | Electrical Solutions & Services",
    template: "%s | V.K. Electricals Pvt Ltd",
  },

  description:
    "V.K. Electricals Private Limited offers top-quality electrical solutions and services for residential, commercial, and industrial projects. Reliability and customer satisfaction guaranteed.",

  keywords: [
    "V.K. Electricals",
    "electrical services",
    "residential electrical solutions",
    "commercial electrical solutions",
    "industrial electrical services",
    "electrical contractors",
  ],

  authors: [{ name: "V.K. Electricals Private Limited" }],
  creator: "V.K. Electricals Private Limited",

  openGraph: {
    title: "V.K. Electricals Private Limited | Electrical Solutions & Services",
    description:
      "Providing modern, reliable, and high-quality electrical services for homes, businesses, and industries.",
    url: "https://vkelectricalspvt.com",
    siteName: "V.K. Electricals Private Limited",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "V.K. Electricals Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "V.K. Electricals Private Limited | Electrical Solutions & Services",
    description:
      "Reliable electrical services for residential, commercial, and industrial projects.",
    images: ["/favicon.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://vkelectricalspvt.com",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-montserrat">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
