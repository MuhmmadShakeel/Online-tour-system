import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AuthApi = createApi({
  reducerPath: "AuthApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/auth",

    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.auth?.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: ["Auth", "Users"],

  endpoints: (builder) => ({
    // ================= AUTH ENDPOINTS =================

    signUp: builder.mutation({
      query: (formData) => ({
        url: "/signup",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Auth"],
    }),

    login: builder.mutation({
      query: (formData) => ({
        url: "/login",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Auth"],
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "GET",
      }),
      invalidatesTags: ["Auth"],
    }),

    // ================= ADMIN USER MANAGEMENT =================

    // Get all users (admin)
    getAllUsers: builder.query({
      query: () => "/getauth",
      providesTags: (result) =>
        result?.users
          ? [
              ...result.users.map((user) => ({ type: "Users", id: user._id })),
              { type: "Users", id: "LIST" },
            ]
          : [{ type: "Users", id: "LIST" }],
    }),

    // Delete a user (admin)
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/deleteauth/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
  }),
});

export const {
  // Auth Hooks
  useSignUpMutation,
  useLoginMutation,
  useLogoutMutation,

  // Admin Hooks
  useGetAllUsersQuery,
  useDeleteUserMutation,
} = AuthApi;