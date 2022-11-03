import React from "react";
import s from "./nav.module.css";
import { Link } from "react-router-dom";

const UserPageNav = () => {
  return (
    <nav className={s.nav + " oneBtn"}>
      <Link to="/" className="btn">
        на главную
      </Link>
    </nav>
  );
};

export default UserPageNav;
