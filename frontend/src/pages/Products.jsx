import React, { useState } from 'react';
import { Search, Sun, Moon, Package, Plus, EllipsisVertical } from 'lucide-react';

const Products = () => {
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
        <div style={{ backgroundColor: "#262626" }} className="p-4 rounded shadow border border-gray-800">
          {/* Top header with title and add button */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-white text-lg font-medium">Product List</span>
            <button style={{ backgroundColor: "#FFFFFF" }} className="p-2 rounded transition-all">
              <Plus className="w-5 h-5 text-gray-800" />
            </button>
          </div>
          
          {/* Sort options with search input beside it */}
          <div className="flex justify-between items-center mb-4 text-sm">
            <div className="flex items-center">
              <span className="text-white mr-2">Entries per page:</span>
              <select style={{ backgroundColor: "#1D1D1D" }} className="text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:bg-neutral-900 transition-all duration-300">
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
            </div>
            
            <div className="flex items-center">
              <span className="text-white mr-2">Search:</span>
              <input
                type="text"
                className="bg-gray-700 rounded-lg px-3 py-1 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-white text-sm"
              />
            </div>
          </div>
          
          {/* Product table/list area */}
          <div style={{ backgroundColor: "#1D1D1D" }} className="rounded-md overflow-hidden">
            <table className="w-full text-left border-1  border-collapse">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-sm font-medium border-1 w-16">Image</th>
                  <th className="px-4 py-3 text-sm font-medium border-1">Name</th>
                  <th className="px-4 py-3 text-sm font-medium border-1">Description</th>
                  <th className="px-3 py-2 text-sm font-medium border-1 w-20">Price</th>
                  <th className="px-3 py-2 text-sm font-medium border-1 w-24">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Example row - you can replace this with your actual data mapping */}
                <tr style={{ backgroundColor: "#262626" }} className="border-t">
                  <td className="px-4 py-3">
                    <div className="w-10 h-10 bg-gray-600 rounded"></div>
                  </td>
                  <td className="px-4 py-3">Product Name</td>
                  <td className="px-4 py-3 text-gray-300">Short description here...</td>
                  <td className="px-4 py-3">₱199.99</td>
                  <td className="px-4 py=3">
                      <EllipsisVertical className="w-8 h-8" />
                  </td>
                </tr>
             </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;