import React from "react";
import { Link } from "react-router-dom";
import s from "../../stylesModule/homeNav.module.css";

const HomeNav = ({ currentUser, handleExit }) => {
  return (
    <nav className={s.homeNav}>
      {currentUser ? (
        <>
          <Link to="userPage" className={"btn " + s.btn1}>
            личный кабинет
          </Link>
          <button
            onClick={() => handleExit()}
            to="/"
            className={"btn " + s.btn2}
          >
            выход
          </button>
        </>
      ) : (
        <>
          <Link to="regPage" className={"btn headBtn " + s.btn1}>
            зарегистрироваться
          </Link>
          <Link to="authPage" className={"btn headBtn " + s.btn2}>
            войти
          </Link>
        </>
      )}
    </nav>
  );
};

export default HomeNav;
