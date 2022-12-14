import s from "../../../stylesModule/function.module.css";
import ApprovedCar from "./carsQuiz/approvedCar";
import PopUpWindow from "./carsQuiz/popUpWindow";
import ChoosedCar from "./carsQuiz/choosedCar";
import CarsList from "./carsQuiz/carsList";
import Footer from "../../common/footer";
import Header from "../../common/header";
import React, { useState } from "react";

const MachineFunc = () => {
  const [currentBlock, setCurrentBlock] = useState("cars");
  const [choosedPerсent, setChoosedPerсent] = useState("");
  const [carApproved, setCarApproved] = useState(false);
  const [car, setCar] = useState({});

  const сhooseСar = (car) => {
    setCar({ name: car.name, price: car.price, img: car.img });
    setCurrentBlock("car");
  };

  const changeCar = () => {
    setCurrentBlock("cars");
    setChoosedPerсent("");
    setCarApproved(false);
    setCar({});
  };

  const approveCar = () => {
    setCarApproved(true);
  };

  const choosePerсent = (percent) => {
    setChoosedPerсent(percent);
  };

  const closeWindow = () => {
    setChoosedPerсent("");
  };

  return (
    <>
      <div className={"wrapper " + (choosedPerсent && s.blur)}>
        <Header page={"machineFunc"} />

        <main className="content">
          {/*выбор машины */}
          {currentBlock === "cars" && <CarsList сhooseСar={сhooseСar} />}

          {/*машина выбрана, но не утверждена */}
          {currentBlock === "car" && !carApproved && (
            <ChoosedCar
              changeCar={changeCar}
              approveCar={approveCar}
              car={car}
            />
          )}

          {/*машина выбрана и утверждена */}
          {currentBlock === "car" && carApproved && (
            <ApprovedCar
              car={car}
              changeCar={changeCar}
              choosePerсent={choosePerсent}
            />
          )}
        </main>

        <Footer />
      </div>

      {choosedPerсent && (
        <PopUpWindow
          closeWindow={closeWindow}
          car={car}
          choosedPerсent={choosedPerсent}
        />
      )}
    </>
  );
};

export default MachineFunc;
