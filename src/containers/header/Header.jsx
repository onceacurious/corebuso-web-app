import React, { useState, useEffect } from "react";
import "./header.scss";
import dev from "../../assets/dev_3.png";

import { Alert, EmailForm } from "../../components";
import AnimatedLetters from "../../components/animatedLetters/AnimatedLetters";

const Header = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const excerptArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "m",
    "e",
    "n",
    "t",
    " ",
    "a",
    "n",
    "d",
    " ",
    "a",
    "c",
    "c",
    "o",
    "u",
    "n",
    "t",
    "i",
    "n",
    "g",
    " ",
    "s",
    "e",
    "r",
    "v",
    "i",
    "c",
    "e",
    "s",
  ];
  const _content =
    "Welcome to Corebuso Official Site. To get an early access and new features. Please visit dev.corebuso.com";

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  // console.log(excerptArray);
  return (
    <>
      <Alert title="Information" content={_content} duration={15000} />
      <div className="cbs__header section__padding" id="home">
        <div className="cbs__header-content">
          <h1 className="gradient__text">
            Your Core Business Solution - Let's make your dream come true
          </h1>
          <p>
            Build a MODERN, REACTIVE, RESPONSIVE website from scratch with an
            affordable price range.
          </p>
          <EmailForm name="emailInquiry" emailId="header" emailClass="header" />
          <div className="cbs__header-excerpt">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={excerptArray}
              idx={1}
            />
          </div>
        </div>
        <div className="cbs__header-image">
          <img src={dev} alt="dev" />
        </div>
      </div>
    </>
  );
};

export default Header;
