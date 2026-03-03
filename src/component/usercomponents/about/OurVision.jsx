import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Eye, Rocket, Heart } from "lucide-react";

function OurVision() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center py-16 bg-gray-50 overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute bottom-0 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-green-100/40 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div data-aos="fade-up" className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-green-700">
              Our Vision
            </span>
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Setting the standard for <span className="text-[#237227]">future management</span>.
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-base md:text-lg text-slate-600 font-light leading-relaxed">
            To transform traditional visitor management into a secure, digital, and seamless experience that enhances organizational efficiency and safety.
          </p>
        </div>

        {/* Vision Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div data-aos="fade-up" data-aos-delay="300" className="group p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 relative overflow-hidden">
            <div className="bg-green-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors duration-300">
              <Rocket className="w-8 h-8 text-green-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#237227] transition-colors duration-300">
              Digital Transformation
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              Replace outdated manual entry systems with smart digital solutions that improve accuracy and efficiency.
            </p>
          </div>

          {/* Card 2 */}
          <div data-aos="fade-up" data-aos-delay="400" className="group p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 relative overflow-hidden">
            <div className="bg-green-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors duration-300">
              <Eye className="w-8 h-8 text-green-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#237227] transition-colors duration-300">
              Enhanced Security
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              Ensure real-time monitoring and secure visitor tracking to protect people, data, and organizational assets.
            </p>
          </div>

          {/* Card 3 */}
          <div data-aos="fade-up" data-aos-delay="500" className="group p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 relative overflow-hidden">
            <div className="bg-green-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors duration-300">
              <Heart className="w-8 h-8 text-green-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#237227] transition-colors duration-300">
              Seamless Experience
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              Provide a smooth and user-friendly system for both visitors and administrators to ensure a hassle-free process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurVision;