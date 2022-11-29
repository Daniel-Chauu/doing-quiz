import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import "./Admin.scss";
import NavBar from "./NavBar.js";

const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <NavBar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <div className="admin-header">
          <div className="admin-fabars">
            <FaBars onClick={() => setCollapsed(!collapsed)} />
          </div>
        </div>
        <div className="admin-main">
          <Outlet />
        </div>
      </div>

      {/* Same as */}
      {/* <ToastContainer /> */}
    </div>
  );
};
export default Admin;
