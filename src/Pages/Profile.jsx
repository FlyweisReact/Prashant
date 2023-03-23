import React, { useState } from "react";
import { AiFillCamera, AiOutlineCaretRight } from "react-icons/ai";
import { MdCircle } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import {
  HiOutlineCurrencyRupee,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";
import styles from "../Styles/Profile.module.css";
import { RiContactsLine } from "react-icons/ri";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
export const Profile = () => {
  const [smsNotificaction, setSmsNotificaction] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={styles.MainDiv}>
      <div className={styles.ProfileImg}>
        <AiFillCamera color="#003466" size={25} className={styles.CamIcon} />
        <img
          src="https://th.bing.com/th/id/OIP.cive38eqp7C2RKVt4xkzbQHaLH?pid=ImgDet&rs=1"
          alt="img"
        />
        <div>
          <h1>Lorem Lorem</h1>
          <p>+91 xxxxxxxxxx</p>
        </div>
        <div>
          <Link>Change</Link>
        </div>
      </div>
      <div className={styles.LanguageSection}>
        <div>
          <p>Language</p>
          <p>SMS Notification</p>
        </div>
        <div>
          <select>
            <option value="">English</option>
            <option value="">Marathi</option>
          </select>
          <div className={styles.SwitchDiv}>
            <MdCircle
              size={25}
              onClick={() => setSmsNotificaction(!smsNotificaction)}
              className={smsNotificaction ? styles.SwitchOn : styles.SwitchOff}
            />
          </div>
        </div>
      </div>
      <div className={styles.HelpMainSection}>
        <div className={styles.HelpDivSection}>
          <div>
            <HiOutlineQuestionMarkCircle color="#003466" size={35} />
            <div>
              <h1>Help & Support</h1>
              <p>Customer Support, Your Queries, FAQ </p>
            </div>
          </div>
          <AiOutlineCaretRight size={25} />
        </div>
        <hr />
        <div className={styles.HelpDivSection}>
          <div>
            <RiContactsLine color="#003466" size={35} />
            <div>
              <h1>Profile Setting</h1>
              <p>Profile, Addresses, Security & Privacy, Notification </p>
            </div>
          </div>
          <AiOutlineCaretRight size={25} />
        </div>
        <hr />
        <div className={styles.HelpDivSection}>
          <div>
            <HiOutlineCurrencyRupee color="#003466" size={35} />
            <div>
              <h1>Payment Setting</h1>
              <p>Change UPI PIN, Linked Bank A/C Subscription & others </p>
            </div>
          </div>
          <AiOutlineCaretRight size={25} />
        </div>
        <hr />
      </div>
      <div className={styles.BackBtnDiv}>
        <div onClick={() => navigate("/dashboard")}>
          <IoMdArrowRoundBack color="#003466" />
          Back
        </div>
        <div onClick={() => navigate("/")}>
          <BiLogOut color="#003466" />
          Log Out
        </div>
      </div>
    </div>
  );
};
