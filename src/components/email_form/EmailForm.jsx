import React from "react";
import "./emailForm.css";

import { GrSend } from "react-icons/gr";

const EmailForm = () => {
  return (
    <>
      <form
        data-netlify="true"
        className="cbs__form-container"
        onSubmit={(e) => e.preventDefault()}
      >
        <input type="email" placeholder="Your Email Address" />
        <button type="submit">
          <GrSend />
          Get Started
        </button>
      </form>
    </>
  );
};

export default EmailForm;
