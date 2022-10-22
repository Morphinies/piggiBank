import React from "react";
import { Link } from "react-router-dom";
import s from "../../stylesModule/functions.module.css";

const Functions = ({ functionsList }) => {
  return (
    <ul className={s.functionsList}>
      {functionsList.map((funcItem) => {
        return (
          <Link
            to={funcItem.value}
            key={funcItem.value}
            role="button"
            className={"btn " + s.funcLink}
          >
            <p className={s.funcName}>{funcItem.name}</p>
            <img className={s.funcImg} src={funcItem.img} alt={funcItem.img} />
          </Link>
        );
      })}
    </ul>
  );
};

export default Functions;
