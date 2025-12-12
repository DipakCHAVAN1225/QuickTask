// // frontend/src/auth/ProtectedRoute.jsx
// import React from "react";
// import { Navigate } from "react-router-dom";
//  import { useAuth } from "../auth/useAuth";

// export default function ProtectedRoute({ children }) {
//   const { isAuthenticated, authReady } = useAuth();
//   if (!authReady) return null;
//   if (!isAuthenticated) return <Navigate to="/login" replace />;
//   return children;
// }

import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children, requiredRole = null }) {
  const storedUser = localStorage.getItem('authUser');
  const user = storedUser ? JSON.parse(storedUser) : null;

  // If no user, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If specific role required and user doesn't have it
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}