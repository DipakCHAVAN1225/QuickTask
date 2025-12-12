// frontend/src/pages/Dashboard.jsx
import React from "react";
import { useAuth } from "../auth/useAuth";

export default function Dashboard(){
  const { user } = useAuth();
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Welcome back, {user?.name || user?.email}</p>
      </div>
    </div>
  );
}