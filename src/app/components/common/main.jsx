import React from "react";
import ServicesBlock from "./servicesBlock";
import Functions from "./functions";
import Blockquote from "./blockquote/blockquote";

const Main = ({ servicesList, functionsList }) => {
  return (
    <main className="mainArea content">
      <Blockquote
        quote="Уберечь свои деньги стоит больших трудов, чем добыть их."
        author="- Мишель де Монтень"
      />
      <ServicesBlock
        servicesTitle="Сервис учёта доходов/расходов 'Piggi Bank' поможет вам:"
        servicesList={servicesList}
      />
      <Functions functionsList={functionsList} />
    </main>
  );
};

export default Main;
