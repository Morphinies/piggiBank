import React from "react";
import s from "./nav.module.css";
import { Link } from "react-router-dom";

const FormNav = ({ page }) => {
  return (
    <nav className={s.nav}>
      {page === "/regPage" ? (
        <Link to="/authPage" className="btn">
          войти
        </Link>
      ) : (
        <Link to="/regPage" className="btn">
          зарегистрироваться
        </Link>
      )}

      <Link to="/" className="btn">
        на главную
      </Link>
    </nav>
  );
};

export default FormNav;
