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
  title: "Your App Name",
  description: "Your app description",
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
