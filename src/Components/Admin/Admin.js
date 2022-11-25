import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import NavBar from "./NavBar.js";
import { Outlet } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import { ToastContainer, toast } from "react-toastify";

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};
export default Admin;
