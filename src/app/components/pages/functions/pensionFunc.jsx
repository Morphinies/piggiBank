import React from "react";
// import s from "../../../stylesModule/function.module.css";
import logo from "../../../../img/logo.svg";
import { useNavigate } from "react-router-dom";

const PensionFunc = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className={"header contWidth"}>
        <img className="logoSvg" src={logo} alt="logo" />
        <nav className={"headBtns"}>
          <button onClick={() => navigate("/")} className="btn headBtn">
            на главную
          </button>
        </nav>
      </header>
    </>
  );
};

export default PensionFunc;
