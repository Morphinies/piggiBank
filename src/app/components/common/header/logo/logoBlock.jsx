import s from "./logo.module.css";
import logoImg from "../../header/logo/logo.svg";
import React from "react";

const LogoBlock = ({ logoName, logoTagline }) => {
  return (
    <div className={logoName && logoTagline ? s.logoWithName : s.logo}>
      <img className={s.img} src={logoImg} alt="logo" />
      {logoName && <p className={s.name}>{logoName}</p>}
      {logoTagline && <p className={s.tagline}>{logoTagline}</p>}
    </div>
  );
};

export default LogoBlock;
