import React, { useState } from "react";
import styles from "../../Styles/Login.module.css";
import { FcGoogle } from "react-icons/fc";
import OTPInput, { ResendOTP } from "otp-input-react";
import { Link, useNavigate } from "react-router-dom";
export const OtpMainSection = () => {
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();
  const HandleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <div className={styles.LoginMainSection}>
      <div>
        <h1>Welcome to lorem Lorem </h1>
        <p>OTP</p>
        <h2 className={styles.HelpText}>
          Please enter OTP send it to your registered Email Id
        </h2>
        <div className={styles.OtpInputDiv}>
          <div>
            <OTPInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={6}
              otpType="number"
              disabled={false}
              secure
            />
            <div className={styles.ResendOTP}>
              <ResendOTP onResendClick={() => console.log("Resend clicked")} />
            </div>
          </div>

          <button onClick={HandleLogin}>Log In</button>
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
