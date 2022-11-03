import React, { useEffect, useState } from "react";
import Main from "../common/main/main";
import api from "../../api";
import Loading from "../common/loading/loading";
import Header from "../common/header/header";
import Footer from "../common/footer/footer";

const MainPage = ({ currentUser }) => {
  const [servicesList, setServicesList] = useState();
  const [featureList, setFeatureList] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.services.fetchAll().then((data) => setServicesList(data));
    api.features.fetchAll().then((data) => setFeatureList(data));
  }, []);

  useEffect(() => {
    servicesList && featureList && setLoading(false);
  }, [servicesList, featureList]);

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
        <Main servicesList={servicesList} featureList={featureList} />
      )}

      <Footer />
    </div>
  );
};

export default MainPage;
