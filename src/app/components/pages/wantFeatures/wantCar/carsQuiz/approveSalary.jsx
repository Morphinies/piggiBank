import s from "../../wantFeatures.module.css";
import React, { useEffect, useState } from "react";
import { validator } from "../../../../../utils/validator";
import InputField from "../../../../common/inputFields/InputField";

const ApproveSalary = ({ choosedPerсent, approveSalary }) => {
  const [data, setData] = useState({
    salary: "",
  });

  const regExp = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleChange = ({ target }) => {
    target.value.split(" ").join("") >= 0 &&
      setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  // validation
  const [errors, setErrors] = useState({});

  useEffect(() => {
    function validate() {
      const validatorConfig = {
        salary: {
          isRequired: {
            message: "Поле обязательно для заполнения",
          },
        },
      };

      setErrors(validator(data, validatorConfig));
    }
    validate();
  }, [data]);

  const isValid = Object.keys(errors).length === 0;

  return (
    <>
      <h1 className={s.popUpTitle}>
        {choosedPerсent === 20 && "Тише едешь, дальше будешь!"}
        {choosedPerсent === 40 && "Результат не заставит себя долго ждать!"}
        {choosedPerсent === 60 && "Быстро, но придётся подзатянуть пояса!"}
        {choosedPerсent === 100 && "Кое-кто готов не есть ради машины?!"}
      </h1>
      <div className={s.adviceBlock}>
        <p className={s.advice}>
          Кто-то скажет, что класть деньги "под подушку" не рационально, нужно
          вкладывать их в банк под процент и отчасти будет прав. Но если вы не
          разбираетесь в инвестициях и не хотите рисковать, а хотите просто
          заполучить свою желанную "хотелку", то вариант воспользоваться
          "свинкой-копилкой" не так уж и плох!
        </p>
      </div>
      <h2 className={s.popUpQuestion}>Итак, что по З/П?</h2>
      <form className={s.salaryForm}>
        <InputField
          handleChange={handleChange}
          name="salary"
          label="руб./мес."
          type="text"
          value={regExp(data.salary.split(" ").join(""))}
          error={errors.salary}
        />
        <button
          type="button"
          onClick={() => approveSalary(data.salary.split(" ").join(""))}
          className={"btn " + (!isValid && "btnDisabled")}
          disabled={!isValid && "disabled"}
        >
          подтвердить
        </button>
      </form>
    </>
  );
};

export default ApproveSalary;
