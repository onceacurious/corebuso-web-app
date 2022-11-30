import React from "react";
import { Link } from "react-router-dom";
import DocumentTitle from "../../helpers/DocumentTitle";
import "./pricing.css";

import { Navbar } from "../../components";

const Pricing = () => {
  DocumentTitle("Pricing | Corebuso");
  return (
    <>
      <Navbar />
    </>
  );
};

export default Pricing;
