import Image from "next/image";

export default function AboutEditorialSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl lg:text-4xl leading-snug text-gray-900 max-w-md mx-auto lg:mx-0">
            End-to-End Electrical Contracting & Consultancy
          </h3>

          <div className="mt-6 inline-block">
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-700">
              ABOUT US
            </span>
            <div className="h-[2px] w-16 bg-orange-600 mt-2 mx-auto lg:mx-0" />
          </div>

          <p className="mt-8 text-gray-600 max-w-lg leading-relaxed mx-auto lg:mx-0">
            With expertise in electrical installations, testing, commissioning,
            and maintenance, V.K. Electricals Pvt. Ltd. supports electricity
            boards, infrastructure developers, and industrial clients with safe,
            compliant, and efficient electrical solutions.
          </p>
        </div>

        <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
          {/* Background blocks — DESKTOP ONLY */}
          {/* <div className="absolute left-0 top-16 w-120 h-32 bg-[#F5F4F2] z-0 hidden lg:block" />
          <div className="absolute left-0 bottom-20 w-120 h-32 bg-[#F5F4F2] z-0 hidden lg:block" /> */}

          {/* Image */}
          <div className="relative z-10 w-full max-w-xs sm:max-w-[300px] lg:max-w-md lg:ml-auto">
            <Image
              src="/img2.jpg"
              alt="V.K. Electricals Project"
              width={300}
              height={500}
              className="object-cover w-full h-auto lg:w-auto lg:h-auto"
              priority
            />
            <p className="mt-3 text-xs text-gray-500 text-center lg:text-left">
              V.K. ELECTRICALS PRIVATE LIMITED
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
