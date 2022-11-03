import React from "react";
import okeyImg from "./okey.svg";
import s from "./services.module.css";

const Services = ({ servicesTitle, servicesList }) => {
  return (
    <div className={s.services}>
      <p className={s.title}>{servicesTitle}</p>
      <ul className={s.list}>
        {servicesList.map((service) => {
          return (
            <li className={s.item} key={servicesList.indexOf(service)}>
              <img
                className={s.okeyImg}
                src={okeyImg}
                alt="include"
                width="27"
              />
              <p className={s.itemText}>{service}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Services;
