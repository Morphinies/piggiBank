const services = [
  "Организовать контроль над своими доходами и расходами",
  "Спланировать долгосрочные и краткосрочные накопления",
  "Выяснить, на что уходит большая часть ваших средств",
  "Наглядно, по графикам, рассмотреть передвижение своих денежных средств",
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(services);
    }, 1000);
  });

const servicesList = { fetchAll };

export default servicesList;
