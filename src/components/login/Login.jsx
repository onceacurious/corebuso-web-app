import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../helpers/context/AuthContext";
import "./login.css";
const Login = () => {
  const { loginUser } = useContext(AuthContext);
  return (
    <>
      <div className="temp_nav">
        <Link to="/">Home</Link>
      </div>
      <div className="cbs__login-container temp_bg">
        <div className="cbs__login-form__container">
          <p className="gradient__text">User Authenticated</p>
          <form method="post" onSubmit={loginUser}>
            <div className="cbs__login-form__input-control">
              <label htmlFor="loginUsername">Username:</label>
              <input type="text" name="login-username" id="loginUsername" />
            </div>
            <div className="cbs__login-form__input-control">
              <label htmlFor="loginPassword">Password:</label>
              <input type="password" name="login-password" id="loginPassword" />
            </div>
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
