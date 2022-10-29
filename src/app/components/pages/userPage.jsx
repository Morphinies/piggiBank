import React from "react";
import s from "../../stylesModule/userPage.module.css";
import FeatureLink from "../features/featureLink";
import UserPageNav from "../common/userPageNav";
import HomeLogo from "../common/homeLogo";
import Footer from "../common/footer";

const UserPage = () => {
  return (
    <div className="wrapper">
      <header className="headerArea">
        <HomeLogo />
        <UserPageNav />
      </header>

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
