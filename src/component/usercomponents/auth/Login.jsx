import React, { useEffect, useState, useContext } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
import { useLoginMutation } from "../../../redux/api/AuthApi";
import { ContextStore } from "../../../context/Context";
function Login() {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  // ✅ Get context values
  const { setIsLogin, setUser } = useContext(ContextStore);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return toast.error("Please fill all fields");
    }

    try {
      const response = await login(formData).unwrap();

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      setIsLogin(true);
      setUser(response.user);

      toast.success("Login successfully");

      navigate("/", { replace: true });

    } catch (error) {
      toast.error(
        error?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
      <div
        data-aos="fade-up"
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100"
      >
        <div className="text-center space-y-4 mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FFAA00]/10 text-[#FFAA00] mb-2">
            <span className="text-xl font-bold">OT</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500">
            Sign in to access your dashboard and manage your tours.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-[#FFAA00] focus:border-transparent outline-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-[#FFAA00] focus:border-transparent outline-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#FFAA00] hover:bg-[#e69900] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFAA00] transition-all duration-200 shadow-md hover:shadow-lg transform active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Signing In..." : "Sign In"}
            {!isLoading && <LogIn className="ml-2 h-4 w-4" />}
          </button>

          <p className="text-center text-sm text-gray-500 pt-2">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-[#FFAA00] hover:text-[#e69900] transition-colors"
            >
              Create free account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;