import React, { useEffect } from "react";
import { ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const TourHeader = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#237227] overflow-hidden pt-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div data-aos="fade-up" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-semibold text-green-400 tracking-wider uppercase">
              Explore Adventures
            </span>
          </div>

          {/* Main Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Discover Your Next{" "}
            <span className="bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Explore breathtaking destinations across Pakistan. From stunning mountain ranges to cultural heritage sites, find the perfect tour for your next unforgettable journey.
          </p>

          {/* Stats */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 border-t border-slate-700"
          >
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-green-400">50+</div>
              <div className="text-sm text-slate-400 mt-2">Tours Available</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-green-400">10K+</div>
              <div className="text-sm text-slate-400 mt-2">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-green-400">24/7</div>
              <div className="text-sm text-slate-400 mt-2">Support Team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourHeader;
