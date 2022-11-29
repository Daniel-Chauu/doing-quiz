import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deleteUser } from "../../services/apiServices";

const ModalDeleteUser = (props) => {
  const { show, setShow, fetchUserPaginate, userDataDelete, setCurentPage } =
    props;

  const handleClose = () => setShow(false);
  const handleSubmitDeleteUser = async () => {
    const resDelete = await deleteUser(userDataDelete.id);
    if (resDelete?.EC === 0) {
      toast.success(resDelete.EM);
      handleClose();
      setCurentPage(1);
      await fetchUserPaginate(1);
    }
    if (resDelete?.EC !== 0) {
      toast.error(resDelete.EM);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          are you sure to delete this user. Email = {userDataDelete.email}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleSubmitDeleteUser()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
