import React from "react";
import s from "./blockquote.module.css";

const Blockquote = ({ quote, author }) => {
  return (
    <blockquote className={s.blockquote}>
      <div className={s.bookmark}></div>
      <p className={s.quote}>{quote}</p>
      <cite className={s.author}>{author}</cite>
    </blockquote>
  );
};

export default Blockquote;
