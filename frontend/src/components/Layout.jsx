import React from "react";
import Sidebar from "./DashboardSidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;