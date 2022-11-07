import React from "react";
import s from "./input.module.css";

const InputField = ({ handleChange, name, label, error, type, value }) => {
  return (
    <div className={s.inputContainer}>
      <label className={s.label}>{label}:</label>
      <input
        autoComplete=""
        className={s.input}
        type={type}
        name={name}
        onChange={(e) => handleChange(e)}
        value={value}
      />
      <p className={s.error}>{error && error + "*"}</p>
    </div>
  );
};

export default InputField;
