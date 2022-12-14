import { createContext, useState, useEffect } from "react";
import HtmlToReact from "html-to-react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  // App
  const [scroll, setScroll] = useState(false);

  // Snackbar
  const [snackbarShow, setSnackbarShow] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState(null);
  const [snackbarTitle, setSnackbarTitle] = useState(null);
  const [snackbarContextStatus, setSnackbarContextStatus] = useState("");
  const [snackbarDuration, setSnackbarDuration] = useState(5000);

  // Pricing Modal
  const [pricingModalShow, setPricingModalShow] = useState(false);

  //  Signup
  const [signupShow, setSignupShow] = useState(false);

  const setMainTimer = (time) => {};

  const strParser = (str) => {
    const parser = new HtmlToReact.Parser();
    const strElem = parser.parse(str);
    return strElem;
  };

  const contextValue = {
    // App
    scroll,
    setScroll,

    // Snackbar
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

    // Pricing
    pricingModalShow,
    setPricingModalShow,

    // Signup
    signupShow,
    setSignupShow,

    // str to html elem
    strParser,
  };

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};

export default MainContext;
