import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userTourApi = createApi({
  reducerPath: "userTourApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/tour",

    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: ["Tour", "Booking"],

  endpoints: (builder) => ({

    /* ================= USER TOUR APIs ================= */

    // Get Logged-in User Tours
    getUserTours: builder.query({
      query: () => "/my-tours",
      providesTags: ["Tour"],
    }),

    // Create Tour
    createTour: builder.mutation({
      query: (tourData) => ({
        url: "/create",
        method: "POST",
        body: tourData,
      }),
      invalidatesTags: ["Tour"],
    }),

    // Update Tour
    updateTour: builder.mutation({
      query: ({ id, tourData }) => ({
        url: `/update/${id}`,
        method: "PUT",
        body: tourData,
      }),
      invalidatesTags: ["Tour"],
    }),

    // Delete Tour
    deleteTour: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tour"],
    }),

    /* ================= TOUR BOOKING APIs ================= */

    // Book Tour
    bookTour: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["Booking"],
    }),

    // Get User Booked Tours
    getBookedtour: builder.query({
      query: () => ({
        url: "/my-bookings",
        method: "GET",
      }),
      providesTags: ["Booking"],
    }),

    /* ================= USER CANCEL BOOKING ================= */

    cancelBookedTour: builder.mutation({
      query: (tourId) => ({
        url: `/booked/${tourId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Booking"],
    }),

    /* ================= ADMIN APIs ================= */

    // Get All Tours (Admin)
    getAdminTours: builder.query({
      query: () => "/admin/all",
      providesTags: ["Tour"],
    }),

    // Approve Tour
    approveTour: builder.mutation({
      query: (id) => ({
        url: `/admin/approve/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Tour"],
    }),

    // Reject Tour
    rejectTour: builder.mutation({
      query: ({ id, message }) => ({
        url: `/admin/reject/${id}`,
        method: "PATCH",
        body: { message },
      }),
      invalidatesTags: ["Tour"],
    }),

    /* ================= ADMIN DELETE BOOKINGS ================= */

    deleteTourBookingsAdmin: builder.mutation({
      query: (tourId) => ({
        url: `/admin/bookings/${tourId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Booking"],
    }),

  }),
});


/* ================= EXPORT HOOKS ================= */

export const {

  // USER TOUR HOOKS
  useGetUserToursQuery,
  useCreateTourMutation,
  useUpdateTourMutation,
  useDeleteTourMutation,

  // BOOKING HOOKS
  useBookTourMutation,
  useGetBookedtourQuery,
  useCancelBookedTourMutation,

  // ADMIN TOUR HOOKS
  useGetAdminToursQuery,
  useApproveTourMutation,
  useRejectTourMutation,
  useDeleteTourBookingsAdminMutation,

} = userTourApi;