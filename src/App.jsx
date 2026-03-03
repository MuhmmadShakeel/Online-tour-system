import { Routes, Route } from "react-router-dom";
import Navbar from "./component/usercomponents/common/Navbar";
import Footer from "./component/usercomponents/common/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import TourPage from "./pages/TourPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminLayout from "./component/admindashboard/common/layout"
import OverviewPage from "./dashboardpages/OverviewPage";
import ProfilePage from "./dashboardpages/ProfilePage";
import ToursPage from "./dashboardpages/ToursPage";
import ReviewPage from "./dashboardpages/ReviewPage";
import SettingPage from "./dashboardpages/SettingPage";
import UsersPage from "./dashboardpages/UsersPage";

const Placeholder = ({ title }) => (
  <div className="flex items-center justify-center h-full">
    <h1 className="text-2xl font-bold text-gray-700">{title}</h1>
  </div>
);

function App() {
  return (
    <>
      <Routes>
        {/* Main Website Routes */}
        <Route path="/" element={<><Navbar /><HomePage /><Footer /></>} />
        <Route path="/about" element={<><Navbar /><AboutPage /><Footer /></>} />
        <Route path="/services" element={<><Navbar /><ServicesPage /><Footer /></>} />    
        <Route path="/tour" element={<><Navbar /><TourPage /><Footer /></>} />    
        <Route path="/contact" element={<><Navbar /><ContactPage /><Footer /></>} />    
        <Route path="/login" element={<LoginPage />} />    
        <Route path="/signup" element={<SignupPage />} />    

        {/* Dashboard Routes */}
        <Route path="/admin" element={<AdminLayout><OverviewPage /></AdminLayout>} />
        <Route path="/admin/overview" element={<AdminLayout><OverviewPage /></AdminLayout>} />
        <Route path="/admin/profile" element={<AdminLayout><ProfilePage /></AdminLayout>} />
        <Route path="/admin/tours" element={<AdminLayout><ToursPage /></AdminLayout>} />
        <Route path="/admin/review" element={<AdminLayout><ReviewPage /></AdminLayout>} />
        <Route path="/admin/setting" element={<AdminLayout><SettingPage /></AdminLayout>} />
        <Route path="/admin/user" element={<AdminLayout><UsersPage /></AdminLayout>} />
      </Routes>
    </>
  );
}

export default App;