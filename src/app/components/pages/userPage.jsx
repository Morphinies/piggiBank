import React from "react";
import s from "../../stylesModule/userPage.module.css";
import FeatureLink from "../features/featureLink";
import Header from "../common/header/header";
import Footer from "../common/footer/footer";

const UserPage = () => {
  return (
    <div className="wrapper">
      <Header />

      <main className="content">
        <h1 className={s.title}>Личный кабинет</h1>
        <div className={s.capabilities}>
          <FeatureLink name={"Доходы"} link={"income"} />
          <FeatureLink name={"Расходы"} link={"expenses"} />
          <FeatureLink name={"Путь к цели"} link={"income"} />
          <FeatureLink name={"Накопления"} link={"expenses"} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UserPage;
