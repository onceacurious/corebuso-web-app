import React from "react";
import { Link, useRouteError } from "react-router-dom";
import DocumentTitle from "../../helpers/DocumentTitle";
import "./notFound.css";

const NotFound = () => {
  DocumentTitle("Page Not Found | Corebuso");

  const error = useRouteError()

  return (
    <>
      <div id="error-page" className="cbs__notfound _flex _flex-column  _jc-center _ai-center _h-100">
        <Link to="/" className="gradient__text">
          <h1>
            Home
          </h1>
            </Link>
        <h2 className="gradient__text">Oppss.. Page not found</h2>
        <p>
        <i>{error.statusText || error.message}</i>
      </p>
      </div>

    </>
  );
};

export default NotFound;
