import _ from "lodash";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import { putUpdateUser } from "../../services/apiServices";

const ModalUpdateUser = (props) => {
  const {
    show,
    setShow,
    userDataUpdate,
    fetchUserPaginate,
    resetDataUpdate,
    currentPage,
  } = props;

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("USER");
    setImage("");
    setPreviewImg("");
    resetDataUpdate();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImg, setPreviewImg] = useState("");

  useEffect(() => {
    if (_.isEmpty(userDataUpdate)) return;
    setEmail(userDataUpdate.email);
    setUsername(userDataUpdate.username);
    setRole(userDataUpdate.role);
    setImage("");
    if (userDataUpdate.image)
      setPreviewImg(`data:image/png;base64,${userDataUpdate.image}`);
  }, [userDataUpdate]);

  const handleUploadImg = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPreviewImg(URL.createObjectURL(file));
      setImage(file);
    }
  };

  const handleSubmitCreateUser = async () => {
    const data = await putUpdateUser(userDataUpdate.id, username, role, image);

    if (data?.EC === 0) {
      toast.success(data.EM);
      handleClose();
      fetchUserPaginate(currentPage);
    }
    if (data?.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                value={email}
                disabled
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                value={password}
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                value={username}
                type="text"
                className="form-control"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                onChange={(e) => setRole(e.target.value)}
                value={role}
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className="col-md-12">
              <label
                className="form-label label-upload-image"
                htmlFor="upload-file-img"
              >
                <FcPlus /> Upload image
              </label>
              <input
                type="file"
                hidden
                id="upload-file-img"
                onChange={(e) => handleUploadImg(e)}
              />
            </div>
            <div className="col-md-12 img-preview">
              {previewImg ? (
                <img src={previewImg} alt="" />
              ) : (
                <span>Preview image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateUser;
