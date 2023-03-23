import React from "react";
import { MdOutlineClose } from "react-icons/md";
import styles from "../Styles/DeclineModal.module.css";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { BsCircleFill } from "react-icons/bs";
export const DeclineModal = ({ OpenModal, HandleModal }) => {
  return (
    <div className={OpenModal ? styles.modalVisible : styles.modal}>
      <div className={styles.ModalMainDiv}>
        <MdOutlineClose
          onClick={() => HandleModal()}
          size={25}
          className={styles.CloseICon}
        />
        <div>
          <h1>Payment Details</h1>
          <hr style={{ height: "4px", background: "white" }} />
          <div className={styles.paymentDetailMainDiv}>
            <div className={styles.PaymentDetails}>
              <div>
                <p>Transaction ID:</p>
                <p>545454545</p>
              </div>
              <div>
                <p>To:</p>
                <p>Loren loren Epsom ( Company Name)</p>
              </div>
              <div>
                <p>From:</p>
                <p>Loren loren Epsom (Merchant Company)</p>
              </div>
              <div>
                <p>Transaction Mode:</p>
                <p>Card</p>
              </div>
            </div>
            <div className={styles.paymentTimeline}>
              <p>Payment Timeline</p>
              <div>
                <div className={styles.VerticalLine}></div>
                <div className={styles.PaymentStatus}>
                  <IoMdCheckmarkCircle
                    size={25}
                    className={styles.Icons}
                    color="green"
                  />
                  <p>Payment Started</p>
                </div>
                <div className={styles.PaymentStatus}>
                  <RiErrorWarningFill
                    size={25}
                    className={styles.Icons}
                    color="red"
                  />
                  <p>Payment Failed To complete</p>
                </div>
                <div className={styles.PaymentStatus}>
                  <BsCircleFill
                    size={25}
                    className={styles.Icons}
                    color="white"
                  />
                  <p>Payment Successful</p>
                </div>
              </div>
              <hr />
              <div className={styles.ReasonsDiv}>
                <p>Reason:</p>
                <p> Account Coded (Credit Rating) </p>
              </div>
              <div className={styles.ReasonsDiv}>
                <p>Code:</p>
                <p> 505 </p>
              </div>
              <div className={styles.ReasonsDiv}>
                <p>Description:</p>
                <p>
                  {" "}
                  The account the customer used for the attempted transaction
                  has a negative credit rating.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
