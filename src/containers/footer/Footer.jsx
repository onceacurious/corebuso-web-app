import React from "react";
import "./footer.css";
import footer_logo from "../../assets/corebuso_footer_logo.png";
import { EmailForm } from "../../components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="cbs__footer">
        <div className="cbs__footer-section-1">
          <div className="cbs__footer-brand">
            <img src={footer_logo} alt="corebuso footer logo" />
            <p>&trade;</p>
          </div>
          <div className="cbs__footer-lang">
            <p>Language:</p>
            <select name="" id="" className="pointer">
              <option value="1">English</option>
              <option value="2">Filipino</option>
              <option value="3">Chinese</option>
            </select>
          </div>
        </div>
        <div className="cbs__footer-separator"></div>
        <div className="cbs__footer-section-2">
          <div className="cbs__footer-col-1">
            <div className="cbs__footer-row-1">
              <h2>Products</h2>
              <p>Website Design</p>
              <p>Website Development</p>
            </div>
            <div className="cbs__footer-row-1">
              <h2>Services</h2>
              <p>Bookkeeping</p>
              <p>Auditing</p>
              <p>Financial</p>
            </div>
          </div>
          <div className="cbs__footer-col-2">
            <h2>Pricing</h2>
            <p>Basic</p>
            <p>Standard</p>
            <p>Premium</p>
            <p>Special Order</p>
            <p>Special Offer</p>
          </div>
          <div className="cbs__footer-col-3">
            <h2>Company</h2>
            <p>About</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Partners</p>
          </div>
          <div className="cbs__footer-col-4">
            <h2>Subscribe to Our News Letter</h2>
            <EmailForm />
          </div>
        </div>
        <div className="cbs__footer-separator"></div>
        <div className="cbs__footer-section-3">
          <div className="cbs__footer-col-1">
            <div className="cbs__footer-rights-terms">
              <p>&copy; 2022 Corebuso</p>
              <ul>
                <li>
                  <Link to="">Terms</Link>
                </li>
                <li>
                  <Link to="">Privacy</Link>
                </li>
                <li>
                  <Link to="">Cookie</Link>
                </li>
                <li>
                  <Link to="">Settings</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="cbs__footer-col-2">
            <div className="cbs__footer-social">
              <p>FB</p>
              <p>LI</p>
              <p>FV</p>
            </div>
          </div>
          <div className="cbs__footer-col-3">
            <div className="cbs__footer-site-map">
              <a href="#">Home</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
