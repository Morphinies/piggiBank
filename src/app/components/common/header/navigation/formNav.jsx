import React from "react";
import { Link } from "react-router-dom";

const FormNav = ({ page }) => {
  return (
    <nav className="nav">
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
