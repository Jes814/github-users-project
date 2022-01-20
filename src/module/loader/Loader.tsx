import React, { FC } from "react";
import "./Loader.css";

const Loader: FC = () => {
  return (
    <div className="initialContainer">
      <div className="loaderContainer">
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Loader;
