import React from "react";
import { PhilippinePeso } from "lucide-react";


const Dashboard = () => {
  return (
    <div className="p-6 h-full w-full overflow-y-auto bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-6 text-white">Welcome, Admin</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-800 p-4 rounded shadow flex flex-col border border-gray-700">
          <div className="flex items-center mb-2">
          <div className="bg-gray-700 p-1.5 rounded-md flex items-center justify-center">
            <PhilippinePeso className="w-4 h-4 text-white" />
          </div>
            <span className="text-xl font-medium">Sales</span>
          </div>
          <span className="text-4xl font-bold">₱1,200</span>
          <span className="text-sm text-gray-400">Last 30 days</span>
        </div>
        
        <div className="bg-gray-800 p-4 rounded shadow flex flex-col border border-gray-700">
          <div className="flex items-center mb-2">
            <span className="mr-2">👥</span>
            <span className="font-medium">Customers</span>
          </div>
          <span className="text-xl font-bold">45</span>
        </div>
        
        <div className="bg-gray-800 p-4 rounded shadow flex flex-col border border-gray-700">
          <div className="flex items-center mb-2">
            <span className="mr-2">💰</span>
            <span className="font-medium">Total Sales</span>
          </div>
          <span className="text-xl font-bold">₱12,500</span>
        </div>
        
        <div className="bg-gray-800 p-4 rounded shadow flex flex-col border border-gray-700">
          <div className="flex items-center mb-2">
            <span className="mr-2">📦</span>
            <span className="font-medium">Products</span>
          </div>
          <span className="text-xl font-bold">24</span>
        </div>
      </div>

      {/* Placeholder for Chart */}
      <div className="bg-gray-800 p-6 rounded shadow h-64 border border-gray-700">
        <span className="text-gray-300">📊 Sales Overview Chart</span>
      </div>

      {/* Alerts */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2 text-white">Low Stock Alerts</h2>
        <ul className="list-disc pl-5 text-sm text-red-400">
          <li>Milk - 3 left</li>
          <li>Eggs - 5 left</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;