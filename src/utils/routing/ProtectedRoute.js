import React from "react";
import { Navigate } from "react-router-dom";
import authToken from "./authToken";

const ProtectedRoute = ({ children }) => {
  if (!authToken.check()) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
