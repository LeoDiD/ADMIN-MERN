import React from "react";
import {
  Home,
  PackageSearch,
  ShoppingCart,
  Users,
  Pencil,
  UserCircle,
  LogOut,
  Box,
} from "lucide-react";

const navItems = [
  { icon: <Home />, label: "Home", path: "/" },
  { icon: <PackageSearch />, label: "Products", path: "/Products" },
  { icon: <ShoppingCart />, label: "Orders", path: "/orders" },
  { icon: <Users />, label: "Customer", path: "/customers" },
  { icon: <Pencil />, label: "Edit product", path: "/edit-product" },
  { icon: <UserCircle />, label: "Profile", path: "/profile" },
  { icon: <LogOut />, label: "Log out", path: "/logout" },
];

const Sidebar = () => {
  return (
    <aside style={{ backgroundColor: "#262626" }} className="w-16 h-full flex flex-col items-center py-6 shadow-md">
      {/* Logo with company name - Circle Profile Style */}
      <div className="mb-6 flex flex-col items-center">
        <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center overflow-hidden mb-1">
          <Box className="w-5 h-5 text-white" />
        </div>
        <span className="text-xs font-semibold text-white">EZ Mart</span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col items-center space-y-6">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className="p-2 rounded-lg text-white hover:text-white hover:bg-gray-700 transition-all duration-300 ease-in-out"
            title={item.label}
          >
            {React.cloneElement(item.icon, { className: "w-6 h-6 text-white" })}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;