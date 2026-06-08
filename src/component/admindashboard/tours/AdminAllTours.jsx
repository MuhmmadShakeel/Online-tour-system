import React, { useState, useMemo } from "react";
import {
  useCreateTourMutation,
  useDeleteTourMutation,
  useUpdateTourMutation,
  useGetAllToursQuery,
} from "../../../redux/api/AdminTourApi";

function AdminAllTours() {
  const { data, isLoading } = useGetAllToursQuery();
  const [createTour] = useCreateTourMutation();
  const [updateTour] = useUpdateTourMutation();
  const [deleteTour] = useDeleteTourMutation();

  const tours = data?.tours || [];

  const [showCreate, setShowCreate] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  // Initial empty form data
  const emptyFormData = {
    title: "",
    description: "",
    location: "",
    price: "",
    duration: "",
    startDate: "",
    image: null,
  };

  const [formData, setFormData] = useState(emptyFormData);

  const [search, setSearch] = useState("");

  // Predefined cities and their prices
  const cityOptions = [
    { name: "Paris", price: 899 },
    { name: "London", price: 799 },
    { name: "New York", price: 1299 },
    { name: "Tokyo", price: 1499 },
  ];

  const filteredTours = useMemo(
    () =>
      tours.filter((tour) =>
        tour.title.toLowerCase().includes(search.toLowerCase())
      ),
    [tours, search]
  );

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else if (e.target.name === "location") {
      // When location changes, automatically set the price
      const selectedCity = cityOptions.find(city => city.name === e.target.value);
      setFormData({ 
        ...formData, 
        location: e.target.value,
        price: selectedCity ? selectedCity.price : ""
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleCreateOpen = () => {
    setFormData(emptyFormData); // Reset to empty form
    setShowCreate(true);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== "") {
        data.append(key, formData[key]);
      }
    });
    await createTour(data);
    setShowCreate(false);
    setFormData(emptyFormData);
  };

  const handleEditOpen = (tour) => {
    setSelectedTour(tour);
    setFormData({
      title: tour.title,
      description: tour.description,
      location: tour.location,
      price: tour.price,
      duration: tour.duration,
      startDate: tour.startDate?.substring(0, 10),
      image: null,
    });
    setShowEdit(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== "") {
        data.append(key, formData[key]);
      }
    });
    await updateTour({ id: selectedTour._id, formData: data });
    setShowEdit(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this tour?")) {
      await deleteTour(id);
    }
  };

  if (isLoading) {
    return <div className="p-6">Loading tours...</div>;
  }

  return (
    <div className="p-4 md:p-6 space-y-6">

      {/* Header + Search + Summary */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <h1 className="text-2xl font-bold">Admin Tours</h1>

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 w-full md:w-auto">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search tours..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          {/* Create Button */}
          <button
            onClick={handleCreateOpen}
            className="mt-2 sm:mt-0 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition"
          >
            + Create Tour
          </button>
        </div>

      </div>

      {/* Summary Box */}
      <div>
        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-md w-full md:w-auto">
          <p className="text-sm text-gray-600">Total Tours Created</p>
          <p className="text-2xl font-bold text-indigo-700">{tours.length}</p>
        </div>
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block bg-white shadow rounded-lg overflow-x-auto">

        <table className="w-full min-w-[700px]">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Duration</th>
              <th className="p-3 text-left">Start Date</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredTours.length > 0 ? (
              filteredTours.map((tour) => (
                <tr key={tour._id} className="hover:bg-gray-50">
                  <td className="p-3">
                    <img
                      src={tour?.image?.url}
                      alt={tour.title}
                      className="w-16 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="p-3">{tour.title}</td>
                  <td className="p-3">{tour.location}</td>
                  <td className="p-3">${tour.price}</td>
                  <td className="p-3">{tour.duration} days</td>
                  <td className="p-3">{new Date(tour.startDate).toLocaleDateString()}</td>
                  <td className="p-3 flex gap-2 flex-wrap">
                    <button
                      onClick={() => handleEditOpen(tour)}
                      className="bg-yellow-500 hover:bg-yellow-400 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(tour._id)}
                      className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="p-6 text-center text-gray-500">
                  No tours found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="md:hidden space-y-4">
        {filteredTours.length > 0 ? (
          filteredTours.map((tour) => (
            <div
              key={tour._id}
              className="bg-white border border-gray-100 shadow-sm rounded-xl p-4 space-y-2"
            >
              <img
                src={tour?.image?.url}
                alt={tour.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-bold">{tour.title}</h3>
              <p className="text-sm text-gray-500">{tour.location}</p>
              <p className="text-sm text-gray-500">${tour.price}</p>
              <p className="text-sm text-gray-500">{tour.duration} days</p>
              <p className="text-sm text-gray-500">
                Start: {new Date(tour.startDate).toLocaleDateString()}
              </p>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => handleEditOpen(tour)}
                  className="bg-yellow-500 hover:bg-yellow-400 text-white px-3 py-1 rounded flex-1 text-center"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(tour._id)}
                  className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded flex-1 text-center"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-10 text-gray-500">
            No tours found
          </div>
        )}
      </div>

      {/* CREATE / EDIT MODALS */}
      {showCreate && (
        <Modal
          title="Create Tour"
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleCreate}
          close={() => setShowCreate(false)}
          cityOptions={cityOptions}
        />
      )}
      {showEdit && (
        <Modal
          title="Edit Tour"
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleUpdate}
          close={() => setShowEdit(false)}
          cityOptions={cityOptions}
        />
      )}

    </div>
  );
}

export default AdminAllTours;

/* ---------------- MODAL COMPONENT ---------------- */
function Modal({ title, formData, handleChange, handleSubmit, close, cityOptions }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          
          {/* Location Dropdown */}
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          >
            <option value="">Select a city</option>
            {cityOptions.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>

          {/* Price Input (Auto-filled but can be modified) */}
          <div className="relative">
            <input
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              type="number"
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            {formData.location && (
              <p className="text-xs text-gray-500 mt-1">
                Base price for {formData.location}
              </p>
            )}
          </div>

          <input
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Duration (days)"
            type="number"
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            type="date"
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            rows="3"
            required
          />
          <input
            name="image"
            type="file"
            onChange={handleChange}
            className="w-full"
            accept="image/*"
          />
          <div className="flex justify-end gap-2 pt-2 flex-wrap">
            <button
              type="button"
              onClick={close}
              className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}