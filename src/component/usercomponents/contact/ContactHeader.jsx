import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

function ContactHeader() {
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
                data-aos="fade-up"
              >
                Let's Start a <span className="text-[#237227]">Conversation</span>.
              </h1>

              <p
                className="text-sm md:text-base text-slate-600 font-light leading-relaxed max-w-lg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Have questions about our Visitor Management System? Our team is ready to assist you with smart, secure, and professional solutions.
              </p>
            </div>

            {/* Contact Quick Info */}
            <div
              className="grid gap-3 pt-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex items-center gap-4 group">
                <div className="bg-green-50 p-2 rounded-lg group-hover:bg-green-100 transition-colors">
                  <Mail className="text-green-700 w-4 h-4" />
                </div>
                <span className="text-slate-600 text-sm font-light">support@otms.com</span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-green-50 p-2 rounded-lg group-hover:bg-green-100 transition-colors">
                  <Phone className="text-green-700 w-4 h-4" />
                </div>
                <span className="text-slate-600 text-sm font-light">+92 300 1234567</span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-green-50 p-2 rounded-lg group-hover:bg-green-100 transition-colors">
                  <MapPin className="text-green-700 w-4 h-4" />
                </div>
                <span className="text-slate-600 text-sm font-light">123 Business Avenue, Islamabad</span>
              </div>
            </div>

            {/* CTA */}
            <div
              className="flex flex-wrap gap-3 pt-2"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <button className="px-6 py-2.5 bg-[#237227] text-white rounded-full shadow-lg hover:shadow-green-100 hover:scale-105 transition-all duration-300 font-bold text-xs flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5" />
                Send Message
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
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                alt="Contact Us"
                className="w-full h-[380px] object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg text-[#237227]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-none mb-1">24/7 Support</h4>
                  <p className="text-[9px] text-slate-400 font-medium uppercase tracking-widest">Always Online</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactHeader;
