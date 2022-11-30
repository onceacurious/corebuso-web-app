import React from "react";
import "./cta.css";

const Cta = () => {
  return (
    <>
      <div className="cbs__cta">
        <p>Coming Soon!</p>
        <div className="cbs__cta-tools">
          <p>Figma</p>
          <p>Python</p>
          <p>React</p>
          <p>Vite</p>
        </div>
        <div className="cbs__cta-container">
          <div className="cbs__cta-content">
            <p>Awesome templates</p>
            <h2>Browse our pre-made templates</h2>
          </div>
          <div className="cbs__cta-button">
            <a disabled className="gradient__bg disabled">
              <span>Get Started!</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
