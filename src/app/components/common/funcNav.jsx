import React from "react";
import { Link } from "react-router-dom";

const FuncNav = () => {
  return (
    <nav className="nav oneBtn">
      <Link to="/" className="btn">
        на главную
      </Link>
    </nav>
  );
};

export default FuncNav;
