import React from "react";
import { useNavigate } from "react-router-dom";
import FeatureLink from "../features/featureLink";
import s from "../../stylesModule/userPage.module.css";
import logo from "../../../img/logo.svg";

const UserPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header contWidth">
        <img className={"logoSvg " + s.logo} src={logo} alt="logo" />
        <nav className={"headBtns " + s.regBtns}>
          <button
            onClick={() => navigate("/")}
            className={"btn headBtn " + s.regBtn}
          >
            на главную
          </button>
        </nav>
      </div>
      <h1 className={s.title}>Личный кабинет</h1>

      <div className={"contWidth " + s.capabilities}>
        <FeatureLink name={"Доходы"} link={"income"} />
        <FeatureLink name={"Расходы"} link={"expenses"} />
        <FeatureLink name={"Путь к цели"} link={"income"} />
        <FeatureLink name={"Накопления"} link={"expenses"} />
      </div>
    </>
  );
};

export default UserPage;
