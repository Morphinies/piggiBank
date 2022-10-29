import s from "../../../../stylesModule/function.module.css";
import cancel from "../../../../../img/cancel.svg";
import ApprovePercent from "./approvePercent";
import React, { useState } from "react";
import ApproveSalary from "./approveSalary";
import Result from "./result";

const PopUpWindow = ({ closeWindow, choosedPerсent, car }) => {
  const [popUpQuiz, setPopUpQuiz] = useState("percent");
  const [salary, setSalary] = useState("");
  salary && console.log(salary);
  const approvePercent = () => {
    setPopUpQuiz("salary");
  };

  const approveSalary = (salary) => {
    setSalary(salary);
    setPopUpQuiz("result");
  };

  return (
    <div className={s.popUp}>
      <header>
        <img
          alt="close"
          role="button"
          onClick={() => closeWindow()}
          src={cancel}
          className={s.cancelSvg}
        />
      </header>
      <main>
        {popUpQuiz === "percent" && (
          <ApprovePercent
            approvePercent={approvePercent}
            choosedPerсent={choosedPerсent}
            closeWindow={closeWindow}
          />
        )}
        {popUpQuiz === "salary" && (
          <ApproveSalary
            choosedPerсent={choosedPerсent}
            approveSalary={approveSalary}
          />
        )}
        {popUpQuiz === "result" && (
          <Result percent={choosedPerсent} salary={salary} />
        )}
      </main>
    </div>
  );
};

export default PopUpWindow;
