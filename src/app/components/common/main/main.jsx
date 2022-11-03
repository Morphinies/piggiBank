import FeatureСards from "../featureСards/featureСards";
import Blockquote from "../blockquote/blockquote";
import Services from "../services/services";
import s from "./main.module.css";
import React from "react";

const Main = ({ servicesList, featureList }) => {
  return (
    <main className={s.main + " content"}>
      <Blockquote
        quote="Уберечь свои деньги стоит больших трудов, чем добыть их."
        author="- Мишель де Монтень"
      />
      <Services
        servicesTitle="Сервис учёта доходов/расходов 'Piggi Bank' поможет вам:"
        servicesList={servicesList}
      />
      <FeatureСards featureList={featureList} />
    </main>
  );
};

export default Main;
