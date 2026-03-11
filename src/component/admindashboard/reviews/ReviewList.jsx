import React from "react";
import { Star, Trash2, AlertCircle } from "lucide-react";
import {
  useGetReviewsQuery,
  useDeleteReviewMutation,
} from "../../../redux/api/ReviewsApi";

const ReviewList = () => {
  const { data, isLoading, error } = useGetReviewsQuery();
  const [deleteReview, { isLoading: deleting }] = useDeleteReviewMutation();

  const reviews = data?.addedreviews || [];

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
      <div className="bg-white rounded-2xl border border-slate-100 p-10 text-center">
        <p className="text-sm text-slate-500 font-medium">Loading reviews...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl border border-red-100 p-10 text-center">
        <p className="text-sm text-red-500 font-medium">
          Failed to load reviews
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">

      {/* Header */}
      <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
          Client Reviews
        </h2>

        <span className="text-xs text-slate-500 font-medium">
          {reviews.length} Total Reviews
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">

          {/* Table Head */}
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">
                User
              </th>

              <th className="px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">
                Review
              </th>

              <th className="px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">
                Rating
              </th>

              <th className="px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">
                Role
              </th>

              <th className="px-6 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider text-center">
                Action
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-slate-100">

            {reviews.length > 0 ? (
              reviews.map((review) => {
                const user = review.userId;

                return (
                  <tr
                    key={review._id}
                    className="hover:bg-slate-50 transition"
                  >

                    {/* USER */}
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt={user?.name}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200"
                      />

                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {user?.name || "Unknown"}
                        </p>

                        <p className="text-xs text-slate-400">
                          {user?.role || "User"}
                        </p>
                      </div>
                    </td>

                    {/* REVIEW */}
                    <td className="px-6 py-4">
                      <p className="text-sm text-slate-600 max-w-xl">
                        {review.reviewstext}
                      </p>
                    </td>

                    {/* RATING */}
                    <td className="px-6 py-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={
                              i < review.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-slate-200 fill-slate-200"
                            }
                          />
                        ))}
                      </div>
                    </td>

                    {/* ROLE */}
                    <td className="px-6 py-4">
                      <span className="text-xs font-semibold bg-green-50 text-green-700 px-2 py-1 rounded-full">
                        {user?.role || "User"}
                      </span>
                    </td>

                    {/* ACTION */}
                    <td className="px-6 py-4 text-center">

                      <button
                        onClick={() => handleDelete(review._id)}
                        disabled={deleting}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-lg transition"
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
                <td colSpan="5">
                  <div className="p-12 text-center">
                    <AlertCircle
                      className="mx-auto text-slate-300 mb-3"
                      size={40}
                    />
                    <p className="text-sm text-slate-500 font-medium">
                      No reviews available
                    </p>
                  </div>
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>

      {/* Footer */}
      {reviews.length > 0 && (
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            Showing {reviews.length} reviews
          </p>

          <button className="text-xs font-semibold text-[#237227] hover:underline">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewList;