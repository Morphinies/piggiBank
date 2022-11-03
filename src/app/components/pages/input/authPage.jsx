import TextField from "../../common/forms/textField";
import { validator } from "../../../utils/validator";
import PasField from "../../common/forms/pasField";
import React, { useEffect, useState } from "react";
import Header from "../../common/header/header";
import Footer from "../../common/footer/footer";
import { useNavigate } from "react-router-dom";
import Submit from "../../common/forms/submit";
import s from "./input.module.css";
import api from "../../../api";

const AuthPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    config: {},
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

      <div className="content">
        <div className={s.formContainer}>
          <div className={s.titleContainer}>
            <h1 className={s.title}>Вход</h1>
          </div>
          <form>
            <TextField
              type="text"
              handleChange={handleChange}
              name="email"
              label="Эл. почта"
              error={errors.email}
            />
            <PasField
              type="text"
              handleChange={handleChange}
              label="Пароль"
              name="password"
              error={errors.password}
            />
            <Submit
              name="Войти"
              isValid={isValid}
              handleSubmit={handleSubmit}
            />
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AuthPage;
