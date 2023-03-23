import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "../Styles/CardProccessingModal.module.css";
export const CardProccessingModal = ({ OpenModal, HandleModal }) => {
  console.log(OpenModal);
  return (
    <div className={OpenModal ? styles.modalVisible : styles.modal}>
      <div className={styles.ModalMainDiv}>
        <MdOutlineClose
          onClick={() => HandleModal()}
          size={25}
          className={styles.CloseICon}
        />
        <div>
          <Link to={""}>Credit Card Processing</Link>
          <hr />
          <Link to={"/open-banking-service"}>Open Banking Service</Link>
          <hr />
          <Link to={"/crypto-payment-proccessing"}>
            Crypto payment processing
          </Link>
        </div>
      </div>
    </div>
  );
};
