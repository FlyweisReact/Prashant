/** @format */

import React  , {useState} from "react";
import styles from "../../Styles/Dashboard.module.css";
import { MdNotificationAdd } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiFillHome } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

function NotificationModal(props) {
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
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="NotifyModal"
    >
      <Modal.Body>
        <div className="NotificationModal">
          <div>
            <div className="close">
              <i class="fa-solid fa-x" onClick={() => props.onHide()}></i>
            </div>
            <div className="NotificationModalFirst">
              <h1>Notification</h1>
              <BsThreeDotsVertical size={25} />
            </div>
            <hr style={{ height: "3px", background: "black" }} />
            <p>Today's</p>
            {data.map((ele) => (
              <>
                <div className="NotificationDiv">
                  <div>
                    <img src={ele.img} alt="img" />
                  </div>
                  <div>
                    <h1>{ele.title}</h1>
                    <p>{ele.desc}</p>
                    <div>
                      <p>{ele.day}</p>
                      <span className="Time">{ele.time}</span>
                    </div>
                  </div>
                </div>
                <hr style={{ height: "2px", background: "grey" }} />
              </>
            ))}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export const UserInfoPopUp = () => {
  // Notification Modal
  const [modalShow, setModalShow] = React.useState(false);

  // Sidebar offcanvas
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <>
      <NotificationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className={styles.logoSection}>
        <div onClick={() => navigate("/dashboard")} className={styles.Logo}>
          <p>LOGO</p>
        </div>

        <div className={styles.InfoPanel}>
          <div>
            <MdNotificationAdd
              size={35}
              color="#003466"
              style={{ cursor: "pointer" }}
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
          
            <FaBars
              size={35}
              color="#003466"
              style={{ cursor: "pointer" }}
              className='bars'
              onClick={handleShow}
            />
          
          </div>
        </div>
      </div>


      {/* OffCanvas SideBar */}
      <Offcanvas show={show} onHide={handleClose}>
        {/* <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header> */}
        <Offcanvas.Body>
        <div className={SideBarMain}>
      <h1>Welcome Back</h1>
      <div>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=ImgDet&rs=1"
            alt="img"
          />
          <h1>Pooja Sharma</h1>
          <p>ID:#202031232</p>
          <div className={styles.TotalBudgetDiv}>
            <h1>&#x20b9;</h1>
            <h1>10000</h1>
          </div>
          <p>Monthly Budget</p>
        </div>
      </div>
      <div className={styles.LinkBox}>
        <Link to={"/dashboard"}>
          <div
            className={
              pathname === "/dashboard" ? styles.active : styles.unactive
            }
          >
            <AiFillHome size={25} />
            <p>Dashboard</p>
          </div>
        </Link>
        <Link to={"/rolling-reserve"}>
          <div
            className={
              pathname === "/rolling-reserve" ? styles.active : styles.unactive
            }
          >
            <p>Rolling Reserve</p>
          </div>
        </Link>
        <Link to={"/mature-fund"}>
          <div
            className={
              pathname === "/mature-fund" ? styles.active : styles.unactive
            }
          >
            <p>Mature Funds</p>
          </div>
        </Link>
        <Link to={"/refund-request"}>
          <div
            className={
              pathname === "/refund-request" ? styles.active : styles.unactive
            }
          >
            <p>Refund Request</p>
          </div>
        </Link>
        <Link to={"/current-charge"}>
          <div
            className={
              pathname === "/current-charge" ? styles.active : styles.unactive
            }
          >
            <p>Current Charge Back</p>
          </div>
        </Link>
      </div>
    </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
