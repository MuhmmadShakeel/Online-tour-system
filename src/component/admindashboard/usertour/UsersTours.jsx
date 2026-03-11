import React, { useEffect, useState } from "react";
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

  if (isLoading) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto mt-8 space-y-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Admin Tours</h2>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        {tours.length > 0 ? tours.map((tour) => (
          <div key={tour._id} className="p-4 border-b border-slate-100 flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <img src={tour.image?.url || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"} className="w-14 h-14 rounded-xl object-cover" />
              <div>
                <h4 className="text-sm font-bold">{tour.title}</h4>
                <p className="text-xs text-slate-500">{tour.userId?.name} ({tour.userId?.email})</p>
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                  tour.status === 'approved' ? 'bg-green-100 text-green-700' :
                  tour.status === 'rejected' ? 'bg-red-100 text-red-700' :
                  tour.status === 'deleted-by-admin' ? 'bg-gray-200 text-gray-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>{tour.status}</span>
              </div>
            </div>
            <div className="flex gap-2">
              {tour.status !== "approved" && tour.status !== "deleted-by-admin" && (
                <button onClick={() => handleApprove(tour._id)} className="p-2 text-green-700 bg-green-50 rounded-lg flex items-center gap-1"><Edit2 size={16}/>Approve</button>
              )}
              {tour.status !== "rejected" && tour.status !== "deleted-by-admin" && (
                <button onClick={() => handleReject(tour._id)} className="p-2 text-red-700 bg-red-50 rounded-lg flex items-center gap-1"><Trash2 size={16}/>Reject</button>
              )}
              {tour.status !== "deleted-by-admin" && (
                <button onClick={() => handleDelete(tour._id)} className="p-2 text-gray-700 bg-gray-50 rounded-lg flex items-center gap-1"><Trash2 size={16}/>Delete</button>
              )}
            </div>
          </div>
        )) : (
          <div className="p-12 text-center text-slate-500 font-medium">No tours available</div>
        )}
      </div>
    </div>
  );
};

export default UsersTours;