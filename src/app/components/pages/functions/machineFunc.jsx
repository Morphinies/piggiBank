import React, { useState } from "react";
import s from "../../../stylesModule/function.module.css";
import logo from "../../../../img/logo.svg";
import { useNavigate } from "react-router-dom";
import Footer from "../../common/footer";
import imgObject from "../../../../img/cars/exportImg";

const MachineFunc = () => {
  const navigate = useNavigate();
  const [currentBlock, setCurrentBlock] = useState("cars");
  const [car, setCar] = useState({});
  const [calculations, setCalculations] = useState(false);

  const carList = [
    { name: "Priora", price: 250000 },
    { name: "Vesta", price: 250000 },
    { name: "Logan", price: 250000 },
    { name: "Solaris", price: 250000 },
    { name: "Octavia", price: 250000 },
    { name: "Arteon", price: 250000 },
    { name: "X5", price: 250000 },
    { name: "Camry", price: 250000 },
    { name: "S450", price: 250000 },
    { name: "Model S", price: 250000 },
    { name: "Taycan", price: 250000 },
    { name: "H1", price: 250000 },
    { name: "A7", price: 250000 },
    { name: "Yukon Denali", price: 250000 },
    { name: "Escalade", price: 250000 },
  ];

  const сhooseСar = (car) => {
    setCar({ name: car.name, price: car.price });
    setCurrentBlock("car");
  };

  const handleConfirmSelection = () => {
    setCalculations(true);
  };

  return (
    <>
      <header className={"header contWidth"}>
        <img className="logoSvg" src={logo} alt="logo" />
        <nav className={"headBtns " + s.funcBtns}>
          <button onClick={() => navigate("/")} className="btn headBtn">
            на главную
          </button>
        </nav>
      </header>
      <main className={"contWidth " + s.main}>
        {currentBlock === "cars" ? (
          <>
            <h1 className={s.title}>Какую машину хотите?</h1>
            <ul className={s.funcList}>
              {carList.map((carItem) => (
                <button
                  key={carItem.name}
                  onClick={() => сhooseСar(carItem)}
                  className={"btn " + s.funcItemContainer}
                >
                  <img
                    className={s.funcImg}
                    src={imgObject[carItem.name]}
                    alt="imgOfCar"
                  />
                  <p className={s.funcItemName}>{carItem.name}</p>
                </button>
              ))}
            </ul>
          </>
        ) : !calculations ? (
          <>
            <nav className={s.navForCar}>
              <button onClick={() => navigate(0)} className="btn headBtn">
                изменить выбор
              </button>
            </nav>
            <img
              className={s.funcImg + " " + s.choosedImg}
              src={imgObject[car.name]}
              alt="imgOfCar"
            />
            <h1 className={s.title}>{car.name}</h1>
            <button
              onClick={handleConfirmSelection}
              className={"btn " + s.funcBtn}
            >
              То, что нужно!
            </button>
          </>
        ) : (
          <>
            <nav className={s.navForCar}>
              <button onClick={() => navigate(0)} className="btn headBtn">
                назад
              </button>
            </nav>
            <h1 className={s.title}>{car.name}</h1>
            <div className={s.calcDiv}>
              <p className={s.calcText}>
                Средняя стоимость машины:{" "}
                <span className={s.span}>{car.price}</span>р.
              </p>
              <p className={s.calcQuestion}>
                Выберите, какой частью вашего заработка вы готовы жертвовать
                ради покупки машины?
              </p>
              <ul className={s.calcBtnList}>
                <li>
                  <button className={"btn " + s.calcBtn}>20%</button>
                </li>
                <li>
                  <button className={"btn " + s.calcBtn}>50%</button>
                </li>
                <li>
                  <button className={"btn " + s.calcBtn}>70%</button>
                </li>
              </ul>

              <button className={"btn " + s.calcBtn + " " + s.calcBtnSpecial}>
                100%
              </button>
            </div>
          </>
        )}
      </main>

      <Footer />
    </>
  );
};

export default MachineFunc;
