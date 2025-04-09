import React from "react";
import {
  Home,
  Image,
  Layers,
  CheckSquare,
  Flag,
  UserCircle,
  Box,
} from "lucide-react";

const navItems = [
  { icon: <Home />, label: "Home" },
  { icon: <Image />, label: "Gallery" },
  { icon: <Layers />, label: "Layers" },
  { icon: <CheckSquare />, label: "Tasks" },
  { icon: <Flag />, label: "Flags" },
  { icon: <UserCircle />, label: "Profile" },
];

const Sidebar = () => {
  return (
    <aside className="flex flex-col items-center py-6 space-y-8 bg-gray-900 h-screen shadow-md w-16">
      {/* Logo */}
      <div className="text-white">
        <Box className="w-6 h-6" />
      </div>

      {/* Nav */}
      <nav className="flex flex-col items-center space-y-6">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 hover:scale-110 transform transition-all duration-300 ease-in-out"
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