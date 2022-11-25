import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./Components/Admin/Admin";
import User from "./Components/User/User";
import Home from "./Components/Home/Home";
import ManageUser from "./Components/Admin/Content/ManageUser";
import DashBoard from "./Components/Admin/Content/DashBoard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/users" element={<User />} />
      </Route>
      <Route path="/admins" element={<Admin />}>
        <Route index element={<DashBoard />} />
        <Route path="manage-users" element={<ManageUser />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
