import React from "react";
import s from "../wantFeatures.module.css";
import Header from "../../../common/header/header";

const WantTravel = () => {
  return (
    <div className="wrapper">
      <Header page={"function"} />
      <main className={s.main}>
        <h1>Куда полетим?</h1>
      </main>
    </div>
  );
};

export default WantTravel;
