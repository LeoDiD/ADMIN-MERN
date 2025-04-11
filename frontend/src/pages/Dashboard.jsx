import React from "react";
import Layout from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Welcome, Admin</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">🛒 Orders: 120</div>
        <div className="bg-white p-4 rounded shadow">👥 Customers: 45</div>
        <div className="bg-white p-4 rounded shadow">💰 Sales: ₱12,500</div>
        <div className="bg-white p-4 rounded shadow">📦 Stock: 300</div>
      </div>

      {/* Placeholder for Chart */}
      <div className="bg-white p-6 rounded shadow h-64">📊 Sales Overview Chart</div>

      {/* Alerts */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Low Stock Alerts</h2>
        <ul className="list-disc pl-5 text-sm text-red-600">
          <li>Milk - 3 left</li>
          <li>Eggs - 5 left</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Dashboard;
