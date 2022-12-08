import React from "react";
import "./cta.css";
import { FaFigma } from "react-icons/fa";
import { DiDjango, DiPython, DiReact } from "react-icons/di";
import { SiVite } from "react-icons/si";

const Cta = () => {
  return (
    <>
      <div className="cbs__cta">
        <div className="cbs__cta-frame">
          <p>Coming Soon!</p>
          <div className="cbs__cta-tools">
            <p>
              <FaFigma />
            </p>
            <p>
              <DiDjango />
            </p>
            <p>
              <DiPython />
            </p>
            <p>
              <SiVite />
            </p>
            <p>
              <DiReact />
            </p>
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
      </div>
    </>
  );
};

export default Cta;
