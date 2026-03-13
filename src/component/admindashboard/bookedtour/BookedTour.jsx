import React, { useState } from "react";
import {
  useGetAllBookedToursQuery,
  useDeleteTourBookingsAdminMutation,
} from "../../../redux/api/AdminTourApi";

function BookedTour() {
  const { data, isLoading, isError, refetch } = useGetAllBookedToursQuery();

  const [deleteTourBookingsAdmin, { isLoading: deleting }] =
    useDeleteTourBookingsAdminMutation();

  const [search, setSearch] = useState("");

  const bookings = data?.bookings || [];

  /* ================= SEARCH FILTER ================= */

  const filteredBookings = bookings.filter((booking) => {
    const user = booking.userId?.name?.toLowerCase() || "";
    const email = booking.userId?.email?.toLowerCase() || "";
    const title = booking.tourId?.title?.toLowerCase() || "";

    return (
      user.includes(search.toLowerCase()) ||
      email.includes(search.toLowerCase()) ||
      title.includes(search.toLowerCase())
    );
  });

  const handleDelete = async (tourId) => {
    try {
      await deleteTourBookingsAdmin(tourId).unwrap();
    } catch (error) {
      console.error("Delete booking error:", error);
    }
  };

  /* ================= LOADING ================= */

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto mt-10 p-10 bg-white shadow rounded-lg text-center">
        <p className="text-gray-500 text-lg">Loading bookings...</p>
      </div>
    );
  }

  /* ================= ERROR ================= */

  if (isError) {
    return (
      <div className="max-w-7xl mx-auto mt-10 p-10 bg-white shadow rounded-lg text-center border border-red-200">
        <p className="text-red-500">Failed to load bookings.</p>

        <button
          onClick={refetch}
          className="mt-4 px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  /* ================= EMPTY ================= */

  if (!bookings.length) {
    return (
      <div className="max-w-7xl mx-auto mt-10 p-10 bg-white shadow rounded-lg text-center">
        <h2 className="text-xl font-semibold text-gray-700">
          No Bookings Found
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-10 space-y-6 px-4 md:px-0">

      {/* ================= TOP SECTION ================= */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* TOTAL BOOKINGS CARD */}

        <div className="bg-white border shadow-sm rounded-xl px-6 py-4 flex items-center gap-4">

          <div className="bg-green-100 p-3 rounded-lg">
            <span className="text-green-700 font-bold text-lg">📊</span>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase">
              Total Booked Tours
            </p>

            <h3 className="text-2xl font-bold text-gray-800">
              {bookings.length}
            </h3>
          </div>

        </div>

        {/* SEARCH BAR */}

        <div className="w-full md:w-80">

          <input
            type="text"
            placeholder="Search bookings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none text-sm"
          />

        </div>

      </div>

      {/* ================= DESKTOP TABLE ================= */}

      <div className="hidden md:block bg-white shadow-lg rounded-lg overflow-hidden">

        <div className="px-6 py-4 border-b bg-gray-50 flex justify-between">

          <h2 className="text-xl font-semibold text-gray-700">
            Tour Bookings
          </h2>

          <span className="text-sm text-gray-500">
            {filteredBookings.length} Results
          </span>

        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">

            <thead className="bg-green-50 text-green-700">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">User</th>
                <th className="px-6 py-3 text-left font-semibold">Email</th>
                <th className="px-6 py-3 text-left font-semibold">Tour</th>
                <th className="px-6 py-3 text-left font-semibold">Location</th>
                <th className="px-6 py-3 text-left font-semibold">Price</th>
                <th className="px-6 py-3 text-left font-semibold">Start Date</th>
                <th className="px-6 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y">

              {filteredBookings.map((booking) => (
                <tr key={booking._id} className="hover:bg-gray-50">

                  <td className="px-6 py-4 font-medium text-gray-700">
                    {booking.userId?.name || "Unknown"}
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    {booking.userId?.email || "N/A"}
                  </td>

                  <td className="px-6 py-4 font-medium text-green-600">
                    {booking.tourId?.title || "Deleted Tour"}
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    {booking.tourId?.location || "N/A"}
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    PKR {booking.tourId?.price?.toLocaleString() || "N/A"}
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    {booking.tourId?.startDate
                      ? new Date(
                          booking.tourId.startDate
                        ).toLocaleDateString()
                      : "N/A"}
                  </td>

                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(booking.tourId?._id)}
                      disabled={deleting}
                      className="px-4 py-1.5 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition disabled:opacity-50"
                    >
                      Delete Bookings
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
            className="bg-white border shadow-sm rounded-xl p-5 space-y-3"
          >

            <div>
              <p className="text-sm font-semibold text-gray-800">
                {booking.userId?.name || "Unknown"}
              </p>

              <p className="text-xs text-gray-500">
                {booking.userId?.email || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-green-600">
                {booking.tourId?.title || "Deleted Tour"}
              </p>

              <p className="text-xs text-gray-500">
                {booking.tourId?.location || "N/A"}
              </p>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>
                PKR {booking.tourId?.price?.toLocaleString() || "N/A"}
              </span>

              <span>
                {booking.tourId?.startDate
                  ? new Date(
                      booking.tourId.startDate
                    ).toLocaleDateString()
                  : "N/A"}
              </span>
            </div>

            <button
              onClick={() => handleDelete(booking.tourId?._id)}
              disabled={deleting}
              className="w-full px-4 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition disabled:opacity-50"
            >
              Delete Bookings
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default BookedTour;