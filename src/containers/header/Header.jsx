import React from "react";
import "./header.css";
import dev from "../../assets/dev_3.png";

import { EmailForm } from "../../components";

const Header = () => {
  return (
    <div className="cbs__header section__padding" id="home">
      <div className="cbs__header-content">
        <h1 className="gradient__text">
          Your Core Business Solution - Let's make your dream come true
        </h1>
        <p>
          Build a MODERN, REACTIVE, RESPONSIVE website from scratch with an
          affordable price range.
        </p>
        <EmailForm />
        <div className="cbs__header-excerpt">
          <p className="focus-in-expand">
            web development and accounting services
          </p>
        </div>
      </div>
      <div className="cbs__header-image">
        <img src={dev} alt="dev" />
      </div>
    </div>
  );
};

export default Header;
