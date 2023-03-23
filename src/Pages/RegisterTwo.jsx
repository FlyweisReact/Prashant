import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterImg } from "../Components/Register/RegisterImg";
import styles from "../Styles/RegisterTwo.module.css";
export const RegisterTwo = () => {
  const navigate = useNavigate();
  const Handleregister = () => {
    navigate("/verify-otp");
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
              <div className={styles.verticalLine}></div>
              <h1>1</h1>
            </div>
            <p>Company Information</p>
          </div>
          <div className={styles.InputBoxMain}>
            <div>
              <div className={styles.InputBox}>
                <span>Registration Number</span>
                <input type="text" />
              </div>
              <div className={styles.textArea}>
                <span>Address</span>
                <textarea type="text" />
              </div>
            </div>
          </div>
          <div className={styles.RegisterTitle}>
            <div>
              <h1>2</h1>
            </div>
            <p>Director Section</p>
          </div>
          <div className={styles.InputBoxMain}>
            <div>
              <div className={styles.InputBox}>
                <span>Passport No./ National ID</span>
                <input type="text" />
              </div>
              <p>Business Banking Details</p>
              <div className={styles.InputBox}>
                <span>Account Number</span>
                <input type="number" />
              </div>

              <div className={styles.InputBox}>
                <span> Swift Code</span>
                <input type="number" />
              </div>
              <div className={styles.textArea}>
                <span>Bank Address</span>
                <textarea type="text" />
              </div>
              <div className={styles.InputBox}>
                <span>Recipient Name</span>
                <input type="number" />
              </div>
            </div>
          </div>
          <div className={styles.checkBox}>
            <input type="checkbox" />
            <p>
              By Clicking here your agree with our{" "}
              <Link to={"/"}>
                Terms &<br />
                Condition
              </Link>
              &nbsp; and also <Link to={"/"}> Privacy Policy</Link>
            </p>
          </div>
          <button onClick={Handleregister}>Verify</button>
        </div>
        <RegisterImg />
      </div>
    </div>
  );
};
