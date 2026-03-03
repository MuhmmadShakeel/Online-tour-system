import React, { useEffect } from "react";
import { X, MapPin, Star, Clock } from "lucide-react";

function TourDetailsModal({ tour, tourType, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!tour) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-[fadeInScale_0.25s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/80 backdrop-blur border border-white hover:bg-white transition-all"
        >
          <X size={18} className="text-slate-600" />
        </button>

        {/* Image */}
        <div className="relative h-56 sm:h-64">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-slate-700 mb-2">
              {tourType === "our" ? "Our Tour" : "User Tour"}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {tour.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {/* Info Pills */}
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-100 rounded-full px-3 py-1.5">
              <MapPin size={13} className="text-[#237227]" />
              {tour.location}
            </span>
            {tour.duration && (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-100 rounded-full px-3 py-1.5">
                <Clock size={13} className="text-[#237227]" />
                {tour.duration}
              </span>
            )}
            {tour.rating && (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-100 rounded-full px-3 py-1.5">
                <Star size={13} className="text-yellow-500" />
                {tour.rating}
              </span>
            )}
          </div>

          {/* Description */}
          {tour.description && (
            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              {tour.description}
            </p>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            {tour.price && (
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                  Starting from
                </p>
                <p className="text-lg font-bold text-[#237227]">{tour.price}</p>
              </div>
            )}
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#237227] text-white text-sm font-bold rounded-full hover:bg-green-800 transition-all"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetailsModal;
