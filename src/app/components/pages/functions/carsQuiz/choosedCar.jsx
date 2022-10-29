import s from "../../../../stylesModule/function.module.css";
import React from "react";

const ChoosedCar = ({ changeCar, approveCar, car }) => {
  return (
    <>
      <h1 className={s.title}>{car.name}</h1>
      <img className={s.choosedСarImg} src={car.img} alt={car.name} />
      <nav className={s.navForCar}>
        <button onClick={() => changeCar()} className="btn">
          изменить выбор
        </button>
        <button onClick={() => approveCar()} className="btn">
          То, что нужно!
        </button>
      </nav>
    </>
  );
};

export default ChoosedCar;
