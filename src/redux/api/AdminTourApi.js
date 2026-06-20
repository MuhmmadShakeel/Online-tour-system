import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminTourApi = createApi({
  reducerPath: "adminTourApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/admin-tour",

    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: ["AdminTours", "SingleTour", "Booking"],

  endpoints: (builder) => ({

    /* ================= TOUR MANAGEMENT ================= */

    // CREATE TOUR
    createTour: builder.mutation({
      query: (formData) => ({
        url: "/createtour",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: [{ type: "AdminTours", id: "LIST" }],
    }),

    // GET ALL TOURS
    getAllTours: builder.query({
      query: () => "/getalltour",
      providesTags: (result) =>
        result?.tours
          ? [
              ...result.tours.map((tour) => ({
                type: "AdminTours",
                id: tour._id,
              })),
              { type: "AdminTours", id: "LIST" },
            ]
          : [{ type: "AdminTours", id: "LIST" }],
    }),

    // GET SINGLE TOUR
    getSingleTour: builder.query({
      query: (id) => `/getonetour/${id}`,
      providesTags: (result, error, id) => [{ type: "SingleTour", id }],
    }),

    // UPDATE TOUR
    updateTour: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/updatetour/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "AdminTours", id },
        { type: "AdminTours", id: "LIST" },
      ],
    }),

    // DELETE TOUR
    deleteTour: builder.mutation({
      query: (id) => ({
        url: `/deletetour/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "AdminTours", id },
        { type: "AdminTours", id: "LIST" },
      ],
    }),


    getBookedTour: builder.query({
      query: (id) => `/bookedtour/${id}`,
      providesTags: (result, error, id) => [{ type: "Booking", id }],
    }),

    getAllBookedTours: builder.query({
      query: () => ({
        url: "/admin/all-bookings",
        method: "GET",
      }),
      providesTags: (result) =>
        result?.bookings
          ? [
              ...result.bookings.map((booking) => ({
                type: "Booking",
                id: booking._id,
              })),
              { type: "Booking", id: "LIST" },
            ]
          : [{ type: "Booking", id: "LIST" }],
    }),

    deleteTourBookingsAdmin: builder.mutation({
      query: (tourId) => ({
        url: `/admin/bookings/${tourId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, tourId) => [
        { type: "Booking", id: tourId },
        { type: "Booking", id: "LIST" },
      ],
    }),

  }),
});


/* ================= EXPORT HOOKS ================= */

export const {

  // TOUR MANAGEMENT
  useCreateTourMutation,
  useGetAllToursQuery,
  useGetSingleTourQuery,
  useUpdateTourMutation,
  useDeleteTourMutation,

  // BOOKINGS
  useGetBookedTourQuery,
  useGetAllBookedToursQuery,
  useDeleteTourBookingsAdminMutation,
} = adminTourApi;