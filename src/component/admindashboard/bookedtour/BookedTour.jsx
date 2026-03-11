import React from "react";
import {
  useGetAllBookedToursQuery,
  useDeleteTourBookingsAdminMutation,
} from "../../../redux/api/AdminTourApi";

function BookedTour() {
  const { data, isLoading, isError, refetch } = useGetAllBookedToursQuery();

  const [deleteTourBookingsAdmin, { isLoading: deleting }] =
    useDeleteTourBookingsAdminMutation();

  const bookings = data?.bookings || [];

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

  /* ================= TABLE ================= */

  return (
    <div className="max-w-7xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      
      {/* Header */}
      <div className="px-6 py-4 border-b bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-700">
          Tour Bookings
        </h2>
      </div>

      {/* Table */}
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

            {bookings.map((booking) => (
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
  );
}

export default BookedTour;