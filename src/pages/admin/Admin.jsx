import React, { useEffect, useState } from "react";
import { useParams, Routes, Route, Outlet } from "react-router-dom";

import { Sidebar, Inquiry, AdminPricing } from "../../components";
import DocumentTitle from "../../helpers/DocumentTitle";
import api from "../../helpers/api/inquiry";
import logo from "../../assets/corebuso_footer_logo.png";
import "./admin.css";

const Admin = () => {
  DocumentTitle("Corebuso | Admin Panel");

  const params = useParams();
  const id = params.id;

  const [inquiry, setInquiry] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await api.get("");
      setInquiry(response.data);
    } catch (err) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.header);
    }
  };

  return (
    <>
      <div className="cbs__admin-container gradient__bg">
      <Outlet/>
        <Sidebar />
        <div className="cbs__admin-header">
          <div className="cbs__admin-header__brand">
            <img src={logo} alt="Logo" />
          </div>
          <h1 className="gradient__text"> Welcome to Admin Panel</h1>
          <div className="cbs__admin-header__user"></div>
        </div>
        <div className="cbs__admin-body">
          <Routes>
            <Route exact path="/" element={<Inquiry inquiry={inquiry} />} />
            <Route path="/pricing" element={<AdminPricing />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Admin;
