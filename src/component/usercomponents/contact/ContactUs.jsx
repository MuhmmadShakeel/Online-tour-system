import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function ContactUs() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24 flex items-center justify-center">
      
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-12">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-10" data-aos="fade-right">

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Reach <span className="text-[#237227]">Out</span>
              </h2>

              <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md">
                Our specialized team is ready to help you optimize your visitor
                management workflow and answer all your questions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-200 group-hover:bg-green-50 group-hover:border-green-200 transition">
                  <Mail className="w-5 h-5 text-slate-500 group-hover:text-[#237227]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Email
                  </p>
                  <p className="text-sm font-medium text-slate-700">
                    support@otms.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-200 group-hover:bg-green-50 group-hover:border-green-200 transition">
                  <Phone className="w-5 h-5 text-slate-500 group-hover:text-[#237227]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Phone
                  </p>
                  <p className="text-sm font-medium text-slate-700">
                    +92 300 1234567
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-200 group-hover:bg-green-50 group-hover:border-green-200 transition">
                  <MapPin className="w-5 h-5 text-slate-500 group-hover:text-[#237227]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Location
                  </p>
                  <p className="text-sm font-medium text-slate-700">
                    Islamabad, Pakistan
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div
            className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10"
            data-aos="fade-left"
          >
            <form className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-[#237227] focus:ring-1 focus:ring-[#237227]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-[#237227] focus:ring-1 focus:ring-[#237227]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="md:col-span-2 w-full px-4 py-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-[#237227] focus:ring-1 focus:ring-[#237227]"
              />

              <textarea
                rows="4"
                placeholder="Your Message..."
                className="md:col-span-2 w-full px-4 py-3 border border-slate-200 rounded-lg text-sm outline-none resize-none focus:border-[#237227] focus:ring-1 focus:ring-[#237227]"
              />

              <button className="md:col-span-2 flex items-center justify-center gap-3 bg-[#237227] text-white py-3 rounded-lg font-semibold text-sm hover:bg-[#1a551d] transition duration-300">
                Send Message
                <Send size={16} />
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactUs;