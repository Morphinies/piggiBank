import React from "react";
import s from "../../../stylesModule/function.module.css";
import logo from "../../../../img/logo.svg";
import { useNavigate } from "react-router-dom";

const TravelFunc = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className={"header contWidth"}>
        <img className="logoSvg" src={logo} alt="logo" />
        <nav className={"headBtns " + s.funcBtns}>
          <button onClick={() => navigate("/")} className="btn headBtn">
            на главную
          </button>
        </nav>
      </header>
      <main className={s.main}>
        <h1>Куда полетим?</h1>
      </main>
    </>
  );
};

export default TravelFunc;
