import React, { useState, useEffect } from "react";
import { useContext } from "react";

import { Navbar } from "../../components";
import { Signup } from "../../containers";

import DocumentTitle from "../../helpers/DocumentTitle";
import "./pricing.scss";

const Pricing = ({ close, setClose }) => {
  DocumentTitle("Pricing | Corebuso");
  const page = "pricing";

  return (
    <>
      <div className="pricing-page">
        <Navbar close={close} setClose={setClose} currentPage={page} />
        <div className="pricing-page-body"></div>
      </div>
    </>
  );
};

export default Pricing;
