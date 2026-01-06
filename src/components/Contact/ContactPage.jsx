"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState({
    type: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setResponseMessage({
        type: "error",
        text: "Please fill in all required fields.",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setResponseMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    // Phone validation (basic Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10 || !phoneRegex.test(cleanPhone)) {
      setResponseMessage({
        type: "error",
        text: "Please enter a valid 10-digit Indian phone number.",
      });
      return;
    }

    setLoading(true);
    setResponseMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.phone,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResponseMessage({
          type: "success",
          text: "Message sent successfully! We'll get back to you soon.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setResponseMessage({
          type: "error",
          text: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage({
        type: "error",
        text: "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#f7f6f3]">
      {/* HERO */}
      <div className="relative h-[220px] md:h-[260px] w-full">
        <Image
          src="/contact2.jpg"
          alt="Contact V.K. Electricals"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16 bg-white -mt-20 relative z-10 ">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with V.K. Electricals Pvt. Ltd. for reliable electrical
            contracting, consultancy, and infrastructure solutions. We welcome
            project enquiries, consultations, and electrical contracting
            requirements.
          </p>
        </div>

        {/* Success/Error Message */}
        {responseMessage.text && (
          <div
            className={`max-w-2xl mx-auto mb-8 p-4  ${
              responseMessage.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            <p className="text-center font-medium">{responseMessage.text}</p>
          </div>
        )}

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT: CONTACT INFO */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Reach Us
            </h2>

            <div className="space-y-6 text-gray-700">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 mb-2">
                    V.K. Electricals Private Limited
                  </p>
                  <p className="leading-relaxed">
                    Building No./Flat No.: 70B, 71B, 81B, 82B
                    <br />
                    Road/Street: Royal Town Colony
                    <br />
                    Locality/Sub Locality: Mhow Goan
                    <br />
                    City/Town: Dr. Ambedkar Nagar
                    <br />
                    District: Indore, Madhya Pradesh
                    <br />
                    PIN Code: 453441
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="text-orange-600 mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="font-medium text-gray-900">Phone Numbers</p>
                  <p>+91 93005 50509</p>
                  <p>+91 89622 97950</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Email Address</p>
                  <p>jaigurudev.vk@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            {/* <div className="mt-8 p-4 bg-orange-50 ">
              <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div> */}
          </div>

          {/* RIGHT: FORM */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100  transition"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100  transition"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 transition"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your project requirements..."
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100  transition resize-none"
                  disabled={loading}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-orange-600 text-white px-6 py-3 text-sm font-medium  transition flex items-center justify-center gap-2 ${
                  loading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-orange-700 hover:shadow-md"
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent  animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our terms and privacy
                policy.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
