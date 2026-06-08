import React, { useState, useContext } from "react";
import { Trash2, Edit, Plus } from "lucide-react";
import toast from "react-hot-toast";
import { ContextStore } from "../../../../context/Context";

import {
  useGetUserToursQuery,
  useCreateTourMutation,
  useUpdateTourMutation,
  useDeleteTourMutation,
} from "../../../../redux/api/userTourApi";

function CreatedTour() {
  const { isLogin } = useContext(ContextStore);

  // Get all user tours
  const { data, isLoading } = useGetUserToursQuery(undefined, {
    skip: !isLogin,
    refetchOnMountOrArgChange: true,
  });

  const [createTour] = useCreateTourMutation();
  const [updateTour] = useUpdateTourMutation();
  const [deleteTour] = useDeleteTourMutation();

  const tours = data?.tours || [];

  // Predefined cities and their prices
  const cityOptions = [
    { name: "Paris", price: 899 },
    { name: "London", price: 799 },
    { name: "New York", price: 1299 },
    { name: "Tokyo", price: 1499 },
  ];

  // FORM STATE
  const [showForm, setShowForm] = useState(false);
  const [newTour, setNewTour] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    duration: "",
    date: "",
    image: null,
  });

  const [editingId, setEditingId] = useState(null);
  const [editingTour, setEditingTour] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    duration: "",
    date: "",
    image: null,
  });

  // Handle location change for new tour
  const handleNewTourLocationChange = (e) => {
    const selectedCity = cityOptions.find(city => city.name === e.target.value);
    setNewTour({ 
      ...newTour, 
      location: e.target.value,
      price: selectedCity ? selectedCity.price.toString() : ""
    });
  };

  // Handle location change for editing tour
  const handleEditTourLocationChange = (e) => {
    const selectedCity = cityOptions.find(city => city.name === e.target.value);
    setEditingTour({ 
      ...editingTour, 
      location: e.target.value,
      price: selectedCity ? selectedCity.price.toString() : editingTour.price
    });
  };

  // CREATE TOUR
  const handleAddTour = async () => {
    if (
      !newTour.title ||
      !newTour.description ||
      !newTour.location ||
      !newTour.price ||
      !newTour.duration ||
      !newTour.date
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", newTour.title);
      formData.append("description", newTour.description);
      formData.append("location", newTour.location);
      formData.append("price", Number(newTour.price));
      formData.append("duration", Number(newTour.duration));
      formData.append("startDate", newTour.date);

      if (newTour.image) formData.append("image", newTour.image);

      await createTour(formData).unwrap();
      toast.success("Tour submitted for approval");

      setNewTour({
        title: "",
        description: "",
        location: "",
        price: "",
        duration: "",
        date: "",
        image: null,
      });
      setShowForm(false);
    } catch (err) {
      toast.error(err?.data?.message || "Failed to create tour");
    }
  };

  // DELETE TOUR
  const handleDelete = async (id) => {
    try {
      await deleteTour(id).unwrap();
      toast.success("Tour deleted");
    } catch (err) {
      toast.error(err?.data?.message || "Delete failed");
    }
  };

  // OPEN EDIT FORM
  const handleEdit = (tour) => {
    setEditingId(tour._id);
    setEditingTour({
      title: tour.title,
      description: tour.description,
      location: tour.location,
      price: tour.price,
      duration: tour.duration,
      date: tour.startDate?.slice(0, 10),
      image: null,
    });
    setShowForm(true);
  };

  // SAVE EDIT
  const handleSaveEdit = async () => {
    try {
      const formData = new FormData();
      formData.append("title", editingTour.title);
      formData.append("description", editingTour.description);
      formData.append("location", editingTour.location);
      formData.append("price", Number(editingTour.price));
      formData.append("duration", Number(editingTour.duration));
      formData.append("startDate", editingTour.date);

      if (editingTour.image) formData.append("image", editingTour.image);

      await updateTour({ id: editingId, tourData: formData }).unwrap();
      toast.success("Tour updated successfully");
      setEditingId(null);
      setShowForm(false);
    } catch (err) {
      toast.error(err?.data?.message || "Update failed");
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-700">Your Tours</h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg"
        >
          <Plus size={18} />
          Add Tour
        </button>
      </div>

      {/* CREATE / EDIT FORM */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-6 rounded-lg w-[400px] space-y-3">
            <h3 className="text-lg font-semibold text-green-700">
              {editingId ? "Edit Tour" : "Create Tour"}
            </h3>

            <input
              type="text"
              placeholder="Title"
              className="w-full border p-2 rounded"
              value={editingId ? editingTour.title : newTour.title}
              onChange={(e) =>
                editingId
                  ? setEditingTour({ ...editingTour, title: e.target.value })
                  : setNewTour({ ...newTour, title: e.target.value })
              }
            />
            <textarea
              placeholder="Description"
              className="w-full border p-2 rounded"
              value={editingId ? editingTour.description : newTour.description}
              onChange={(e) =>
                editingId
                  ? setEditingTour({ ...editingTour, description: e.target.value })
                  : setNewTour({ ...newTour, description: e.target.value })
              }
            />
            
            {/* Location Dropdown */}
            <select
              className="w-full border p-2 rounded"
              value={editingId ? editingTour.location : newTour.location}
              onChange={editingId ? handleEditTourLocationChange : handleNewTourLocationChange}
            >
              <option value="">Select a city</option>
              {cityOptions.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>

            {/* Price Input with auto-fill */}
            <div>
              <input
                type="number"
                placeholder="Price"
                className="w-full border p-2 rounded"
                value={editingId ? editingTour.price : newTour.price}
                onChange={(e) =>
                  editingId
                    ? setEditingTour({ ...editingTour, price: e.target.value })
                    : setNewTour({ ...newTour, price: e.target.value })
                }
              />
              {(editingId ? editingTour.location : newTour.location) && (
                <p className="text-xs text-gray-500 mt-1">
                  Base price for {(editingId ? editingTour.location : newTour.location)}
                </p>
              )}
            </div>

            <input
              type="number"
              placeholder="Duration (days)"
              className="w-full border p-2 rounded"
              value={editingId ? editingTour.duration : newTour.duration}
              onChange={(e) =>
                editingId
                  ? setEditingTour({ ...editingTour, duration: e.target.value })
                  : setNewTour({ ...newTour, duration: e.target.value })
              }
            />
            <input
              type="date"
              className="w-full border p-2 rounded"
              value={editingId ? editingTour.date : newTour.date}
              onChange={(e) =>
                editingId
                  ? setEditingTour({ ...editingTour, date: e.target.value })
                  : setNewTour({ ...newTour, date: e.target.value })
              }
            />
            <input
              type="file"
              onChange={(e) =>
                editingId
                  ? setEditingTour({ ...editingTour, image: e.target.files[0] })
                  : setNewTour({ ...newTour, image: e.target.files[0] })
              }
            />

            <div className="flex justify-between pt-3">
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                }}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>

              <button
                onClick={editingId ? handleSaveEdit : handleAddTour}
                className="px-4 py-2 bg-green-700 text-white rounded"
              >
                {editingId ? "Save Changes" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LOADING / EMPTY / TOURS GRID */}
      {isLoading ? (
        <p className="text-center text-gray-500">Loading tours...</p>
      ) : tours.length === 0 ? (
        <p className="text-center text-gray-500">No tours created yet</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <div
              key={tour._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={
                  tour.image?.url ||
                  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                }
                alt={tour.title}
                className="h-40 w-full object-cover"
              />

              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-lg text-green-700">
                  {tour.title}
                </h3>
                <p className="text-sm text-gray-500">{tour.duration} days</p>
                <p className="font-medium text-gray-700">${tour.price}</p>

                {/* STATUS */}
                <span
                  className={`text-xs font-medium px-2 py-1 rounded ${
                    tour.status === "approved"
                      ? "bg-green-100 text-green-700"
                      : tour.status === "rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {tour.status || "pending"}
                </span>

                <div className="flex justify-between pt-2">
                  <button
                    onClick={() => handleEdit(tour)}
                    className="flex items-center gap-1 text-yellow-600"
                  >
                    <Edit size={16} />
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(tour._id)}
                    className="flex items-center gap-1 text-red-600"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default CreatedTour;