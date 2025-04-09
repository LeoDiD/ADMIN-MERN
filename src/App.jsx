import React from "react";
import DashboardSidebar from "./components/DashboardSidebar";

const App = () => {
  return (
    <div className="flex">
      <DashboardSidebar />
      <main className="">
        <h1 className="t">Dashboard Content</h1>
      </main>
    </div>
  );
};

export default App;