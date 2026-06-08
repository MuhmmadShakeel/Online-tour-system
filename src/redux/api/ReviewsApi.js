import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewsApi = createApi({
  reducerPath: "reviewsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api", // ✅ clean base URL

    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: ["Reviews"],

  endpoints: (builder) => ({
    // ✅ ADD REVIEW
    addReview: builder.mutation({
      query: (formData) => ({
        url: "/reviews/addreview",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: [{ type: "Reviews", id: "LIST" }],
    }),

    // ✅ GET REVIEWS
    getReviews: builder.query({
      query: () => "/reviews/getreview",

      providesTags: (result) =>
        result?.addedreviews
          ? [
              ...result.addedreviews.map((review) => ({
                type: "Reviews",
                id: review._id,
              })),
              { type: "Reviews", id: "LIST" },
            ]
          : [{ type: "Reviews", id: "LIST" }],
    }),

    // ✅ DELETE REVIEW
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/reviews/deletereview/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: (result, error, id) => [
        { type: "Reviews", id },
        { type: "Reviews", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useAddReviewMutation,
  useGetReviewsQuery,
  useDeleteReviewMutation,
} = reviewsApi;