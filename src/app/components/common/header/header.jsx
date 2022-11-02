import UserPageNav from "./navigation/userPageNav";
import { useLocation } from "react-router-dom";
import HomeNav from "./navigation/homeNav";
import FormNav from "./navigation/formNav";
import FuncNav from "./navigation/funcNav";
import LogoBlock from "./logo/logoBlock";
import s from "./header.module.css";
import React from "react";

const Header = ({ currentUser, logoName, logoTagline }) => {
  const location = useLocation().pathname;
  return (
    <header className={s.header}>
      <LogoBlock logoName={logoName} logoTagline={logoTagline} />
      {location === "/" && <HomeNav currentUser={currentUser} />}
      {location === "/authPage" && <FormNav page={location} />}
      {location === "/regPage" && <FormNav page={location} />}
      {location.slice(0, 5) === "/want" && <FuncNav />}
      {location === "/userPage" && <UserPageNav />}
    </header>
  );
};

export default Header;
