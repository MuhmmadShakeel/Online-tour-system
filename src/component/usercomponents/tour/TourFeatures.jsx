import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  ShieldCheck, 
  Smartphone, 
  Globe, 
  Clock, 
  FileText, 
  Zap,
  CheckCircle2
} from "lucide-react";

const TourFeatures = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Mobile Pre-Registration",
      desc: "Visitors can register via their mobile devices before arrival for a zero-wait experience."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Instant Notifications",
      desc: "Hosts receive real-time SMS and email alerts the moment their visitor checks in."
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Digital Logbooks",
      desc: "Eliminate paper logs with secure, searchable digital records accessible from anywhere."
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Compliance Ready",
      desc: "Meet GDPR and local security regulations with automated data handling and NDAs."
    }
  ];

  return (
    <section className="relative min-h-[auto] md:min-h-screen w-full flex items-center justify-center overflow-hidden py-12 sm:py-16 bg-white">
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Text Content */}
          <div className="lg:w-1/2 space-y-6 sm:space-y-8" data-aos="fade-right">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100 border border-green-200">
                <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                <span className="text-[10px] font-semibold tracking-widest uppercase text-green-700">
                  System Capabilities
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                Powerful Features <br />
                <span className="text-[#237227]">Built for Scale</span>.
              </h2>
              <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed max-w-lg">
                Our platform goes beyond simple check-ins. We provide a comprehensive suite of tools designed to enhance security and streamline every visitor interaction.
              </p>
            </div>

            <div className="space-y-4">
              {['Enterprise Grade Security', 'Real-time Analytics', 'Customizable Workflows'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-700" />
                  </div>
                  <span className="text-sm text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="px-8 py-3 bg-[#237227] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#FFAA00] hover:text-[#237227] transition-all duration-300 shadow-xl shadow-green-50">
                Book a Live Demo
              </button>
            </div>
          </div>

          {/* RIGHT: Features Grid */}
          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" data-aos="fade-left">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 hover:border-green-100 hover:shadow-2xl hover:shadow-slate-100 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-green-50 group-hover:text-[#237227] transition-all duration-500 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-[#237227] transition-colors">
                  {feature.title}
                </h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TourFeatures;
