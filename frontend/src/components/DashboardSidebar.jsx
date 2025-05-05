import React from "react";
import { useLocation } from "react-router-dom";
import {
  Home,
  PackageSearch,
  ShoppingCart,
  Users,
  Pencil,
  UserCircle,
  LogOut,
} from "lucide-react";

const navItems = [
  { icon: <Home />, label: "Home", path: "/" },
  { icon: <PackageSearch />, label: "Products", path: "/products" },
  { icon: <ShoppingCart />, label: "Orders", path: "/orders" },
  { icon: <Users />, label: "Customer", path: "/customers" },
  { icon: <Pencil />, label: "Edit product", path: "/edit-product" },
  { icon: <UserCircle />, label: "Profile", path: "/profile" },
  { icon: <LogOut />, label: "Log out", path: "/logout" },
];

// Custom EZ Logo Component
const EZLogo = () => (
  <div className="font-bold text-white text-sm leading-none flex items-center justify-center">
    <span>EZ</span>
  </div>
);

const Sidebar = () => {
  // Get current location from React Router
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside style={{ backgroundColor: "#262626" }} className="w-16 h-full flex flex-col items-center py-6 shadow-md">
      {/* Logo with company name - Circle Profile Style */}
      <div className="mb-6 flex flex-col items-center">
        <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center overflow-hidden mb-1">
          <EZLogo />
        </div>
        <span className="text-xs font-semibold text-white">Mart</span>
      </div>

      {/* Nav with Active State Highlighting */}
      <nav className="flex flex-col items-center space-y-6">
        {navItems.map((item, index) => {
          // Check if this item is active (current page)
          // For home path, check for exact match
          const isActive = 
            (item.path === "/" && currentPath === "/") || 
            (item.path !== "/" && currentPath.startsWith(item.path));

          return (
            <a
              key={index}
              href={item.path}
              className={`p-2 rounded-lg relative transition-all duration-300 ease-in-out
                ${isActive 
                  ? "text-blue-400 bg-gray-800" 
                  : "text-white hover:text-white hover:bg-gray-700"
                }`}
              title={item.label}
            >
              {/* Active indicator - blue pill on left side */}
              {isActive && (
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-5 bg-blue-500 rounded-r-full"></span>
              )}
              
              {/* Icon with active/inactive styling */}
              {React.cloneElement(item.icon, { 
                className: `w-6 h-6 ${isActive ? "text-blue-400" : "text-white"}` 
              })}
              
              {/* Label tooltip on hover */}
              <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity whitespace-nowrap">
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;