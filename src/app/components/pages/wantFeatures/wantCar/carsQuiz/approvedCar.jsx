import s from "../../wantFeatures.module.css";
import React from "react";

const ApprovedCar = ({ car, changeCar, choosePerсent }) => {
  const regExp = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <>
      <h1 className={s.title}>{car.name}</h1>
      <div className={s.calcBlock}>
        <p className={s.calcText}>
          Средняя стоимость машины:
          <span className="redSpan"> {regExp(car.price)}</span> р.
        </p>
        <p className={s.calcQuestion}>
          Выберите, какой частью вашего заработка вы готовы жертвовать ради
          покупки машины?
        </p>
        <ul className={s.calcBtns}>
          {[20, 40, 60, 100].map((item) => (
            <li
              key={item}
              onClick={() => choosePerсent(item)}
              role="button"
              className={"btn " + s.calcBtn}
            >
              {item}%
            </li>
          ))}
        </ul>
      </div>
      <nav className={s.navForCar}>
        <button onClick={() => changeCar()} className="btn headBtn">
          изменить выбор
        </button>
      </nav>
    </>
  );
};

export default ApprovedCar;
