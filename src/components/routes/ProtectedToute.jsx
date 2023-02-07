import { Navigate } from "react-router-dom";
import React from "react";
import BasicLayout from "../BasicLayout";

const ProtectedRoute = ({ children }) => {
  return localStorage.getItem("auth_token") ? (
    <BasicLayout>{children}</BasicLayout>
  ) : (
    <Navigate to="/auth/login" replace />
  );
};
export default ProtectedRoute;
