import React from "react";
import "./footer.css";
import footer_logo from "../../assets/corebuso_footer_logo.png";
import { EmailForm } from "../../components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="cbs__footer">
        <div className="cbs__footer-brand-lang">
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
        <div className="cbs__footer-main">
          <div className="cbs__footer-main__prod-service">
            <div className="cbs__footer-main__products">
              <h3>Products</h3>
              <p>Website Design</p>
              <p>Website Development</p>
            </div>
            <div className="cbs__footer-main__services">
              <h3>Services</h3>
              <p>Bookkeeping</p>
              <p>Auditing</p>
              <p>Financial</p>
            </div>
          </div>
          <div className="cbs__footer-main__pricing">
            <h3>Pricing</h3>
            <p>Basic</p>
            <p>Standard</p>
            <p>Premium</p>
            <p>Special Order</p>
            <p>Special Offer</p>
          </div>
          <div className="cbs__footer-main__company">
            <h3>Company</h3>
            <p>About</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Partners</p>
          </div>
          <div className="cbs__footer-main__sub-contacts">
            <div className="cbs__footer-main__sub">
              <h3>Subscribe to Our News Letter</h3>
              <EmailForm name="emailSubscription" />
            </div>
            <div className="cbs__footer-main__contacts">
              <div className="cbs__footer-contact">
                <h4>Contact Number:</h4>
                <p>+63 926-6554-047</p>
              </div>
              <div className="cbs__footer-email">
                <h4>Email Address:</h4>
                <p>sales@corebuso.com</p>
              </div>
              <div className="cbs__footer-page">
                <h4>Facebook Page:</h4>
                <a target="_blank" href="https://www.facebook.com/corebuso.ph">
                  @corebuso.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cbs__footer-separator"></div>
        <div className="cbs__footer-rights-media-sitemap">
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
              <Link to="/admin">Admin</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
