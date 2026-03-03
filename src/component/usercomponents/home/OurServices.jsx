import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Real-Time Notifications",
    description:
      "Notify hosts instantly when visitors arrive and keep management informed in real time.",
    image:
      "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Visitor Analytics",
    description:
      "Analyze visitor trends, peak hours, and frequency to improve management efficiency.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Report Generation",
    description:
      "Generate comprehensive reports for all visitors, appointments, and security logs instantly.",
    image:
      "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function OurServices() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 bg-gray-50 overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute bottom-0 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-green-100/40 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div data-aos="fade-up" className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-green-700">
              Our Expertise
            </span>
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 leading-tight">
            Comprehensive <span className="text-[#237227]">Visitor Solutions</span>.
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-base text-slate-600 font-light leading-relaxed">
            OTMS offers a complete set of services to streamline management, enhance security, and improve operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-100 hover:border-green-100"
            >
              <div className="relative overflow-hidden h-40 md:h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#237227] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 font-light flex-grow leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-4 inline-flex items-center text-sm font-bold text-[#237227] hover:text-[#FFAA00] transition-colors">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;