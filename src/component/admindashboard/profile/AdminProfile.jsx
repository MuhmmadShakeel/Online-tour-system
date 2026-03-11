import React, { useEffect, useState } from "react"
import {
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation
} from "../../../redux/api/UserApi"

import { toast } from "react-hot-toast"

function AdminProfile() {

  const { data, isLoading, refetch } = useGetUserQuery()

  const [createUser] = useCreateUserMutation()
  const [updateUser] = useUpdateUserMutation()
  const [deleteUser] = useDeleteUserMutation()

  const user = data?.user

  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState("")
  const [editMode, setEditMode] = useState(false)

  /* ================= PREFILL DATA ================= */

  useEffect(() => {

    if (user) {
      setName(user.name || "")
      setRole(user.role || "")
      setPreview(user?.profileImage?.url || "")
    }

  }, [user])

  /* ================= IMAGE CHANGE ================= */

  const handleImageChange = (e) => {

    const selected = e.target.files[0]

    if (selected) {
      setFile(selected)
      setPreview(URL.createObjectURL(selected))
    }

  }

  /* ================= CREATE PROFILE ================= */

  const handleCreate = async (e) => {

    e.preventDefault()

    if (!name.trim()) {
      toast.error("Name is required")
      return
    }

    try {

      const formData = new FormData()

      formData.append("name", name)

      if (file) {
        formData.append("profileImage", file)
      }

      const res = await createUser(formData).unwrap()

      toast.success(res.message || "Profile created successfully")

      refetch()

    } catch (error) {

      toast.error(error?.data?.message || "Create failed")

    }

  }

  /* ================= UPDATE PROFILE ================= */

  const handleUpdate = async (e) => {

    e.preventDefault()

    try {

      const formData = new FormData()

      formData.append("name", name)

      if (file) {
        formData.append("profileImage", file)
      }

      const res = await updateUser({
        id: user._id,
        formData
      }).unwrap()

      toast.success(res.message || "Profile updated successfully")

      setEditMode(false)

      refetch()

    } catch (error) {

      toast.error(error?.data?.message || "Update failed")

    }

  }

  /* ================= DELETE PROFILE ================= */

  const handleDelete = async () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete your profile?"
    )

    if (!confirmDelete) return

    try {

      const res = await deleteUser(user._id).unwrap()

      toast.success(res.message || "Profile deleted")

      setName("")
      setRole("")
      setPreview("")
      setFile(null)

      refetch()

    } catch (error) {

      toast.error(error?.data?.message || "Delete failed")

    }

  }

  /* ================= LOADING ================= */

  if (isLoading) {
    return (
      <div className="flex justify-center mt-20 text-gray-500">
        Loading profile...
      </div>
    )
  }

  return (

    <div className="min-h-screen flex justify-center items-start bg-gray-100 pt-16 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-6">

        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Admin Profile
        </h2>

        {/* PROFILE IMAGE */}

        <div className="flex flex-col items-center mb-6">

          <img
            src={preview || "https://i.pravatar.cc/300"}
            alt="profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500"
          />

          {(editMode || !user) && (

            <label className="mt-3 text-sm text-indigo-500 cursor-pointer hover:text-indigo-600 transition">

              Change Profile Picture

              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />

            </label>

          )}

        </div>

        {/* FORM */}

        <form
          onSubmit={!user ? handleCreate : handleUpdate}
          className="space-y-4"
        >

          {/* NAME */}

          <div>

            <label className="block text-gray-600 text-sm mb-1">
              Name
            </label>

            <input
              type="text"
              value={name}
              disabled={user && !editMode}
              onChange={(e) => setName(e.target.value)}
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 
              ${(user && !editMode)
                ? "bg-gray-100 border-gray-200 text-gray-500"
                : "bg-white border-gray-300 text-gray-800 focus:ring-indigo-400"
              }`}
            />

          </div>

          {/* ROLE */}

          {user && (

            <div>

              <label className="block text-gray-600 text-sm mb-1">
                Role
              </label>

              <input
                type="text"
                value={role}
                disabled
                className="w-full bg-gray-100 border border-gray-200 text-gray-500 px-4 py-2 rounded-lg"
              />

            </div>

          )}

          {/* CREATE PROFILE */}

          {!user && (

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2.5 rounded-lg font-semibold transition"
            >
              Create Profile
            </button>

          )}

          {/* EDIT PROFILE */}

          {user && !editMode && (

            <button
              type="button"
              onClick={() => setEditMode(true)}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2.5 rounded-lg font-semibold transition"
            >
              Edit Profile
            </button>

          )}

          {/* SAVE / CANCEL */}

          {user && editMode && (

            <div className="flex gap-3">

              <button
                type="submit"
                className="flex-1 bg-green-600 hover:bg-green-500 text-white py-2.5 rounded-lg font-semibold transition"
              >
                Save Changes
              </button>

              <button
                type="button"
                onClick={() => {
                  setEditMode(false)
                  setName(user.name)
                  setPreview(user?.profileImage?.url)
                }}
                className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2.5 rounded-lg font-semibold transition"
              >
                Cancel
              </button>

            </div>

          )}

        </form>

        {/* DELETE */}

        {user && (

          <button
            onClick={handleDelete}
            className="w-full mt-4 bg-red-600 hover:bg-red-500 text-white py-2.5 rounded-lg font-semibold transition"
          >
            Delete Profile
          </button>

        )}

      </div>

    </div>

  )

}

export default AdminProfile