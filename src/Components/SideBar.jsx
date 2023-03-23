import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import styles from "../Styles/SideBar.module.css";
export const SideBar = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.SideBarMain}>
      <h1>Welcome Back</h1>
      <div>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=ImgDet&rs=1"
            alt="img"
          />
          <h1>Pooja Sharma</h1>
          <p>ID:#202031232</p>
          <div className={styles.TotalBudgetDiv}>
            <h1>&#x20b9;</h1>
            <h1>10000</h1>
          </div>
          <p>Monthly Budget</p>
        </div>
      </div>
      <div className={styles.LinkBox}>
        <Link to={"/dashboard"}>
          <div
            className={
              pathname === "/dashboard" ? styles.active : styles.unactive
            }
          >
            <AiFillHome size={25} />
            <p>Dashboard</p>
          </div>
        </Link>
        <Link to={"/rolling-reserve"}>
          <div
            className={
              pathname === "/rolling-reserve" ? styles.active : styles.unactive
            }
          >
            <p>Rolling Reserve</p>
          </div>
        </Link>
        <Link to={"/mature-fund"}>
          <div
            className={
              pathname === "/mature-fund" ? styles.active : styles.unactive
            }
          >
            <p>Mature Funds</p>
          </div>
        </Link>
        <Link to={"/refund-request"}>
          <div
            className={
              pathname === "/refund-request" ? styles.active : styles.unactive
            }
          >
            <p>Refund Request</p>
          </div>
        </Link>
        <Link to={"/current-charge"}>
          <div
            className={
              pathname === "/current-charge" ? styles.active : styles.unactive
            }
          >
            <p>Current Charge Back</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
