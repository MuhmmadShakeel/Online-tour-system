import React, { useEffect, useState } from "react";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../../../redux/api/AuthApi";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

function Signup() {
  const navigate = useNavigate();
  const [signUp, { isLoading }] = useSignUpMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 Professional Toast Styles
  const showSuccessToast = (message) => {
    toast.success(message, {
      duration: 3500,
      position: "top-right",
      style: {
        borderRadius: "14px",
        background: "#111827",
        color: "#fff",
        padding: "14px 16px",
        fontSize: "14px",
        fontWeight: "500",
      },
      iconTheme: {
        primary: "#22c55e",
        secondary: "#ffffff",
      },
    });
  };

  const showErrorToast = (message) => {
    toast.error(message, {
      duration: 4000,
      position: "top-right",
      style: {
        borderRadius: "14px",
        background: "#1f2937",
        color: "#fff",
        padding: "14px 16px",
        fontSize: "14px",
        fontWeight: "500",
      },
      iconTheme: {
        primary: "#ef4444",
        secondary: "#ffffff",
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      return showErrorToast("All fields are required");
    }

    try {
      const response = await signUp(formData).unwrap();

      showSuccessToast(
        response.message || "Account created successfully 🎉"
      );

      setFormData({ name: "", email: "", password: "" });

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      showErrorToast(
        error?.data?.message ||
          "Unable to create account. Please try again."
      );
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div
        data-aos="fade-up"
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-[#FFAA00]/10 text-[#FFAA00] mb-3">
            <UserPlus className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Create Account
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Join us and start your journey today
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#FFAA00] outline-none transition"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#FFAA00] outline-none transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Create Password"
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#FFAA00] outline-none transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-[#FFAA00] hover:bg-[#e69900] transition shadow-md active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Creating..." : "Create Account"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-[#FFAA00] hover:text-[#e69900]"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;