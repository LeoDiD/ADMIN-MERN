import React, { useState } from "react";
import PointStyleChart from '../components/PointStyleChart';
import PolarAreaChart from '../components/PolarAreaChart'; 
import MinimalBarChart from '../components/MinimalBarChart';
import MiniDoughnut from '../components/MiniDoughnutChart';
import { PhilippinePeso, ShoppingCart, Box, Search, Sun, Moon, LayoutDashboard, Calendar } from "lucide-react";

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
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <div style={{ backgroundColor: "#444444" }} className="p-1.5 rounded-md flex items-center justify-center">
                  <PhilippinePeso className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-medium ml-2">Sales</span>
              </div>
              <span className="text-4xl font-bold">₱1,200</span>
              <span className="text-sm text-gray-400">Last 30 days</span>
            </div>
            <div className="w-20 h-14 flex items-center">
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

      {/* New Stats Card - Based on provided image */}
      <div style={{ backgroundColor: "#262626" }} className="p-4 rounded shadow border border-gray-700 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-gray-300 text-sm block mb-1">Performance</span>
            <span className="text-4xl font-bold block">67</span>
            <div className="flex items-center mt-1">
              <span className="text-green-400 text-xs mr-1">+2.6%</span>
              <span className="text-gray-400 text-xs">vs last month</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-blue-600 mb-2 flex items-center justify-center">
                <span className="text-white text-lg font-medium">86</span>
              </div>
              <span className="text-gray-300 text-xs">Excellent</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-purple-600 mb-2 flex items-center justify-center">
                <span className="text-white text-lg font-medium">52</span>
              </div>
              <span className="text-gray-300 text-xs">Good</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-green-600 mb-2 flex items-center justify-center">
                <span className="text-white text-lg font-medium">24</span>
              </div>
              <span className="text-gray-300 text-xs">Average</span>
            </div>
          </div>
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

        {/* Upcoming Events and New Customers Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Upcoming Events */}
          <div className="bg-[#1F1F1F] rounded-xl p-4 shadow border border-gray-700">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Upcoming Events</h3>
            <div className="flex items-start gap-3 mb-3">
              <Calendar className="text-blue-400 w-5 h-5 mt-1" />
              <div>
                <p className="text-blue-400 text-sm font-medium">Jan 5, 2025</p>
                <p className="text-gray-300 text-sm">Anime Expo Meetup</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="text-purple-400 w-5 h-5 mt-1" />
              <div>
                <p className="text-purple-400 text-sm font-medium">Feb 5, 2025</p>
                <p className="text-gray-300 text-sm">Product Discount Day</p>
              </div>
            </div>
          </div>

          {/* New Customers */}
          <div className="bg-[#1F1F1F] rounded-xl p-4 shadow border border-gray-700 flex flex-col justify-between">
            <div className="text-gray-400 text-sm font-semibold mb-4">New Customers</div>
            <div className="flex justify-between items-center">
              <div className="flex -space-x-3">
                <img src="/avatars/avatar1.png" className="w-8 h-8 rounded-full border-2 border-[#1F1F1F]" />
                <img src="/avatars/avatar2.png" className="w-8 h-8 rounded-full border-2 border-[#1F1F1F]" />
                <img src="/avatars/avatar3.png" className="w-8 h-8 rounded-full border-2 border-[#1F1F1F]" />
                <img src="/avatars/avatar4.png" className="w-8 h-8 rounded-full border-2 border-[#1F1F1F]" />
              </div>
              <div className="text-white text-2xl font-bold">69</div>
            </div>
          </div>
        </div>

        {/* Sales Distribution Chart - Matched to Image */}
        <div className="bg-[#1e1e1e] p-6 rounded-xl border border-gray-800 shadow-md w-full max-w-2xl">
          {/* Header */}
          <div className="mb-6">
            <p className="text-sm text-gray-400">Expected Earning</p>
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-white">₱280,000</h2>
              <span className="text-green-400 text-sm font-medium">+2%</span>
            </div>
          </div>

          {/* Content: Chart + Legend */}
          <div className="grid grid-cols-2 gap-6 items-center">
            {/* Left: Legend */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <p className="text-sm text-gray-200">Clothes</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <p className="text-sm text-gray-200">Anime Figures</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                <p className="text-sm text-gray-200">Marvel & DC Action Figures</p>
              </div>
            </div>

            {/* Right: Doughnut Chart */}
            <div className="flex justify-center items-center">
              <MiniDoughnut />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;