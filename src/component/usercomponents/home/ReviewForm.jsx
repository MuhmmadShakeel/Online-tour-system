import React, { useState, useContext } from "react";
import { Star, Send, MessageSquarePlus } from "lucide-react";
import toast from "react-hot-toast";
import { useAddReviewMutation } from "../../../redux/api/ReviewsApi";
import { ContextStore } from "../../../context/Context";

function ReviewForm() {
  const { isLogin } = useContext(ContextStore);
  const [addReview, { isLoading }] = useAddReviewMutation();

  const [formRating, setFormRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formMessage, setFormMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin) {
      return toast.error("Please login to submit a review.");
    }

    if (!formMessage.trim()) {
      return toast.error("Review message is required.");
    }

    if (formRating === 0) {
      return toast.error("Please select a rating.");
    }

    try {
      const response = await addReview({
        reviewstext: formMessage.trim(),
        rating: formRating,
      }).unwrap();

      toast.success(response.message || "Review submitted successfully");

      setFormMessage("");
      setFormRating(0);
      setSubmitted(true);

      setTimeout(() => setSubmitted(false), 2500);
    } catch (error) {
      toast.error(
        error?.data?.message || "Failed to submit review. Please try again."
      );
    }
  };

  return (
    <div className="sticky top-24 bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
          <MessageSquarePlus className="w-5 h-5 text-green-700" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Write a Review
          </h3>
          <p className="text-xs text-slate-400">
            Share your experience with us
          </p>
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
          <p className="text-sm text-slate-500">
            Your review has been submitted successfully.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Star Rating */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
              Rating
            </label>

            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => {
                const isActive = star <= (hoverRating || formRating);

                return (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-7 h-7 transition-colors ${
                        isActive
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-slate-300 fill-slate-300"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Review Text */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
              Your Review
            </label>

            <textarea
              value={formMessage}
              onChange={(e) => setFormMessage(e.target.value)}
              placeholder="Tell us about your experience..."
              rows={4}
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 text-slate-800 resize-none focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#237227] text-white text-sm font-semibold hover:bg-green-800 active:scale-[0.98] transition shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            {isLoading ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      )}
    </div>
  );
}

export default ReviewForm;