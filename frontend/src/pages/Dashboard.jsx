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

      {/* Charts Grid with Balanced Layout */}
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

        {/* Lower Section - Three Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 col-span-1 lg:col-span-2">
          {/* Activity Timeline Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ backgroundColor: bgSecondary }} 
            className={`rounded-xl p-4 shadow-lg border ${borderColor}`}
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className={`text-sm font-semibold ${textPrimary}`}>📊 Activity Timeline</h3>
              <select 
                className={`text-xs rounded px-2 py-1 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border ${textPrimary} focus:outline-none focus:ring-1 focus:ring-blue-500`}
              >
                <option>Today</option>
                <option>This Week</option>
              </select>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-2.5 top-0 h-full w-0.5 bg-gray-700"></div>
              
              {/* Timeline items */}
              <div className="space-y-3">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="relative flex items-start pl-6"
                >
                  <div className="absolute left-0 rounded-full w-4 h-4 bg-green-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className={`text-xs text-green-400`}>Just Now</p>
                    <p className={`text-xs ${textPrimary}`}>New order received</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="relative flex items-start pl-6"
                >
                  <div className="absolute left-0 rounded-full w-4 h-4 bg-blue-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className={`text-xs text-blue-400`}>2h ago</p>
                    <p className={`text-xs ${textPrimary}`}>Inventory updated</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="flex justify-center mt-3 pt-2 border-t border-gray-700">
              <button className={`text-xs ${textPrimary} hover:text-blue-400 transition-colors flex items-center gap-1`}>
                View all
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Customer Feedback Card with Overall Metrics */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ backgroundColor: bgSecondary }} 
            className={`rounded-xl p-4 shadow-lg border ${borderColor}`}
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className={`${textPrimary} text-sm font-semibold`}>👥 Customer Feedback</h3>
              <span className={`${textPrimary} text-lg font-bold`}>87%</span>
            </div>

            <div className="space-y-2 mb-3">
              {/* Satisfaction Rating */}
              <div className="flex justify-between items-center">
                <p className={`text-xs ${textSecondary}`}>Satisfaction</p>
                <div className="flex items-center">
                  <div className={`h-1.5 w-24 ${darkMode ? "bg-gray-700" : "bg-gray-300"} rounded-full overflow-hidden mr-2`}>
                    <motion.div 
                      className="h-full bg-green-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "87%" }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                    />
                  </div>
                  <span className="text-xs text-green-400">87%</span>
                </div>
              </div>
              
              {/* Response Rate */}
              <div className="flex justify-between items-center">
                <p className={`text-xs ${textSecondary}`}>Response</p>
                <div className="flex items-center">
                  <div className={`h-1.5 w-24 ${darkMode ? "bg-gray-700" : "bg-gray-300"} rounded-full overflow-hidden mr-2`}>
                    <motion.div 
                      className="h-full bg-blue-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "94%" }}
                      transition={{ duration: 1.2, delay: 0.5 }}
                    />
                  </div>
                  <span className="text-xs text-blue-400">94%</span>
                </div>
              </div>
            </div>

            <div className={`pt-2 mt-2 border-t ${borderColor} flex justify-between items-center`}>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((idx) => (
                  <div 
                    key={idx}
                    className={`w-6 h-6 rounded-full border ${darkMode ? "border-[#1F1F1F]" : "border-white"} ${idx === 1 ? 'bg-blue-500' : idx === 2 ? 'bg-green-500' : 'bg-purple-500'}`}
                  ></div>
                ))}
              </div>
              <p className={`text-xs ${textSecondary}`}>81 reviews</p>
            </div>
          </motion.div>

          {/* Resized Expected Earning Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ backgroundColor: bgSecondary }} 
            className={`p-4 rounded-xl border ${borderColor} shadow-lg`}
          >
            {/* Header */}
            <div className="mb-3">
              <p className={`text-xs ${textSecondary}`}>Expected Earning</p>
              <div className="flex items-center justify-between">
                <h2 className={`text-xl font-bold ${textPrimary}`}>₱280,000</h2>
                <span className="text-green-400 text-xs font-medium">+2%</span>
              </div>
            </div>

            {/* Content: Simplified Legend + Mini Chart */}
            <div className="space-y-2 mb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <p className={`text-xs ${darkMode ? "text-gray-200" : "text-gray-700"}`}>Clothes</p>
                </div>
                <span className={`text-xs ${textPrimary}`}>42%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <p className={`text-xs ${darkMode ? "text-gray-200" : "text-gray-700"}`}>Figures</p>
                </div>
                <span className={`text-xs ${textPrimary}`}>38%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <p className={`text-xs ${darkMode ? "text-gray-200" : "text-gray-700"}`}>Other</p>
                </div>
                <span className={`text-xs ${textPrimary}`}>20%</span>
              </div>
            </div>

            <div className={`flex justify-center pt-2 mt-2 border-t ${borderColor}`}>
              <button className={`text-xs ${textPrimary} hover:text-blue-400 transition-colors flex items-center gap-1`}>
                Full report
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions Card - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ backgroundColor: bgSecondary }} 
          className={`rounded-xl p-6 shadow-lg border ${borderColor} col-span-1 lg:col-span-2`}
        >
          <h3 className={`text-base font-semibold ${textPrimary} mb-5`}>⚡ Quick Actions</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex flex-col items-center justify-center p-4 rounded-lg ${darkMode ? 'bg-blue-900/30 hover:bg-blue-900/40' : 'bg-blue-50 hover:bg-blue-100'} transition-colors`}
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mb-2">
                <ShoppingCart className="text-white w-5 h-5" />
              </div>
              <p className={`text-sm font-medium ${textPrimary}`}>New Order</p>
              <p className={`text-xs ${textSecondary}`}>Process orders</p>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex flex-col items-center justify-center p-4 rounded-lg ${darkMode ? 'bg-green-900/30 hover:bg-green-900/40' : 'bg-green-50 hover:bg-green-100'} transition-colors`}
            >
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mb-2">
                <Box className="text-white w-5 h-5" />
              </div>
              <p className={`text-sm font-medium ${textPrimary}`}>Add Product</p>
              <p className={`text-xs ${textSecondary}`}>Create listings</p>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex flex-col items-center justify-center p-4 rounded-lg ${darkMode ? 'bg-purple-900/30 hover:bg-purple-900/40' : 'bg-purple-50 hover:bg-purple-100'} transition-colors`}
            >
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mb-2">
                <Calendar className="text-white w-5 h-5" />
              </div>
              <p className={`text-sm font-medium ${textPrimary}`}>Schedule</p>
              <p className={`text-xs ${textSecondary}`}>Plan events</p>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex flex-col items-center justify-center p-4 rounded-lg ${darkMode ? 'bg-yellow-900/30 hover:bg-yellow-900/40' : 'bg-yellow-50 hover:bg-yellow-100'} transition-colors`}
            >
              <div className="w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center mb-2">
                <svg className="text-white w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <p className={`text-sm font-medium ${textPrimary}`}>Messages</p>
              <p className={`text-xs ${textSecondary}`}>View inbox</p>
            </motion.button>
          </div>
          
          <div className={`flex justify-between items-center mt-5 pt-4 border-t ${borderColor}`}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center"
            >
              <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              <span className={`text-xs ${textPrimary}`}>System status: Online</span>
            </motion.div>
            
            <button className={`text-blue-400 text-xs hover:underline`}>
              Settings
            </button>
          </div>
        </motion.div>
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