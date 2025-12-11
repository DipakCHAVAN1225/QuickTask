import React from 'react';
import { useAuth } from '../../context/AuthContext';

export default function UserDashboard() {
  const { user } = useAuth();
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-semibold">Welcome back, {user?.name}</h1>
      <p className="mt-2 text-gray-600">This is your user dashboard. Manage bookings, payments, and profile here.</p>
      {/* Add cards: upcoming bookings, quick actions */}
    </div>
  );
}
