import React from "react";
import s from "../../stylesModule/logo.module.css";
import logoImg from "../../../img/logo.svg";

const HomeLogo = ({ logoName, logoTagline }) => {
  return (
    <div className={s.container}>
      <img className={s.img} src={logoImg} alt="logo" />
      <p className={s.name}>{logoName}</p>
      <p className={s.tagline}>{logoTagline}</p>
    </div>
  );
};

export default HomeLogo;
