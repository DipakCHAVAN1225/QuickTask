import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <h2>User Dashboard</h2>
      <p>Welcome, normal user. This page is for users.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
