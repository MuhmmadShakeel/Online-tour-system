import { Routes, Route } from "react-router-dom";
import Navbar from "./component/usercomponents/common/Navbar";
import Footer from "./component/usercomponents/common/Footer";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./middleware/ProtectedRoute";
import AdminProtectedRoute from "./middleware/AdminProtectedRoute";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserAccountPage from "./pages/UserProfilePage";
import ManageAccountPage from "./pages/ManageAccountPage";

import AdminLayout from "./component/admindashboard/common/layout";
import OverviewPage from "./dashboardpages/OverviewPage";
import ProfilePage from "./dashboardpages/ProfilePage";
import ToursPage from "./dashboardpages/ToursPage";
import ReviewPage from "./dashboardpages/ReviewPage";
import UsersPage from "./dashboardpages/UsersPage";
import UserToursPage from "./dashboardpages/UserToursPage";
import UserTourPages from "./pages/UserTourPages";
import BookedTourPage from "./dashboardpages/BookedTourPage";

function App() {
  return (
    <>
      <Routes>
        {/* ================= PUBLIC USER WEBSITE ROUTES ================= */}
        <Route path="/" element={<><Navbar /><HomePage /><Footer /></>} />
        <Route path="/about" element={<><Navbar /><AboutPage /><Footer /></>} />
        <Route path="/services" element={<><Navbar /><ServicesPage /><Footer /></>} />
        <Route path="/contact" element={<><Navbar /><ContactPage /><Footer /></>} />
        <Route path="/tour" element={<><Navbar /><UserTourPages/><Footer /></>} />
        <Route path="/login" element={<><Navbar /><LoginPage /><Footer /></>} />
        <Route path="/signup" element={<><Navbar /><SignupPage /><Footer /></>} />

        {/* ================= PROTECTED USER ROUTES ================= */}
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <><Navbar /><UserAccountPage /><Footer /></>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/account/*" 
          element={
            <ProtectedRoute>
              <><Navbar /><ManageAccountPage /><Footer /></>
            </ProtectedRoute>
          } 
        />

        {/* ================= PROTECTED ADMIN DASHBOARD ROUTES ================= */}
        <Route 
          path="/admin" 
          element={
            <AdminProtectedRoute>
              <AdminLayout><OverviewPage /></AdminLayout>
            </AdminProtectedRoute>
          } 
        />
        <Route 
          path="/admin/overview" 
          element={
            <AdminProtectedRoute>
              <AdminLayout><OverviewPage /></AdminLayout>
            </AdminProtectedRoute>
          } 
        />
        <Route 
          path="/admin/profile" 
          element={
            <AdminProtectedRoute>
              <AdminLayout><ProfilePage /></AdminLayout>
            </AdminProtectedRoute>
          } 
        />
        <Route 
          path="/admin/tours" 
          element={
            <AdminProtectedRoute>
              <AdminLayout><ToursPage /></AdminLayout>
            </AdminProtectedRoute>
          } 
        />
        <Route 
          path="/admin/review" 
          element={
            <AdminProtectedRoute>
              <AdminLayout><ReviewPage /></AdminLayout>
            </AdminProtectedRoute>
          } 
        />
        <Route 
          path="/admin/booked-tour" 
          element={
            <AdminProtectedRoute>
              <AdminLayout><BookedTourPage/></AdminLayout>
            </AdminProtectedRoute>
          } 
        />
        <Route 
          path="/admin/user-tours" 
          element={
            <AdminProtectedRoute>
              <AdminLayout><UserToursPage /></AdminLayout>
            </AdminProtectedRoute>
          } 
        />
        <Route 
          path="/admin/user" 
          element={
            <AdminProtectedRoute>
              <AdminLayout><UsersPage /></AdminLayout>
            </AdminProtectedRoute>
          } 
        />
      </Routes>

      {/* ✅ Professional Toaster */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 2000,
          style: {
            borderRadius: "12px",
            background: "#1f2937",
            color: "#fff",
            padding: "12px 18px",
            fontWeight: "500",
            fontSize: "14px",
          },
        }}
      />
    </>
  );
}

export default App;