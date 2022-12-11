import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline, IoCloseCircle } from "react-icons/io5";

import "./alert.scss";

const Alert = ({ title, content, duration }) => {
  const [alert, setAlert] = useState("alert-container alert-show");
  // const {inquiries, }

  useEffect(() => {
    setTimeout(
      () => {
        setAlert("alert-container alert-hide");
      },
      duration ? duration : 5000
    );
  }, [alert]);

  return (
    <>
      <div className={alert}>
        <div className="alert-close-btn">
          <IoCloseCircle
            onClick={() => setAlert("alert-container alert-hide")}
          />
        </div>
        <div className="alert-title">
          <p>{title ? title : "No title"}</p>
        </div>
        <div className="alert-body">
          <p>{content ? content : "No content"}</p>
        </div>
      </div>
    </>
  );
};

export default Alert;
