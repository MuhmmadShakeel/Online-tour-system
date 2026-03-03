import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import ReviewForm from "./ReviewForm";

const initialReviews = [
  {
    name: "Ahmed Raza",
    role: "HR Manager",
    message: "OTMS has completely transformed how we manage visitors. The system is secure, efficient, and extremely easy to use.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Sarah Khan",
    role: "Office Administrator",
    message: "The digital check-in process has reduced waiting time significantly. Our front desk operations are now seamless.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Bilal Hussain",
    role: "Security Supervisor",
    message: "Real-time visitor tracking and reports have improved our building security and monitoring standards.",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5,
  },
  {
    name: "Fatima Noor",
    role: "Operations Manager",
    message: "Professional, reliable, and highly customizable. OTMS is exactly what modern organizations need.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
  },
  {
    name: "Usman Ali",
    role: "IT Director",
    message: "Integration was effortless and the dashboard gives us complete visibility over all visitors.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
  },
  {
    name: "Ayesha Malik",
    role: "Facility Manager",
    message: "OTMS brought order to our busy lobby. Visitor management is now stress-free and the reporting is outstanding.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
];

function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [page, setPage] = useState(0);
  const perPage = 2;
  const totalPages = Math.ceil(reviews.length / perPage);
  const current = reviews.slice(page * perPage, page * perPage + perPage);

  const handleNewReview = (review) => {
    setReviews((prev) => [review, ...prev]);
    setPage(0);
  };

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-12">
          <div data-aos="fade-up" className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-green-700">Client Reviews</span>
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our <span className="text-[#237227]">Clients Say</span>.
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-base text-slate-600 font-light max-w-2xl mx-auto">
            Hear from the organizations that trust OTMS to power their visitor management every day.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* Reviews */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {current.map((r, i) => (
                <div key={r.name + i} data-aos="fade-up" data-aos-delay={i * 100} className="group relative bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 flex flex-col">
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-green-100 group-hover:text-green-200 transition-colors" />

                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className={`w-4 h-4 ${j < r.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200 fill-slate-200"}`} />
                    ))}
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed font-light grow mb-5">"{r.message}"</p>

                  <div className="h-px bg-slate-100 mb-4" />

                  <div className="flex items-center gap-3">
                    <img src={r.image} alt={r.name} className="w-10 h-10 rounded-full object-cover border-2 border-green-100" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{r.name}</h4>
                      <p className="text-xs text-slate-400">{r.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-4">
              <button onClick={() => setPage((p) => (p === 0 ? totalPages - 1 : p - 1))} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#237227] hover:text-white hover:border-[#237227] transition-all duration-300">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button key={i} onClick={() => setPage(i)} className={`h-2.5 rounded-full transition-all duration-300 ${i === page ? "bg-[#237227] w-7" : "bg-slate-200 hover:bg-slate-300 w-2.5"}`} />
                ))}
              </div>
              <button onClick={() => setPage((p) => (p === totalPages - 1 ? 0 : p + 1))} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#237227] hover:text-white hover:border-[#237227] transition-all duration-300">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Form */}
          <div data-aos="fade-left" className="lg:col-span-1">
            <ReviewForm onSubmit={handleNewReview} />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Reviews;
