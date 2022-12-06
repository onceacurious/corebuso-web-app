import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { MdDoubleArrow } from "react-icons/md";
import { TiInfoLarge } from "react-icons/ti";

import "./signup.css";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{6,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Information = ({ target, show }) => {
  const info_target = [
    {
      name: "username",
      message: {
        0: "USERNAME",
        1: "Must start with a letter",
        2: "Must not include spaces",
        3: "At least 6 characters",
      },
    },
    {
      name: "email",
      message: {
        0: "EMAIL ADDRESS",
        1: "Must start with a letter",
        2: "Must not include spaces",
        3: "At least 6 characters",
        4: "Must end with .com",
      },
    },
    {
      name: "password",
      message: {
        0: "PASSWORD",
        1: "Must include 1 uppercase, 1 lowercase, 1 letter, 1 number, and 1 special character.",
        2: "At least 6 characters",
        3: "Allowed character: !@#$%",
      },
    },
    {
      name: "password2",
      message: {
        0: "CONFIRM PASSWORD",
        1: "Should be match with the password above",
      },
    },
  ];

  const data = info_target.find((i) => i.name == target);

  useEffect(() => {}, [show]);
  return (
    <div id="infoContainer">
      <p className={data.message["0"] ? "" : "hide"}>{data.message["0"]}</p>
      <p className={data.message["1"] ? "" : "hide"}>1. {data.message["1"]}</p>
      <p className={data.message["2"] ? "" : "hide"}>2. {data.message["2"]}</p>
      <p className={data.message["3"] ? "" : "hide"}>3. {data.message["3"]}</p>
      <p className={data.message["4"] ? "" : "hide"}>4. {data.message["4"]}</p>
    </div>
  );
};

const Signup = ({ close, setClose, emailId, usernameId, pwdId, pwdId2 }) => {
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [focusUser, setFocusUser] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [focusPwd, setFocusPwd] = useState(false);

  const [pwd2, setPwd2] = useState("");
  const [validPwd2, setValidPwd2] = useState(false);
  const [focusPwd2, setFocusPwd2] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleReset = () => {
    setUser("");
    setEmail("");
    setPwd("");
    setPwd2("");
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

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
            <form method="POST" onSubmit={handleSubmit}>
              <label
                className="gradient__text"
                htmlFor={`${usernameId}-client_username`}
              >
                Username:
              </label>
              <div className="cbs__input-container">
                <Information target="username" />
                <input
                  ref={userRef}
                  type="text"
                  id={`${usernameId}-client_username`}
                  placeholder="Username*"
                  autoComplete="off"
                  required
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
              <label
                className="gradient__text"
                htmlFor={`${emailId}-client_email`}
              >
                Email Address:
              </label>
              <div className="cbs__input-container">
                <Information target="email" />
                <input
                  type="email"
                  id={`${emailId}-client_email`}
                  placeholder="Email Address*"
                  autoComplete="off"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <label
                className="gradient__text"
                htmlFor={`${pwdId}-client_password`}
              >
                Password:
              </label>
              <div className="cbs__input-container">
                <Information target="password" />
                <input
                  autoComplete="off"
                  type="password"
                  id={`${pwdId}-client_password`}
                  placeholder="Password*"
                  required
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />
                <TiInfoLarge />
              </div>
              <label
                className="gradient__text"
                htmlFor={`${pwdId2}-client_password2`}
              >
                Confirm Password:
              </label>
              <div className="cbs__input-container">
                <Information target="password" />
                <input
                  autoComplete="off"
                  type="password"
                  id={`${pwdId2}-client_password2`}
                  placeholder="Confirm Password*"
                  required
                  value={pwd2}
                  onChange={(e) => setPwd2(e.target.value)}
                />
                <TiInfoLarge />
              </div>
              <div className="cbs__client-signup__form-btn">
                <button
                  className="_btn _btn-rounded _btn-secondary"
                  onClick={() => handleReset()}
                  type="reset"
                  tabIndex={-1}
                >
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
