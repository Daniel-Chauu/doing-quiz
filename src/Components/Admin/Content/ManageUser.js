import React, { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";

import axios from "../../utils/axiosCustomize";
import "./ManageUser.scss";
import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import TableUser from "./TableUser";

const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const dataUsers = await axios.get("api/v1/participant/all");
    console.log("🚀 ~ dataUsers", dataUsers.DT);
    setUsers(dataUsers.DT);
  };

  return (
    <div className="manage-user-container">
      <div className="title">
        <h1>Manage User</h1>
      </div>
      <div className="user-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            <FcPlus />
            Add new user
          </button>
        </div>
        <div className="table-users-container">
          <TableUser users={users} />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          getAllUsers={getAllUsers}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
        />
      </div>
    </div>
  );
};

export default ManageUser;
