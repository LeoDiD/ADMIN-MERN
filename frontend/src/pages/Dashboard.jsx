import React, { useState } from "react";
import PointStyleChart from '../components/PointStyleChart';
import PolarAreaChart from '../components/PolarAreaChart'; 
import MinimalBarChart from '../components/MinimalBarChart';
import { PhilippinePeso, ShoppingCart, Box, Search, Sun, Moon, LayoutDashboard } from "lucide-react";

const Dashboard = () => {
  // Add state for search and dark mode
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  // Add toggle functions
  const toggleSearchInput = () => setShowSearchInput(!showSearchInput);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div style={{ backgroundColor: "#1D1D1D" }} className="p-6 h-full w-full overflow-y-auto text-white">
      {/* Title header with actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex items-center">
          <LayoutDashboard className="w-5 h-5 mr-2" />
          <h2 className="font-medium text-2xl text-white">Dashboard</h2>
        </div>
      
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="relative flex items-center">
            {showSearchInput && (
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-700 rounded-lg px-3 py-1 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-white"
                autoFocus
              />
            )}
            <button 
              onClick={toggleSearchInput}
              className="p-2 rounded-full hover:bg-gray-700 transition-all duration-300"
            >
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>
    
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-700 transition-all duration-300"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-6">
        <div style={{ backgroundColor: "#262626" }} className="p-4 rounded shadow">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <div className="p-1.5 rounded-md flex items-center justify-center">
                  <PhilippinePeso className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-medium ml-2">Sales</span>
              </div>
              <span className="text-4xl font-bold">₱1,200</span>
              <span className="text-sm text-gray-400">Last 30 days</span>
            </div>
            <div className="w-24 h-16">
              <MinimalBarChart />
            </div>
          </div>
        </div>
        
        <div style={{ backgroundColor: "#262626" }} className="p-4 rounded shadow flex flex-col">
          <div className="flex items-center mb-2">
            <div style={{ backgroundColor: "#444444" }} className="p-1.5 rounded-md flex items-center justify-center">
              <ShoppingCart className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-medium ml-2">Orders</span>
          </div>
          <span className="text-4xl font-bold">24</span>
          <span className="text-sm text-gray-400">Last 30 days</span>
        </div>
        
        <div style={{ backgroundColor: "#262626" }} className="p-4 rounded shadow flex flex-col">
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
        <div style={{ backgroundColor: "#262626" }} className="p-4 rounded shadow border border-gray-800">
          <span className="text-gray-300 mb-2 block text-sm font-medium">Monthly Sales Overview</span>
          <div className="h-40 w-full">
            <PointStyleChart />
          </div>
        </div>
        
        {/* Customer Growth Chart */}
        <div style={{ backgroundColor: "#262626" }} className="p-4 rounded shadow border border-gray-800">
          <span className="text-gray-300 mb-2 block text-sm font-medium">Customer Growth</span>
          <div className="h-52 w-full">
            <PolarAreaChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;