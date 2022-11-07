import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./style/style.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Expenses from "./app/components/personal/features/expenses";
import Income from "./app/components/personal/features/income";
import RegPage from "./app/components/pages/input/regPage";
import AuthPage from "./app/components/pages/input/authPage";
import UserPage from "./app/components/pages/userPage/userPage";
import WantCar from "./app/components/pages/wantFeatures/wantCar/wantCar";
import WantPension from "./app/components/pages/wantFeatures/wantPension/wantPension";
import WantHome from "./app/components/pages/wantFeatures/wantHome/wantHome";
import WantTravel from "./app/components/pages/wantFeatures/wantTravel/wantTravel";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="wantPension" element={<WantPension />} />
        <Route path="wantMachine" element={<WantCar />} />
        <Route path="wantTravel" element={<WantTravel />} />
        <Route path="wantHome" element={<WantHome />} />
        <Route path="authPage" element={<AuthPage />} />
        <Route path="regPage" element={<RegPage />} />
        <Route path="userPage/expenses" element={<Expenses />} />
        <Route path="userPage/income" element={<Income />} />
        <Route path="userPage" element={<UserPage />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
