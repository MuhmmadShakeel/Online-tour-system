import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { UserCheck, ShieldCheck, BarChart3, BellRing } from 'lucide-react';

const reasons = [
  {
    title: 'Easy Visitor Registration',
    description: 'Register visitors quickly and efficiently, reducing wait times and maintaining accurate records.',
    icon: <UserCheck className="w-8 h-8 text-green-700" />,
  },
  {
    title: 'Secure Access Control',
    description: 'Track visitor entries and exits to enhance security and ensure only authorized access to premises.',
    icon: <ShieldCheck className="w-8 h-8 text-green-700" />,
  },
  {
    title: 'Real-Time Reports',
    description: 'Get instant reports of all visitor activities, helping management make informed decisions quickly.',
    icon: <BarChart3 className="w-8 h-8 text-green-700" />,
  },
  {
    title: 'Custom Notifications',
    description: 'Notify staff and security about visitor arrivals automatically, streamlining communication.',
    icon: <BellRing className="w-8 h-8 text-green-700" />,
  },
];

function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 bg-white overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div data-aos="fade-up" className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-green-700">
              Why Choose OTMS
            </span>
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Optimize your visitor management with <span className="text-[#237227]">smart solutions</span>.
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-base text-slate-600 font-light leading-relaxed">
            Our secure, efficient, and smart system is designed to streamline your operations and enhance security at every entry point.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 relative overflow-hidden"
            >
              {/* Card Background Accent */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#237227] group-hover:h-full transition-all duration-300"></div>
              
              <div className="bg-green-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors duration-300">
                {reason.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#237227] transition-colors duration-300">
                {reason.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;