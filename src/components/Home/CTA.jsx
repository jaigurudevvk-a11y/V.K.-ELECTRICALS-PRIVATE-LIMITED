// src/components/CTA.jsx
import Link from "next/link";

const CTA = () => {
  return (
    <div className="bg-[#f7f6f3] px-6 lg:px-16 py-14">
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Need Electrical Work Done?
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl">
            Get expert electrical contracting, installation, maintenance & consultancy services with trusted professionals.
          </p>
        </div>

        <Link href="/contact">
          <button className="bg-orange-600 text-white px-8 py-3 text-sm font-medium transition hover:bg-orange-700 hover:shadow-md">
            Contact Us Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CTA;
