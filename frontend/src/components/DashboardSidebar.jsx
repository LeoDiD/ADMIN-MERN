import React from "react";
import {
  Home,
  PackageSearch,
  Truck,
  Users,
  Pencil,
  UserCircle,
  LogOut,
  Box,
} from "lucide-react";

const navItems = [
  { icon: <Home />, label: "Home", path: "/" },
  { icon: <PackageSearch />, label: "Products", path: "/Products" },
  { icon: <Truck />, label: "Orders", path: "/orders" },
  { icon: <Users />, label: "Customer", path: "/customers" },
  { icon: <Pencil />, label: "Edit product", path: "/edit-product" },
  { icon: <UserCircle />, label: "Profile", path: "/profile" },
  { icon: <LogOut />, label: "Log out", path: "/logout" },
];

const Sidebar = () => {
  return (
    <aside className="w-16 bg-gray-800 h-full flex flex-col items-center py-6 shadow-md">
      {/* Logo */}
      <div className="text-white mb-6">
        <Box className="w-6 h-6 text-white" />
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