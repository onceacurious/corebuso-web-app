import React, { useState } from "react";
import "./emailForm.css";

import { GrSend } from "react-icons/gr";

const EmailForm = () => {
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
        name="email"
        data-netlify="true"
        className="cbs__form-container"
        onSubmit={handleSubmit}
      >
        <input
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
