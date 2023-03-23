/** @format */

import React, { useState } from "react";
import styles from "../../Styles/Dashboard.module.css";
import { MdNotificationAdd } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { NotificationModal } from "../Notification/NotificationModal";
import Modal from 'react-bootstrap/Modal';
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";



function MyVerticallyCenteredModal(props) {

  const data = [
    {
      img: "https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=ImgDet&rs=1",
      title: "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
      desc: "Morem ipsum dolor sit amet, consectetur .",
      day: "yesterday",
      time: "10:30 AM",
    },
    {
      img: "https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=ImgDet&rs=1",
      title: "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
      desc: "Morem ipsum dolor sit amet, consectetur .",
      day: "yesterday",
      time: "10:30 AM",
    },
    {
      img: "https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=ImgDet&rs=1",
      title: "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
      desc: "Morem ipsum dolor sit amet, consectetur .",
      day: "yesterday",
      time: "10:30 AM",
    },
  ];

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
      <div className=''>
      <div className=''>
        <AiOutlineClose
          size={25}
          className=''
        />
        <div className=''>
          <h1>Notification</h1>
          <BsThreeDotsVertical size={25} />
        </div>
        <hr style={{ height: "3px", background: "black" }} />
        <p>Today's</p>
        {data.map((ele) => (
          <>
            <div className=''>
              <div>
                <img src={ele.img} alt="img" />
              </div>
              <div>
                <h1>{ele.title}</h1>
                <p>{ele.desc}</p>
                <div>
                  <p>{ele.day}</p>
                  <span className={styles.Time}>{ele.time}</span>
                </div>
              </div>
            </div>
            <hr style={{ height: "2px", background: "grey" }} />
          </>
        ))}
      </div>
    </div>
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
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />


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
              // onClick={HandleModal}
              onClick={() => setModalShow(true)}
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
