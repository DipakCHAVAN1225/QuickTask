// frontend/src/pages/Providers.jsx
import React, { useEffect, useState } from "react";
import { useAuth } from "../auth/useAuth";    // <- FIXED import
import { apiFetch } from "../auth/api";
import { useNavigate } from "react-router-dom";

export default function Providers() {
  const { user, isAuthenticated } = useAuth();
  const [providerData, setProviderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError("");
      try {
        // If not logged in, redirect to login (optional; ProtectedRoute should also cover this)
        if (!isAuthenticated) {
          navigate("/login");
          return;
        }

        const data = await apiFetch("/providers/me");
        setProviderData(data.provider);
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed to load provider data");
      } finally {
        setLoading(false);
      }
    }
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // keep empty so it runs once; ProtectedRoute handles auth in routing

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading provider data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 shadow">
          <h1 className="text-2xl font-bold">Provider Dashboard</h1>
          <p className="mt-2 text-sm text-red-600">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 shadow">
        <h1 className="text-2xl font-bold">Provider Dashboard</h1>
        <p className="mt-2 text-sm text-gray-600">
          Welcome, {user?.businessName || user?.name || user?.email}.
        </p>

        <pre className="mt-4 bg-gray-100 p-4 rounded">
          {JSON.stringify(providerData, null, 2)}
        </pre>
      </div>
    </div>
  );
}
