import React, { useState } from "react";
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

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    duration: "",
    startDate: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));

    await createTour(data);

    setShowCreate(false);
    setFormData({
      title: "",
      description: "",
      location: "",
      price: "",
      duration: "",
      startDate: "",
      image: null,
    });
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
      if (formData[key]) data.append(key, formData[key]);
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
    <div className="p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Tours</h1>

        <button
          onClick={() => setShowCreate(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create Tour
        </button>
      </div>

      {/* Tours Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-left">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Location</th>
              <th className="p-3">Price</th>
              <th className="p-3">Duration</th>
              <th className="p-3">Start Date</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tours.map((tour) => (
              <tr key={tour._id} className="border-b">

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
                <td className="p-3">
                  {new Date(tour.startDate).toLocaleDateString()}
                </td>

                <td className="p-3 flex gap-2">

                  <button
                    onClick={() => handleEditOpen(tour)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(tour._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* CREATE MODAL */}
      {showCreate && (
        <Modal
          title="Create Tour"
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleCreate}
          close={() => setShowCreate(false)}
        />
      )}

      {/* EDIT MODAL */}
      {showEdit && (
        <Modal
          title="Edit Tour"
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleUpdate}
          close={() => setShowEdit(false)}
        />
      )}
    </div>
  );
}

export default AdminAllTours;


/* ---------------- MODAL COMPONENT ---------------- */

function Modal({ title, formData, handleChange, handleSubmit, close }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

      <div className="bg-white p-6 rounded-lg w-[500px]">

        <h2 className="text-xl font-semibold mb-4">{title}</h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full border p-2 rounded"
          />

          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border p-2 rounded"
          />

          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            type="number"
            className="w-full border p-2 rounded"
          />

          <input
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Duration"
            type="number"
            className="w-full border p-2 rounded"
          />

          <input
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            type="date"
            className="w-full border p-2 rounded"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border p-2 rounded"
          />

          <input
            name="image"
            type="file"
            onChange={handleChange}
            className="w-full"
          />

          <div className="flex justify-end gap-2 pt-2">

            <button
              type="button"
              onClick={close}
              className="px-4 py-2 bg-gray-400 text-white rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Save
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}
