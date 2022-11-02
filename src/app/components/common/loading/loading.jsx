import React, { useState } from "react";
import loadingImg from "./loading.svg";
import s from "./loading.module.css";

const Loading = () => {
  const [animation, setAnimation] = useState();

  setTimeout(() => {
    setAnimation(true);
  }, 1);

  return (
    <section className={s.container}>
      <div className={s.loadingBlock}>
        <h1 className={s.loadingText}>Загрузка</h1>
        <img
          alt=""
          className={s.loadingImg + " " + (animation && s.startAnimation)}
          src={loadingImg}
        />
      </div>
    </section>
  );
};

export default Loading;
