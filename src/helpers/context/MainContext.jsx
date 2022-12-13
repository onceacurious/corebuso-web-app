import { createContext, useState, useEffect } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  // Snackbar
  const [snackbarShow, setSnackbarShow] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState(null);
  const [snackbarTitle, setSnackbarTitle] = useState(null);
  const [snackbarContextStatus, setSnackbarContextStatus] = useState("");
  const [snackbarDuration, setSnackbarDuration] = useState(5000);

  // Pricing Modal
  // TODO: Need to rename
  const [modalAction, setModalAction] = useState("");

  // App
  const [scroll, setScroll] = useState(false);

  const setMainTimer = (time) => {};

  const contextValue = {
    snackbarShow,
    setSnackbarShow,
    setSnackbarContent,
    setSnackbarTitle,
    snackbarTitle,
    snackbarContent,
    snackbarContextStatus,
    setSnackbarContextStatus,
    snackbarDuration,
    setSnackbarDuration,
    modalAction,
    setModalAction,
    scroll,
    setScroll,
  };

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};

export default MainContext;
