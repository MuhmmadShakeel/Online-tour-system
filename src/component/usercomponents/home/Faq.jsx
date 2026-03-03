import React, { useState } from "react";

const faqs = [
  {
    question: "How do I register a visitor in OTMS?",
    answer:
      "You can register a visitor by navigating to the 'Visitor Registration' page, filling in the visitor details, and submitting the form. The system will generate a unique visitor ID for tracking.",
  },
  {
    question: "Can I manage multiple entries at once?",
    answer:
      "Yes! OTMS allows bulk imports via CSV files for visitor data, making it easy to manage multiple entries efficiently.",
  },
  {
    question: "Is my visitor data secure?",
    answer:
      "Absolutely. All visitor data is encrypted and securely stored on our server, following best practices for data protection and privacy.",
  },
  {
    question: "How do I check visitor history?",
    answer:
      "Visit the 'Visitor History' section and search by visitor name, ID, or date range to view all past entries and visits.",
  },
  {
    question: "Can I customize OTMS for my organization?",
    answer:
      "Yes! OTMS is flexible and can be customized according to your organization's needs, including roles, permissions, and reports.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 bg-white overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* FAQ Content */}
          <div className="w-full space-y-6">
            <div className="space-y-3 text-center lg:text-left">
              <div data-aos="fade-up" className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                <span className="text-xs font-semibold tracking-widest uppercase text-green-700">
                  Help Center
                </span>
              </div>
              <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Frequently Asked <span className="text-[#237227]">Questions</span>.
              </h2>
              <p data-aos="fade-up" data-aos-delay="200" className="text-base text-slate-600 font-light leading-relaxed">
                Everything you need to know about OTMS.
              </p>
            </div>

            <div className="space-y-3" data-aos="fade-up" data-aos-delay="300">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl transition-all duration-300 border ${
                    activeIndex === index 
                      ? "border-green-200 shadow-md shadow-green-50" 
                      : "border-slate-100 hover:border-green-100 shadow-sm"
                  } overflow-hidden`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left group"
                  >
                    <span className={`font-bold text-base transition-colors duration-300 ${
                      activeIndex === index ? "text-[#237227]" : "text-slate-700 group-hover:text-slate-900"
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}>
                      <svg className={`w-5 h-5 ${activeIndex === index ? "text-[#237227]" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      activeIndex === index
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-4 text-sm text-slate-500 font-light leading-relaxed border-t border-slate-50 pt-3">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden lg:flex justify-center sticky top-24" data-aos="fade-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-100 rounded-[2rem] -rotate-3 z-0"></div>
              <img
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
                alt="OTMS Help"
                className="relative z-10 rounded-2xl shadow-2xl object-cover w-full max-w-sm h-[500px] grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;