import React from "react";
import ReactPaginate from "react-paginate";

const TableUserPaginate = (props) => {
  const {
    users,
    handleShowModalUpdateUser,
    handleShowModalViewUser,
    handleShowModalDeleteUser,
    fetchUserPaginate,
    pageCount,
    currentPage,
    setCurentPage,
  } = props;

  const handlePageClick = async (event) => {
    await fetchUserPaginate(+event.selected + 1);
    setCurentPage(+event.selected + 1);
  };

  return (
    <div>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.length !== 0 &&
            users.map((user, id) => (
              <tr key={`user-key-${id}`}>
                <th scope="row">{id + 1}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleShowModalViewUser(user)}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-warning mx-3"
                    onClick={() => handleShowModalUpdateUser(user)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleShowModalDeleteUser(user)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <ReactPaginate
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< Prev"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={currentPage - 1}
        />
      </div>
    </div>
  );
};

export default TableUserPaginate;
