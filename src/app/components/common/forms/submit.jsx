import s from "./form.module.css";
import React from "react";

const Submit = ({ name, isValid, handleSubmit }) => {
  return (
    <button
      type="button"
      onClick={handleSubmit}
      className={s.btnForm + " btn " + (!isValid && s.btnDisabled)}
      disabled={!isValid && "disabled"}
    >
      {name}
    </button>
  );
};

export default Submit;
