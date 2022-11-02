import React, { useEffect, useState } from "react";
import Main from "../common/main";
import api from "../../api";
import Loading from "../common/loading/loading";
import Header from "../common/header/header";
import Footer from "../common/footer/footer";

const MainPage = ({ currentUser }) => {
  const [servicesList, setServicesList] = useState();
  const [functionsList, setFunctionsList] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.services.fetchAll().then((data) => setServicesList(data));
    api.functions.fetchAll().then((data) => setFunctionsList(data));
  }, []);

  useEffect(() => {
    servicesList && functionsList && setLoading(false);
  }, [servicesList, functionsList]);

  return (
    <div className="wrapper">
      <Header
        currentUser={currentUser}
        logoName="Piggy Bank"
        logoTagline="- я покажу куда пропадают твои деньги!"
      />

      {loading ? (
        <Loading />
      ) : (
        <Main servicesList={servicesList} functionsList={functionsList} />
      )}

      <Footer />
    </div>
  );
};

export default MainPage;
