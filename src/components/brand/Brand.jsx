import React from "react";
import "./brand.css";
import { value, compatible, modern } from "./import";

const Brand = () => {
  return (
    <div className="cbs__brand section__padding">
      <div className="cbs__brand-container">
        <img src={value} alt="value" />
        <p>Bring value to your business</p>
      </div>
      <div className="cbs__brand-container">
        <img src={compatible} alt="compatible" />
        <p>Compatible to all devices</p>
      </div>
      <div className="cbs__brand-container">
        <img src={modern} alt="modern" />
        <p>Modern, reactive and responsive</p>
      </div>
    </div>
  );
};

export default Brand;
