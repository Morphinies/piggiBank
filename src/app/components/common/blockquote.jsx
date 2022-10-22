import React from "react";
import s from "../../stylesModule/blockquote.module.css";

const Blockquote = ({ quote, author }) => {
  return (
    <div className={s.gridBlock}>
      <blockquote className={s.wrapper}>
        <div className={s.verticalLine}></div>
        <div className={s.blockquote}>
          <p className={s.quote}>{quote}</p>
          <cite className={s.author}>{author}</cite>
        </div>
      </blockquote>
    </div>
  );
};

export default Blockquote;
