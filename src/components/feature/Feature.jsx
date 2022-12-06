import React from "react";
import "./feature.css";

const Feature = ({ css, title, text }) => {
  return (
    <div className={`cbs__features-container__feature ${css}`}>
      <div className="cbs__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="cbs__features-container_feature-text">
        <p>{text.length > 150 ? `${text.substring(0, 150)}...` : text}</p>
      </div>
    </div>
  );
};

export default Feature;
