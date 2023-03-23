import React from "react";
import { useNavigate } from "react-router-dom";
import { RegisterImg } from "../Components/Register/RegisterImg";
import styles from "../Styles/Register.module.css";
export const Register = () => {
  const navigate = useNavigate();
  const Handleregister = () => {
    navigate("/detail-register");
  };
  return (
    <div className={styles.Main}>
      <div className={styles.Logo}>LOGO</div>
      <div className={styles.RegisterMainDiv}>
        <div className={styles.RegisterFirstSection}>
          <p>Register to ABC</p>
          <hr />
          <div className={styles.RegisterTitle}>
            <div>
              <h1>1</h1>
            </div>
            <p>User Information</p>
          </div>
          <div className={styles.InputBoxMain}>
            <div>
              <div className={styles.InputBox}>
                <span>Full Name</span>
                <input type="text" />
              </div>
              <div className={styles.InputBox}>
                <span>Mobile Number</span>
                <input type="number" />
              </div>
              <div className={styles.InputBox}>
                <span>Email ID</span>
                <input type="email" />
              </div>
              <div className={styles.textArea}>
                <span>Address</span>
                <textarea type="text" />
              </div>
              <div className={styles.InputBox}>
                <span>Preferred Language</span>
                <select>
                  <option value="">Eng</option>
                </select>
              </div>
            </div>
          </div>
          <button onClick={Handleregister}>CONTINUE</button>
        </div>
        <RegisterImg />
      </div>
    </div>
  );
};
