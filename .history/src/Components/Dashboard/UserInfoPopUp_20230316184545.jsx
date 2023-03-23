import React, { useState } from "react";
import styles from "../../Styles/Dashboard.module.css";
import { MdNotificationAdd } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { NotificationModal } from "../Notification/NotificationModal";
export const UserInfoPopUp = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const HandleModal = () => {
    setOpenModal(!openModal);
  };
  return (
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
  );
};
