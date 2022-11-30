import React from "react";
import { Link } from "react-router-dom";
import DocumentTitle from "../../helpers/DocumentTitle";
import "./notFound.css";

const NotFound = () => {
  DocumentTitle("Page Not Found | Corebuso");

  return (
    <>
      <div className="cbs__notfound">NotFound</div>
      <Link to="/">Home</Link>
    </>
  );
};

export default NotFound;
