import ContactPage from "@/components/Contact/ContactPage";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Your App Name to discuss your project, request a quote, or get expert web development support.",
  keywords: [
    "contact web developer",
    "hire next js developer",
    "business website inquiry",
  ],
  alternates: {
    canonical: "https://www.yourdomain.com/contact",
  },
};

export default function ContactUsPage() {
  return (
    <main className="true">
      <ContactPage />
    </main>
  );
}
