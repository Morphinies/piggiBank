import React from "react";
import { Link } from "react-router-dom";
import s from "./featureСards.module.css";

const FeatureСards = ({ featureList }) => {
  return (
    <ul className={s.list}>
      {featureList.map((featureItem) => {
        return (
          <Link
            to={featureItem.value}
            key={featureItem.value}
            role="button"
            className="btn"
            id={s.link}
          >
            <p className={s.name}>{featureItem.name}</p>
            <img
              className={s.img}
              src={featureItem.img}
              alt={featureItem.img}
            />
          </Link>
        );
      })}
    </ul>
  );
};

export default FeatureСards;
