import React, { useState, useMemo } from "react";
import ToursHeader from "../component/admindashboard/tours/ToursHeader";
import TourFilters from "../component/admindashboard/tours/TourFilters";
import ToursTable from "../component/admindashboard/tours/ToursTable";

const ALL_TOURS = [
  {
    id: 1,
    name: "Skardu Valley Expedition",
    location: "Gilgit-Baltistan",
    price: "$1,200",
    status: "Active",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=200&auto=format&fit=crop",
    duration: "7 Days"
  },
  {
    id: 2,
    name: "Hunza Valley 7-Day Trip",
    location: "Hunza",
    price: "$950",
    status: "Active",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=200&auto=format&fit=crop",
    duration: "10 Days"
  },
  {
    id: 3,
    name: "Northern Pakistan Expedition",
    location: "Gilgit",
    price: "$1,500",
    status: "Draft",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=200&auto=format&fit=crop",
    duration: "5 Days"
  },
  {
    id: 4,
    name: "Lahore Cultural Walk",
    location: "Lahore",
    price: "$150",
    status: "Active",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1581447100595-3773bc66061b?q=80&w=200&auto=format&fit=crop",
    duration: "1 Day"
  },
  {
    id: 5,
    name: "Fairy Meadows Trek",
    location: "Nanga Parbat",
    price: "$800",
    status: "Draft",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=200&auto=format&fit=crop",
    duration: "4 Days"
  }
];

export default function ToursPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Status");

  const filteredTours = useMemo(() => {
    return ALL_TOURS.filter(tour => {
      const matchesSearch = tour.name.toLowerCase().includes(search.toLowerCase()) || 
                           tour.location.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All Categories" || tour.category === category;
      const matchesStatus = status === "All Status" || tour.status === status;
      
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [search, category, status]);

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <ToursHeader totalCount={ALL_TOURS.length} activeCount={ALL_TOURS.filter(t => t.status === 'Active').length} draftCount={ALL_TOURS.filter(t => t.status === 'Draft').length} />
      
      <TourFilters 
        search={search} 
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        status={status}
        onStatusChange={setStatus}
      />

      <ToursTable tours={filteredTours} totalTours={ALL_TOURS.length} />
    </div>
  );
}
