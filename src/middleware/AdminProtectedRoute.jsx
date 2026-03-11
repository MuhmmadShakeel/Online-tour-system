import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ContextStore } from "../context/Context";

const AdminProtectedRoute = ({ children }) => {

  const { isLogin, user, loading } = useContext(ContextStore);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  if (user && user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminProtectedRoute;