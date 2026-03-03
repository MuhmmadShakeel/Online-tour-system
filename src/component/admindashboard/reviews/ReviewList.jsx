import React from "react";
import { Star, CheckCircle, Trash2, MessageCircle, AlertCircle } from "lucide-react";

const ReviewItem = ({ review }) => {
  return (
    <div className="p-6 hover:bg-slate-50/50 transition-colors group">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="flex items-start gap-4 flex-1">
          <img 
            src={review.userImage} 
            alt={review.userName} 
            className="w-12 h-12 rounded-full object-cover border-2 border-slate-100" 
          />
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-slate-900">{review.userName}</h4>
              <span className="text-[10px] text-slate-400 font-medium">•</span>
              <p className="text-xs text-[#237227] font-bold">{review.tourName}</p>
            </div>
            
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < review.rating ? "text-[#FFAA00] fill-[#FFAA00]" : "text-slate-200 fill-slate-200"} 
                />
              ))}
            </div>

            <p className="text-sm text-slate-600 font-light leading-relaxed max-w-3xl">
              "{review.comment}"
            </p>

            <div className="flex items-center gap-4 pt-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                {review.date}
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                review.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {review.status}
              </span>
            </div>
          </div>
        </div>

        <div className="flex md:flex-col items-center justify-center gap-2">
          {review.status === 'Pending' && (
            <button className="p-2 text-[#237227] hover:bg-green-50 rounded-xl transition-all" title="Approve">
              <CheckCircle size={20} />
            </button>
          )}
          <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all" title="Reply">
            <MessageCircle size={20} />
          </button>
          <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all" title="Delete">
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const ReviewList = ({ reviews }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-50 flex items-center justify-between">
        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Latest Reviews</h2>
        <span className="text-xs text-slate-500 font-medium">Showing {reviews.length} reviews</span>
      </div>
      
      <div className="divide-y divide-slate-100">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))
        ) : (
          <div className="p-12 text-center">
            <AlertCircle className="mx-auto text-slate-300 mb-3" size={40} />
            <p className="text-slate-500 font-medium text-sm">No reviews found matching your search.</p>
          </div>
        )}
      </div>

      {reviews.length > 0 && (
        <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-center">
          <button className="text-xs font-bold text-[#237227] hover:underline">Load More Reviews</button>
        </div>
      )}
    </div>
  );
};

export default ReviewList;
