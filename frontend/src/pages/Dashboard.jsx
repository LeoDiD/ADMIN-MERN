import React from "react";
import { PhilippinePeso } from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  return (
    <div className="p-6 h-[calc(100vh-64px)] overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6">Welcome, Admin</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow flex flex-col">
          <div className="flex items-center mb-2">
            <PhilippinePeso className="w-5 h-5 text-green-500 mr-2" />
            <span className="font-medium">Sales Today</span>
          </div>
          <span className="text-xl font-bold">₱1,200</span>
        </div>
        
        <div className="bg-white p-4 rounded shadow flex flex-col">
          <div className="flex items-center mb-2">
            <span className="mr-2">👥</span>
            <span className="font-medium">Customers</span>
          </div>
          <span className="text-xl font-bold">45</span>
        </div>
        
        <div className="bg-white p-4 rounded shadow flex flex-col">
          <div className="flex items-center mb-2">
            <span className="mr-2">💰</span>
            <span className="font-medium">Total Sales</span>
          </div>
          <span className="text-xl font-bold">₱12,500</span>
        </div>
        
        <div className="bg-white p-4 rounded shadow flex flex-col">
          <div className="flex items-center mb-2">
            <span className="mr-2">📦</span>
            <span className="font-medium">Products</span>
          </div>
          <span className="text-xl font-bold">24</span>
        </div>
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
    </div>
  );
};

export default Dashboard;
