import React, { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
import { getUserWithPaginate } from "../../services/apiServices";

import "./ManageUser.scss";
import ModalCreateUser from "./ModalCreateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = () => {
  const LIMIT_PAGE = 2;
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurentPage] = useState(1);

  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [userDataUpdate, setUserDataUpdate] = useState({});
  const [userDataView, setUserDataView] = useState({});
  const [userDataDelete, setUserDataDelete] = useState({});

  const handleShowModalUpdateUser = (userUpdate) => {
    setShowModalUpdateUser(true);
    setUserDataUpdate(userUpdate);
  };
  const handleShowModalViewUser = (userView) => {
    setShowModalViewUser(true);
    setUserDataView(userView);
  };
  const handleShowModalDeleteUser = (userDeleter) => {
    setShowModalDeleteUser(true);
    setUserDataDelete(userDeleter);
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // getAllUsers();
    fetchUserPaginate(1);
  }, []);

  const resetDataUpdate = () => setUserDataUpdate({});

  const fetchUserPaginate = async (page) => {
    const dataUsers = await getUserWithPaginate(page, LIMIT_PAGE);
    if (dataUsers.EC !== 0) return;
    setUsers(dataUsers.DT.users);
    setPageCount(dataUsers.DT.totalPages);
  };

  // const getAllUsers = async () => { fetchUserPaginate
  //   const dataUsers = await axios.get("api/v1/participant/all");
  //   setUsers(dataUsers.DT);
  // };

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
          {/* <TableUser
            users={users}
            handleShowModalUpdateUser={handleShowModalUpdateUser}
            handleShowModalViewUser={handleShowModalViewUser}
            handleShowModalDeleteUser={handleShowModalDeleteUser}
          /> */}
          <TableUserPaginate
            users={users}
            handleShowModalUpdateUser={handleShowModalUpdateUser}
            handleShowModalViewUser={handleShowModalViewUser}
            handleShowModalDeleteUser={handleShowModalDeleteUser}
            fetchUserPaginate={fetchUserPaginate}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurentPage={setCurentPage}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchUserPaginate={fetchUserPaginate}
          currentPage={currentPage}
          setCurentPage={setCurentPage}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          userDataUpdate={userDataUpdate}
          fetchUserPaginate={fetchUserPaginate}
          resetDataUpdate={resetDataUpdate}
          currentPage={currentPage}
        />
        <ModalViewUser
          show={showModalViewUser}
          setShow={setShowModalViewUser}
          userDataView={userDataView}
        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          userDataDelete={userDataDelete}
          fetchUserPaginate={fetchUserPaginate}
          currentPage={currentPage}
          setCurentPage={setCurentPage}
        />
      </div>
    </div>
  );
};

export default ManageUser;
