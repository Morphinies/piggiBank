import s from "./input.module.css";
import React from "react";

const Submit = ({ name, isValid, handleSubmit }) => {
  return (
    <button
      type="button"
      onClick={handleSubmit}
      className={s.submit + " btn " + (!isValid && s.btnDisabled)}
      disabled={!isValid && "disabled"}
    >
      {name}
    </button>
  );
};

export default Submit;
