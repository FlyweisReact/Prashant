import React from "react";
import styles from "../Styles/TotalAmountSection.module.css";
export const TotalAmountSection = () => {
  return (
    <div className={styles.MainDiv}>
      <h1>Total Processed Amount:</h1>
      <div className={styles.TotalBudgetDiv}>
        <h1>&#x20b9;</h1>
        <h1>10000</h1>
      </div>
      <h1>Last Settlement Date & Amount</h1>
      <div className={styles.DateSection}>
        <div>
          <p>DD/MM/YYYY</p>
          <h2>&#x20b9;{20000}</h2>
        </div>
      </div>
    </div>
  );
};
