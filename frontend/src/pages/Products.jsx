import React, { useState } from 'react';
import { Search, Sun, Moon, Package, Plus } from 'lucide-react';

const Products = () => {
  // Add state for search and dark mode
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  // Add toggle functions
  const toggleSearchInput = () => setShowSearchInput(!showSearchInput);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="p-6 h-full w-full overflow-y-auto bg-neutral-900 text-white">
      {/* Title header with actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex items-center">
          <Package className="w-5 h-5 mr-2" /> {/* Changed to Package icon */}
          <h2 className="font-medium text-2xl text-white">Product Maintenance</h2> {/* Changed title to Products */}
        </div>
      
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="relative flex items-center">
            {showSearchInput && (
              <input
                type="text"
                placeholder="Search products..."
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
      
      {/* Products content */}
      <div className="grid grid-cols-1 gap-4">
        <div style={{ backgroundColor: "#333333" }} className="p-4 rounded shadow border border-gray-800">
          {/* Top header with title and add button */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-white text-lg font-medium">Product List</span>
            <button className=" text-white px-4 py-2 rounded hover:bg-blue-700 transition-all">
              <Plus className="w-4 h-4 inline-block mr-1" /> {/* Changed to Plus icon */}
              Add Product
            </button>
          </div>
          
          {/* Sort options below header */}
          <div className="flex items-center mb-4 text-sm">
          <select className="bg-neutral-900 text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:bg-neutral-900 transition-all duration-300">
              <option value="number">5</option>
              <option value="number">10</option>
            </select>
            <span className="text-white mr-2">Entries per page:</span>
          </div>
          
          {/* Product table/list area */}
          <div className="bg-gray-800 p-8 rounded-md flex items-center justify-center">
            <p className="text-gray-400">Product list will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;