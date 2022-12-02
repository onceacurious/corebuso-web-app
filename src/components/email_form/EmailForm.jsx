import React, { useState } from "react";
import "./emailForm.css";

const EmailForm = ({ scale }) => {
  const [email, setEmail] = useState("");
  const [sendStyle, setSendStyle] = useState("inactive-emailSend");
  const [startStyle, setStartStyle] = useState("inactive-emailStart");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
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

  return (
    <div className="cbs__email-form">
      <form
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="email-inquiry"
        className="cbs__form-container"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="email-inquiry" />
        <input
          id="emailGetStarted"
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
            id="emailSend"
            className={sendStyle}
          />
          <input
            type="submit"
            value="Get Started"
            id="emailStart"
            className={startStyle}
          />
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
