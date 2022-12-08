import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { ImSad2 } from "react-icons/im";
import { RiEmotionHappyFill, RiEyeCloseFill } from "react-icons/ri";
import { BiInfoCircle } from "react-icons/bi";
import { ImEye } from "react-icons/im";

import api from "../../helpers/api/inquiryApi";
import "./register.css";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{6,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const STRING = /^[a-zA-Z]/;
const NUMBER = /(?=.*[0-9])(?=.*[!@#$%])/;
const CHAR = /[!@#$%]/;
const Register = () => {
  const [p1, setP1] = useState(false);
  const [p2, setP2] = useState(false);
  const [isString, setIsString] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleReset = () => {
    setUser("");
    setPwd("");
    setMatchPwd("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    try {
      const response = await api.post(
        "/",
        JSON.stringify({ username: user, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
    } catch (error) {}
    // console.log(user, pwd);
    // setSuccess(true);
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
    const is_string = STRING.test(user);
    setIsString(is_string);
    const is_number = NUMBER.test(user);
    setIsNumber(is_number);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
    const is_char = CHAR.test(pwd);
    setIsChar(is_char);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);
  return (
    <>
      {success ? (
        <section className="_flex _flex-column _jc-center _ai-center cbs__register-signin">
          <h1 className="gradient__text">Success</h1>
          <p>
            <Link to="/auth/login" className="gradient__text">
              Sign In
            </Link>
          </p>
        </section>
      ) : (
        <section className="cbs__register">
          <div className="cbs__register-container gradient__bg">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              area-alive="assertive"
            >
              {errMsg}
            </p>
            <p>Register</p>
            <form method="POST" onSubmit={handleSubmit}>
              {/* Username */}
              <div className="cbs__register-validation__container">
                <label htmlFor="username">Username</label>
                <small className={validName ? "valid" : "hide"}>
                  Looks good <RiEmotionHappyFill />
                </small>
                <small className={validName || !user ? "hide" : "invalid"}>
                  Invalid data <ImSad2 />
                </small>
              </div>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                placeholder="Username*"
              />
              <small
                id="uidnote"
                className={
                  userFocus && user && !validName ? "instruction" : "offscreen"
                }
              >
                <p className="small">
                  <BiInfoCircle
                    className={user?.length > 5 ? "pass" : "fail"}
                  />
                  6 to 24 characters.
                </p>
                <p className="small">
                  <BiInfoCircle className={isString ? "pass" : "fail"} /> Must
                  begin with a letter.
                </p>
                <p className="small">
                  <BiInfoCircle className={isNumber ? "pass" : "fail"} />
                  Letters, numbers or underscores, and hyphens allowed.
                </p>
              </small>

              {/* Password */}
              <div className="cbs__register-validation__container">
                <label htmlFor="password">Password</label>
                <small className={validPwd ? "valid" : "hide"}>
                  Looks good <RiEmotionHappyFill />
                </small>
                <small className={validPwd || !pwd ? "hide" : "invalid"}>
                  Invalid data <ImSad2 />
                </small>
              </div>
              <div className="cbs__register-password__container">
                <input
                  type={p1 ? "text" : "password"}
                  id="password"
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  placeholder="Password*"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  required
                />
                {!p1 && pwd ? (
                  <RiEyeCloseFill onClick={() => setP1(!p1)} />
                ) : (
                  <ImEye onClick={() => setP1(!p1)} />
                )}
              </div>
              <small
                id="pwdnote"
                className={
                  pwdFocus && pwd && !validPwd ? "instruction" : "offscreen"
                }
              >
                <p className="small">
                  <BiInfoCircle className={pwd?.length > 8 ? "pass" : "fail"} />
                  8 to 24 characters.
                </p>
                <p className="small">
                  <BiInfoCircle className={validPwd ? "pass" : "fail"} />
                  Must include 1 uppercase, 1 lowercase, a number, and a special
                  character.
                </p>
                <p className="small">
                  <BiInfoCircle className={isChar ? "pass" : "fail"} />
                  Accepted characters:{" "}
                  <strong className="pass">
                    <span aria-label="exclamation mark">!</span>
                    <span aria-label="at symbol">@</span>
                    <span aria-label="hashtag">#</span>
                    <span aria-label="dollar sign">$</span>
                    <span aria-label="percentage">%</span>
                  </strong>
                </p>
              </small>

              {/* Confirm Password */}
              <div className="cbs__register-validation__container">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <small
                  className={
                    validMatch && pwd?.length > 0 && validPwd ? "valid" : "hide"
                  }
                >
                  Looks good <RiEmotionHappyFill />
                </small>
                <small
                  className={
                    validMatch || (!matchPwd && !validPwd) ? "hide" : "invalid"
                  }
                >
                  Invalid data <ImSad2 />
                </small>
              </div>
              <div className="cbs__register-password__container">
                <input
                  type={p2 ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm Password*"
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="matchnote"
                  value={matchPwd}
                  onChange={(e) => setMatchPwd(e.target.value)}
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  required
                />
                {!p2 && matchPwd ? (
                  <RiEyeCloseFill
                    onClick={() => (setP2(!p2), setMatchFocus(true))}
                  />
                ) : (
                  <ImEye onClick={() => setP2(!p2)} />
                )}
              </div>
              <small
                id="matchnote"
                className={
                  matchFocus && matchPwd && matchPwd !== pwd
                    ? "instruction"
                    : "offscreen"
                }
              >
                <p className="small">
                  <BiInfoCircle
                    className={validMatch && pwd?.length > 0 ? "pass" : "fail"}
                  />
                  8 Password dons't match.
                </p>
                <p className="small">
                  <BiInfoCircle
                    className={
                      validPwd || PWD_REGEX.test(matchPwd) ? "pass" : "fail"
                    }
                  />
                  Invalid password
                </p>
              </small>

              {/* Action Buttons */}
              <div className="cbs__register-action__button">
                <button id="reset" type="reset" onClick={() => handleReset()}>
                  Cancel
                </button>
                <button
                  id="submit"
                  type="submit"
                  disabled={
                    !validMatch || !validName || !validPwd ? true : false
                  }
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p className="_paragraph">Already registered?</p>
            <Link
              to="/auth/login"
              className="_paragraph cbs__register-login__link pointer"
            >
              Sign In
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default Register;
