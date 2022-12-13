import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

import MainContext from "../../helpers/context/MainContext";
import "./snackbar.scss";

const Snackbar = () => {
  const [timeLapse, setTimeLapse] = useState(5);
  const [snack, setSnack] = useState("snackbar-hide");
  const [status, setStatus] = useState("");

  const {
    snackbarShow,
    setSnackbarShow,
    snackbarContent,
    snackbarTitle,
    snackbarContextStatus,
    snackbarDuration,
  } = useContext(MainContext);

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
    if (snackbarShow) {
      setSnack("snackbar-show");
      setStatus(`snackbar-${snackbarStatus(snackbarContextStatus)}`);
    } else {
      setSnack("snackbar-hide");
    }
  }, [snackbarShow]);

  useEffect(() => {
    setTimeout(() => {
      setSnackbarShow(false);
    }, snackbarDuration);
  }, [snackbarShow]);

  return (
    <>
      <div className={`snackbar ${snack} ${status}`}>
        <div className="snackbar-title">
          <p className="_heading3 _bold">
            {snackbarTitle ? snackbarTitle : "No title"}
          </p>
          <div className="snackbar-btn-close pointer">
            <IoCloseCircle onClick={() => setSnackbarShow(false)} />
          </div>
        </div>
        <div className="snackbar-context">
          <p>
            {snackbarContent ? snackbarContent : "No content to display"}
            {"...  "}
            {snackbarStatus != "success" ? (
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
