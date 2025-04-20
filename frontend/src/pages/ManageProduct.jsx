import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

const ManageProduct = () => {
  const products = [
    { id: 1, name: 'Anime Figure', price: '₱1,500', stock: 10, category: 'Figures' },
    { id: 2, name: 'T-Shirt', price: '₱550', stock: 25, category: 'Clothing' },
    { id: 3, name: 'Keychain', price: '₱150', stock: 50, category: 'Accessories' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Manage Products</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-gray-700 rounded py-1.5 px-3 text-white text-sm pr-8"
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-gray-700">
            <tr>
              <th className="py-2 px-3 text-left text-xs font-medium text-gray-400 uppercase">Name</th>
              <th className="py-2 px-3 text-left text-xs font-medium text-gray-400 uppercase">Price</th>
              <th className="py-2 px-3 text-left text-xs font-medium text-gray-400 uppercase">Stock</th>
              <th className="py-2 px-3 text-left text-xs font-medium text-gray-400 uppercase">Category</th>
              <th className="py-2 px-3 text-left text-xs font-medium text-gray-400 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {products.map(product => (
              <tr key={product.id}>
                <td className="py-2 px-3 text-sm">{product.name}</td>
                <td className="py-2 px-3 text-sm">{product.price}</td>
                <td className="py-2 px-3 text-sm">{product.stock}</td>
                <td className="py-2 px-3 text-sm">{product.category}</td>
                <td className="py-2 px-3 text-sm">
                  <div className="flex space-x-2">
                    <button className="text-blue-400 hover:text-blue-300">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="text-red-400 hover:text-red-300">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;