import React from "react";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
const ManageUser = () => {
  return (
    <div className="manage-user-container">
      <div className="title">
        <h1>Manage User</h1>
      </div>
      <div className="user-content">
        <ModalCreateUser />
      </div>
    </div>
  );
};

export default ManageUser;
