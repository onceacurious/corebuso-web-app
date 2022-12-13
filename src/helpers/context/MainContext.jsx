import { createContext, useState, useEffect } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);
  const [_status, set_Status] = useState("");
  const [duration, setDuration] = useState(5000);
  const [modalAction, setModalAction] = useState("");
  const [scroll, setScroll] = useState(false);

  const setMainTimer = (time) => {};

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
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};

export default MainContext;
