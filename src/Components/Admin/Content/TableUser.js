import React, { useEffect, useState } from "react";

const TableUser = (props) => {
  const { users } = props;

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
                  <button className="btn btn-secondary">View</button>
                  <button className="btn btn-warning mx-3">Update</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUser;
