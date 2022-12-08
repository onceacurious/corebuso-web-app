import React, { useEffect, useState, useContext } from "react";
import { useParams, Routes, Route } from "react-router-dom";
import { IoCloseCircleOutline, IoCloseCircle } from "react-icons/io5";

import { Sidebar, Inquiry, AdminPricing } from "../../components";
import DocumentTitle from "../../helpers/DocumentTitle";
import { getInquiries } from "../../helpers/api/inquiryApi";
import logo from "../../assets/corebuso_footer_logo.png";
import "./admin.css";
import AuthContext from "../../helpers/context/AuthContext";

const Alert = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 10000);
  }, [show]);

  return (
    <>
      <div className={show ? "cbs__admin-alert__container" : "hide"}>
        <div className="cbs__admin-alert__close-btn">
          <IoCloseCircle onClick={() => setShow(!show)} />
        </div>
        <div className="cbs__admin-alert__title">
          <p>Information</p>
        </div>
        <div className="cbs__admin-alert__body">
          <p>
            Admin Panel doesn't support mobile display <i>(under 500px)</i>
          </p>
        </div>
      </div>
    </>
  );
};

const Admin = () => {
  DocumentTitle("Corebuso | Admin Panel");

  const params = useParams();
  const id = params.id;

  const [inquiry, setInquiry] = useState([]);
  const { user } = useContext(AuthContext);

  const getData = async () => {
    try {
      const data = await getInquiries();
      setInquiry(data);
    } catch (err) {
      console.log(err.response?.data);
      console.log(err.response?.status);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="cbs__admin-container gradient__bg">
        <Alert />
        <Sidebar />
        <div className="cbs__admin-header">
          <div className="cbs__admin-header__brand">
            <img src={logo} alt="Logo" />
          </div>
          <h1 className="gradient__text"> Welcome to Admin Panel</h1>
          <div className="cbs__admin-header__user">
            <p>{`Hello! ${user}`}</p>
          </div>
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
