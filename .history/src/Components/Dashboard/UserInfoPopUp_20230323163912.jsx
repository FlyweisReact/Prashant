import React, { useState } from "react";
import styles from "../../Styles/Dashboard.module.css";
import { MdNotificationAdd } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { NotificationModal } from "../Notification/NotificationModal";
import Offcanvas from 'react-bootstrap/Offcanvas';


export const UserInfoPopUp = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const HandleModal = () => {
    setOpenModal(!openModal);
  };
  return (

    <>









<Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>

   




  );
};
