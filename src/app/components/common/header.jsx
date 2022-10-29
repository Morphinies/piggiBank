import React from "react";
import HomeNav from "./homeNav";
import HomeLogo from "./homeLogo";
import FormNav from "./formNav";
import FuncNav from "./funcNav";

const Header = ({ currentUser, logoName, logoTagline, page }) => {
  return (
    <header className="headerArea">
      <HomeLogo logoName={logoName} logoTagline={logoTagline} />
      {page === "main" && <HomeNav currentUser={currentUser} />}
      {page === "authPage" && <FormNav page="regPage" />}
      {page === "regPage" && <FormNav page="authPage" />}
      {page === "machineFunc" && <FuncNav />}
    </header>
  );
};

export default Header;
