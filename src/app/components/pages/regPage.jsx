import React, { useEffect, useState } from "react";
import s from "../../stylesModule/form.module.css";
import { validator } from "../../utils/validator";
import { useNavigate } from "react-router-dom";
import TextField from "../forms/textField";
import PasField from "../forms/pasField";
import api from "../../api";
import Footer from "../common/footer";
import logo from "../../../img/logo.svg";

const RegPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    id: "",
  });

  // validation
  const [errors, setErrors] = useState({});
  const validatorConfig = {
    name: {
      isRequired: {
        message: "Поле обязательно для заполнения",
      },
    },
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
      min: {
        message: "Поле должно содержать минимум 6 символов",
        value: 6,
      },
      isCapitalSymbol: {
        message: "Поле должно содержать минимум 1 заглавную букву",
      },
      isDigit: {
        message: "Поле должно содержать минимум 1 цифру",
      },
    },
    repeatPassword: {
      isRequired: {
        message: "Поле обязательно для заполнения",
      },
      equalsToPassword: {
        message: "Повторный пароль не соответствует вышеуказанному",
        pasValue: data.password,
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

  // end of validation

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = () => {
    const userData = { ...data, id: `id_${data.email}` };
    isValid &&
      api.users
        .addUser({
          userData,
        })
        .then(() => {
          localStorage.setItem("userOfPiggiBank", JSON.stringify(userData));
          setTimeout(navigate("/"), 1000);
          alert("Регистрация прошла успешно!");
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
          <button onClick={() => navigate("/authPage")} className="btn headBtn">
            войти
          </button>
        </nav>
      </div>

      <div className={s.main}>
        <div className={s.formContainer}>
          <div className={s.titleContainer}>
            <h1 className={s.title}>Регистрация</h1>
          </div>
          <form>
            <TextField
              handleChange={handleChange}
              name="name"
              label="Имя"
              error={errors.name}
            />
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
            <PasField
              handleChange={handleChange}
              label="Повторите пароль"
              name="repeatPassword"
              error={errors.repeatPassword}
            />
            <button
              type="button"
              onClick={handleSubmit}
              className={s.btnForm + " btn " + (!isValid && s.btnDisabled)}
              disabled={!isValid && "disabled"}
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RegPage;
