import React from "react";
import { Link } from "react-router-dom";
import { Feature } from "../../components";
import "./whyCBS.css";

const WhatCBS = () => {
  return (
    <div className="cbs__whyCBS section__margin" id="wCBS">
      <div className="cbs__whyCBS-feature">
        <Feature
          title="What is COREBUSO"
          text="We are a team of young professionals seeking to provide a sustainable and valuable product and service that will enhance and improve your business standard."
        />
      </div>
      <div className="cbs__whyCBS-heading">
        <h1 className="gradient__text">
          The possibility are beyond your imagination
        </h1>
        <Link className="pointer cbs__whyCBS-heading_CTA" to="/pricing">
          Explore Templates
        </Link>
      </div>
      <div className="cbs__whyCBS-container">
        <Feature
          css="expand-on-hover"
          title="Affordable"
          text="We provide an affordable pricing plans with high-quality products and services. No kidding, just plain commitment."
        />
        <Feature
          css="expand-on-hover"
          title="Customer Support"
          text="Got some issues? No problem, we got your back. Our team will contact you as soon as possible."
        />
        <Feature
          css="expand-on-hover"
          title="Customizable Design"
          text="Website created professionally just for you. You choose, we plan, we build, and we deliver."
        />
      </div>
    </div>
  );
};

export default WhatCBS;
