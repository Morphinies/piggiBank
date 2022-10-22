import React from "react";
import ServicesBlock from "./servicesBlock";
import Functions from "./functions";
import Blockquote from "./blockquote";
import imgCar from "../../../img/car.svg";
import imgHouse from "../../../img/house.svg";
import imgTravel from "../../../img/travel.svg";
import imgPension from "../../../img/pension.svg";

const Main = () => {
  const servicesList = [
    "Организовать контроль над своими доходами и расходами",
    "Спланировать долгосрочные и краткосрочные накопления",
    "Выяснить, на что уходит большая часть ваших средств",
    "Наглядно, по графикам, рассмотреть передвижение своих денежных средств",
  ];

  const functionsList = [
    { name: "Хочу машину", value: "wantMachine", img: imgCar },
    { name: "Хочу дом", value: "wantHome", img: imgHouse },
    { name: "Хочу в путешествие", value: "wantTravel", img: imgTravel },
    { name: "Хочу на пенсию", value: "wantPension", img: imgPension },
  ];

  return (
    <main className="mainArea">
      <Blockquote
        quote="Уберечь свои деньги стоит больших трудов, чем добыть их."
        author="- Мишель де Монтень"
      />
      <ServicesBlock
        servicesTitle="Сервис учёта доходов/расходов 'Piggi Bank' поможет вам:"
        servicesList={servicesList}
      />
      <Functions functionsList={functionsList} />
    </main>
  );
};

export default Main;
