import React, { useState, useMemo } from "react";
import { Users, Star, Map, ShoppingCart, Search } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { useGetReviewsQuery } from "../../../redux/api/ReviewsApi";
import {
  useGetAllToursQuery,
  useGetAllBookedToursQuery,
} from "../../../redux/api/AdminTourApi";
import { useGetAllUsersQuery } from "../../../redux/api/AuthApi.js";

function Overview() {
  const [search, setSearch] = useState("");

  // API calls
  const { data: usersData, isLoading: usersLoading } = useGetAllUsersQuery();
  const { data: reviewsData, isLoading: reviewsLoading } = useGetReviewsQuery();
  const { data: toursData, isLoading: toursLoading } = useGetAllToursQuery();
  const { data: bookedData, isLoading: bookedLoading } =
    useGetAllBookedToursQuery();

  /* ================= TOTAL COUNTS ================= */

  const totalUsers = usersData?.data?.length || 0;
  const totalReviews = reviewsData?.addedreviews?.length || 0;
  const totalTours = toursData?.tours?.length || 0;
  const totalBooked = bookedData?.bookings?.length || 0;

  /* ================= LINE CHART DATA ================= */

  const lineData = useMemo(() => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const counts = new Array(12).fill(0);

    if (bookedData?.bookings) {
      bookedData.bookings.forEach((booking) => {
        const date = new Date(booking.createdAt);
        const month = date.getMonth();
        counts[month]++;
      });
    }

    return months.map((month, index) => ({
      month,
      bookings: counts[index],
    }));
  }, [bookedData]);

  return (
    <div className="p-6 space-y-8">

      {/* ================= HEADER ================= */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard Overview
        </h1>

        <div className="relative w-full md:w-80">

          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search dashboard..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
          />

        </div>

      </div>

      {/* ================= STATS CARDS ================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* USERS */}

        <div className="bg-white shadow-md border border-slate-100 rounded-xl p-6 flex items-center justify-between hover:shadow-lg transition-shadow">

          <div>
            <p className="text-xs text-slate-500 uppercase font-semibold">
              Total Users
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              {usersLoading ? "..." : totalUsers}
            </h2>
          </div>

          <div className="bg-blue-100 p-3 rounded-lg">
            <Users className="text-blue-600" size={22} />
          </div>

        </div>

        {/* REVIEWS */}

        <div className="bg-white shadow-md border border-slate-100 rounded-xl p-6 flex items-center justify-between hover:shadow-lg transition-shadow">

          <div>
            <p className="text-xs text-slate-500 uppercase font-semibold">
              Reviews
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              {reviewsLoading ? "..." : totalReviews}
            </h2>
          </div>

          <div className="bg-yellow-100 p-3 rounded-lg">
            <Star className="text-yellow-500" size={22} />
          </div>

        </div>

        {/* TOURS */}

        <div className="bg-white shadow-md border border-slate-100 rounded-xl p-6 flex items-center justify-between hover:shadow-lg transition-shadow">

          <div>
            <p className="text-xs text-slate-500 uppercase font-semibold">
              Total Tours
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              {toursLoading ? "..." : totalTours}
            </h2>
          </div>

          <div className="bg-green-100 p-3 rounded-lg">
            <Map className="text-green-600" size={22} />
          </div>

        </div>

        {/* BOOKINGS */}

        <div className="bg-white shadow-md border border-slate-100 rounded-xl p-6 flex items-center justify-between hover:shadow-lg transition-shadow">

          <div>
            <p className="text-xs text-slate-500 uppercase font-semibold">
              Booked Tours
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              {bookedLoading ? "..." : totalBooked}
            </h2>
          </div>

          <div className="bg-purple-100 p-3 rounded-lg">
            <ShoppingCart className="text-purple-600" size={22} />
          </div>

        </div>

      </div>

      {/* ================= LINE CHART SECTION ================= */}

      <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">

        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          Monthly Tour Bookings
        </h2>

        <div className="w-full h-80">

          <ResponsiveContainer>

            <LineChart data={lineData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="bookings"
                stroke="#16a34a"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

export default Overview;