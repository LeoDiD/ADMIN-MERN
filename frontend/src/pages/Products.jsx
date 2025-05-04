import React, { useState, useRef } from 'react';
import { X, Upload, ChevronLeft, ChevronRight, Search, Sun, Moon, Package, Plus, EllipsisVertical } from 'lucide-react';
import ManageProduct from './ManageProduct';  // Adjust path if needed

const Products = () => {
  // Add state variables
  const [showModal, setShowModal] = useState(false);
  const [wizardStep, setWizardStep] = useState(1);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [view, setView] = useState('add'); // 'add' or 'manage'
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    image: null
  });
  const fileInputRef = useRef(null);
  
  // Toggle functions
  const toggleSearchInput = () => setShowSearchInput(!showSearchInput);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  
  // Modal functions
  const openModal = () => {
    setShowModal(true);
    setWizardStep(1);
    setProductData({
      name: '',
      description: '',
      price: '',
      image: null
    });
  };
  
  const closeModal = () => {
    setShowModal(false);
  };
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle file upload
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProductData(prev => ({
        ...prev,
        image: e.target.files[0]
      }));
    }
  };
  
  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product data submitted:', productData);
    // Add API call here to save product data
    closeModal();
  };
  
  // Navigation functions with event propagation fixes
  const nextStep = (e) => {
    e.preventDefault();  // Prevent form submission
    e.stopPropagation(); // Prevent event bubbling
    setWizardStep(2);
  };

  const prevStep = (e) => {
    e.preventDefault();  // Prevent form submission
    e.stopPropagation(); // Prevent event bubbling
    setWizardStep(1);
  };

  // Add this to prevent background clicks from closing the modal
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div style={{ backgroundColor: "#1D1D1D" }} className="p-6 h-full w-full overflow-y-auto text-white">
      {/* Title header with actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex items-center">
          <Package className="w-5 h-5 mr-2" />
          <h2 className="font-medium text-2xl text-white">Product Maintenance</h2>
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
      
      {/* Product Section with Toggle Buttons */}
      <div className="flex flex-col mb-4">
        {/* Toggle Buttons */}
        <div className="flex mb-4">
          <button
            onClick={() => setView('add')}
            className={`px-4 py-2 text-sm font-medium rounded-l ${
              view === 'add' 
                ? 'bg-gray-700 text-white border-b-2 border-blue-500' 
                : 'bg-gray-800 text-gray-400'
            }`}
          >
            Add Product
          </button>
          <button
            onClick={() => setView('manage')}
            className={`px-4 py-2 text-sm font-medium rounded-r ${
              view === 'manage' 
                ? 'bg-gray-700 text-white border-b-2 border-blue-500' 
                : 'bg-gray-800 text-gray-400'
            }`}
          >
            Manage Products
          </button>
        </div>

        {/* Horizontal line */}
        <div className="border-b border-gray-700 w-full mb-4"></div>

        {/* Product Content Based on View */}
        <div className="flex flex-col space-y-4">         
          {view === 'manage' && <ManageProduct />}
        </div>
      </div>
      
      {/* Product List Section - Only show when "Add Product" is active */}
      {view === 'add' && (
        <div className="grid grid-cols-1 gap-4">
          <div style={{ backgroundColor: "#262626" }} className="p-4 rounded shadow border border-gray-800">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="text-white text-lg font-medium">Product List</span>
              </div>
              <button 
                onClick={openModal}
                style={{ backgroundColor: "#FFFFFF" }} 
                className="p-2 rounded transition-all hover:bg-gray-200"
              >
                <Plus className="w-5 h-5 text-gray-800" />
              </button>
            </div>
            
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
            
            <div style={{ backgroundColor: "#1D1D1D" }} className="rounded-md overflow-hidden">
              <table className="w-full text-left border-1 border-collapse">
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
                  <tr style={{ backgroundColor: "#262626" }} className="border-t">
                    <td className="px-4 py-3">
                      <div className="w-10 h-10 bg-gray-600 rounded"></div>
                    </td>
                    <td className="px-4 py-3">Product Name</td>
                    <td className="px-4 py-3 text-gray-300">Short description here...</td>
                    <td className="px-4 py-3">₱199.99</td>
                    <td className="px-4 py-3">
                      <EllipsisVertical className="w-6 h-6" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      
      {/* Modal for Adding Product - Wizard Style */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal} // Close when clicking background
        >
          <div 
            className="relative w-full max-w-lg bg-[#262626]/95 text-white rounded-xl shadow-lg p-6 backdrop-filter backdrop-blur-md border border-gray-700"
            onClick={handleModalClick} // Prevent propagation to background
          >
            
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b border-gray-600 pb-3 mb-4">
              <h2 className="text-lg font-semibold">
                {wizardStep === 1 ? "Step 1: Product Details" : "Step 2: Upload Image"}
              </h2>
              <button onClick={closeModal} className="hover:text-red-500">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                wizardStep >= 1 ? 'bg-blue-500' : 'bg-gray-500'
              }`}>1</div>
              <div className={`h-1 w-12 ${wizardStep > 1 ? 'bg-blue-500' : 'bg-gray-600'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                wizardStep === 2 ? 'bg-blue-500' : 'bg-gray-500'
              }`}>2</div>
            </div>

            <form onSubmit={handleSubmit}>
              {wizardStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm block mb-1">Product Name</label>
                    <input
                      id="name"
                      name="name"
                      value={productData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="text-sm block mb-1">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      value={productData.description}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="price" className="text-sm block mb-1">Price (₱)</label>
                    <input
                      id="price"
                      name="price"
                      type="number"
                      step="0.01"
                      min="0"
                      value={productData.price}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              )}

              {wizardStep === 2 && (
                <div className="space-y-4">
                  <label className="block text-sm mb-2">Upload Image</label>
                  <div
                    onClick={() => fileInputRef.current.click()}
                    className="w-full h-48 border-2 border-dashed border-gray-500 flex items-center justify-center cursor-pointer rounded hover:border-blue-400"
                  >
                    {productData.image ? (
                      <img
                        src={URL.createObjectURL(productData.image)}
                        alt="Preview"
                        className="max-h-full object-contain"
                      />
                    ) : (
                      <div className="text-gray-400 flex flex-col items-center">
                        <Upload className="w-10 h-10 mb-2" />
                        <p>Click to upload image</p>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      ref={fileInputRef}
                      className="hidden"
                    />
                  </div>
                </div>
              )}

              {/* Footer buttons */}
              <div className="flex justify-between items-center mt-6">
                {wizardStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="text-sm text-gray-300 hover:underline flex items-center"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back
                  </button>
                )}
                {wizardStep === 1 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Next <ChevronRight className="w-4 h-4 inline ml-1" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;