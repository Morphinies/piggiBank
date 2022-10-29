import imgObject from "../../../img/cars/exportImg";

const cars = [
  { name: "Priora", price: 250000, img: imgObject.Priora },
  { name: "Vesta", price: 250000, img: imgObject.Vesta },
  { name: "Logan", price: 250000, img: imgObject.Logan },
  { name: "Solaris", price: 250000, img: imgObject.Solaris },
  { name: "Octavia", price: 250000, img: imgObject.Octavia },
  { name: "Arteon", price: 250000, img: imgObject.Arteon },
  { name: "X5", price: 250000, img: imgObject.X5 },
  { name: "Camry", price: 250000, img: imgObject.Camry },
  { name: "S450", price: 250000, img: imgObject.S450 },
  { name: "Model S", price: 250000, img: imgObject["Model S"] },
  { name: "Taycan", price: 250000, img: imgObject.Taycan },
  { name: "H1", price: 250000, img: imgObject.H1 },
  { name: "A7", price: 250000, img: imgObject.A7 },
  { name: "Yukon Denali", price: 250000, img: imgObject["Yukon Denali"] },
  { name: "Escalade", price: 250000, img: imgObject.Escalade },
];

const fetchAll = () =>
  new Promise((resolve) =>
    window.setTimeout(() => {
      resolve(cars);
    }, [2000])
  );

const carsList = { fetchAll };

export default carsList;
