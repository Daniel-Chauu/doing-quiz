import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import NavBar from "./NavBar.js";
import { Outlet } from "react-router-dom";

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
    </div>
  );
};
export default Admin;
