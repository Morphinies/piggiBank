import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./style/style.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Expenses from "./app/components/features/expenses";
import UserPage from "./app/components/pages/userPage";
import AuthPage from "./app/components/pages/authPage";
import Income from "./app/components/features/income";
import RegPage from "./app/components/pages/regPage";
import PensionFunc from "./app/components/pages/functions/pensionFunc";
import TravelFunc from "./app/components/pages/functions/travelFunc";
import HomeFunc from "./app/components/pages/functions/homeFunc";
import MachineFunc from "./app/components/pages/functions/machineFunc";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="wantPension" element={<PensionFunc />} />
        <Route path="wantMachine" element={<MachineFunc />} />
        <Route path="wantTravel" element={<TravelFunc />} />
        <Route path="wantHome" element={<HomeFunc />} />
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
