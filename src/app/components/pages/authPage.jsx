import React, { useEffect, useState } from "react";
import s from "../../stylesModule/form.module.css";
import { validator } from "../../utils/validator";
import { useNavigate } from "react-router-dom";
import TextField from "../forms/textField";
import PasField from "../forms/pasField";
import api from "../../api";
import Footer from "../common/footer";
import HomeLogo from "../common/homeLogo";
import FormNav from "../common/formNav";

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
      <header className="headerArea">
        <HomeLogo />
        <FormNav page="authPage" />
      </header>

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
            <button
              type="button"
              onClick={handleSubmit}
              className={s.btnForm + " btn " + (!isValid && s.btnDisabled)}
              disabled={!isValid && "disabled"}
            >
              войти
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AuthPage;
