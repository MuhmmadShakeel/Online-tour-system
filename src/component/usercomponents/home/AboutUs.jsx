import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Target, CheckCircle2 } from 'lucide-react';

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 bg-gray-50 overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-100/30 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Media Content */}
          <div data-aos="fade-right" className="relative order-2 lg:order-1 flex flex-col items-center lg:items-start">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-[8px] border-white w-full">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                alt="About OTMS"
                className="w-full h-[250px] md:h-[350px] object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div data-aos="fade-left" className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100 border border-green-200">
                <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                <span className="text-xs font-semibold tracking-widest uppercase text-green-700">
                  Our Identity
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                Driving Excellence in <span className="text-[#237227]">Visitor Management</span>.
              </h2>
              <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed">
                OTMS is a comprehensive solution designed to simplify and secure the visitor lifecycle. We help organizations transform their front-desk operations into a seamless digital experience.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-green-50 p-1.5 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Efficiency First</h4>
                  <p className="text-sm text-slate-500 font-light">Reduce wait times with rapid digital check-ins and instant notifications.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-green-50 p-1.5 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Uncompromised Security</h4>
                  <p className="text-sm text-slate-500 font-light">Maintain complete visibility of everyone entering and exiting your premises.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;