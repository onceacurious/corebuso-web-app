import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import AuthContext from "./context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, token } = useContext(AuthContext);
  if (!user && !token) {
    return <Navigate to="/auth" replace={true} />;
  }
  return children;
};

export default PrivateRoute;
