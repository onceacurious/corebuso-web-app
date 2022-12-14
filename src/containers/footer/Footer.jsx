import React from "react";
import { Link } from "react-router-dom";

import { SiFiverr, SiUpwork } from "react-icons/si";
import { DiGithub } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

import footer_logo from "../../assets/corebuso_footer_logo.png";
import { EmailForm } from "../../components";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        {/* Row 1 */}
        <div className="footer-brand-lang-container">
          <div className="footer-brand-container">
            <img src={footer_logo} alt="corebuso footer logo" />
            <p>&trade;</p>
          </div>
          <div className="footer-lang-container">
            <p>Language:</p>
            <select name="" id="" className="pointer">
              <option value="1">English</option>
              <option value="2">Filipino</option>
              <option value="3">Chinese</option>
            </select>
          </div>
        </div>
        <div className="footer-separator"></div>

        {/* Row 2 */}
        <div className="footer-main">
          <div className="footer-main-container">
            <div className="footer-main-prod-service">
              <div className="footer-main-products">
                <h3>Products</h3>
                <p>Website Design</p>
                <p>Website Development</p>
              </div>
              <div className="footer-main-services">
                <h3>Services</h3>
                <p>Bookkeeping</p>
                <p>Auditing</p>
                <p>Financial</p>
              </div>
            </div>
            <div className="footer-main-pricing">
              <h3>Pricing</h3>
              <p>Basic</p>
              <p>Standard</p>
              <p>Premium</p>
              <p>Special Order</p>
              <p>Special Offer</p>
            </div>
            <div className="footer-main-company">
              <h3>Company</h3>
              <p>About</p>
              <p>Careers</p>
              <p>Blog</p>
              <p>Partners</p>
            </div>
          </div>
          <div className="footer-main-sub-contact-container">
            <div className="footer-main-sub">
              <h3>Subscribe to Our News Letter</h3>
              <EmailForm
                name="emailSubscription"
                emailId="footer"
                emailClass="footer"
              />
            </div>
            <div className="footer-main-contacts-container">
              <div className="footer-main-contact">
                <h4>Contact Number:</h4>
                <p>+63 926-6554-047</p>
              </div>
              <div className="footer-main-email">
                <h4>Email Address:</h4>
                <p>sales@corebuso.com</p>
              </div>
              <div className="footer-main-page">
                <h4>Facebook Page:</h4>
                <a target="_blank" href="https://www.facebook.com/corebuso.ph">
                  @corebuso.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-separator"></div>

        {/* Row 3 */}
        <div className="footer-rms-container">
          <div className="footer-rights-terms-container">
            <div className="footer-rights-terms">
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
          <div className="footer-social-container">
            <span className="footer-social-icon pointer" title="Facebook">
              <a
                href="https://www.facebook.com/corebuso.ph"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImFacebook2 />
              </a>
            </span>
            <span className="footer-social-icon pointer" title="Linked In">
              <a
                href="https://www.linkedin.com/in/francis-deo-aurelio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
            </span>
            <span className="footer-social-icon pointer" title="Upwork">
              <a
                href="https://www.upwork.com/freelancers/~01c5fe47e7ae957d80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiUpwork />
              </a>
            </span>
            <span className="footer-social-icon pointer" title="Fiverr">
              <a
                href="https://www.fiverr.com/francisdeoa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiFiverr />
              </a>
            </span>
            <span className="footer-social-icon pointer" title="GitHub">
              <a
                href="https://github.com/onceacurious?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiGithub />
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
