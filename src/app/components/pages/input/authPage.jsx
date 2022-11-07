import { validator } from "../../../utils/validator";
import React, { useEffect, useState } from "react";
import Header from "../../common/header/header";
import Footer from "../../common/footer/footer";
import { useNavigate } from "react-router-dom";
import Submit from "../../common/inputFields/submit";
import s from "./form.module.css";
import api from "../../../api";
import InputField from "../../common/inputFields/InputField";

const AuthPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const validatorConfig = {
      email: {
        isRequired: {
          message: "Поле обязательно для заполнения",
        },
        isEmail: {
          message: "Email введён некорректно",
        },
      },
      password: {
        isRequired: {
          message: "Поле обязательно для заполнения",
        },
      },
    };

    function validate() {
      const errors = validator(data, validatorConfig);
      setErrors(errors);
    }
    validate();
  }, [data]);

  const isValid = Object.keys(errors).length === 0;

  // end of validation

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = () => {
    const email = data.email;
    const password = data.password;
    isValid &&
      api.users
        .checkAuthData({ email, password })
        .then(() => {
          setTimeout(navigate("/"), 1000);
          alert("Авторизация прошла успешно!");
        })
        .catch((reason) => alert(reason));
  };

  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <form className={s.form}>
          <h1 className={s.title}>Вход</h1>
          <InputField
            type="text"
            handleChange={handleChange}
            name="email"
            label="Эл. почта"
            error={errors.email}
          />
          <InputField
            type="password"
            handleChange={handleChange}
            label="Пароль"
            name="password"
            error={errors.password}
          />
          <Submit name="Войти" isValid={isValid} handleSubmit={handleSubmit} />
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default AuthPage;
