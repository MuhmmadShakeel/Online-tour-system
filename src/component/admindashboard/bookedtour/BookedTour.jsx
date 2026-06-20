import React, { useMemo, useState } from "react";
import toast from "react-hot-toast";
import {
  useGetAllBookedToursQuery,
  useDeleteTourBookingsAdminMutation,
} from "../../../redux/api/AdminTourApi";

function BookedTour() {
  const { data, isLoading, isError, error, refetch } =
    useGetAllBookedToursQuery(undefined, {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
    });
  const [deleteTourBookingsAdmin, { isLoading: deleting }] =
    useDeleteTourBookingsAdminMutation();

  const [search, setSearch] = useState("");

  const bookings = useMemo(
    () => data?.bookings || data?.data?.bookings || [],
    [data]
  );

  const filteredBookings = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    if (!searchValue) return bookings;

    return bookings.filter((booking) => {
      const userName = booking.userId?.name?.toLowerCase() || "";
      const userEmail = booking.userId?.email?.toLowerCase() || "";
      const tourTitle = booking.tourId?.title?.toLowerCase() || "";
      const tourLocation = booking.tourId?.location?.toLowerCase() || "";

      return (
        userName.includes(searchValue) ||
        userEmail.includes(searchValue) ||
        tourTitle.includes(searchValue) ||
        tourLocation.includes(searchValue)
      );
    });
  }, [bookings, search]);

  const handleDelete = async (tourId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete the bookings for this tour?"
    );
    if (!confirmDelete) return;

    try {
      await deleteTourBookingsAdmin(tourId).unwrap();
      toast.success("Booking deleted successfully");
      refetch();
    } catch (error) {
      toast.error(error?.data?.message || "Failed to delete booking");
    }
  };

  const getInitials = (name) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  /* ================= LOADING ================= */
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto mt-10 p-10 bg-white shadow rounded-xl text-center">
        <div className="inline-block w-10 h-10 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
        <p className="text-gray-500 text-lg mt-4 font-medium">
          Loading bookings...
        </p>
      </div>
    );
  }

  /* ================= ERROR ================= */
  if (isError) {
    return (
      <div className="max-w-7xl mx-auto mt-10 p-10 bg-white shadow rounded-xl text-center border border-red-200">
        <div className="text-5xl mb-4">⚠️</div>
        <p className="text-red-500 text-lg font-medium">
          Failed to load bookings.
        </p>
        <p className="text-gray-500 text-sm mt-1">
          {error?.data?.message || "Please check your connection and try again."}
        </p>
        <button
          onClick={refetch}
          className="mt-4 px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-10 space-y-6 px-4 md:px-0">
      {/* ================= TOP SECTION ================= */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="bg-white border shadow-sm rounded-xl px-6 py-4 flex items-center gap-4">
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-3 rounded-lg">
            <span className="text-2xl">📋</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Total Booked Tours
            </p>
            <p className="text-2xl font-bold text-gray-800">
              {bookings.length}
            </p>
          </div>
        </div>

        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search by name, email or tour..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none text-sm transition-all"
          />
          <svg
            className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* ================= EMPTY STATE ================= */}
      {!bookings.length && (
        <div className="bg-white shadow rounded-xl p-16 text-center">
          <div className="text-6xl mb-4">📭</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            No Bookings Found
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            There are no tour bookings in the system yet. Bookings will appear
            here when users make reservations.
          </p>
        </div>
      )}

      {bookings.length > 0 && filteredBookings.length === 0 && (
        <div className="bg-white shadow rounded-xl p-12 text-center">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            No matching results
          </h2>
          <p className="text-gray-500">
            Try adjusting your search to find what you're looking for.
          </p>
          <button
            onClick={() => setSearch("")}
            className="mt-4 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
          >
            Clear Search
          </button>
        </div>
      )}

      {filteredBookings.length > 0 && (
        <>
          {/* ================= DESKTOP TABLE ================= */}
          <div className="hidden md:block bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b bg-gray-50 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Tour Bookings
                </h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  All user tour reservations
                </p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                {filteredBookings.length} Result
                {filteredBookings.length !== 1 ? "s" : ""}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-green-50 text-green-800">
                  <tr>
                    <th className="px-6 py-3.5 text-left font-semibold text-xs uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3.5 text-left font-semibold text-xs uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3.5 text-left font-semibold text-xs uppercase tracking-wider">
                      Tour
                    </th>
                    <th className="px-6 py-3.5 text-left font-semibold text-xs uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3.5 text-left font-semibold text-xs uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3.5 text-left font-semibold text-xs uppercase tracking-wider">
                      Start Date
                    </th>
                    <th className="px-6 py-3.5 text-left font-semibold text-xs uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {filteredBookings.map((booking) => (
                    <tr
                      key={booking._id}
                      className="hover:bg-gray-50/80 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-green-700 font-bold text-xs">
                            {getInitials(booking.userId?.name)}
                          </div>
                          <span className="font-medium text-gray-800">
                            {booking.userId?.name || "Unknown User"}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-gray-500">
                        {booking.userId?.email || "N/A"}
                      </td>

                      <td className="px-6 py-4">
                        <span className="font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-md">
                          {booking.tourId?.title || "Deleted Tour"}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-gray-500">
                        {booking.tourId?.location || "N/A"}
                      </td>

                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-700">
                          {booking.tourId?.price
                            ? `PKR ${Number(booking.tourId.price).toLocaleString()}`
                            : "N/A"}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-gray-500">
                        <span className="inline-flex items-center gap-1.5">
                          <svg
                            className="w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {formatDate(booking.tourId?.startDate)}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDelete(booking.tourId?._id)}
                          disabled={deleting}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all disabled:opacity-50 border border-red-100"
                        >
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          {deleting ? "Deleting..." : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ================= MOBILE CARDS ================= */}
          <div className="md:hidden space-y-4">
            {filteredBookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-white border border-gray-100 shadow-sm rounded-xl p-5 space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-green-700 font-bold text-sm">
                      {getInitials(booking.userId?.name)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {booking.userId?.name || "Unknown User"}
                      </p>
                      <p className="text-xs text-gray-500">
                        {booking.userId?.email || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm font-semibold text-green-700">
                      {booking.tourId?.title || "Deleted Tour"}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    📍 {booking.tourId?.location || "N/A"}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500 mb-1">Price</p>
                    <p className="font-bold text-gray-800 text-sm">
                      {booking.tourId?.price
                        ? `PKR ${Number(booking.tourId.price).toLocaleString()}`
                        : "N/A"}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500 mb-1">Start Date</p>
                    <p className="font-bold text-gray-800 text-sm">
                      {formatDate(booking.tourId?.startDate)}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(booking.tourId?._id)}
                  disabled={deleting}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all disabled:opacity-50 border border-red-100"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  {deleting ? "Deleting..." : "Delete Booking"}
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default BookedTour;
