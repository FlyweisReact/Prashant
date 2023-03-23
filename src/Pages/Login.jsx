import React from "react";
import { LoginFirstSection } from "../Components/Login/LoginFirstSection";
import { LoginMainSection } from "../Components/Login/LoginMainSection";
import styles from "../Styles/Login.module.css";
export const Login = () => {
  return (
    <div className={styles.MainDiv}>
      <LoginFirstSection />
      <LoginMainSection />
    </div>
  );
};
