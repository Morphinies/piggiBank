import React from "react";
import s from "../../stylesModule/servicesBlock.module.css";
import okeyImg from "../../../img/okey.svg";

const ServicesBlock = ({ servicesTitle, servicesList }) => {
  return (
    <div className={s.gridBlock}>
      <div className={s.wrapper}>
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
    </div>
  );
};

export default ServicesBlock;
