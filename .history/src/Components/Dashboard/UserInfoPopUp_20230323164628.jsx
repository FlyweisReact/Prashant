/** @format */

import React, { useState } from "react";
import styles from "../../Styles/Dashboard.module.css";
import { MdNotificationAdd } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { NotificationModal } from "../Notification/NotificationModal";
import Modal from 'react-bootstrap/Modal';



function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}

export const UserInfoPopUp = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const HandleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <div className={styles.logoSection}>
        <div onClick={() => navigate("/dashboard")} className={styles.Logo}>
          <p>LOGO</p>
        </div>
        <NotificationModal openModal={openModal} HandleModal={HandleModal} />
       
        <div className={styles.InfoPanel}>
          <div>
            <MdNotificationAdd
              size={35}
              color="#003466"
              style={{ cursor: "pointer" }}
              onClick={HandleModal}
            />
            <FaUserCircle
              size={35}
              color="#003466"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/profile")}
            />
            <IoSettingsOutline
              size={35}
              color="#003466"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
