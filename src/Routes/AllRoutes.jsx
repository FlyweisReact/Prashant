import React from "react";
import { Route, Routes } from "react-router-dom";
import { CryptoPayment } from "../Pages/CryptoPayment";
import { CurrentCharge } from "../Pages/CurrentCharge";
import { Dashboard } from "../Pages/Dashboard";
import { Login } from "../Pages/Login";
import { MatureFund } from "../Pages/MatureFund";
import { OpenBanking } from "../Pages/OpenBanking";
import { OtpPage } from "../Pages/OtpPage";
import { Profile } from "../Pages/Profile";
import { RefundRequest } from "../Pages/RefundRequest";
import { Register } from "../Pages/Register";
import { RegisterTwo } from "../Pages/RegisterTwo";
import { RollingReserve } from "../Pages/RollingReserve";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/verify-otp" element={<OtpPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/detail-register" element={<RegisterTwo />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/rolling-reserve" element={<RollingReserve />} />
      <Route path="/mature-fund" element={<MatureFund />} />
      <Route path="/refund-request" element={<RefundRequest />} />
      <Route path="/current-charge" element={<CurrentCharge />} />
      <Route path="open-banking-service" element={<OpenBanking />} />
      <Route path="/crypto-payment-proccessing" element={<CryptoPayment />} />
    </Routes>
  );
};
