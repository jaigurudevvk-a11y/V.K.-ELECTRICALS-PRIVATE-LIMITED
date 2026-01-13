import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://v-k-electricals.vercel.app"),

  title: {
    default:
      "V K Electricals – Professional Electrical Services & Supplies in India",
    template: "%s | V K Electricals",
  },

  description:
    "V K Electricals provides expert electrical installation, wiring, cable jointing, testing, maintenance, and electrical supplies for residential, commercial, and industrial clients across India.",

  keywords: [
    "electrical services India",
    "electrical contractors",
    "electrical wiring services",
    "cable jointing services",
    "HT LT cable termination",
    "electrical testing services",
    "electrical supplies wholesale",
    "commercial electrical solutions",
    "industrial electrical services",
  ],

  authors: [{ name: "V K Electricals" }],
  creator: "V K Electricals",
  publisher: "V K Electricals",

  openGraph: {
    title: "V K Electricals – Electrical Services & Supplies",
    description:
      "Trusted electrical installation, wiring, cable jointing, testing, and electrical supplies delivered by experienced professionals across India.",
    url: "/",
    siteName: "V K Electricals",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "V K Electricals",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "V K Electricals – Professional Electrical Services",
    description:
      "Reliable electrical installation, wiring, cable jointing, and testing services for residential, commercial, and industrial projects.",
    images: ["/og-image.png"],
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
    canonical: "/",
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
