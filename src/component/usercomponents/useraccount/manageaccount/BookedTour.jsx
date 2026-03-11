import React, { useContext } from "react";
import {
  useGetBookedtourQuery,
  useCancelBookedTourMutation,
} from "../../../../redux/api/userTourApi";
import { ContextStore } from "../../../../context/Context";

function BookedTour() {
  const { isLogin } = useContext(ContextStore);

  const { data, isLoading, isError, refetch } = useGetBookedtourQuery(undefined, {
    skip: !isLogin,
    refetchOnMountOrArgChange: true,
  });

  const [cancelBookedTour, { isLoading: cancelLoading }] =
    useCancelBookedTourMutation();

  const bookings = data?.bookings || [];

  const handleCancel = async (tourId) => {
    try {
      await cancelBookedTour(tourId).unwrap();
    } catch (error) {
      console.error("Cancel booking error:", error);
    }
  };

  /* ================= LOADING ================= */

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto mt-8 p-12 text-center bg-white shadow-md rounded-lg border">
        <p className="text-gray-500 text-lg">Loading your booked tours...</p>
      </div>
    );
  }

  /* ================= ERROR ================= */

  if (isError) {
    return (
      <div className="max-w-6xl mx-auto mt-8 p-12 text-center bg-white shadow-md rounded-lg border border-red-200">
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
      <div className="max-w-6xl mx-auto mt-8 p-12 text-center bg-white shadow-md rounded-lg border">
        <h2 className="text-xl font-semibold text-green-600">
          No Booked Tours
        </h2>
        <p className="text-gray-500 mt-2">
          You haven't booked any tours yet.
        </p>
      </div>
    );
  }

  /* ================= TABLE ================= */

  return (
    <div className="max-w-6xl mx-auto mt-8 bg-white shadow-md rounded-lg border overflow-hidden">
      <div className="px-6 py-4 border-b bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-700">
          Your Booked Tours
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-green-50 text-green-700">
            <tr>
              <th className="px-6 py-3 text-left font-semibold">Tour</th>
              <th className="px-6 py-3 text-left font-semibold">Location</th>
              <th className="px-6 py-3 text-left font-semibold">Start Date</th>
              <th className="px-6 py-3 text-left font-semibold">Price</th>
              <th className="px-6 py-3 text-left font-semibold">Duration</th>
              <th className="px-6 py-3 text-left font-semibold">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {bookings.map((booking) => (
              <tr key={booking._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-green-600">
                  {booking.tourId?.title || "Deleted Tour"}
                </td>

                <td className="px-6 py-4 text-gray-500">
                  {booking.tourId?.location || "N/A"}
                </td>

                <td className="px-6 py-4 text-gray-500">
                  {booking.tourId?.startDate
                    ? new Date(booking.tourId.startDate).toLocaleDateString()
                    : "N/A"}
                </td>

                <td className="px-6 py-4 text-gray-500">
                  PKR {booking.tourId?.price?.toLocaleString() || "N/A"}
                </td>

                <td className="px-6 py-4 text-gray-500">
                  {booking.tourId?.duration
                    ? `${booking.tourId.duration} days`
                    : "N/A"}
                </td>

                <td className="px-6 py-4">
                  <button
                    onClick={() => handleCancel(booking.tourId?._id)}
                    disabled={cancelLoading}
                    className="px-4 py-1.5 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition disabled:opacity-50"
                  >
                    Cancel Booking
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