import React from "react";
import s from "./nav.module.css";
import { Link } from "react-router-dom";

const HomeNav = ({ currentUser }) => {
  const handleExit = () => {
    localStorage.removeItem("userOfPiggiBank");
    window.location.reload();
  };
  return (
    <nav className={s.nav}>
      {currentUser ? (
        <>
          <Link to="userPage" className="btn">
            личный кабинет
          </Link>
          <button onClick={() => handleExit()} to="/" className="btn">
            выход
          </button>
        </>
      ) : (
        <>
          <Link to="regPage" className="btn">
            зарегистрироваться
          </Link>
          <Link to="authPage" className="btn">
            войти
          </Link>
        </>
      )}
    </nav>
  );
};

export default HomeNav;
