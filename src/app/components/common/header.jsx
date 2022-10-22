import React from "react";
import HomeNav from "./homeNav";
import HomeLogo from "./homeLogo";

const handleExit = () => {
  localStorage.removeItem("userOfPiggiBank");
  window.location.reload();
};

const Header = ({ currentUser }) => {
  return (
    <header className="headerArea">
      <HomeLogo
        logoName="Piggi Bank"
        logoTagline="- я покажу куда пропадают твои деньги"
      />
      <HomeNav currentUser={currentUser} handleExit={handleExit} />
    </header>
  );
};

export default Header;
