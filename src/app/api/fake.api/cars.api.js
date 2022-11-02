import imgObject from "../../../img/cars/exportImg";

const cars = [
  { year: 2012, name: "Priora", price: 300000, img: imgObject.Priora },
  { year: 2018, name: "Vesta", price: 800000, img: imgObject.Vesta },
  { year: 2018, name: "Logan", price: 640000, img: imgObject.Logan },
  { year: 2018, name: "Solaris", price: 1025000, img: imgObject.Solaris },
  { year: 2018, name: "Octavia", price: 1485000, img: imgObject.Octavia },
  { year: 2020, name: "Arteon", price: 3000000, img: imgObject.Arteon },
  { year: 2018, name: "X5", price: 5195000, img: imgObject.X5 },
  { year: 2020, name: "Camry", price: 2800000, img: imgObject.Camry },
  { year: 2021, name: "S450", price: 21950000, img: imgObject.S450 },
  { year: 2012, name: "Model S", price: 2620000, img: imgObject["Model S"] },
  { year: 2022, name: "Taycan", price: 12900000, img: imgObject.Taycan },
  { year: 2002, name: "H1", price: 8000000, img: imgObject.H1 },
  { year: 2020, name: "A7", price: 5450000, img: imgObject.A7 },
  {
    year: 2012,
    name: "Yukon Denali",
    price: 250000,
    img: imgObject["Yukon Denali"],
  },
  { year: 2012, name: "Escalade", price: 250000, img: imgObject.Escalade },
];

const fetchAll = () =>
  new Promise((resolve) =>
    window.setTimeout(() => {
      resolve(cars);
    }, [2000])
  );

const carsList = { fetchAll };

export default carsList;
