import React from "react";
import { Link } from "react-router-dom";

const UserPageNav = () => {
  return (
    <nav className="nav oneBtn">
      <Link to="/" className={"btn navBtn"}>
        на главную
      </Link>
    </nav>
  );
};

export default UserPageNav;
