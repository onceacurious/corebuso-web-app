import { createContext, useState } from "react";

export const CBSContext = createContext({
  getSnackbarStatus: () => {},
  getSnackbarMessage: () => {},
  getSnackbarPosition: () => {},
  setSnackbarTimer: () => {},
});

export function CBSProvider({ children }) {
  const [snackbarStatus, setSnackbarStatus] = useState(false);

  function getSnackbarStatus(status) {
    if (status) return true;
    return false;
  }

  function setSnackbarTimer(time){
    
  }

  const contextValue = {
    getSnackbarStatus,
  };

  return (
    <CBSContext.Provider value={contextValue}>{children}</CBSContext.Provider>
  );
}

export default CBSProvider;
