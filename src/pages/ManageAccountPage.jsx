import React from "react";
import AccountBar from "../component/usercomponents/useraccount/manageaccount/AccountBar";
import { Routes, Route, Navigate } from "react-router-dom";
import BookedTour from "../component/usercomponents/useraccount/manageaccount/BookedTour";
import CreatedTour from "../component/usercomponents/useraccount/manageaccount/CreatedTour";

function ManageAccountPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AccountBar />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <Routes>
          {/* Default redirect for /account */}
          <Route index element={<Navigate to="/account/booked-tours" replace />} />

          {/* Booked Tours */}
          <Route path="booked-tours" element={<BookedTour />} />

          {/* Created Tours */}
          <Route path="created-tours" element={<CreatedTour />} />
        </Routes>
      </div>
    </div>
  );
}

export default ManageAccountPage;