import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronRight, ShieldCheck, MapPin, Phone, Globe } from "lucide-react";

const TourHeader = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });
  }, []);

  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[90vh] flex items-center bg-white pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-x-clip overflow-y-visible">
      {/* Background - Subtle Texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 md:space-y-8">
            <div data-aos="fade-up" className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100 border border-green-200">
              <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-green-700">
                Experience OTMS
              </span>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h1 data-aos="fade-up" data-aos-delay="100" className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.15]">
                <span className="text-[#237227]">
                  Product Tour
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="200" className="max-w-xl text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                Take a deep dive into our comprehensive visitor management system. Explore the powerful features that make OTMS the most trusted solution for secure operations.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap gap-4 sm:gap-5">
              <button
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#237227] text-white rounded-sm hover:bg-[#FFAA00] hover:text-[#237227] transition-all duration-300 shadow-lg shadow-slate-200 text-sm font-medium tracking-wide"
              >
                Watch Demo
              </button>
              <Link to="/services" className="group px-6 sm:px-8 py-3 sm:py-4 border border-slate-200 rounded-sm hover:border-green-600 transition-all duration-300 flex items-center gap-2 text-sm font-medium">
                Explore Features
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Subtle Info Stats */}
            <div data-aos="fade-up" data-aos-delay="400" className="pt-6 sm:pt-8 border-t border-slate-100 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {/* Feature 1 */}
              <div className="group cursor-pointer p-2 relative">
                <div className="flex items-center gap-2 text-[#237227] mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Live Demo
                  </span>
                </div>
                <div className="text-xs text-slate-500 leading-snug group-hover:text-slate-900 transition-colors duration-200">
                  Interactive real-time preview of the dashboard.
                </div>
                <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-[#237227] rounded-full transition-all duration-300 group-hover:w-full"></span>
              </div>

              {/* Feature 2 */}
              <div className="group cursor-pointer p-2 relative">
                <div className="flex items-center gap-2 text-[#237227] mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Guided Tour
                  </span>
                </div>
                <div className="text-xs text-slate-500 group-hover:text-slate-900 transition-colors duration-200">
                  Step-by-step walkthrough of all modules.
                </div>
                <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-[#237227] rounded-full transition-all duration-300 group-hover:w-full"></span>
              </div>

              {/* Feature 3 */}
              <div className="group cursor-pointer p-2 relative">
                <div className="flex items-center gap-2 text-[#237227] mb-1">
                  <Globe className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Full Access
                  </span>
                </div>
                <div className="text-xs text-slate-500 group-hover:text-slate-900 transition-colors duration-200 truncate">
                  Explore every corner of the system.
                </div>
                <span className="block absolute left-0 bottom-0 w-0 h-0.5 bg-[#237227] rounded-full transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>
          </div>

          {/* Right Media Section */}
          <div className="lg:col-span-5 relative overflow-visible mt-8 lg:mt-0" data-aos="fade-left" data-aos-delay="200">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-10">
              {/* Main Media Container */}
              <div className="rounded-2xl overflow-hidden border-[12px] border-white shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                  alt="OTMS System"
                  className="w-full h-auto block grayscale-[0.2] hover:grayscale-0 transition-all duration-700 object-cover aspect-[4/5]"
                />
              </div>
              
              {/* Floating Minimal Badge */}
              <div className="absolute -bottom-6 right-0 sm:-right-6 bg-white p-4 sm:p-6 rounded-xl shadow-xl border border-slate-50 flex items-center gap-3 sm:gap-4 max-w-[90%] sm:max-w-none">
                <div className="bg-green-100 p-3 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Trusted Partner</div>
                  <div className="text-xs text-slate-500">Expert Solutions for Your Peace of Mind</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TourHeader;
