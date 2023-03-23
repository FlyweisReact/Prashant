import React from "react";
import { LoginFirstSection } from "../Components/Login/LoginFirstSection";
import { OtpMainSection } from "../Components/OTP/OtpMainSection";
import styles from "../Styles/Login.module.css";
export const OtpPage = () => {
  return (
    <div className={styles.MainDiv}>
      <LoginFirstSection />
      <OtpMainSection />
    </div>
  );
};
