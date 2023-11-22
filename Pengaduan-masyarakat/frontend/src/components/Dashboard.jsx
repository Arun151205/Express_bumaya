/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Dashboard.js
import React from 'react';

const Dashboard = ({ user, onLogout }) => {
    return (
    <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p>Welcome, {user}!</p>
        </div>
        <button
        className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
        onClick={onLogout}
        >
        Logout
        </button>
    </div>
    );
};

export default Dashboard;
