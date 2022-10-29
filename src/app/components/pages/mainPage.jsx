import React, { useEffect, useState } from "react";
import Footer from "../common/footer";
import Header from "../common/header";
import Main from "../common/main";
import api from "../../api";
import Loading from "../common/loading";

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
        logoName="Piggi Bank"
        logoTagline="- я покажу куда пропадают твои деньги!"
        page="main"
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
