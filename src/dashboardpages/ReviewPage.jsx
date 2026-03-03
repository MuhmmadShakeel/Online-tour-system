import React, { useState, useMemo } from "react";
import ReviewStats from "../component/admindashboard/reviews/ReviewStats";
import ReviewFilters from "../component/admindashboard/reviews/ReviewFilters";
import ReviewList from "../component/admindashboard/reviews/ReviewList";

const ALL_REVIEWS = [
  {
    id: 1,
    userName: "Ahmed Raza",
    userImage: "https://randomuser.me/api/portraits/men/32.jpg",
    tourName: "Skardu Valley Expedition",
    rating: 5,
    comment: "The Skardu Valley trip was incredible! The logistics were seamless and our guide was extremely knowledgeable. Highly recommend OTMS for any mountain adventure.",
    date: "2 HOURS AGO",
    status: "Approved"
  },
  {
    id: 2,
    userName: "Sarah Khan",
    userImage: "https://randomuser.me/api/portraits/women/44.jpg",
    tourName: "Hunza Valley 7-Day Trip",
    rating: 4,
    comment: "Hunza is breathtaking! The hotel selection was great, although the travel time was a bit longer than expected. Overall, a very professional experience.",
    date: "45 MINUTES AGO",
    status: "Pending"
  },
  {
    id: 3,
    userName: "Bilal Hussain",
    userImage: "https://randomuser.me/api/portraits/men/54.jpg",
    tourName: "Lahore Cultural Walk",
    rating: 5,
    comment: "As an admin, it's great to see such positive feedback. The digital check-in process was effortless for the visitors. Truly impressed with the system's efficiency.",
    date: "YESTERDAY",
    status: "Approved"
  },
  {
    id: 4,
    userName: "Fatima Noor",
    userImage: "https://randomuser.me/api/portraits/women/68.jpg",
    tourName: "Northern Pakistan Expedition",
    rating: 4,
    comment: "Professional, reliable, and highly customizable. OTMS is exactly what modern organizations need. The reporting is outstanding.",
    date: "2 DAYS AGO",
    status: "Approved"
  },
  {
    id: 5,
    userName: "Usman Ali",
    userImage: "https://randomuser.me/api/portraits/men/75.jpg",
    tourName: "Fairy Meadows Trek",
    rating: 3,
    comment: "The trek was difficult but beautiful. I wish there was more information about the physical requirements beforehand.",
    date: "1 WEEK AGO",
    status: "Approved"
  }
];

export default function ReviewPage() {
  const [search, setSearch] = useState("");
  const [ratingFilter, setRatingFilter] = useState("All Ratings");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const filteredReviews = useMemo(() => {
    return ALL_REVIEWS.filter(review => {
      const matchesSearch = review.userName.toLowerCase().includes(search.toLowerCase()) || 
                           review.tourName.toLowerCase().includes(search.toLowerCase());
      
      const matchesRating = ratingFilter === "All Ratings" || 
                           (ratingFilter === "5 Stars" && review.rating === 5) ||
                           (ratingFilter === "4 Stars" && review.rating === 4) ||
                           (ratingFilter === "3 Stars & Below" && review.rating <= 3);
      
      const matchesStatus = statusFilter === "All Status" || review.status === statusFilter;
      
      return matchesSearch && matchesRating && matchesStatus;
    });
  }, [search, ratingFilter, statusFilter]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">User Reviews</h1>
        <p className="text-slate-500 text-sm font-medium">Monitor and manage feedback from your travelers</p>
      </div>

      {/* Review Stats */}
      <ReviewStats />

      {/* Search and Filters */}
      <ReviewFilters 
        search={search} 
        onSearchChange={setSearch}
        rating={ratingFilter}
        onRatingChange={setRatingFilter}
        status={statusFilter}
        onStatusChange={setStatusFilter}
      />

      {/* Review List */}
      <ReviewList reviews={filteredReviews} />
    </div>
  );
}
