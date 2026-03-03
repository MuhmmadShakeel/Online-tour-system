import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShieldCheck, Zap, BarChart3 } from "lucide-react";

function ServiceHead() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-4 bg-white">
      
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[350px] h-[350px] bg-green-50 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-green-50 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h1
                className="text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900 leading-tight"
                data-aos="fade-up"
              >
                Redefining Workplace <span className="text-[#237227]">Access Control</span>.
              </h1>

              <p
                className="text-sm md:text-base text-slate-600 font-light leading-relaxed max-w-lg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Our OTMS platform empowers organizations with seamless visitor experiences, intelligent monitoring, and advanced reporting.
              </p>
            </div>

            {/* Feature Points */}
            <div
              className="grid gap-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex items-start gap-3 group">
                <div className="bg-green-50 p-1.5 rounded-lg group-hover:bg-green-100 transition-colors">
                  <ShieldCheck className="text-green-700 w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Enterprise Security</h4>
                  <p className="text-slate-500 text-[11px] font-light">Real-time monitoring with secure check-ins.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="bg-green-50 p-1.5 rounded-lg group-hover:bg-green-100 transition-colors">
                  <Zap className="text-green-700 w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Instant Processing</h4>
                  <p className="text-slate-500 text-[11px] font-light">Fast and automated front-desk operations.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div
              className="flex flex-wrap gap-3 pt-1"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <button className="px-5 py-2 bg-[#237227] text-white rounded-full shadow-lg hover:shadow-green-100 hover:scale-105 transition-all duration-300 font-bold text-xs">
                Explore Services
              </button>

              <button className="px-5 py-2 border border-slate-200 text-slate-600 rounded-full hover:bg-slate-50 transition-all duration-300 font-bold text-xs">
                Watch Demo
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="relative hidden lg:block"
            data-aos="fade-left"
          >
            <div className="relative z-10 rounded-[1.5rem] overflow-hidden shadow-xl border-[8px] border-white">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                alt="Modern Office Service"
                className="w-full h-[360px] object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-xl border border-slate-100 z-20">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg text-[#237227]">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-none mb-1">Efficiency</h4>
                  <p className="text-[9px] text-slate-400 font-medium uppercase tracking-widest">Workflow</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ServiceHead;