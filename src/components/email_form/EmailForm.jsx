import React, { useState } from "react";
import "./emailForm.css";

const EmailForm = ({ scale }) => {
  const [email, setEmail] = useState("");
  const [buttonStyle, setButtonStyle] = useState("")
  const [inputStyle, setInputStyle] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");

  };

  const handleChange = (e) => {
    setEmail(e.target.value)
    if (email.length > 0) {
      console.log(email);
      setInputStyle("input-style")
      setButtonStyle("button-style")
    }
    // setButtonStyle("roll-up")

  }

  return (
    <>
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
          id="email"
          name="client-email"
          type="email"
          value={email}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleChange(e)}

          placeholder="Your Email Address"
        />
        <div className="cbs__form-button__container">
          <button type="submit" className={buttonStyle}>
            Submit
          </button>
          <input type="submit" value="Get Started" className={inputStyle} />
        </div>
      </form>
    </>
  );
};

export default EmailForm;
