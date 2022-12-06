import React from "react";
import { Link } from "react-router-dom";
import { ImConfused } from "react-icons/im";

import DocumentTitle from "../../helpers/DocumentTitle";
import "./notFound.css";

const NotFound = () => {
  DocumentTitle("Page Not Found | Corebuso");
  return (
    <>
      <div className="cbs__notfound">
        <Link to="/" className="gradient__text">
          <p className="gradient__text ">Back To Home</p>
          <div className="cbs__notFound-link"></div>
        </Link>
        <h2 className="gradient__text">
          Ops! Page not found <ImConfused />
        </h2>
      </div>
    </>
  );
};

export default NotFound;
