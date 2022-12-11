import React from "react";

import { Navbar } from "../../components";
import { Signup } from "../../containers";
import { useContext } from "react";

import DocumentTitle from "../../helpers/DocumentTitle";
import { UrlContext } from "../../helpers/context";
import "./pricing.scss";
import { useState } from "react";

const current_url = window.location.href;

const Pricing = ({ close, setClose }) => {
  DocumentTitle("Pricing | Corebuso");
  const [isPricingPage, setIsPricingPage] = useState(
    current_url.endsWith("pricing")
  );

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
        <Navbar
          close={close}
          setClose={setClose}
          currentPage={isPricingPage ? "pricing" : null}
        />
        <div className="cbs__page-pricing__body"></div>
      </div>
    </>
  );
};

export default Pricing;
