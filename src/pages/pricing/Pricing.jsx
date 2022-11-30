import React from "react";
import { Link } from "react-router-dom";
import DocumentTitle from "../../helpers/DocumentTitle";
import "./pricing.css";

import { Navbar } from "../../components";

const Pricing = () => {
  DocumentTitle("Pricing | Corebuso");
  return (
    <>
      <div className="cbs__page-pricing__container">
        <Navbar />
        <div className="cbs__page-pricing__body">
          <h2>Welcome to Pricing Page!</h2>
        </div>
      </div>
    </>
  );
};

export default Pricing;
