import React, { useState } from "react";
import { Star, Trash2, AlertCircle, MessageSquare, Search } from "lucide-react";
import {
  useGetReviewsQuery,
  useDeleteReviewMutation,
} from "../../../redux/api/ReviewsApi";

const ReviewList = () => {
  const { data, isLoading, error } = useGetReviewsQuery();
  const [deleteReview] = useDeleteReviewMutation();

  const [search, setSearch] = useState("");

  const reviews = data?.addedreviews || [];

  // SEARCH FILTER
  const filteredReviews = reviews.filter((review) => {
    const user = review.userId;
    const name = user?.name?.toLowerCase() || "";
    const text = review.reviewstext?.toLowerCase() || "";

    return (
      name.includes(search.toLowerCase()) ||
      text.includes(search.toLowerCase())
    );
  });

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;

    try {
      await deleteReview(id).unwrap();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl p-10 text-center">
        <p className="text-slate-500 text-sm">Loading reviews...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl p-10 text-center">
        <p className="text-red-500 text-sm">Failed to load reviews</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* TOTAL REVIEWS CARD */}
        <div className="bg-white border border-slate-100 shadow-sm rounded-xl px-6 py-4 flex items-center gap-4 w-full md:w-auto">

          <div className="bg-green-100 p-3 rounded-lg">
            <MessageSquare className="text-green-600" size={22} />
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">
              Total Reviews
            </p>

            <h3 className="text-2xl font-bold text-slate-900">
              {reviews.length}
            </h3>
          </div>

        </div>

        {/* SEARCH BAR */}
        <div className="relative w-full md:w-80">

          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search reviews..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-sm"
          />

        </div>

      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">

        <div className="px-6 py-4 border-b border-slate-100 flex justify-between">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            Client Reviews
          </h2>

          <span className="text-xs text-slate-500">
            {filteredReviews.length} Results
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">

            <thead className="bg-slate-50 text-left">
              <tr>
                <th className="px-6 py-3 text-xs font-bold text-slate-600 uppercase">
                  User
                </th>

                <th className="px-6 py-3 text-xs font-bold text-slate-600 uppercase">
                  Review
                </th>

                <th className="px-6 py-3 text-xs font-bold text-slate-600 uppercase">
                  Rating
                </th>

                <th className="px-6 py-3 text-xs font-bold text-slate-600 uppercase">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">

              {filteredReviews.length > 0 ? (
                filteredReviews.map((review) => {
                  const user = review.userId;

                  return (
                    <tr key={review._id} className="hover:bg-slate-50">

                      <td className="px-6 py-4 flex items-center gap-3">

                        <img
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          alt="user"
                          className="w-10 h-10 rounded-full border"
                        />

                        <div>
                          <p className="text-sm font-semibold">
                            {user?.name || "Unknown"}
                          </p>

                          <p className="text-xs text-slate-400">
                            {user?.role || "User"}
                          </p>
                        </div>

                      </td>

                      <td className="px-6 py-4 text-sm text-slate-600 max-w-lg">
                        {review.reviewstext}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < review.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-slate-200"
                              }
                            />
                          ))}
                        </div>
                      </td>

                      <td className="px-6 py-4">

                        <button
                          onClick={() => handleDelete(review._id)}
                          className="flex items-center gap-1 text-xs text-red-600 hover:bg-red-50 px-3 py-1 rounded-lg"
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>

                      </td>

                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="4" className="p-10 text-center">
                    <AlertCircle
                      className="mx-auto text-slate-300 mb-3"
                      size={40}
                    />
                    <p className="text-sm text-slate-500">
                      No reviews found
                    </p>
                  </td>
                </tr>
              )}

            </tbody>

          </table>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden space-y-4">

        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => {
            const user = review.userId;

            return (
              <div
                key={review._id}
                className="bg-white border border-slate-100 shadow-sm rounded-xl p-5 space-y-3"
              >

                <div className="flex items-center gap-3">

                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="w-10 h-10 rounded-full"
                  />

                  <div>
                    <p className="text-sm font-semibold">
                      {user?.name || "Unknown"}
                    </p>

                    <p className="text-xs text-slate-400">
                      {user?.role || "User"}
                    </p>
                  </div>

                </div>

                <p className="text-sm text-slate-600">
                  {review.reviewstext}
                </p>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-slate-200"
                      }
                    />
                  ))}
                </div>

                <button
                  onClick={() => handleDelete(review._id)}
                  className="flex items-center gap-1 text-xs text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg"
                >
                  <Trash2 size={16} />
                  Delete
                </button>

              </div>
            );
          })
        ) : (
          <div className="text-center p-10">
            <AlertCircle className="mx-auto text-slate-300 mb-3" size={40} />
            <p className="text-sm text-slate-500">No reviews found</p>
          </div>
        )}

      </div>

    </div>
  );
};

export default ReviewList;