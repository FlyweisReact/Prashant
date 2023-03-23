import React, { useState } from "react";
import { AiFillEye, AiOutlineCaretDown } from "react-icons/ai";
import { UserInfoPopUp } from "../Components/Dashboard/UserInfoPopUp";
import { SideBar } from "../Components/SideBar";
import { TotalAmountSection } from "../Components/TotalAmountSection";
import styles from "../Styles/Dashboard.module.css";
import { TbFilter } from "react-icons/tb";
import { BsFilterLeft } from "react-icons/bs";
import { CiExport, CiImport } from "react-icons/ci";
import { RiErrorWarningFill } from "react-icons/ri";
import { CardProccessingModal } from "../Components/CardProccessingModal";
import { PaymentPendingModal } from "../Components/PaymentPendingModal";
import { DeclineModal } from "../Components/DeclineModal";
import { Link } from "react-router-dom";
export const OpenBanking = () => {
  const [cardModal, setCardMoadal] = useState(false);
  const [pendingModal, setPendingModal] = useState(false);
  const [declineModal, setDeclineModal] = useState(false);
  const HandlePending = () => {
    setPendingModal(!pendingModal);
  };
  const HandleDecline = () => {
    setDeclineModal(!declineModal);
  };
  const HandleCardProccingModal = () => {
    setCardMoadal(!cardModal);
  };
  const data = [
    {
      name: "lorem lorem",
      date: "DD/MM/YY",
      time: "12:30AM",
      trans_mode: "Cheque",
      amount: "5000",
      status: "Pending",
    },
    {
      name: "lorem lorem",
      date: "DD/MM/YY",
      time: "12:30AM",
      trans_mode: "UPI",
      amount: "5000",
      status: "Complate",
    },
    {
      name: "lorem lorem",
      date: "DD/MM/YY",
      time: "12:30AM",
      trans_mode: "Credit Card",
      amount: "5000",
      status: "Decline",
    },
  ];

  return (
    <div className={styles.Main}>
      <CardProccessingModal
        OpenModal={cardModal}
        HandleModal={HandleCardProccingModal}
      />
      <PaymentPendingModal
        OpenModal={pendingModal}
        HandleModal={HandlePending}
      />
      <DeclineModal OpenModal={declineModal} HandleModal={HandleDecline} />
      <div className={styles.topDiv}>
        <UserInfoPopUp />
        <SideBar />
        <div className={styles.TotalAmountMainDiv}>
          <div>
            <div className={styles.TotalAmout}>
              <p>Current Service:</p>
              <div>
                <p>Credit card Processing</p>
                <AiOutlineCaretDown
                  size={25}
                  onClick={HandleCardProccingModal}
                  color="white"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <TotalAmountSection />
            <p>Settlement Details</p>
          </div>
        </div>
      </div>
      <div className={styles.TableMainSection}>
        <div>
          <div>
            <div className={styles.TableTitle}>
              <h1>Latest Transactions</h1>
              <div>
                <TbFilter size={35} />
                <BsFilterLeft size={35} />
                <button>
                  <CiImport size={20} />
                  Import
                </button>
                <button>
                  <CiExport size={20} />
                  Export
                </button>
              </div>
            </div>
            <hr />
            <div className={styles.TableDiv}>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Transaction Mode</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Payment Track</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((ele) => (
                    <>
                      <tr>
                        <td>{ele.name}</td>
                        <td>{ele.date}</td>
                        <td>{ele.time}</td>
                        <td>{ele.trans_mode}</td>
                        <td
                          className={
                            ele.status === "Pending"
                              ? styles.pending
                              : ele.status === "Decline"
                              ? styles.decline
                              : styles.complate
                          }
                        >
                          + &#x20b9; {ele.amount}
                        </td>
                        <td
                          className={
                            ele.status === "Pending"
                              ? styles.pending
                              : ele.status === "Decline"
                              ? styles.decline
                              : styles.complate
                          }
                        >
                          {ele.status === "Pending" ? (
                            <>
                              {ele.status}
                              <RiErrorWarningFill />
                            </>
                          ) : (
                            ele.status
                          )}
                        </td>
                        <td>
                          <AiFillEye
                            color="#003466"
                            onClick={
                              ele.status === "Pending"
                                ? HandlePending
                                : ele.status === "Decline"
                                ? HandleDecline
                                : ""
                            }
                            style={{ cursor: "pointer" }}
                          />
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.NextLink}>
              <Link to={"/dashboard"}>Next</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
