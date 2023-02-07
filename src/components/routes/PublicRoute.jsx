import { Navigate } from "react-router-dom";
import React from "react";

const PublicRoute = ({ children }) => {
  return !localStorage.getItem("auth_token") ? (
    children
  ) : (
    <Navigate to="/" replace />
  );
};
export default PublicRoute;
