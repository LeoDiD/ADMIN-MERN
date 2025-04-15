import React from "react";
import PointStyleChart from '../components/PointStyleChart';
import PointStyleChart from "../components/PointStyleChart";
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

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Monthly Sales Chart */}
        <div style={{ backgroundColor: "#333333" }} className="p-4 rounded shadow border border-gray-800">
          <span className="text-gray-300 mb-2 block text-sm font-medium">Monthly Sales Overview</span>
          <div className="h-40 w-full">
            <PointStyleChart />
          </div>
        </div>
        
        {/* Second Chart - Placeholder */}
        <div style={{ backgroundColor: "#333333" }} className="p-4 rounded shadow border border-gray-800">
          <span className="text-gray-300 mb-2 block text-sm font-medium">Customer Growth</span>
          <div className="h-40 w-full flex items-center justify-center text-gray-300">
            {/* Temporarily replace PolarAreaChart with a placeholder */}
            <PolarAreaChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;