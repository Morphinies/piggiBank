import React from "react";
import s from "../../stylesModule/form.module.css";

const PasField = ({ handleChange, label, name, error }) => {
  return (
    <div className={s.inputWrapper}>
      <div className={s.inputContainer}>
        <label className={s.label}>{label}</label>
        <input
          autoComplete=""
          className={s.input}
          type="password"
          name={name}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className={s.errorContainer}>
        {error && <p className={s.errorMessage}>{error}*</p>}
      </div>
    </div>
  );
};

export default PasField;
