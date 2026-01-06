import { ShieldCheck, Award, Handshake, Clock, Target } from "lucide-react";

export default function ValuesVisionSection() {
  return (
    <section className="bg-[#f7f6f3] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* LEFT: VALUES */}
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl leading-snug text-gray-900 max-w-md mx-auto lg:mx-0">
              Our Values
            </h3>

            <div className="w-20 h-0.5 bg-orange-600 mt-2 mb-10"></div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-[#1c4268] mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Safety First</h4>
                  <p className="text-sm text-gray-600">
                    Strict adherence to safety norms and industry standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-orange-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Quality Driven
                  </h4>
                  <p className="text-sm text-gray-600">
                    Use of reliable materials and superior workmanship.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Handshake className="w-6 h-6 text-[#1c4268] mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Integrity</h4>
                  <p className="text-sm text-gray-600">
                    Transparent, ethical, and responsible business practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-orange-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Commitment</h4>
                  <p className="text-sm text-gray-600">
                    Consistent on-time execution of projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: VISION */}
          <div className="bg-white border-l-4 border-orange-600 p-8 md:p-10 ">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-7 h-7 text-[#1c4268]" />
              {/* <h3 className="text-2xl md:text-3xl lg:text-4xl leading-snug text-gray-900 max-w-md mx-auto lg:mx-0">
                Vision
              </h3> */}
              <h3 className="text-2xl md:text-2xl lg:text-3xl leading-snug text-gray-900 max-w-md mx-auto lg:mx-0">
                Vision
                <div className="w-24 h-0.5 bg-orange-600"></div>
              </h3>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              To become a dependable electrical solutions partner for
              electricity boards and infrastructure projects across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
