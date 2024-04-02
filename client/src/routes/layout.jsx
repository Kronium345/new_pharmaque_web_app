import { Outlet } from "react-router-dom";

import SideBar from "@components/sidebar";

export default function Layout() {
  return (
    <div class="container-fluid p-0">
      <div class="row g-0">
        <div class="col-sm-3 leftnavigation p-4">
          <SideBar />
        </div>
        <div class="col-sm-9 p-4 maincontent">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
