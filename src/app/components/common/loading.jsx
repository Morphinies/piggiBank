import React, { useState } from "react";
import loadingImg from "../../../img/loading.svg";

const Loading = () => {
  const [animation, setAnimation] = useState();

  setTimeout(() => {
    setAnimation(true);
  }, 50);

  return (
    <div className="loading">
      <h1 className="loadingText">
        Loading
        <img
          alt="loading"
          className={"loadingImg " + (animation && "startAnimation")}
          src={loadingImg}
        />
      </h1>
    </div>
  );
};

export default Loading;
