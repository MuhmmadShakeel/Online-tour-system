import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ContextStore } from "../context/Context";

const ProtectedRoute = ({ children }) => {

  const { isLogin, loading } = useContext(ContextStore);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;