import React, { useState } from "react";
import { Star, Send, MessageSquarePlus } from "lucide-react";

function ReviewForm({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [formRating, setFormRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formMessage, setFormMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !formMessage.trim() || formRating === 0) return;

    onSubmit({
      name: username.trim(),
      role: "Verified User",
      company: "",
      message: formMessage.trim(),
      image: `https://ui-avatars.com/api/?name=${encodeURIComponent(username.trim())}&background=237227&color=fff&bold=true`,
      rating: formRating,
    });

    setUsername("");
    setFormRating(0);
    setFormMessage("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="sticky top-24 bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
      {/* Form Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
          <MessageSquarePlus className="w-5 h-5 text-green-700" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">Write a Review</h3>
          <p className="text-xs text-slate-400">Share your experience</p>
        </div>
      </div>

      {submitted ? (
        <div className="text-center py-10">
          <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-7 h-7 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h4 className="text-base font-bold text-slate-900 mb-1">
            Thank You!
          </h4>
          <p className="text-sm text-slate-500 font-light">
            Your review has been added successfully.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all duration-200"
              required
            />
          </div>

          {/* Star Rating */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
              Rating
            </label>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="focus:outline-none transition-transform duration-150 hover:scale-110"
                  aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                >
                  <Star
                    className={`w-6 h-6 transition-colors duration-150 ${
                      star <= (hoverRating || formRating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-slate-200 fill-slate-200"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
              Your Review
            </label>
            <textarea
              value={formMessage}
              onChange={(e) => setFormMessage(e.target.value)}
              placeholder="Tell us about your experience..."
              rows={4}
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder:text-slate-300 resize-none focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all duration-200"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#237227] text-white text-sm font-semibold hover:bg-green-800 active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <Send className="w-4 h-4" />
            Submit Review
          </button>
        </form>
      )}
    </div>
  );
}

export default ReviewForm;
