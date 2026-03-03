import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  Layout, 
  UserCheck, 
  BarChart, 
  Smartphone, 
  Shield, 
  Bell 
} from "lucide-react";

const TourExperience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const steps = [
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Visitor Check-In",
      desc: "Fast digital registration with ID scanning and instant badge printing.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Layout className="w-5 h-5" />,
      title: "Admin Dashboard",
      desc: "Real-time visibility of all visitors across multiple locations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Security Protocols",
      desc: "Automated NDA signing and blacklist alerts for enhanced safety.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="relative min-h-[auto] md:min-h-screen w-full flex items-center justify-center overflow-hidden py-12 sm:py-16 bg-slate-50/50">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-50/30 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <h2 data-aos="fade-up" className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            The <span className="text-[#237227]">User Journey</span>.
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-slate-500 text-sm md:text-base font-light">
            Experience the seamless flow of OTMS, designed for both efficiency and high-level security.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 200}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-green-100 transition-all duration-500 flex flex-col h-full"
            >
              <div className="mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl h-40 sm:h-48">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-50 p-2 rounded-lg text-[#237227] group-hover:bg-green-100 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
              </div>

              <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                {step.desc}
              </p>

              <div className="pt-4 border-t border-slate-50">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Step 0{idx + 1}</span>
                  <div className="h-1 w-12 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#237227] transition-all duration-700 w-1/3 group-hover:w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourExperience;
