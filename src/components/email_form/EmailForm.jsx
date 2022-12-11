import React, { useState, useContext } from "react";
import { useEffect } from "react";
import InquiryContext from "../../helpers/context/InquiryContext";

import "./emailForm.scss";

const EmailForm = ({ emailId, emailClass }) => {
  const [email, setEmail] = useState("");
  const [send, setSend] = useState("send-hide");
  const [start, setStart] = useState("start-show");
  const [isFocus, setIsFocus] = useState(false);

  const { addInquiry } = useContext(InquiryContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    postData();
    setEmail("");
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const postData = async () => {
    if (email) {
      try {
        await addInquiry({ email: email });
      } catch (err) {
        console.log(err?.status);
      }
    }
  };

  useEffect(() => {
    if (isFocus || email) {
      setSend("send-show");
      setStart("start-hide");
    } else {
      setSend("send-hide");
      setStart("start-show");
    }
  }, [isFocus]);

  return (
    <div className={`${emailClass}-email-container`}>
      <form
        method="POST"
        className={`${emailClass}-email-form`}
        onSubmit={handleSubmit}
      >
        <input
          className={`${emailClass}-email-form-input`}
          name="client-email"
          type="email"
          value={email}
          onChange={(e) => handleChange(e)}
          onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}
          placeholder="Your Email Address"
        />
        <div className={`${emailClass}-email-form-btn-container`}>
          <input
            type="submit"
            value="Send"
            id={`${emailId}-emailSend`}
            // className={btnStyle}
            className={send}
          />
          <input
            type="submit"
            value="Get Started"
            id={`${emailId}-emailStart`}
            className={start}
          />
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
