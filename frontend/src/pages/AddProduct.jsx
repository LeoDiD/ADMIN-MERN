import React from 'react';

const AddProduct = () => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-medium mb-4">Add New Product</h3>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Product Name</label>
          <input 
            type="text" 
            className="w-full bg-gray-700 rounded py-2 px-3 text-white"
            placeholder="Enter product name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
          <textarea 
            className="w-full bg-gray-700 rounded py-2 px-3 text-white"
            rows="3"
            placeholder="Enter product description"
          ></textarea>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Price (₱)</label>
            <input 
              type="number" 
              className="w-full bg-gray-700 rounded py-2 px-3 text-white"
              placeholder="0.00"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Category</label>
            <select className="w-full bg-gray-700 rounded py-2 px-3 text-white">
              <option value="">Select category</option>
              <option value="clothing">Clothing</option>
              <option value="figures">Action Figures</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Product Image</label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-600 hover:border-gray-500 rounded-lg cursor-pointer">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="text-sm text-gray-400">
                  <span className="font-medium">Click to upload</span> or drag and drop
                </p>
              </div>
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;