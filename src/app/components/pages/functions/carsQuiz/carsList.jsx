import s from "../../../../stylesModule/function.module.css";
import React, { useState, useEffect } from "react";
import api from "../../../../api";
import Loading from "../../../common/loading/loading";

const CarsList = ({ сhooseСar }) => {
  const [loading, setLoading] = useState(true);
  const [carList, setCarList] = useState();

  useEffect(() => {
    api.cars.fetchAll().then((data) => setCarList(data));
  }, []);

  useEffect(() => {
    carList && setLoading(false);
  }, [carList]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className={s.title}>Какую машину хотите?</h1>
          <ul className={s.carsList}>
            {carList.map((carItem) => (
              <button
                key={carItem.name}
                onClick={() => сhooseСar(carItem)}
                className={"btn " + s.btn}
              >
                <img className={s.carImg} src={carItem.img} alt="imgOfCar" />
                <p className={s.carName}>{carItem.name}</p>
              </button>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default CarsList;
