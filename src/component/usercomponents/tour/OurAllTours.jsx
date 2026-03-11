import React, { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Calendar,
  DollarSign,
  Star,
  Filter,
  ChevronRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-hot-toast"; // Professional toast
import { useGetAllToursQuery } from "../../../redux/api/AdminTourApi";
import { useBookTourMutation } from "../../../redux/api/userTourApi";

const OurAllTours = () => {
  // Search & Filters state
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  // Local filtered tours state
  const [filteredTours, setFilteredTours] = useState([]);

  // Fetch all tours
  const { data, isLoading, isError } = useGetAllToursQuery();

  // Booking mutation
  const [bookTour, { isLoading: bookingLoading }] = useBookTourMutation();

  // Initialize AOS once
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Filter tours whenever data or filters change
  useEffect(() => {
    if (data?.tours) {
      let tours = [...data.tours];

      // Search filter
      if (searchTerm.trim() !== "") {
        tours = tours.filter(
          (tour) =>
            tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tour.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Location filter
      if (selectedLocation !== "all") {
        tours = tours.filter((tour) => tour.location === selectedLocation);
      }

      // Price filter
      if (priceFilter === "budget") {
        tours = tours.filter((tour) => tour.price <= 25000);
      } else if (priceFilter === "standard") {
        tours = tours.filter(
          (tour) => tour.price > 25000 && tour.price <= 40000
        );
      } else if (priceFilter === "premium") {
        tours = tours.filter((tour) => tour.price > 40000);
      }

      setFilteredTours(tours);
    }
  }, [data, searchTerm, selectedLocation, priceFilter]);

  // Unique locations for filter dropdown
  const locations = ["all", ...new Set(data?.tours?.map((tour) => tour.location))];

  // Handle booking click
  const handleBookTour = async (tourId) => {
    try {
      const response = await bookTour(tourId).unwrap();
      if (response?.success) {
        toast.success("Tour booked successfully!");
      } else {
        toast.error(response?.message || "Booking failed");
      }
    } catch (error) {
      toast.error(error?.data?.message || "Booking failed");
    }
  };

  return (
    <section className="relative py-16 sm:py-20 bg-slate-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Our Featured <span className="text-green-600">Tours</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl">
            Handpicked tours across Pakistan designed for unforgettable experiences
          </p>
        </div>

        {/* Search & Filters */}
        <div data-aos="fade-up" data-aos-delay="100" className="space-y-6 mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search tours by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-600" />
                  Location
                </div>
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all bg-white"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc === "all" ? "All Locations" : loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  Price Range
                </div>
              </label>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all bg-white"
              >
                <option value="all">All Prices</option>
                <option value="budget">Budget (Under 25K)</option>
                <option value="standard">Standard (25K - 40K)</option>
                <option value="premium">Premium (Above 40K)</option>
              </select>
            </div>

            {/* Count */}
            <div className="flex items-end">
              <div className="w-full px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm font-semibold text-green-700">
                  {filteredTours.length} Tours Found
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tours Grid */}
        {isLoading ? (
          <div className="text-center py-16">Loading tours...</div>
        ) : isError ? (
          <div className="text-center py-16 text-red-500">Error loading tours.</div>
        ) : filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTours.map((tour, index) => (
              <div
                key={tour._id}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <img
                    src={tour.image?.url || "/placeholder.png"}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                    <Star className="w-4 h-4 fill-white" />
                    {tour.rating?.toFixed(1) || "N/A"}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-600 transition-colors line-clamp-2">
                    {tour.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">{tour.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <MapPin className="w-4 h-4 text-green-600 shrink-0" />
                      <span>{tour.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <Calendar className="w-4 h-4 text-green-600 shrink-0" />
                      <span>{tour.duration}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-xs text-slate-500">
                      Starting:{" "}
                      <span className="font-semibold text-slate-700">{tour.startDate}</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <div>
                      <p className="text-xs text-slate-500">From</p>
                      <p className="text-2xl font-bold text-green-600">
                        PKR {tour.price?.toLocaleString() || "N/A"}
                      </p>
                    </div>
                    <button
                      onClick={() => handleBookTour(tour._id)}
                      disabled={bookingLoading}
                      className="group/btn px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-300 flex items-center gap-1 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {bookingLoading ? "Booking..." : "Book Now"}
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Filter className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-lg text-slate-600 font-semibold">
              No tours match your filters
            </p>
            <p className="text-sm text-slate-500 mt-2">
              Try adjusting your search criteria
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurAllTours;