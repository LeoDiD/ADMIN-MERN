import React from "react";
import PointStyleChart from '../components/PointStyleChart';  // Fixed import path
import { PhilippinePeso, ShoppingCart, Box } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-6 h-full w-full overflow-y-auto bg-black text-white">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-6">
        <div style={{ backgroundColor: "#333333" }} className="p-4 rounded shadow flex flex-col">
          <div className="flex items-center mb-2">
            <div style={{ backgroundColor: "#444444" }} className="p-1.5 rounded-md flex items-center justify-center">
              <PhilippinePeso className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-medium ml-2">Sales</span>
          </div>
          <span className="text-4xl font-bold">₱1,200</span>
          <span className="text-sm text-gray-400">Last 30 days</span>
        </div>
        
        <div style={{ backgroundColor: "#333333" }} className="p-4 rounded shadow flex flex-col">
          <div className="flex items-center mb-2">
            <div style={{ backgroundColor: "#444444" }} className="p-1.5 rounded-md flex items-center justify-center">
              <ShoppingCart className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-medium ml-2">Orders</span>
          </div>
          <span className="text-4xl font-bold">24</span>
          <span className="text-sm text-gray-400">Last 30 days</span>
        </div>
        
        <div style={{ backgroundColor: "#333333" }} className="p-4 rounded shadow flex flex-col">
          <div className="flex items-center mb-2">
            <div style={{ backgroundColor: "#444444" }} className="p-1.5 rounded-md flex items-center justify-center">
              <Box className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-medium ml-2">Products</span>
          </div>
          <span className="text-4xl font-bold">45</span>
          <span className="text-sm text-gray-400">In stock</span>
        </div>
      </div>

      {/* Placeholder for Chart */}
      <div style={{ backgroundColor: "#333333" }} className="p-6 rounded shadow h-64 border border-gray-800">
        <span className="text-gray-300">Monthly Sales Overview</span>
        <PointStyleChart />
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