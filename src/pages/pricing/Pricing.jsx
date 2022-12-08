import React from "react";
import { Link } from "react-router-dom";
import DocumentTitle from "../../helpers/DocumentTitle";
import "./pricing.css";

import { Navbar } from "../../components";
import { Signup } from "../../containers";

const Pricing = ({ close, setClose }) => {
  DocumentTitle("Pricing | Corebuso");

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
        <Navbar close={close} setClose={setClose} />
        <div className="cbs__page-pricing__body">
          <h2>Welcome to Pricing Page!</h2>
        </div>
      </div>
    </>
  );
};

export default Pricing;
