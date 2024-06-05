import { Outlet } from "react-router-dom";
import { useState } from "react";
import SideBar from "@components/sidebar";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="container-fluid p-0" style={{ display: 'flex' }}>
      <div style={{ flex: sidebarOpen ? '0 0 200px' : '0 0 0', transition: 'flex-basis 0.3s' }}>
        <SideBar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="p-4 maincontent" style={{ flex: 1, transition: 'margin-left 0.3s', marginLeft: sidebarOpen ? '200px' : '0' }}>
        <Outlet />
      </div>
    </div>
  );
}
