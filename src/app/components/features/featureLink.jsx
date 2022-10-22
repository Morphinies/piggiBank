import React from "react";
import { Link } from "react-router-dom";
import s from "../../stylesModule/feature.module.css";

const FeatureLink = ({ name, link }) => {
  return (
    <Link to={link} className={"btn " + s.featureBtn}>
      <p>{name}</p>
    </Link>
  );
};

export default FeatureLink;
