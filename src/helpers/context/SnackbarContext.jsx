import { createContext, useState, useEffect } from "react";

export const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);
  const [_status, set_Status] = useState("");
  const [duration, setDuration] = useState(5000);
  const [modalAction, setModalAction] = useState('');
  const [scroll, setScroll] = useState(false);

  const setSnackbarTimer = (time) => {};

  const contextValue = {
    show,
    setShow,
    setContent,
    setTitle,
    title,
    content,
    _status,
    set_Status,
    duration,
    setDuration,
    modalAction,
    setModalAction,
    scroll,
    setScroll,
  };

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContext;
