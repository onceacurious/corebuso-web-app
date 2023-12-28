import { createContext, useEffect, useState } from "react";

const UrlContext = createContext();

export default UrlContext;

export const UrlProvider = ({ children }) => {
  const [url, setUrl] = useState(null);

  const contextData = {
    url: url,
    setUrl: setUrl,
  };
  return (
    <UrlContext.Provider value={contextData}>{children}</UrlContext.Provider>
  );
};
