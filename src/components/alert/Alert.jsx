import React, { useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

import "./alert.scss";

const Alert = ({ title, content, duration }) => {
  const [alert, setAlert] = useState("alert-container");

  return (
    <>
      <div className={alert}>
        <div className="alert-close-btn">
          <IoCloseCircle
            onClick={() => setAlert("alert-container alert-hide")}
          />
        </div>
        <div className="alert-body">
          <p>{content ? content : "No content"}</p>
          <a href="">Learn more</a>
        </div>
      </div>
    </>
  );
};

export default Alert;
