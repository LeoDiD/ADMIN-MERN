import React from 'react';
import { PackageOpen, Ellipsis} from 'lucide-react';
import meat from '../assets/meat.png';

const Orders = () => {
  return (
    <div style={{ backgroundColor: "#1D1D1D" }} className="p-6 h-full w-full overflow-y-auto text-white">
      <div className="flex items-center mb-6">
        <PackageOpen className="w-5 h-5 mr-2"/>
        <h2 className="font-medium text-2xl text-white">Order Management</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left container - Deliveries */}
        <div style={{ backgroundColor: "#262626" }} className="rounded-lg p-6 shadow border border-gray-700">
          <div className="flex flex-col mb-6">
            <div className="flex justify-between items-center mb-2">
              <h6 className="text-xs font-medium text-gray-400">Delivery Management</h6>
            </div>
            <div className="flex items-center">
              <h3 className="text-lg font-medium text-white">Product Delivery</h3>
            </div>
          </div>

          {/* Delivery items */}
          <div className="space-y-4">
            {/* Delivery Item 1 */}
            <div className="bg-opacity-50 rounded-lg p-4 border border-dashed border-gray-500">
              <div className="flex items-center gap-4">
                {/* Adjusted image size */}
                <img
                  src={meat}
                  alt="Product"
                  className="w-14 h-14 rounded-md object-cover border border-gray-700"
                />

                {/* Product details */}
                <div className="flex-1">
                  <p className="text-white font-medium text-sm leading-snug">
                    Meat Liempo Cut | Fresh Product
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Delivery to: John Smith</p>
                </div>

                {/* Status & ellipsis in one row */}
                <div className="flex items-center gap-2">
                  <span className="bg-yellow-500 bg-opacity-20 py-1 px-3 rounded-full text-white text-xs font-medium whitespace-nowrap border border-yellow-600">
                    In Transit
                  </span>
                  <span className="text-xs cursor-pointer hover:underline">
                    <Ellipsis />
                  </span>
                </div>
              </div>
            </div>
            {/* Delivery Item 2 */}
            <div className="bg-gray-800 bg-opacity-40 rounded-lg p-4 border border-gray-700">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300 font-medium">Order #5678</span>
                <span className="bg-green-500 bg-opacity-20 py-0.5 px-2 rounded-full text-green-400 text-xs border border-green-600">
                  Out for Delivery
                </span>
              </div>
              <div className="text-sm text-gray-400 mb-3">
                <p>Delivery to: Maria Garcia</p>
                <p>Address: 456 Marvel Lane, Quezon City</p>
                <p>Items: 1 × Marvel Action Figure, 2 × T-shirts</p>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Est. Delivery: Today</span>
              </div>
            </div>

            {/* Delivery Item 3 */}
            <div className="bg-gray-800 bg-opacity-40 rounded-lg p-4 border border-gray-700">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300 font-medium">Order #9012</span>
                <span className="bg-blue-500 bg-opacity-20 py-0.5 px-2 rounded-full text-blue-400 text-xs border border-blue-600">
                  Processing
                </span>
              </div>
              <div className="text-sm text-gray-400 mb-3">
                <p>Delivery to: David Lee</p>
                <p>Address: 789 DC Boulevard, Makati</p>
                <p>Items: 2 × DC Action Figures</p>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Est. Delivery: Apr 23</span>
                <span className="text-blue-400">Track Package</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right container - Orders */}
        <div style={{ backgroundColor: "#262626" }} className="rounded-lg p-6 shadow border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <h3 className="text-lg font-medium text-white">Recent Orders</h3>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4 text-sm">
            <div className="flex items-center">
              <span className="text-white mr-2">Entries per page:</span>
              <select style={{ backgroundColor: "#1D1D1D" }} className="text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:bg-neutral-900 transition-all duration-300 border border-gray-700">
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
            </div>
            
            <div className="flex items-center">
              <span className="text-white mr-2">Search:</span>
              <input
                type="text"
                className="bg-gray-700 rounded-lg px-3 py-1 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-white text-sm border border-gray-600"
              />
            </div>
          </div>

          {/* Orders List */}
          <div className="overflow-x-auto rounded-md border border-gray-700">
            <table className="min-w-full text-sm text-left text-gray-300">
            <thead className="bg-[#1D1D1D] text-white border-b border-gray-700">
  <tr>
    <th className="px-3 py-2 text-s border-r border-gray-700">Product</th>
    <th className="px-3 py-2 text-s border-r border-gray-700">Category</th>
    <th className="px-3 py-2 text-s border-r border-gray-700">Price</th>
    <th className="px-3 py-2 text-s border-r border-gray-700">Status</th>
  </tr>
</thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2 border-r border-gray-700">Meat Liempo</td>
                  <td className="px-4 py-2 border-r border-gray-700">Fresh</td>
                  <td className="px-4 py-2 border-r border-gray-700">₱230</td>
                  <td className="px-4 py-2 border-r border-gray-700">
                    <span className="text-gray-400">
                      In Stock
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2 border-r border-gray-700">Chicken Wings</td>
                  <td className="px-4 py-2 border-r border-gray-700">Frozen</td>
                  <td className="px-4 py-2 border-r border-gray-700">₱180</td>
                  <td className="px-4 py-2  border-r border-gray-700">
                    <span className="text-gray-400">
                      Low Stock
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-r border-gray-700">Milk 1L</td>
                  <td className="px-4 py-2 border-r border-gray-700">Dairy</td>
                  <td className="px-4 py-2 border-r border-gray-700">₱95</td>
                  <td className="px-4 py-2 border-r border-gray-700">
                    <span className='text-gray-400'>
                      Out of Stock
                    </span>
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

export default Orders;