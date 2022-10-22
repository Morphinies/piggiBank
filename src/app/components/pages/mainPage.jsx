import React from "react";
import Footer from "../common/footer";
import Header from "../common/header";
import Main from "../common/main";

const MainPage = ({ currentUser }) => {
  return (
    <>
      <Header currentUser={currentUser} />

      <Main />

      <Footer />
    </>
  );
};

export default MainPage;
