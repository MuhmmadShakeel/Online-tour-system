import React from "react";
import { Edit2, Trash2, Eye } from "lucide-react";

const ToursTable = ({ tours = [], totalTours = 0 }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      {/* Mobile Card Layout */}
      <div className="md:hidden divide-y divide-slate-100">
        {tours.length > 0 ? (
          tours.map((tour) => (
            <div key={tour.id} className="p-4 space-y-3">
              <div className="flex items-start gap-3">
                <img src={tour.image} alt={tour.name} className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-slate-900 truncate">{tour.name}</h4>
                  <p className="text-xs text-slate-500">{tour.location}</p>
                  <div className="mt-1.5">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                      tour.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {tour.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-4">
                  <span className="text-slate-500"><span className="font-semibold text-slate-700">Category:</span> {tour.category}</span>
                  <span className="text-slate-500"><span className="font-semibold text-slate-700">Duration:</span> {tour.duration}</span>
                </div>
                <span className="text-sm font-bold text-[#237227]">{tour.price}</span>
              </div>
              <div className="flex items-center gap-1 pt-1 border-t border-slate-50">
                <button className="p-2 text-slate-400 hover:text-[#237227] hover:bg-green-50 rounded-lg transition-all" title="View">
                  <Eye size={16} />
                </button>
                <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Edit">
                  <Edit2 size={16} />
                </button>
                <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="px-4 py-12 text-center text-slate-500 font-medium">
            No tours found matching your criteria.
          </div>
        )}
      </div>

      {/* Desktop Table Layout */}
      <div className="hidden md:block overflow-x-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Tour Details</th>
              <th className="px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
              <th className="px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Duration</th>
              <th className="px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Price</th>
              <th className="px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {tours.length > 0 ? (
              tours.map((tour) => (
                <tr key={tour.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="px-4 lg:px-6 py-4">
                    <div className="flex items-center gap-3 lg:gap-4">
                      <img src={tour.image} alt={tour.name} className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl object-cover" />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{tour.name}</h4>
                        <p className="text-xs text-slate-500">{tour.location}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 lg:px-6 py-4">
                    <span className="text-sm text-slate-600 font-medium">{tour.category}</span>
                  </td>
                  <td className="px-4 lg:px-6 py-4">
                    <span className="text-sm text-slate-600 font-medium">{tour.duration}</span>
                  </td>
                  <td className="px-4 lg:px-6 py-4">
                    <span className="text-sm font-bold text-[#237227]">{tour.price}</span>
                  </td>
                  <td className="px-4 lg:px-6 py-4">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      tour.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {tour.status}
                    </span>
                  </td>
                  <td className="px-4 lg:px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1 lg:gap-2">
                      <button className="p-1.5 lg:p-2 text-slate-400 hover:text-[#237227] hover:bg-green-50 rounded-lg transition-all" title="View">
                        <Eye size={18} />
                      </button>
                      <button className="p-1.5 lg:p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Edit">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-1.5 lg:p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-12 text-center text-slate-500 font-medium">
                  No tours found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
        <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Showing {tours.length} of {totalTours} tours</p>
        <div className="flex gap-2">
          <button className="px-2.5 sm:px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] sm:text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50">Previous</button>
          <button className="px-2.5 sm:px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] sm:text-xs font-bold text-slate-600 hover:bg-slate-50">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ToursTable;
