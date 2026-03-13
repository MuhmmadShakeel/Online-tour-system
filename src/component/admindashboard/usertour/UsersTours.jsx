import React, { useEffect, useState, useMemo } from "react";
import { Trash2, Edit2 } from "lucide-react";
import toast from "react-hot-toast";
import {
  useGetAdminToursQuery,
  useApproveTourMutation,
  useRejectTourMutation,
  useDeleteTourMutation,
} from "../../../redux/api/userTourApi";

const UsersTours = () => {
  const { data, isLoading, refetch } = useGetAdminToursQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
  });

  const [approveTour] = useApproveTourMutation();
  const [rejectTour] = useRejectTourMutation();
  const [deleteTourByAdmin] = useDeleteTourMutation();

  const [tours, setTours] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (data?.tours) setTours(data.tours);
  }, [data]);

  const handleApprove = async (id) => {
    try {
      await approveTour(id).unwrap();
      toast.success("Tour approved");
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || "Approve failed");
    }
  };

  const handleReject = async (id) => {
    try {
      await rejectTour({ id, message: "Rejected by admin" }).unwrap();
      toast.error("Tour rejected");
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || "Reject failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTourByAdmin(id).unwrap();
      toast.error("Tour deleted by admin");
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || "Delete failed");
    }
  };

  // FILTER TOURS BASED ON SEARCH
  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      const title = tour.title?.toLowerCase() || "";
      const username = tour.userId?.name?.toLowerCase() || "";
      return (
        title.includes(search.toLowerCase()) || username.includes(search.toLowerCase())
      );
    });
  }, [tours, search]);

  if (isLoading)
    return <div className="text-center mt-20 text-slate-500">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto mt-8 space-y-6 px-4 md:px-0">

      {/* HEADER + SEARCH + SUMMARY */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

        <h2 className="text-2xl font-bold text-green-700">Admin Tours</h2>

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 w-full md:w-auto">
          {/* SEARCH INPUT */}
          <input
            type="text"
            placeholder="Search tours by title or user..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 mb-2 sm:mb-0"
          />

          {/* SUMMARY CARD */}
          <div className="bg-green-50 border-l-4 border-green-600 px-4 py-2 rounded-lg flex items-center justify-between w-full sm:w-auto">
            <div className="flex flex-col">
              <p className="text-xs text-green-700 uppercase font-semibold">Total Booked Tours</p>
              <p className="text-xl font-bold text-green-800">{tours.length}</p>
            </div>
          </div>
        </div>

      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        {filteredTours.length > 0 ? (
          filteredTours.map((tour) => (
            <div
              key={tour._id}
              className="p-4 border-b border-slate-100 flex justify-between items-center"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={
                    tour.image?.url ||
                    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                  }
                  className="w-16 h-16 rounded-xl object-cover"
                  alt={tour.title}
                />
                <div>
                  <h4 className="text-sm font-bold">{tour.title}</h4>
                  <p className="text-xs text-slate-500">
                    {tour.userId?.name} ({tour.userId?.email})
                  </p>
                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                      tour.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : tour.status === "rejected"
                        ? "bg-red-100 text-red-700"
                        : tour.status === "deleted-by-admin"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {tour.status}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 flex-wrap">
                {tour.status !== "approved" && tour.status !== "deleted-by-admin" && (
                  <button
                    onClick={() => handleApprove(tour._id)}
                    className="p-2 text-green-700 bg-green-50 rounded-lg flex items-center gap-1"
                  >
                    <Edit2 size={16} />
                    Approve
                  </button>
                )}
                {tour.status !== "rejected" && tour.status !== "deleted-by-admin" && (
                  <button
                    onClick={() => handleReject(tour._id)}
                    className="p-2 text-red-700 bg-red-50 rounded-lg flex items-center gap-1"
                  >
                    <Trash2 size={16} />
                    Reject
                  </button>
                )}
                {tour.status !== "deleted-by-admin" && (
                  <button
                    onClick={() => handleDelete(tour._id)}
                    className="p-2 text-gray-700 bg-gray-50 rounded-lg flex items-center gap-1"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="p-12 text-center text-slate-500 font-medium">
            No tours available
          </div>
        )}
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden space-y-4">
        {filteredTours.length > 0 ? (
          filteredTours.map((tour) => (
            <div
              key={tour._id}
              className="bg-white border border-slate-100 shadow-sm rounded-xl p-4 space-y-2"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={
                    tour.image?.url ||
                    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                  }
                  className="w-16 h-16 rounded-xl object-cover"
                  alt={tour.title}
                />
                <div className="flex-1">
                  <h4 className="text-sm font-bold">{tour.title}</h4>
                  <p className="text-xs text-slate-500">
                    {tour.userId?.name} ({tour.userId?.email})
                  </p>
                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                      tour.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : tour.status === "rejected"
                        ? "bg-red-100 text-red-700"
                        : tour.status === "deleted-by-admin"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {tour.status}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 flex-wrap">
                {tour.status !== "approved" && tour.status !== "deleted-by-admin" && (
                  <button
                    onClick={() => handleApprove(tour._id)}
                    className="p-2 text-green-700 bg-green-50 rounded-lg flex items-center gap-1 w-full justify-center"
                  >
                    <Edit2 size={16} />
                    Approve
                  </button>
                )}
                {tour.status !== "rejected" && tour.status !== "deleted-by-admin" && (
                  <button
                    onClick={() => handleReject(tour._id)}
                    className="p-2 text-red-700 bg-red-50 rounded-lg flex items-center gap-1 w-full justify-center"
                  >
                    <Trash2 size={16} />
                    Reject
                  </button>
                )}
                {tour.status !== "deleted-by-admin" && (
                  <button
                    onClick={() => handleDelete(tour._id)}
                    className="p-2 text-gray-700 bg-gray-50 rounded-lg flex items-center gap-1 w-full justify-center"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="p-10 text-center text-slate-500 font-medium">
            No tours available
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersTours;