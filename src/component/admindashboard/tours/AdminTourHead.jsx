import React from 'react';

function AdminTourHead() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg mb-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Heading & Subtitle */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Explore Amazing Tours
          </h1>
          <p className="mt-2 text-lg md:text-xl text-white/80">
            Discover the best destinations and experiences handpicked for you.
          </p>
        </div>

        {/* Call-to-action button */}
        <div>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-50 transition">
            Add New Tour
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminTourHead;