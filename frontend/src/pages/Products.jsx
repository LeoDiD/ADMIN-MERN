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
            <button className=" text-white px-4 py-2 rounded hover:bg-blue-700 transition-all">
              <Plus className="w-4 h-4 inline-block mr-1" /> {/* Changed to Plus icon */}
              Add Product
            </button>
          </div>
          
          {/* Sort options below header */}
          <div className="flex items-center mb-4 text-sm">
          <select style={{ backgroundColor: "#1D1D1D" }} className="text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:bg-neutral-900 transition-all duration-300">
              <option value="number">5</option>
              <option value="number">10</option>
            </select>
            <span className="text-white mr-2">Entries per page:</span>
          </div>
          
          {/* Product table/list area */}
          <div style={{ backgroundColor: "#1D1D1D" }} className="rounded-md overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead >
                <tr>
                  <th className="px-4 py-3 text-sm font-medium">Image</th>
                  <th className="px-4 py-3 text-sm font-medium">Name</th>
                  <th className="px-4 py-3 text-sm font-medium">Description</th>
                  <th className="px-4 py-3 text-sm font-medium">Price</th>
                  <th className="px-4 py-3 text-sm font-medium">Actions</th>
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
                  <td className="px-4 py-3">
                    <div className="flex space-x-2">
                      <button className="p-1 bg-blue-600 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button className="p-1 bg-red-600 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
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