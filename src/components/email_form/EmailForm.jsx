import React, { useState } from "react";
import "./emailForm.css";

import { GrSend } from "react-icons/gr";

const EmailForm = ({ scale }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };

  return (
    <>
      <form
        method="POST"
        name="email-inquiry"
        className="cbs__form-container"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="email-inquiry" />
        <input
          name="client-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email Address"
        />
        <button type="submit">
          <GrSend />
          Get Started
        </button>
      </form>
    </>
  );
};

export default EmailForm;
