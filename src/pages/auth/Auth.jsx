import React from "react";
import { Routes, Route } from "react-router-dom";
import { Register, Login } from "../../components";
import "./auth.css";

const Auth = () => {
  return (
    <>
      <div className="cbs__auth">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
};

export default Auth;
