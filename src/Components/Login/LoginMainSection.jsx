import React from "react";
import styles from "../../Styles/Login.module.css";
import { IoMdMail } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
export const LoginMainSection = () => {
  const navigate = useNavigate();
  const HandleLogin = () => {
    navigate("/verify-otp");
  };
  return (
    <div className={styles.LoginMainSection}>
      <div>
        <h1>Welcome to lorem Lorem </h1>
        <p>Please Log In</p>
        <div>
          <label>Email ID</label>
          <div className={styles.InputBox}>
            <IoMdMail size={25} color="#003466" />
            <input type="email" placeholder="xyz@gmail.com" />
            <AiOutlineCloseCircle size={25} style={{ cursor: "pointer" }} />
          </div>
          <button onClick={HandleLogin}>Continue</button>
          <p>Or</p>
          <div
            onClick={() => navigate("/dashboard")}
            className={styles.GoogleBtn}
          >
            <FcGoogle size={25} />
            <p>Login With Google</p>
          </div>
          <p>
            Didn't have account? <Link to={"/register"}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
