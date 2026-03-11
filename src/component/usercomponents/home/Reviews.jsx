import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import ReviewForm from "./ReviewForm";
import { useGetReviewsQuery } from "../../../redux/api/ReviewsApi";

function Reviews() {

  const { data, isLoading, error } = useGetReviewsQuery();

  const reviews = data?.addedreviews || [];

  const [page, setPage] = useState(0);

  const perPage = 2;

  const totalPages = Math.ceil(reviews.length / perPage);

  const current = reviews.slice(
    page * perPage,
    page * perPage + perPage
  );

  if (isLoading) {
    return (
      <section className="py-20 text-center text-slate-600">
        Loading reviews...
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 text-center text-red-500">
        Error loading reviews
      </section>
    );
  }

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-12">

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-green-700">
              Client Reviews
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our <span className="text-[#237227]">Clients Say</span>
          </h2>

          <p className="text-base text-slate-600 font-light max-w-2xl mx-auto">
            Hear from the organizations that trust OTMS to power their
            visitor management every day.
          </p>

        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {current.map((review, i) => {

                const user = review.userId;

                return (
                  <div
                    key={review._id}
                    className="group relative bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 flex flex-col"
                  >

                    <Quote className="absolute top-6 right-6 w-8 h-8 text-green-100 group-hover:text-green-200 transition-colors" />

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`w-4 h-4 ${
                            j < review.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-slate-200 fill-slate-200"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-600 text-sm leading-relaxed font-light grow mb-5">
                      "{review.reviewstext}"
                    </p>

                    <div className="h-px bg-slate-100 mb-4" />

                    {/* User Info */}
                    <div className="flex items-center gap-3">

                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt={user?.name || "User"}
                        className="w-10 h-10 rounded-full object-cover border-2 border-green-100"
                      />

                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          {user?.name || "Anonymous"}
                        </h4>

                        <p className="text-xs text-slate-400">
                          {user?.role || "User"}
                        </p>
                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* Pagination */}

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4">

                <button
                  onClick={() =>
                    setPage((p) => (p === 0 ? totalPages - 1 : p - 1))
                  }
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#237227] hover:text-white hover:border-[#237227] transition"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i)}
                      className={`h-2.5 rounded-full transition ${
                        i === page
                          ? "bg-[#237227] w-7"
                          : "bg-slate-200 hover:bg-slate-300 w-2.5"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setPage((p) => (p === totalPages - 1 ? 0 : p + 1))
                  }
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#237227] hover:text-white hover:border-[#237227] transition"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

              </div>
            )}

          </div>

          {/* Review Form */}

          <div className="lg:col-span-1">
            <ReviewForm />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Reviews;