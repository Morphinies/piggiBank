import s from "./footer.module.css";
import React from "react";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <p className={s.footerText}>
        (C) Компания Piggi Bank. Все права защищены.
      </p>
    </footer>
  );
};

export default Footer;
