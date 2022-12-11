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
      <div className="cbs__page-pricing__container">
        <Signup
          close={close}
          setClose={setClose}
          emailId="pricing"
          usernameId="pricing"
          pwdId="pricing"
          pwdId2="pricing"
        />
        <Navbar close={close} setClose={setClose} currentPage={page} />
        <div className="cbs__page-pricing__body"></div>
      </div>
    </>
  );
};

export default Pricing;
