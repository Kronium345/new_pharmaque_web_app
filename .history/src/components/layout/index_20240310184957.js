import React from "react";
import SideBar from "../sidebar";

const Layout = ({ children }) => {
  return (
    <main>
      <div className="container-fluid p-0">
        <SideBar />
        {children}
      </div>
    </main>
  );
};

export default Layout;
