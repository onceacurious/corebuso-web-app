import React, { useState, useContext } from "react";
import { postInquiry } from "../../helpers/api/inquiryApi";
import InquiryContext from "../../helpers/context/InquiryContext";
// import api from "../../helpers/api/inquiryApi";

import "./emailForm.css";

const EmailForm = ({ emailId }) => {
  const [email, setEmail] = useState("");
  const [sendStyle, setSendStyle] = useState("inactive-emailSend");
  const [startStyle, setStartStyle] = useState("inactive-emailStart");
  const [isFocus, setIsFocus] = useState(false);

  const { addInquiry } = useContext(InquiryContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    postData();

    setEmail("");
    setStartStyle("inactive-emailStart");
    setSendStyle("inactive-emailSend");
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (email.length > 0) {
      setStartStyle("focus-emailStart");
      setSendStyle("focus-emailSend");
    } else {
      setStartStyle("inactive-emailStart");
      setSendStyle("inactive-emailSend");
    }
  };

  const handleBlur = () => {
    if (email.length > 0) {
      setStartStyle("focus-emailStart");
      setSendStyle("focus-emailSend");
    } else {
      setStartStyle("inactive-emailStart");
      setSendStyle("inactive-emailSend");
    }
  };

  const postData = async () => {
    if (email) {
      try {
        await addInquiry({ email: email });
      } catch (err) {
        // console.log(err);
      }
    }
  };

  return (
    <div className="cbs__email-form">
      <form
        method="POST"
        className="cbs__form-container"
        onSubmit={handleSubmit}
      >
        <input
          id={`${emailId}-emailGetStarted`}
          name="client-email"
          type="email"
          value={email}
          onChange={(e) => handleChange(e)}
          onBlur={() => handleBlur()}
          placeholder="Your Email Address"
        />
        <div className="cbs__form-button__container">
          <input
            type="submit"
            value="Send"
            id={`${emailId}-emailSend`}
            className={sendStyle}
          />
          <input
            type="submit"
            value="Get Started"
            id={`${emailId}-emailStart`}
            className={startStyle}
          />
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
