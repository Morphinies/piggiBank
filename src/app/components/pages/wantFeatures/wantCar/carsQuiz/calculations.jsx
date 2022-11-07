import s from "../../wantFeatures.module.css";
import React from "react";
import { Link } from "react-router-dom";

const Calculations = ({ percent, salary, car }) => {
  const regExp = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const totalDays = Math.floor(car.price / ((salary / 30) * (percent / 100)));
  const yearsToAim = Math.floor(totalDays / 365);
  const daysToAim = totalDays - yearsToAim * 365;
  const lastNumberDays = Number(daysToAim.toString().split("").pop());
  const lastNumberYears = Number(yearsToAim.toString().split("").pop());

  const days = () => {
    if (lastNumberDays === 0 || (lastNumberDays >= 5 && lastNumberDays <= 9)) {
      return "дней";
    } else if (totalDays !== 11 && lastNumberDays === 1) {
      return "день";
    } else if (
      (totalDays < 12 || totalDays > 14) &&
      2 <= lastNumberDays &&
      lastNumberDays <= 4
    ) {
      return "дня";
    } else return "дней";
  };
  const years = () => {
    if (
      lastNumberYears === 0 ||
      (lastNumberYears >= 5 && lastNumberYears <= 9)
    ) {
      return "лет";
    } else if (totalDays !== 11 && lastNumberYears === 1) {
      return "год";
    } else if (
      (totalDays < 12 || totalDays > 14) &&
      2 <= lastNumberYears &&
      lastNumberYears <= 4
    ) {
      return "года";
    } else return "лет";
  };

  return (
    <>
      <div className={s.miniCart}>
        <img className={s.miniCarImg} src={car.img} alt="car" />
        <div className={s.miniCarInfo}>
          <h2>Машина: {car.name}</h2>

          <h4>Год выпуска: {car.year} г.</h4>
          <h4>
            Примерная цена: <span className="redSpan">{regExp(car.price)}</span>{" "}
            р.
          </h4>
          <h2 className={s.resText}>
            При З/П в <span className="redSpan">{regExp(salary)}</span>р. и
            возможности откладывать по {percent}% ежемесячно, цель будет
            достигнута через:
            <br />
            <span className="redSpan">
              {totalDays >= 365 &&
                yearsToAim +
                  " " +
                  regExp(years()) +
                  " " +
                  daysToAim +
                  " " +
                  regExp(days())}

              {totalDays <= 365 && regExp(totalDays) + " " + days()}
            </span>
          </h2>
        </div>
      </div>
      <nav className={s.quizNav}>
        <Link className="btn" to={"/"}>
          Всё понятно, пойду копить
        </Link>
      </nav>
    </>
  );
};

export default Calculations;
