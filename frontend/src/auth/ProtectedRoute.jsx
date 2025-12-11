// frontend/src/auth/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
 import { useAuth } from "../auth/useAuth";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, authReady } = useAuth();
  if (!authReady) return null;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
}