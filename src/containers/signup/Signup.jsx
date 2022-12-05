import React, { useState } from "react";
import { useEffect } from "react";
import { MdDoubleArrow } from "react-icons/md";

import "./signup.css";

const Signup = ({ close, setClose }) => {
  // useEffect(() => {}, [close]);
  return (
    <>
      <div id="signupContainer" className={close ? "show" : ""}>
        <div
          className="cbs__client-signup__close pointer"
          onClick={() => setClose(!close)}
        >
          <MdDoubleArrow />
        </div>
        <div className="cbs__client-signup__body">
          <div className="cbs__client-signup__form">
            <h1 className="gradient__text">Sign Up</h1>
            <form method="POST">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                placeholder="Username*"
                autoComplete="false"
                required
              />
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                placeholder="Email Address*"
                complete="false"
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Password*"
                required
              />
              <label htmlFor="password2">Confirm Password:</label>
              <input
                type="password"
                id="password2"
                placeholder="Confirm Password*"
                required
              />
              <div className="cbs__client-signup__form-btn">
                <button className="_btn _btn-rounded _btn-secondary">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="_btn _btn-rounded _btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
