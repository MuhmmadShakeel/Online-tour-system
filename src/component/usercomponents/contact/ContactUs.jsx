import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function ContactUs() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-12 bg-white pt-20">

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* LEFT SIDE - Minimal Contact Info */}
          <div className="lg:col-span-5 space-y-10" data-aos="fade-right">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                Reach <span className="text-[#237227]">Out</span>.
              </h2>
              <p className="text-slate-500 text-sm font-light leading-relaxed max-w-sm">
                Our specialized team is ready to help you optimize your visitor management workflow.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group flex items-center gap-5">
                <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:border-green-200 group-hover:bg-green-50 transition-all duration-300">
                  <Mail className="text-slate-400 group-hover:text-[#237227] w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">Email</p>
                  <p className="text-sm text-slate-700 font-medium">support@otms.com</p>
                </div>
              </div>

              <div className="group flex items-center gap-5">
                <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:border-green-200 group-hover:bg-green-50 transition-all duration-300">
                  <Phone className="text-slate-400 group-hover:text-[#237227] w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">Phone</p>
                  <p className="text-sm text-slate-700 font-medium">+92 300 1234567</p>
                </div>
              </div>

              <div className="group flex items-center gap-5">
                <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:border-green-200 group-hover:bg-green-50 transition-all duration-300">
                  <MapPin className="text-slate-400 group-hover:text-[#237227] w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">Location</p>
                  <p className="text-sm text-slate-700 font-medium">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Ultra Minimal Form */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full py-2 bg-transparent border-b border-slate-200 focus:border-[#237227] outline-none transition-colors text-sm font-light placeholder:text-slate-300"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#237227] transition-all duration-500 group-focus-within:w-full"></div>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full py-2 bg-transparent border-b border-slate-200 focus:border-[#237227] outline-none transition-colors text-sm font-light placeholder:text-slate-300"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#237227] transition-all duration-500 group-focus-within:w-full"></div>
              </div>

              <div className="relative group md:col-span-2">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full py-2 bg-transparent border-b border-slate-200 focus:border-[#237227] outline-none transition-colors text-sm font-light placeholder:text-slate-300"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#237227] transition-all duration-500 group-focus-within:w-full"></div>
              </div>

              <div className="relative group md:col-span-2">
                <textarea
                  rows="3"
                  placeholder="Message"
                  className="w-full py-2 bg-transparent border-b border-slate-200 focus:border-[#237227] outline-none transition-colors text-sm font-light placeholder:text-slate-300 resize-none"
                ></textarea>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#237227] transition-all duration-500 group-focus-within:w-full"></div>
              </div>

              <div className="md:col-span-2 pt-4">
                <button className="group inline-flex items-center gap-3 px-8 py-3 bg-[#237227] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#FFAA00] hover:text-[#237227] transition-all duration-500 shadow-xl shadow-green-50">
                  Send Message
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactUs;