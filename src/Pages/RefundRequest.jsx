import React, { useState } from "react";
import { AiFillCaretDown, AiOutlineCaretDown } from "react-icons/ai";
import { UserInfoPopUp } from "../Components/Dashboard/UserInfoPopUp";
import { SideBar } from "../Components/SideBar";
import { TotalAmountSection } from "../Components/TotalAmountSection";
import styles from "../Styles/RefundRequest.module.css";
import { TbFilter } from "react-icons/tb";
import { BsFilterLeft } from "react-icons/bs";
import { CiExport, CiImport } from "react-icons/ci";
import { CardProccessingModal } from "../Components/CardProccessingModal";
import { Link } from "react-router-dom";
export const RefundRequest = () => {
  const [cardModal, setCardMoadal] = useState(false);

  const HandleCardProccingModal = () => {
    setCardMoadal(!cardModal);
  };
  const data = [
    {
      marchant_id: "5887",
      marchant_name: "Lorem Lorem",
      card_num: "**** **** **** ****",
      trans_id: "ABC123",
      trans_date: "DD/MM/YY",
      time: "12:30AM",
      amount: 2222,
    },
    {
      marchant_id: "5887",
      marchant_name: "Lorem Lorem",
      card_num: "**** **** **** ****",
      trans_id: "ABC123",
      trans_date: "DD/MM/YY",
      time: "12:30AM",
      amount: 2222,
    },
  ];

  return (
    <div className={styles.Main}>
      <CardProccessingModal
        OpenModal={cardModal}
        HandleModal={HandleCardProccingModal}
      />

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
            <p>Refund Request</p>
          </div>
        </div>
      </div>
      <div className={styles.TableMainSection}>
        <div>
          <div>
            <div className={styles.TableTitle}>
              <h1>Fill details for Refund</h1>
            </div>
            <hr />
            <div className={styles.InputBoxMainDiv}>
              <div>
                <p>Transaction ID</p>
                <div className={styles.InputBox}>
                  <input type="text" placeholder="Enter Transaction ID" />
                  <AiFillCaretDown />
                </div>
              </div>
              <div>
                <p> Merchant ID</p>
                <div className={styles.InputBox}>
                  <input type="text" placeholder="Enter Merchant ID her" />
                  <AiFillCaretDown />
                </div>
              </div>
              <div>
                <p>Merchant Name</p>
                <div className={styles.DisableInputBox}>
                  <p>Lorem Lorem</p>
                </div>
              </div>
            </div>
            <button>Refund Request</button>
          </div>
        </div>
      </div>
      <div className={styles.MainTableDiv}>
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
                  <th>Marchant ID</th>
                  <th>Marchant Name</th>
                  <th>Card Number</th>
                  <th>Transaction ID</th>
                  <th>Transaction Date</th>
                  <th>Time</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {data.map((ele) => (
                  <>
                    <tr>
                      <td>{ele.marchant_id}</td>
                      <td>{ele.marchant_name}</td>
                      <td>{ele.card_num}</td>
                      <td>{ele.trans_id}</td>
                      <td>{ele.trans_date}</td>
                      <td>{ele.time}</td>
                      <td>&#x20b9; {ele.amount}</td>
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
  );
};
