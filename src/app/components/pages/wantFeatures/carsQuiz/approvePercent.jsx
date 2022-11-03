import s from "../../../../stylesModule/function.module.css";
import fireBlack from "../../../../../img/fireBlack.svg";
import fireRed from "../../../../../img/fireRed.svg";
import React from "react";

const ApprovePercent = ({ choosedPerсent, closeWindow, approvePercent }) => {
  return (
    <>
      <h1 className={s.popUpTitle}>
        Вы готовы откладывать по
        <span className="redSpan"> {choosedPerсent}% </span>от З/П ?
      </h1>
      <div className={s.diffLevel}>
        <h3 className={s.diffLevelText}>уровень сложности:</h3>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) =>
          item <= choosedPerсent / 10 ? (
            <img alt="" key={item} className={s.fireSvg} src={fireRed} />
          ) : (
            <img alt="" key={item} className={s.fireSvg} src={fireBlack} />
          )
        )}
      </div>
      <nav className={s.popUpNav}>
        <button onClick={() => closeWindow()} className="btn">
          Пока не готов
        </button>
        <button onClick={() => approvePercent()} className="btn">
          Да, я готов!
        </button>
      </nav>
    </>
  );
};

export default ApprovePercent;
