import React from 'react';
import { PackageOpen, ShoppingBag, Ellipsis} from 'lucide-react';
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
              <div className="bg-blue-500 bg-opacity-20 py-1 px-3 rounded-full text-blue-400 text-xs font-medium">
                5 Active
              </div>
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
      className="w-14 h-14 rounded-md object-cover"
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
      <span className="bg-yellow-500 bg-opacity-20 py-1 px-3 rounded-full text-white text-xs font-medium whitespace-nowrap">
        In Transit
      </span>
      <span className="text-xs cursor-pointer hover:underline">
        <Ellipsis />
      </span>
    </div>
  </div>
</div>

            
            {/* Delivery Item 2 */}
            <div className="bg-gray-800 bg-opacity-40 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300 font-medium">Order #5678</span>
                <span className="bg-green-500 bg-opacity-20 py-0.5 px-2 rounded-full text-green-400 text-xs">Out for Delivery</span>
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
            <div className="bg-gray-800 bg-opacity-40 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300 font-medium">Order #9012</span>
                <span className="bg-blue-500 bg-opacity-20 py-0.5 px-2 rounded-full text-blue-400 text-xs">Processing</span>
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
              <ShoppingBag className="w-5 h-5 mr-2 text-purple-400"/>
              <h3 className="text-lg font-medium text-white">Recent Orders</h3>
            </div>
            <div className="bg-purple-500 bg-opacity-20 py-1 px-3 rounded-full text-purple-400 text-xs font-medium">
              12 New
            </div>
          </div>

          {/* Orders List */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-transparent">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Order ID</th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Customer</th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="px-2 py-3 text-sm text-gray-300">#1234</td>
                  <td className="px-2 py-3 text-sm text-gray-300">John Smith</td>
                  <td className="px-2 py-3 text-sm text-yellow-400">In Transit</td>
                  <td className="px-2 py-3 text-sm text-gray-300">$120.00</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-2 py-3 text-sm text-gray-300">#5678</td>
                  <td className="px-2 py-3 text-sm text-gray-300">Maria Garcia</td>
                  <td className="px-2 py-3 text-sm text-green-400">Out for Delivery</td>
                  <td className="px-2 py-3 text-sm text-gray-300">$75.00</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-2 py-3 text-sm text-gray-300">#9012</td>
                  <td className="px-2 py-3 text-sm text-gray-300">David Lee</td>
                  <td className="px-2 py-3 text-sm text-blue-400">Processing</td>
                  <td className="px-2 py-3 text-sm text-gray-300">$45.00</td>
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