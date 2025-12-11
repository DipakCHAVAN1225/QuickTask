import React from 'react';
import { useAuth } from '../../context/AuthContext';

export default function ProviderDashboard() {
  const { user } = useAuth();
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-semibold">Hello, {user?.name} (Provider)</h1>
      <p className="mt-2 text-gray-600">Here you can manage services, orders, availability and payouts.</p>
      {/* provider widgets: pending requests, earnings, calendar */}
    </div>
  );
}
