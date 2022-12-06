import React from "react";
import { Routes, Route } from "react-router-dom";
import { Register, Login } from "../../components";
import "./auth.css";

const Auth = () => {
  return (
    <>
      <div className="cbs__auth">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};

export default Auth;
