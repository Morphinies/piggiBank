import React, { useEffect, useState } from "react";
import s from "../../stylesModule/form.module.css";
import { validator } from "../../utils/validator";
import { useNavigate } from "react-router-dom";
import TextField from "../forms/textField";
import PasField from "../forms/pasField";
import api from "../../api";
import Footer from "../common/footer";
import logo from "../../../img/logo.svg";

const AuthPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

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

  useEffect(() => {
    function validate() {
      const errors = validator(data, validatorConfig);
      setErrors(errors);
      return Object.keys(errors).length === 0;
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
    <>
      <div className={"header contWidth " + s.formHeader}>
        <img className="logoSvg" src={logo} />
        <nav className={"headBtns " + s.formBtns}>
          <button onClick={() => navigate("/")} className="btn headBtn">
            на главную
          </button>
          <button onClick={() => navigate("/regPage")} className="btn headBtn">
            зарегистрироваться
          </button>
        </nav>
      </div>

      <div className={s.main}>
        <div className={s.formContainer}>
          <div className={s.titleContainer}>
            <h1 className={s.title}>Вход</h1>
          </div>
          <form>
            <TextField
              handleChange={handleChange}
              name="email"
              label="Эл. почта"
              error={errors.email}
            />
            <PasField
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
    </>
  );
};

export default AuthPage;
