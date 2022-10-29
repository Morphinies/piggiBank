import React from "react";

const Result = ({ percent, salary }) => {
  return (
    <>
      <h1>
        У нас имеется {percent}% от {salary}р. в месяц, верно?
      </h1>
      <button className="btn">Назад</button>
      <button className="btn">Верно</button>
    </>
  );
};

export default Result;
