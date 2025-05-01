import React, { useState } from "react";
import PointStyleChart from '../components/PointStyleChart';
import PolarAreaChart from '../components/PolarAreaChart'; 
import MinimalBarChart from '../components/MinimalBarChart';
import MiniDoughnut from '../components/MiniDoughnutChart';
import { motion } from "framer-motion";
import { PhilippinePeso, ShoppingCart, Box, Search, Sun, Moon, LayoutDashboard, Calendar, Star, ThumbsUp, Activity } from "lucide-react";

const Dashboard = () => {
  // Add state for search and dark mode
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  
  // Add toggle functions
  const toggleSearchInput = () => setShowSearchInput(!showSearchInput);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Define theme colors based on dark mode state
  const bgMain = darkMode ? "#1D1D1D" : "#f5f5f5";
  const bgCard = darkMode ? "#262626" : "#ffffff";
  const bgSecondary = darkMode ? "#1F1F1F" : "#f0f0f0";
  const bgTertiary = darkMode ? "#444444" : "#e5e5e5";
  const textPrimary = darkMode ? "text-white" : "text-gray-800";
  const textSecondary = darkMode ? "text-gray-400" : "text-gray-500";
  const borderColor = darkMode ? "border-gray-700" : "border-gray-200";
  const iconColor = darkMode ? "text-white" : "text-gray-600";

  return (
    <div style={{ backgroundColor: bgMain }} className={`p-6 h-full w-full overflow-y-auto ${textPrimary} transition-colors duration-300`}>
      {/* Title header with actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex items-center">
          <LayoutDashboard className={`w-5 h-5 mr-2 ${iconColor}`} />
          <h2 className={`font-medium text-2xl ${textPrimary}`}>Dashboard</h2>
        </div>
      
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="relative flex items-center">
            {showSearchInput && (
              <input
                type="text"
                placeholder="Search..."
                className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} rounded-lg px-3 py-1 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                autoFocus
              />
            )}
            <button 
              onClick={toggleSearchInput}
              className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-all duration-300`}
            >
              <Search className={`w-5 h-5 ${iconColor}`} />
            </button>
          </div>
    
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-all duration-300`}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ backgroundColor: bgCard }} 
          className={`p-4 rounded shadow ${borderColor}`}
        >
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <div style={{ backgroundColor: bgTertiary }} className="p-1.5 rounded-md flex items-center justify-center">
                  <PhilippinePeso className={`w-4 h-4 ${iconColor}`} />
                </div>
                <span className={`text-xl font-medium ml-2 ${textPrimary}`}>Sales</span>
              </div>
              <motion.span 
                className={`text-4xl font-bold ${textPrimary}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Counter from={0} to={1200} prefix="₱" />
              </motion.span>
              <span className={`text-sm ${textSecondary}`}>Last 30 days</span>
            </div>
            <div className="w-20 h-14 flex items-center">
              <MinimalBarChart darkMode={darkMode} />
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ backgroundColor: bgCard }} 
          className={`p-4 rounded shadow flex flex-col ${borderColor}`}
        >
          <div className="flex items-center mb-2">
            <div style={{ backgroundColor: bgTertiary }} className="p-1.5 rounded-md flex items-center justify-center">
              <ShoppingCart className={`w-4 h-4 ${iconColor}`} />
            </div>
            <span className={`text-xl font-medium ml-2 ${textPrimary}`}>Orders</span>
          </div>
          <motion.span 
            className={`text-4xl font-bold ${textPrimary}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Counter from={0} to={24} />
          </motion.span>
          <span className={`text-sm ${textSecondary}`}>Last 30 days</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ backgroundColor: bgCard }} 
          className={`p-4 rounded shadow flex flex-col ${borderColor}`}
        >
          <div className="flex items-center mb-2">
            <div style={{ backgroundColor: bgTertiary }} className="p-1.5 rounded-md flex items-center justify-center">
              <Box className={`w-4 h-4 ${iconColor}`} />
            </div>
            <span className={`text-xl font-medium ml-2 ${textPrimary}`}>Products</span>
          </div>
          <motion.span 
            className={`text-4xl font-bold ${textPrimary}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Counter from={0} to={45} />
          </motion.span>
          <span className={`text-sm ${textSecondary}`}>In stock</span>
        </motion.div>
      </div>

      {/* Performance Card - Enhanced with Progress and Life */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ backgroundColor: bgCard }}
        className={`p-6 rounded-xl shadow border ${borderColor} mb-6`}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          
          {/* Main Score */}
          <div>
            <p className={`text-sm ${textPrimary} mb-1`}>Overall Performance</p>
            <div className="flex items-center gap-3">
              <motion.span 
                className={`text-4xl font-bold ${textPrimary}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Counter from={0} to={67} />
              </motion.span>
              <div className="flex items-center text-green-400 text-sm">
                <Activity className="w-4 h-4 mr-1" />
                +2.6%
              </div>
            </div>
            <p className={`text-xs ${textPrimary} mt-1`}>Compared to last month</p>
          </div>

          {/* Center Progress Bar */}
          <div className="flex flex-col justify-center items-center md:w-1/3 w-full">
            <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} mb-2`}>Progress to Goal</p>
            <div className={`w-full h-3 ${darkMode ? "bg-gray-800" : "bg-gray-200"} rounded-full overflow-hidden`}>
              <motion.div 
                className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "67%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <p className={`text-xs ${textPrimary} mt-1`}>67% of target reached</p>
          </div>

          {/* Circle Ratings */}
          <div className="flex gap-8">
            {/* Excellent */}
            <motion.div 
              className="flex flex-col items-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center mb-2">
                <Star className="text-white w-5 h-5" />
              </div>
              <p className={`${textPrimary} font-medium text-sm`}>80</p>
              <p className={`${textSecondary} text-xs`}>Excellent</p>
            </motion.div>

            {/* Good */}
            <motion.div 
              className="flex flex-col items-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center mb-2">
                <ThumbsUp className="text-white w-5 h-5" />
              </div>
              <p className={`${textPrimary} font-medium text-sm`}>52</p>
              <p className={`${textSecondary} text-xs`}>Good</p>
            </motion.div>

            {/* Average */}
            <motion.div 
              className="flex flex-col items-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center mb-2">
                <Activity className="text-white w-5 h-5" />
              </div>
              <p className={`${textPrimary} font-medium text-sm`}>24</p>
              <p className={`${textSecondary} text-xs`}>Average</p>
            </motion.div>
          </div>
        </div>

        {/* Insight Section */}
        <div className={`mt-6 border-t ${borderColor} pt-4 text-sm ${textSecondary}`}>
          <p className="mb-1">✨ Insight: More customers are leaving great feedback this month!</p>
          <p className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}>🔍 Tip: Focus on turning "Good" into "Excellent" with faster service.</p>
        </div>
      </motion.div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Monthly Sales Chart */}
        <div style={{ backgroundColor: bgCard }} className={`p-4 rounded shadow border ${borderColor}`}>
          <span className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-2 block text-sm font-medium`}>Monthly Sales Overview</span>
          <div className="h-40 w-full">
            <PointStyleChart darkMode={darkMode} />
          </div>
        </div>
        
        {/* Customer Growth Chart */}
        <div style={{ backgroundColor: bgCard }} className={`p-4 rounded shadow border ${borderColor}`}>
          <span className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-2 block text-sm font-medium`}>Customer Growth</span>
          <div className="h-52 w-full">
            <PolarAreaChart darkMode={darkMode} />
          </div>
        </div>

        {/* Upcoming Events and New Customers Cards */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {/* Upcoming Events */}
  <div style={{ backgroundColor: bgSecondary }} className={`rounded-xl p-6 shadow-lg border ${borderColor}`}>
    <h3 className={`text-base font-semibold ${textPrimary} mb-4`}>📅 Upcoming Events</h3>

    {/* Event Item */}
    <div className="flex items-start gap-4 mb-4 hover:bg-blue-950/10 p-2 rounded-lg transition-all duration-300">
      <Calendar className="text-blue-400 w-5 h-5 mt-1" />
      <div>
        <p className="text-blue-400 text-sm font-medium">Jan 5, 2025</p>
        <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}>Anime Expo Meetup</p>
      </div>
    </div>

    {/* Event Item */}
    <div className="flex items-start gap-4 hover:bg-purple-950/10 p-2 rounded-lg transition-all duration-300">
      <Calendar className="text-purple-400 w-5 h-5 mt-1" />
      <div>
        <p className="text-purple-400 text-sm font-medium">Feb 5, 2025</p>
        <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}>Product Discount Day</p>
      </div>
    </div>
  </div>

  {/* New Customers */}
  <div style={{ backgroundColor: bgSecondary }} className={`rounded-xl p-6 shadow-lg border ${borderColor}`}>
    <div className="flex justify-between items-center mb-4">
      <h3 className={`${textSecondary} text-base font-semibold`}>👥 New Customers</h3>
      <span className={`${textPrimary} text-2xl font-bold`}>69</span>
    </div>

    <div className="flex items-center -space-x-3">
      {["avatar1", "avatar2", "avatar3", "avatar4"].map((name, idx) => (
        <img
          key={idx}
          src={`/avatars/${name}.png`}
          alt={`Customer ${idx + 1}`}
          className={`w-10 h-10 rounded-full border-2 ${darkMode ? "border-[#1F1F1F]" : "border-white"} transition-transform hover:scale-105`}
        />
      ))}
    </div>
  </div>
</div>


        {/* Sales Distribution Chart */}
        <div style={{ backgroundColor: darkMode ? "#1e1e1e" : "#f9f9f9" }} className={`p-6 rounded-xl border ${borderColor} shadow-md w-full max-w-2xl`}>
          {/* Header */}
          <div className="mb-6">
            <p className={`text-sm ${textSecondary}`}>Expected Earning</p>
            <div className="flex items-center justify-between">
              <h2 className={`text-3xl font-bold ${textPrimary}`}>₱280,000</h2>
              <span className="text-green-400 text-sm font-medium">+2%</span>
            </div>
          </div>

          {/* Content: Chart + Legend */}
          <div className="grid grid-cols-2 gap-6 items-center">
            {/* Left: Legend */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <p className={`text-sm ${darkMode ? "text-gray-200" : "text-gray-700"}`}>Clothes</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <p className={`text-sm ${darkMode ? "text-gray-200" : "text-gray-700"}`}>Anime Figures</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                <p className={`text-sm ${darkMode ? "text-gray-200" : "text-gray-700"}`}>Marvel & DC Action Figures</p>
              </div>
            </div>

            {/* Right: Doughnut Chart */}
            <div className="flex justify-center items-center">
              <MiniDoughnut darkMode={darkMode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Counter component for number animation
const Counter = ({ from, to, duration = 1.5, prefix = '' }) => {
  const [count, setCount] = useState(from);

  React.useEffect(() => {
    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * (to - from) + from);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration]);

  return <>{prefix}{count}</>;
};

export default Dashboard;