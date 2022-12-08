import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { getToken, getUser, refreshToken } from "../api/authApi";
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() =>
    sessionStorage.getItem("jwt")
      ? JSON.parse(sessionStorage.getItem("jwt"))
      : null
  );
  const [user, setUser] = useState(() =>
    sessionStorage.getItem("user")
      ? JSON.parse(sessionStorage.getItem("user"))
      : null
  );
  const [isLogin, setIsLogin] = useState(false);
  const [decodedToken, setDecodedToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    /* Take note to make sure that the target name is the same with the ID
      target element */

    try {
      const res = await getToken(
        e.target.loginUsername.value,
        e.target.loginPassword.value
      );

      if (res.status === 200) {
        setUser(e.target.loginUsername.value);
        setDecodedToken(jwt_decode(res.data.access));
        setToken(res.data);
        setIsLogin(true);

        sessionStorage.setItem(
          "user",
          JSON.stringify(e.target.loginUsername.value)
        );
        sessionStorage.setItem("jwt", JSON.stringify(res.data));

        navigate("/");

        console.log("Login successfully");
      } else {
        alert("Unauthorized access! You need to sign in again.");
      }
    } catch (err) {
      alert("Something went wrong during user login");
    }
  };

  const logoutUser = () => {
    setUser(null);
    setToken(null);
    setIsLogin(false);
    sessionStorage.clear();
    console.log("User logout successfully");
  };

  const updateToken = async () => {
    const token = JSON.parse(sessionStorage.getItem("jwt"))
      ? JSON.parse(sessionStorage.getItem("jwt"))
      : null;

    try {
      const res = await refreshToken(token.refresh);
      if (res.status === 200 && token) {
        setToken(res.data);
        sessionStorage.setItem("jwt", JSON.stringify(res.data));
        console.log("Token has been updated");
      } else {
        logoutUser();
      }
    } catch (err) {
      logoutUser();
    }
  };

  const contextData = {
    user: user,
    token: token,
    isLogin: isLogin,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  useEffect(() => {
    const fourMinutes = 1000 * 60 * 4;
    const interval = setInterval(() => {
      if (token) {
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [token, loading]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
