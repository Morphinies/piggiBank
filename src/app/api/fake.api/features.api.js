import imgCar from "../../../img/car.svg";
import imgHouse from "../../../img/house.svg";
import imgTravel from "../../../img/travel.svg";
import imgPension from "../../../img/pension.svg";

const features = [
  { name: "Хочу машину", value: "wantMachine", img: imgCar },
  { name: "Хочу дом", value: "wantHome", img: imgHouse },
  { name: "Хочу в путешествие", value: "wantTravel", img: imgTravel },
  { name: "Хочу на пенсию", value: "wantPension", img: imgPension },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(features);
    }, 1000);
  });

const featuresList = { fetchAll };

export default featuresList;
