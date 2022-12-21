import { createContext, useState, useEffect } from "react";

import { getInquiries, getInquiry, postInquiry } from "../api/inquiryApi";

const InquiryContext = createContext({});
export default InquiryContext;

export const InquiryProvider = ({ children }) => {
  const [inquire, setInquire] = useState(false);

  const contextInquiries = async () => {
    const res = await getInquiries();
    sessionStorage.setItem("inquiry", JSON.stringify(res));
    setInquire(res);
    return res;
  };

  const addInquiry = async (data) => {
    const res = await postInquiry(data);
    return res;
  };

  const contextData = {
    contextInquiries,
    addInquiry,
    inquire,
    setInquire,
  };

  useEffect(() => {}, []);
  return (
    <InquiryContext.Provider value={contextData}>
      {children}
    </InquiryContext.Provider>
  );
};
