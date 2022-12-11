import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

import SnackbarContext from "../../helpers/context/SnackbarContext";
import "./snackbar.scss";

const Snackbar = () => {
  const [timeLapse, setTimeLapse] = useState(5);
  const [snack, setSnack] = useState("snackbar-hide");
  const [status, setStatus] = useState("");

  const { show, setShow, content, title, _status, duration } =
    useContext(SnackbarContext);

  const snackbarStatus = (status) => {
    switch (status) {
      case "success":
        return "success";
      case "alert":
        return "alert";
      case "warning":
        return "warning";
      case "info":
        return "info";
      default:
        return "success";
    }
  };

  useEffect(() => {
    if (show) {
      setSnack("snackbar-show");
      setStatus(`snackbar-${snackbarStatus(_status)}`);
    } else {
      setSnack("snackbar-hide");
    }
  }, [show]);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, duration);
  }, [show]);

  return (
    <>
      <div className={`snackbar ${snack} ${status}`}>
        <div className="snackbar-title">
          <p className="_heading3 _bold">{title ? title : "No title"}</p>
          <div className="snackbar-btn-close pointer">
            <IoCloseCircle onClick={() => setShow(false)} />
          </div>
        </div>
        <div className="snackbar-context">
          <p>
            {content ? content : "No content to display"}
            {"...  "}
            {_status != "success" ? (
              <Link>
                <strong>Learn more</strong>
              </Link>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Snackbar;
