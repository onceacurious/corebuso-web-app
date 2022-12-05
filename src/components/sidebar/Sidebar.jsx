import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="cbs__sidebar">
        <ul className="cbs__sidebar-list">
          <li className="cbs__sidebar-list__item">
            <Link to="/">Home</Link>
          </li>
          <li className="cbs__sidebar-list__item">
            <Link to="/admin/pricing">Pricing</Link>
          </li>
          <li className="cbs__sidebar-list__item">
            <Link to="/admin">Inquiry</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
