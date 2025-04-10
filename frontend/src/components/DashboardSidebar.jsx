import React from "react";
import {
  Home,
  PackageSearch,
  Truck,
  Users,
  Flag,
  UserCircle,
  LogOut,
  Box,
} from "lucide-react";

const navItems = [
  { icon: <Home />, label: "Home" },
  { icon: <PackageSearch />, label: "Products" },
  { icon: <Truck />, label: "Orders" },
  { icon: <Users />, label: "Customer" },
  { icon: <Flag />, label: "Flags" },
  { icon: <UserCircle />, label: "Profile" },
  { icon: <LogOut />, label: "Log out" },
];

const Sidebar = () => {
  return (
    <aside className="w-16 bg-gray-900 h-full flex flex-col items-center py-6 shadow-md">
      {/* Logo */}
      <div className="text-white mb-6">
        <Box className="w-6 h-6" />
      </div>

      {/* Nav */}
      <nav className="flex flex-col items-center space-y-6">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="p-2 rounded-lg text-white hover:text-white hover:bg-gray-800 transition-all duration-300 ease-in-out"
            title={item.label}
          >
            {React.cloneElement(item.icon, { className: "w-6 h-6" })}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
