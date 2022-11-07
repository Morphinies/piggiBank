import s from "../../wantFeatures.module.css";
import React from "react";

const Result = ({ percent, salary, back, calculations }) => {
  const regExp = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <>
      <h1 className={s.resHead}>
        Итак, у вас есть возможность откладывать по {percent}% ежемесячно от
        зарплаты в <span className={"redSpan"}>{regExp(salary)}</span> р./мес.
        верно?
      </h1>
      <nav className={s.quizNav}>
        <button onClick={back} className="btn">
          Назад
        </button>
        <button onClick={calculations} className="btn">
          Верно
        </button>
      </nav>
    </>
  );
};

export default Result;
